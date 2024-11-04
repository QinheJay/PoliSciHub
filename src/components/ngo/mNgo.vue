<script setup>
import { ref, watch } from 'vue'
// import { decode } from 'js-base64';
import { readJSON } from '../../api/handleJson';
import loading from '../Layout/loading.vue';

const render = ref(false);

const ngoList = ref([]);

const showDetailModal = ref(false);

const curNgo = ref(null);

const inputVal = ref("");

const page = ref(1);

const pageSize = ref(12);

const pageCount = ref(0);

const ngoListDisplay = ref([]);

initial();

watch(inputVal, newVal => {
    if (!newVal) {
        page.value = 1;
        refresh();
    } else {
        ngoListDisplay.value = ngoList.value.filter(ngo =>
            ngo.en.toLowerCase().includes(inputVal.value.toLowerCase()) ||
            ngo.cn.includes(inputVal.value) ||
            ngo.type.includes(inputVal.value))
    }
})

function initial() {
    readJSON("ngoList").then(res => {
        ngoList.value = res.data;
        curNgo.value = ngoList.value[0];
        pageCount.value = Math.ceil(ngoList.value.length / pageSize.value);
        refresh();
        render.value = true;
    })
}

function openWebsite(url) {
    window.open(url, '_blank');
}

function openDetail(ngo) {
    curNgo.value = ngo;
    showDetailModal.value = true;
}

function closeDetail() {
    showDetailModal.value = false;
}

function handleUpdatePage() {
    refresh();
    window.scrollTo(0, 0)
}

function refresh() {
    ngoListDisplay.value = ngoList.value.slice((page.value - 1) * pageSize.value, page.value * pageSize.value);
}
</script>

