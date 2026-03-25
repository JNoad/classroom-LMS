<template>
    <div class="card">
        <NuxtLink :to="link">
            <img :src="img.src" :alt="img.alt">
        </NuxtLink>
        <div class="info">
            <h3>{{ title }}</h3>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'img', 'link']
    }
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        width: calc(33% - 2rem);

        border-radius: 4px;
        border: 1px solid black;
        overflow: hidden;

        a, a > img {
            width: 100%;
            height: 150px;
        }
        .info {
            padding: 6px 4px 16px 4px;
            font-family: sans-serif;
            color: #282828
        }
    }
</style>