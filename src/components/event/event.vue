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
        console.log(eventList.value)
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
                    <n-gi :span="8" class="tableItem">Date</n-gi>
                    <n-gi :span="12" class="tableItem">Event</n-gi>
                    <n-gi :span="4" class="tableItem">Location</n-gi>
                </n-grid>
                <div v-for="(item, i) in eventList" class="eventItem">
                    <n-grid :x-gap="24">
                        <n-gi :span="8" class="tableItem">{{ item.date }}</n-gi>
                        <n-gi :span="12" class="tableItem"><b>{{ item.event }}</b></n-gi>
                        <n-gi :span="4" class="tableItem">{{ item.location }}</n-gi>
                    </n-grid>
                    <div class="tableItem">
                        <n-text :depth="3">Introduction:</n-text>
                        {{ item.introduction }}
                    </div>
                </div>
            </div>
        </n-flex>
    </div>
    <loading v-else />
</template>

<style lang='less' scoped>
.container {
    width: 1200px;
    margin: 0 auto;

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