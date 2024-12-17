<script setup>
import { ref } from 'vue'
import { readJSON } from '../../api/handleJson';
import loading from '../Layout/loading.vue';
import router from '../../router/router';
import { decode } from 'js-base64';

const render = ref(false);

const articleList = ref([]);

const article = ref(null);

initial();

function initial() {
    readJSON("article").then(res => {
        articleList.value = res.data;
        article.value = articleList.value.find(a => a.key === router.currentRoute.value.params.articleKey);
        render.value = true;
    })
}
</script>

<template>
    <div class="container" v-if="render">
        <div class="article">
            <n-flex :justify="'center'">
                <n-flex vertical :size="4">
                    <n-h1 class="title">{{ article.title }}</n-h1>
                    <div class="authorDate">
                        <n-text :depth="3">
                            {{ article.author }}
                            ·
                            {{ article.date }}
                        </n-text>
                    </div>
                    <div style="font-size: 18px; font-family: 'Times New Roman', Times, serif;"
                        v-html="decode(article.content)"></div>
                </n-flex>
            </n-flex>
        </div>
    </div>
    <loading v-else />
</template>

<style lang='less' scoped>
.container {
    width: 100%;
    margin: 0 auto;

    .article {

        .title {
            font-size: 32px;
            line-height: 1.3;
        }

        .authorDate {
            font-size: 18px;
        }
    }
}
</style>