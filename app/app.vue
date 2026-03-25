<template>
    <div id="app-container">
        <SideNav/>
        <main>
            <NuxtRouteAnnouncer />
            <NuxtPage />
        </main>
    </div>
</template>
<script>
import SideNav from './widgets/SideNav.vue';
export default {
    components: {
        SideNav
    }
}

</script>

<style lang="scss" scoped>
#app-container {
    display: flex;
    flex-direction: row;
    height: 100vh; width: 100vw;
    $color: red;
    main {
        width: 100%;
        padding: 6px 16px;
    }
}
</style>