<template>
    <div class="container" v-if="render">
        <n-flex vertical :size="24">
            <div>
                <h1>Chinese Non-Governmental Organization</h1>
                <p>In China, many people desire to help others but are unaware of NGOs that align with their values. As
                    a result, most Chinese NGOs simply fail. To combat this problem, I want to create this page that
                    categorizes different NGOs in China, and how people can contact and support them. By providing a
                    platform for diverse causes, I aim to foster greater civic engagement and activism, regardless of
                    political stance.</p>
            </div>
            <n-input v-model:value="inputVal"
                placeholder="Enter organization name to search or enter organization type for filtering">
                <template #prefix>
                    <n-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512">
                            <path d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
                                fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path>
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                                stroke-width="32" d="M338.29 338.29L448 448"></path>
                        </svg>
                    </n-icon>
                </template>
            </n-input>
            <!-- <n-flex v-if="!inputVal" :justify="'center'">
                <n-pagination v-model:page="page" v-model:page-size="pageSize" :page-count="pageCount"
                    @update:page="handleUpdatePage" />
            </n-flex> -->
            <n-grid v-if="ngoListDisplay.length" :cols="1" :x-gap="24" :y-gap="24">
                <n-gi v-for="ngo in ngoListDisplay">
                    <n-card class="ngoCard">
                        <template #header>
                            <n-ellipsis line-clamp="1">{{ ngo.en }}</n-ellipsis>
                        </template>
                        <n-flex class="ngoCard__content" vertical>
                            <div>
                                <n-text :depth="3">Telephone: </n-text>
                                <div v-if="ngo.telephone">
                                    <n-ellipsis line-clamp="1">{{ ngo.telephone }}</n-ellipsis>
                                </div>
                                <n-skeleton v-else text :animated="false" />
                            </div>
                            <div>
                                <n-text :depth="3">Email: </n-text>
                                <div v-if="ngo.email">
                                    <n-ellipsis line-clamp="1">{{ ngo.email }}</n-ellipsis>
                                </div>
                                <n-skeleton v-else text :animated="false" />
                            </div>
                            <div>
                                <n-text :depth="3">Website: </n-text>
                                <div v-if="ngo.website" class="textClick" @click="openWebsite(ngo.website)">
                                    <n-ellipsis line-clamp="1"><u>{{ ngo.website }}</u></n-ellipsis>
                                </div>
                                <n-skeleton v-else text :animated="false" />
                            </div>
                            <div>
                                <n-text :depth="3">Type: </n-text>
                                <div v-if="ngo.type">
                                    <n-ellipsis line-clamp="1">{{ ngo.type }}</n-ellipsis>
                                </div>
                                <n-skeleton v-else text :animated="false" />
                            </div>
                        </n-flex>
                        <n-button @click="openDetail(ngo)" style="width: 100%">
                            View detail
                        </n-button>
                    </n-card>
                </n-gi>
            </n-grid>
            <div v-else>Sorry, no results found for your search.</div>
            <n-flex v-if="!inputVal" :justify="'center'" style="margin-bottom: 87px">
                <n-pagination v-model:page="page" v-model:page-size="pageSize" :page-count="pageCount"
                    @update:page="handleUpdatePage" />
            </n-flex>
        </n-flex>
        <n-modal v-model:show="showDetailModal" style="margin: 0 24px" preset="card" size="huge" :bordered="false"
            @after-leave="closeDetail">
            <template #header>
                <div style="font-size: 26px">{{ curNgo.en }}</div>
                <div style="font-size: 18px"><b>{{ curNgo.cn }}</b></div>
            </template>
            <n-scrollbar style="max-height: 480px">
                <n-flex :size="24" vertical>
                    <n-grid :cols="2" class="ngoCard__content" :x-gap="24" :y-gap="24">
                        <n-gi>
                            <n-text :depth="3">Telephone: </n-text>
                            <div v-if="curNgo.telephone">
                                <n-ellipsis line-clamp="2">{{ curNgo.telephone }}</n-ellipsis>
                            </div>
                            <div v-else>
                                <n-skeleton text :animated="false" style="width: 50%" />
                            </div>
                        </n-gi>
                        <n-gi>
                            <n-text :depth="3">Email: </n-text>
                            <div v-if="curNgo.email">
                                <n-ellipsis line-clamp="2">{{ curNgo.email }}</n-ellipsis>
                            </div>
                            <div v-else>
                                <n-skeleton text :animated="false" style="width: 50%" />
                            </div>
                        </n-gi>
                        <n-gi>
                            <n-text :depth="3">Website: </n-text>
                            <div v-if="curNgo.website" class="textClick" @click="openWebsite(curNgo.website)">
                                <n-ellipsis line-clamp="2"><u>{{ curNgo.website }}</u></n-ellipsis>
                            </div>
                            <div v-else>
                                <n-skeleton text :animated="false" style="width: 100%" />
                            </div>
                        </n-gi>
                        <n-gi>
                            <n-text :depth="3">Type: </n-text>
                            <div v-if="curNgo.type">
                                <n-ellipsis line-clamp="2">{{ curNgo.type }}</n-ellipsis>
                            </div>
                            <div v-else>
                                <n-skeleton text :animated="false" style="width: 50%" />
                            </div>
                        </n-gi>
                        <n-gi>
                            <n-text :depth="3">Regions: </n-text>
                            <div v-if="curNgo.regions">
                                <n-ellipsis line-clamp="2">{{ curNgo.regions }}</n-ellipsis>
                            </div>
                            <div v-else>
                                <n-skeleton text :animated="false" style="width: 50%" />
                            </div>
                        </n-gi>
                        <n-gi v-if="curNgo.address">
                            <n-text :depth="3">Address: </n-text>
                            <div>
                                <n-ellipsis line-clamp="3">{{ curNgo.address }}</n-ellipsis>
                            </div>
                        </n-gi>
                    </n-grid>
                    <div>
                        <n-flex :size="8" vertical>
                            <n-text :depth="3">Introducion: </n-text>
                            <n-card>
                                <div v-if="curNgo.introduction">
                                    <!-- <div v-html="decode(curNgo.introduction)"></div> -->
                                    <div>{{ curNgo.introduction }}</div>
                                </div>
                                <div v-else>
                                    <n-skeleton text :animated="false" :repeat="3" />
                                    <n-skeleton text style="width: 60%" />
                                </div>
                            </n-card>
                        </n-flex>
                    </div>
                </n-flex>
            </n-scrollbar>
        </n-modal>
    </div>
    <loading v-else />
</template>

<style lang='less' scoped>
.container {
    .ngoCard {
        position: relative;

        &:hover {
            box-shadow: var(--boxShadow-light);
        }

        .ngoCard__content {
            min-height: 248px;
        }
    }
}

.textClick {
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        color: var(--primary-color)
    }
}
</style>