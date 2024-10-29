<script setup>
</script>

<template>
    <div class="content">
        <n-flex class="block1" :align="'center'">
            <div>
                <n-grid :x-gap="24">
                    <n-gi :span="16">
                        <n-flex>
                            <n-image src="./PoliSciHub/home/activism1.jpg" width="220" preview-disabled></n-image>
                            <n-image src="./PoliSciHub/home/activism2.jpg" width="220" preview-disabled></n-image>
                            <n-image src="./PoliSciHub/home/activism3.jpg" width="220" preview-disabled></n-image>
                        </n-flex>
                    </n-gi>
                    <n-gi :span="8">
                        <div>
                            <div class="slogan">Discover a way to speak out for the future.</div>
                        </div>
                        <n-button type="primary" class="startBtn">Start here</n-button>
                    </n-gi>
                </n-grid>
            </div>
        </n-flex>
        <n-flex class="block2" :align="'center'">
            <n-grid :x-gap="24">
                <n-gi :span="16">
                    <n-flex vertical>
                        <div>
                            <h1>Why participate?</h1>
                            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie per sodales elementum
                                finibus
                                metus.
                                Tempus curabitur habitasse curae amet porttitor mus faucibus dis commodo. Tempor
                                ullamcorper
                                per
                                diam tempus euismod finibus mauris. Semper semper litora ligula lobortis, ac quam.
                                Porttitor
                                in
                                hendrerit curabitur nunc; ultricies auctor eros magna. Himenaeos posuere amet sodales mi
                                sit
                                penatibus. Purus sagittis torquent etiam tincidunt blandit aenean curabitur tempor
                                natoque.
                                Quisque
                                ut justo ullamcorper mollis; nam id.</p>
                        </div>
                        <div>
                            <h1>How to start?</h1>
                            <p>Rutrum viverra sodales lectus sem tincidunt aliquet, accumsan dignissim vestibulum. Nunc
                                molestie
                                finibus magna senectus nostra; facilisi habitasse scelerisque. Sapien nisi senectus sit
                                vivamus
                                vestibulum elit aliquam condimentum. Porttitor enim phasellus proin convallis litora
                                consectetur
                                dapibus nunc. Fermentum maximus elementum eget vel viverra vestibulum nostra dui. Taciti
                                mus
                                vel
                                eget; lobortis vel sit. Congue nunc ligula orci nam eget vitae dictum purus. Blandit nam
                                suspendisse
                                augue; tempus habitasse sociosqu. Condimentum conubia sociosqu eu suscipit cubilia.</p>
                        </div>
                    </n-flex>
                </n-gi>
                <n-gi :span="8" style="text-align: center;">
                    <n-image src="./PoliSciHub/home/activism4.jpg" width="360" preview-disabled></n-image>
                </n-gi>
            </n-grid>
        </n-flex>
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
            font-size: 48px;
            line-height: 1.4;
        }

        .startBtn {
            margin-top: 48px;
        }
    }

    .block2 {
        min-height: 100vh;

        .n-grid {
            align-items: center;
        }
    }
}
</style>