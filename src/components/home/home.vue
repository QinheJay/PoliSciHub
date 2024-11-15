<script setup>
import { ref } from 'vue';
import router from '../../router/router';

const block2 = ref(null);

const scrollToBottom = async (frame) => {
    window.scrollTo({ top: frame.clientHeight, behavior: "smooth" });
};
</script>

<template>
    <div class="content">
        <n-flex class="block1" :align="'center'">
            <div style="margin-top: -87px">
                <n-grid :x-gap="24" style="align-items: center;">
                    <n-gi :span="8">
                        <div>
                            <div class="slogan">He who knows only his own side of the case knows little of that.</div>
                            <div class="subtitle">Discover a way to speak out for the future.</div>
                        </div>
                        <n-button type="primary" class="startBtn" @click="scrollToBottom(block2)">Start here</n-button>
                    </n-gi>
                    <n-gi :span="16">
                        <n-flex :justify="'center'">
                            <div class="portrait_container">
                                <n-popover placement="right" trigger="click" :show-arrow="false">
                                    <template #trigger>
                                        <div>
                                            <n-image src="./PoliSciHub/home/John_Locke.jpg" height="220"
                                                preview-disabled></n-image>
                                            <div class="gradient_overlay"></div>
                                            <div class="portrait_name">John Locke</div>
                                        </div>
                                    </template>
                                    <div style="max-width: 320px;">
                                        <p>
                                            <b style="font-size: 24px">John Locke</b> was a 17th-century English
                                            philosopher often
                                            regarded as the "Father of Liberalism" for his influential
                                            ideas on government, individual rights, and the social contract.
                                        </p>
                                        <p>
                                            His belief that legitimate government must derive from the consent of the
                                            governed and protect the rights to life, liberty, and roperty inspires
                                            people to engage in political activism, as it emphasizes individual
                                            empowerment and the duty to resist unjust authority.
                                        </p>
                                    </div>
                                </n-popover>
                            </div>
                            <div class="portrait_container">
                                <n-popover placement="right" trigger="click" :show-arrow="false">
                                    <template #trigger>
                                        <div>
                                            <n-image src="./PoliSciHub/home/John_Mearsheimer.jpg" height="220"
                                                object-fit="contain" preview-disabled></n-image>
                                            <div class="gradient_overlay"></div>
                                            <div class="portrait_name">John Mearsheimer</div>
                                        </div>
                                    </template>
                                    <div style="max-width: 320px;">
                                        <p>
                                            <b style="font-size: 24px">John Mearsheimer</b> is an American political
                                            scientist and international
                                            relations scholar known for his theory of offensive realism, which argues
                                            that great powers are
                                            inherently driven to seek dominance to ensure their security in an anarchic
                                            world.
                                        </p>
                                        <p>
                                            His insights into power dynamics and the consequences of unchecked
                                            geopolitical competition inspire
                                            political activism by encouraging critical engagement with foreign policy
                                            and emphasizing the importance
                                            of accountability and strategic restraint in international relations.
                                        </p>
                                    </div>
                                </n-popover>
                            </div>
                            <div class="portrait_container">
                                <n-popover placement="right" trigger="click" :show-arrow="false">
                                    <template #trigger>
                                        <div>
                                            <n-image src="./PoliSciHub/home/Kenneth_Waltz.jpg" height="220"
                                                object-fit="contain" preview-disabled></n-image>
                                            <div class="gradient_overlay"></div>
                                            <div class="portrait_name">Kenneth Waltz</div>
                                        </div>
                                    </template>
                                    <div style="max-width: 320px;">
                                        <p>
                                            <b style="font-size: 24px">Kenneth Waltz</b> was an American political
                                            scientist renowned for pioneering
                                            structural realism, or neorealism, which posits that the international
                                            system's structure—rather than
                                            individual states' intentions—primarily shapes state behavior.
                                        </p>
                                        <p>
                                            His work inspires political activism by highlighting the influence of
                                            individuals on the global arena,
                                            motivating individuals to advocate for systemic changes that promote
                                            stability and reduce the risks of
                                            instability militarily and economically.
                                        </p>
                                    </div>
                                </n-popover>
                            </div>
                            <div class="portrait_container">
                                <n-popover placement="left" trigger="click" :show-arrow="false">
                                    <template #trigger>
                                        <div>
                                            <n-image src="./PoliSciHub/home/Niccolò_Machiavelli.jpg"
                                                object-fit="contain" height="220" preview-disabled></n-image>
                                            <div class="gradient_overlay"></div>
                                            <div class="portrait_name">Niccolò Machiavelli</div>
                                        </div>
                                    </template>
                                    <div style="max-width: 320px;">
                                        <p>
                                            <b style="font-size: 24px">Niccolò Machiavelli</b> was a Renaissance
                                            political philosopher best known
                                            for The Prince, where he explores the use of pragmatism and power in
                                            governance.
                                        </p>
                                        <p>
                                            His realistic approach to political strategy inspires political activism by
                                            encouraging individuals to
                                            understand the complexities of power, recognize political realities, and
                                            advocate strategically for
                                            effective change.
                                        </p>
                                    </div>
                                </n-popover>
                            </div>
                        </n-flex>
                    </n-gi>
                </n-grid>
            </div>
        </n-flex>
        <div ref="block2">
            <n-flex class="block2" :align="'center'">
                <n-grid :x-gap="24">
                    <n-gi :span="16">
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
                                <n-button @click="router.push({ name: 'ngo' })">To Chinese NGOs Page</n-button>
                                <n-button @click="router.push({ name: 'resource' })">To Resource Page</n-button>
                            </n-flex>
                        </n-flex>
                    </n-gi>
                    <n-gi :span="8" style="text-align: center;">
                        <n-image src="./PoliSciHub/home/activism4.jpg" width="360" preview-disabled></n-image>
                    </n-gi>
                </n-grid>
            </n-flex>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    width: 1200px;
    margin: 0 auto;

    .n-image {
        border-radius: 3px;
    }

    .block1 {
        min-height: calc(100vh - 87px - 48px);

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
        min-height: 100vh;

        .n-grid {
            align-items: center;
        }
    }

    .block3 {
        min-height: 100vh;
    }
}
</style>