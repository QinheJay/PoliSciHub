<script setup>
</script>

<template>
    <n-flex class="loadingContainer" :align="'center'" :justify="'center'">
        <n-spin size="large" />
        <div>Loading...</div>
    </n-flex>
</template>

<style lang='less' scoped>
.loadingContainer {
    height: calc(100vh - 87px - 48px);
}
</style>