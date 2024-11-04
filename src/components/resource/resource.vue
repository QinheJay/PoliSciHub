<script setup>
import { ref, h } from 'vue'
import {
    NIcon
} from "naive-ui";
import loading from '../Layout/loading.vue';
import {
    Folder,
    FolderOpenOutline
} from "@vicons/ionicons5";
import {
    DocumentPdf,
    DocumentWordProcessor,
    Ppt,
} from "@vicons/carbon";
import { readJSON } from '../../api/handleJson';

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
                window.open(option.link, '_blank')
            }
        }
    };
};

initial();

function initial() {
    readJSON("resource").then(res => {
        resourceList.value = res.data;
        process(resourceList.value);
        console.log(resourceList.value)
        render.value = true;
    })
}

function process(data) {
    data.forEach(item => {
        item.key = item.label;
        item.prefix = () => h(NIcon, null, {
            default: () => h(Folder)
        })
        if (item.type) {
            item.label = item.label + "." + item.type;
            switch (item.type) {
                case "pdf":
                    item.prefix = () => h(NIcon, null, {
                        default: () => h(DocumentPdf)
                    })
                    break;
                case "docx":
                    item.prefix = () => h(NIcon, null, {
                        default: () => h(DocumentWordProcessor)
                    })
                    break;
                case "pptx":
                    item.prefix = () => h(NIcon, null, {
                        default: () => h(Ppt)
                    })
                    break;
                default:
                    break;
            }
        }
        if (item.children && item.children.length) {
            process(item.children);
        } else if (!item.children && !item.type) {
            item.disabled = true;
        }
    });
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