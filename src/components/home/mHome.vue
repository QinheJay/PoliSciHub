<script setup>
import { ref } from 'vue';
import router from '../../router/router';

const block2 = ref(null);

const scrollToBottom = async (frame) => {
    window.scrollTo({ top: frame.clientHeight - 360, behavior: "smooth" });
};
</script>

<template>
    <div class="content">
        <n-flex class="block1" :align="'center'" :justify="'center'">
            <div style="margin-top: -125px; text-align: center;">
                <div class="slogan">He who knows only his own side of the case knows little of that.</div>
                <div class="subtitle">Discover a way to speak out for the future.</div>
                <n-button type="primary" class="startBtn" @click="scrollToBottom(block2)">Start here</n-button>
            </div>
        </n-flex>
        <div ref="block2">
            <n-flex class="block2" :align="'center'">
                <n-flex vertical>
                    <div>
                        <h1>Why participate?</h1>
                        <p>This website is dedicated to guiding and empowering individuals who want to make a
                            meaningful
                            impact through political action and civic engagement. Finding reliable, organized
                            information can be a challenge, especially within China, where information about
                            NGOs and
                            civic initiatives is often fragmented. This platform was created to bridge that gap,
                            providing structured resources that make engaging with NGOs and understanding
                            political
                            science accessible to all.</p>
                        <p>Many people feel strongly about supporting causes close to their hearts—be it
                            environmental
                            protection, social equity, education, or healthcare. However, they often lack
                            awareness of
                            the NGOs working on these issues. By making these organizations more visible, we
                            connect
                            individuals with missions that resonate with their values. This allows NGOs to find
                            the
                            supporters they need and strengthens their ability to sustain impactful initiatives.
                        </p>
                    </div>
                    <div>
                        <h1>How to start?</h1>
                        <p>This platform offers two main pathways for engagement. First, it helps you connect
                            with
                            Chinese NGOs organized by the causes they support. Each organization is categorized
                            by its
                            mission, making it easy to find those working on issues you care about and to reach
                            out
                            directly.
                        </p>
                        <p>Second, we offer resources to deepen your understanding of political science as an
                            academic
                            discipline. In our resource library, you’ll find materials that explain essential
                            concepts,
                            debates, and theories of political and social change. This section is designed to
                            support
                            both newcomers to activism and those who are deeply engaged, providing insights that
                            can
                            enhance your approach to civic participation.
                        </p>
                        <p>Overall, this website aims to foster an informed and responsive society. By equipping
                            individuals with knowledge and connections, we believe everyone can play a part in
                            creating
                            positive social change.
                        </p>
                    </div>
                    <n-flex>
                        <n-button @click="router.push({ name: 'ngo' })">To Chinese Ngos Page</n-button>
                        <n-button @click="router.push({ name: 'resource' })">To Resource Page</n-button>
                    </n-flex>
                </n-flex>
            </n-flex>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    .n-image {
        border-radius: 3px;
    }

    .block1 {
        min-height: calc(100vh - 125px - 48px);

        .slogan {
            font-size: 32px;
            font-weight: bold;
            line-height: 1.4;
        }

        .subtitle {
            margin-top: 48px;
            font-size: 18px;
        }

        .startBtn {
            margin-top: 12px;
        }

        .portrait_container {
            position: relative;

            .gradient_overlay {
                position: absolute;
                border-radius: 3px;
                bottom: 6px;
                left: 0;
                right: 0;
                height: 100%;
                background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    opacity: 0;
                }
            }

            .portrait_name {
                position: absolute;
                right: 8px;
                bottom: 8px;
                color: white;
            }
        }
    }

    .block2 {

        .n-grid {
            align-items: center;
        }
    }

    .block3 {
        min-height: 100vh;
    }
}
</style>