<script setup>
import { ref } from 'vue'
import { readJSON } from '../../api/handleJson';
import loading from '../Layout/loading.vue';
import router from '../../router/router';

const render = ref(false);

const articleList = ref([]);

const firstArticle = ref(null);

initial();

function initial() {
    readJSON("article").then(res => {
        articleList.value = res.data;
        firstArticle.value = articleList.value.find(a => a.id === 1);
        render.value = true;
    })
}

function toArticleDetail(article) {
    if (article.url) {
        window.open(article.url, '_blank');
    } else {
        router.push({ name: "article-detail", params: { articleKey: article.key } })
    }
}
</script>

<template>
    <div class="container" v-if="render">
        <n-flex :justify="'center'" style="margin: 48px 0">
            <n-flex :size="32" vertical>
                <n-flex vertical :size="0" style="text-align: center;">
                    <n-h1>Explore, Engage, and Share Your Political Voice</n-h1>
                    <n-text :depth="3">
                        Click the button below to submit your article. Your submission will appear on this page after
                        approval.
                    </n-text>
                </n-flex>
                <n-flex :justify="'center'">
                    <n-button tag="a" target="_blank" href="https://forms.gle/kRoowQekhtAczwkh8" style="width: 240px"
                        type="primary" size="large">
                        Submit an article
                    </n-button>
                </n-flex>
            </n-flex>
        </n-flex>
        <n-flex vertical>
            <div>
                <n-h2>Recent article posts</n-h2>
            </div>
            <div style="margin-bottom: 48px">
                <n-grid :x-gap="32">
                    <n-gi :span="12">
                        <n-flex vertical :size="24" class="article firstArticle" @click="toArticleDetail(firstArticle)">
                            <div class="coverImg">
                                <img :src="firstArticle.coverUrl" />
                            </div>
                            <n-flex vertical :size="4">
                                <div class="authorDate">
                                    <n-text :depth="3">
                                        {{ firstArticle.author }}
                                        ·
                                        {{ firstArticle.date }}
                                    </n-text>
                                </div>
                                <n-grid :x-gap="12" style="align-items: center;">
                                    <n-gi :span="22">
                                        <div class="title">
                                            <n-ellipsis :line-clamp="1">
                                                {{ firstArticle.title }}
                                            </n-ellipsis>
                                        </div>
                                    </n-gi>
                                    <n-gi :span="2" style="text-align: right;">
                                        <n-icon :size="22">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                                                <g fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M17 7L7 17"></path>
                                                    <path d="M8 7h9v9"></path>
                                                </g>
                                            </svg>
                                        </n-icon>
                                    </n-gi>
                                </n-grid>
                                <div class="subTitle">
                                    <n-ellipsis :line-clamp="2" :tooltip="false">
                                        {{ firstArticle.subtitle }}
                                    </n-ellipsis>
                                </div>
                                <n-flex class="types">
                                    <n-tag size="small" v-for="type in firstArticle.types" round>{{ type }}</n-tag>
                                </n-flex>
                            </n-flex>
                        </n-flex>
                    </n-gi>
                    <n-gi :span="12">
                        <n-flex vertical :size="24">
                            <n-grid v-for="article in articleList.filter(a => [2, 3, 4].includes(a.id))"
                                class="article otherArticle" :x-gap="24" @click="toArticleDetail(article)">
                                <n-gi :span="12">
                                    <div class="coverImg">
                                        <img :src="article.coverUrl" />
                                    </div>
                                </n-gi>
                                <n-gi :span="12">
                                    <n-flex vertical :size="0">
                                        <div class="authorDate">
                                            <n-text :depth="3">
                                                {{ article.author }}
                                                ·
                                                {{ article.date }}
                                            </n-text>
                                        </div>
                                        <n-grid :x-gap="12" style="align-items: center;">
                                            <n-gi :span="22">
                                                <div class="title">
                                                    <n-ellipsis :line-clamp="2">
                                                        {{ article.title }}
                                                    </n-ellipsis>
                                                </div>
                                            </n-gi>
                                            <n-gi :span="2" style="text-align: right;">
                                                <n-icon :size="22">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                                                        <g fill="none" stroke="currentColor" stroke-width="2"
                                                            stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M17 7L7 17"></path>
                                                            <path d="M8 7h9v9"></path>
                                                        </g>
                                                    </svg>
                                                </n-icon>
                                            </n-gi>
                                        </n-grid>
                                        <div class="subTitle">
                                            <n-ellipsis :line-clamp="2" :tooltip="false">
                                                {{ article.subtitle }}
                                            </n-ellipsis>
                                        </div>
                                        <n-flex class="types">
                                            <n-tag size="small" v-for="type in article.types" round>{{ type }}</n-tag>
                                        </n-flex>
                                    </n-flex>
                                </n-gi>
                            </n-grid>
                        </n-flex>
                    </n-gi>
                </n-grid>
            </div>
            <div>
                <n-h2>All Article Posts</n-h2>
            </div>
            <div style="margin-bottom: 48px;">
                <n-grid :x-gap="24" :cols="3">
                    <n-gi v-for="article in articleList.filter(a => ![1, 2, 3, 4].includes(a.id))"
                        class="article otherArticle" @click="toArticleDetail(article)">
                        <n-flex vertical :size="24">
                            <div class="coverImg">
                                <img :src="article.coverUrl" />
                            </div>
                            <n-flex vertical :size="4">
                                <div class="authorDate">
                                    <n-text :depth="3">
                                        {{ article.author }}
                                        ·
                                        {{ article.date }}
                                    </n-text>
                                </div>
                                <n-grid :x-gap="12" style="align-items: center;">
                                    <n-gi :span="22">
                                        <div class="title">
                                            <n-ellipsis :line-clamp="2">
                                                {{ article.title }}
                                            </n-ellipsis>
                                        </div>
                                    </n-gi>
                                    <n-gi :span="2" style="text-align: right;">
                                        <n-icon :size="22">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                                                <g fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M17 7L7 17"></path>
                                                    <path d="M8 7h9v9"></path>
                                                </g>
                                            </svg>
                                        </n-icon>
                                    </n-gi>
                                </n-grid>
                                <div class="subTitle">
                                    <n-ellipsis :line-clamp="3" :tooltip="false">
                                        {{ article.subtitle }}
                                    </n-ellipsis>
                                </div>
                                <n-flex class="types">
                                    <n-tag size="small" v-for="type in article.types" round>{{ type }}</n-tag>
                                </n-flex>
                            </n-flex>
                        </n-flex>
                    </n-gi>
                </n-grid>
            </div>
        </n-flex>
    </div>
    <loading v-else />
</template>

<style lang='less' scoped>
.container {
    width: 1200px;
    margin: 0 auto;

    .article {
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: var(--primary-color);
        }

        .coverImg {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 3px;
            }
        }

        .types {
            margin-top: 12px;
        }
    }

    .firstArticle {
        .coverImg {
            img {
                aspect-ratio: 4/3;
            }
        }

        .title {
            font-size: 22px;
            font-weight: bold;
        }

        .subtitle {
            font-size: 16px;
        }
    }

    .otherArticle {
        .authorDate {
            font-size: 12px;
            margin-bottom: 8px;
        }

        .coverImg {
            img {
                aspect-ratio: 3/2;
            }
        }

        .title {
            font-size: 18px;
            font-weight: bold;
            height: 65px;
            display: flex;
            align-items: center;
        }

        .subtitle {
            font-size: 14px;
        }
    }

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