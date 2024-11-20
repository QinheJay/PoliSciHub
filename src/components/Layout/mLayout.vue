<script setup>
import router from '../../router/router';
</script>

<template>
    <n-layout class="container">
        <n-layout-header class="header">
            <n-flex vertical :size="24">
                <n-flex :align="'center'" class="logo" @click="router.push({ name: 'home' })">
                    <n-avatar :width="24" src="./logo/logo_320.jpg"></n-avatar>
                    <b>
                        Political
                        Science
                        <span class="primaryColor">Hub</span>
                    </b>
                </n-flex>
                <n-flex :size="24">
                    <n-button text @click="router.push({ name: 'event' })">🔥 Hot Event</n-button>
                    <n-button text @click="router.push({ name: 'ngo' })">Chinese NGO</n-button>
                    <n-button text @click="router.push({ name: 'resource' })">Resource</n-button>
                </n-flex>
            </n-flex>
        </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
            <router-view />
        </n-layout-content>
        <n-layout-footer>
            <n-flex :justify="'center'">
                <div>2024 Copyright © <span class="copyright">Jay Yang</span>. All rights reserved.</div>
            </n-flex>
        </n-layout-footer>
    </n-layout>
</template>

<style lang='less' scoped>
.container {
    min-height: 100vh;

    .header {
        padding: 24px;
    }

    .logo {
        font-size: 24px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            opacity: 0.8;
        }
    }

    .n-layout-footer {
        background: rgba(224, 224, 224, 0.2);
        padding: 24px;

        .copyright {
            color: var(--primary-color)
        }
    }
}
</style>