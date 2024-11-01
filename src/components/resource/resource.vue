<script setup>
import { ref, h } from 'vue'
import {
    NIcon
} from "naive-ui";
import loading from '../Layout/loading.vue';
import {
    FileTrayFullOutline,
    Folder,
    FolderOpenOutline
} from "@vicons/ionicons5";
import { data } from './resource.js';

const render = ref(false);

const resourceList = ref([]);

const updatePrefixWithExpaned = (_keys, _option, meta) => {
    if (!meta.node)
        return;
    switch (meta.action) {
        case "expand":
            meta.node.prefix = () => h(NIcon, null, {
                default: () => h(FolderOpenOutline)
            });
            break;
        case "collapse":
            meta.node.prefix = () => h(NIcon, null, {
                default: () => h(Folder)
            });
            break;
    }
};

const nodeProps = ({ option }) => {
    return {
        onClick() {
            if (!option.children && !option.disabled) {
                console.log(option.link)
            }
        }
    };
};

initial();

function initial() {
    resourceList.value = data;
    render.value = true;
}

</script>

<template>
    <div class="container" v-if="render">
        <n-flex vertical :size="24">
            <div>
                <h1>Resource</h1>
                <p>In addition to the links between individuals and NGOs, this website strives to inculcate a basic
                    understanding of political science. As an academic discipline, political science conveys insight
                    into structures, processes, and theories that constitute social and political transformation. In our
                    resource library, you will find curated materials that introduce big concepts and current debates
                    within political science and support those new to either political activism or long immersed in it.
                    Equipped with these resources, we foster well-informed reflective engagement on today’s most
                    pressing issues.</p>
            </div>
            <n-tree block-line expand-on-click :data="resourceList" :node-props="nodeProps"
                :on-update:expanded-keys="updatePrefixWithExpaned" />
        </n-flex>
    </div>
    <loading v-else />
</template>

<style lang='less' scoped>
.container {
    width: 1200px;
    margin: 0 auto;
}
</style>