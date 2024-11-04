<script setup>
import { ref } from 'vue'
import { readJSON } from '../../api/handleJson';
import loading from '../Layout/loading.vue';

const render = ref(false);

const eventList = ref([]);

initial();

function initial() {
    readJSON("event").then(res => {
        eventList.value = res.data;
        render.value = true;
    })
}
</script>

<template>
    <div class="container" v-if="render">
        <n-flex vertical :size="24">
            <div>
                <h1>Hot Event</h1>
                <p>Look ahead to the geopolitical events that will shape your world.</p>
            </div>
            <div style="margin-bottom: 48px">
                <n-grid class="titleBar" :x-gap="24">
                    <n-gi :span="24" class="tableItem">Events</n-gi>
                </n-grid>
                <div v-for="(item, i) in eventList" class="tableItem eventItem">
                    <n-flex vertical>
                        <div><n-text :depth="3">Date:</n-text> {{ item.date }}</div>
                        <div><n-text :depth="3">Event:</n-text> <b>{{ item.event }}</b></div>
                        <div><n-text :depth="3">Location:</n-text> {{ item.location }}</div>
                        <div>
                            <n-text :depth="3">Introduction:</n-text>
                            {{ item.introduction }}
                        </div>
                    </n-flex>
                </div>
            </div>
        </n-flex>
    </div>
    <loading v-else />
</template>

<style lang='less' scoped>
.container {
    .titleBar {
        background-color: var(--primary-color);
        color: white;
        font-size: 20px;
        font-weight: bold;
    }

    .tableItem {
        padding: 24px;
    }

    .eventItem {
        border: 1px solid #eeeeee;
        border-top: none;
    }
}
</style>