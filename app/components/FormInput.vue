<template>
    <div class="form-group">
        <!-- <label for="email">Email Adress </label> -->
        <img :width="size" :height="size" :src="img" :alt="type"/>
        <input :type="type" :name="type" id="" :placeholder="type">

        
    </div>
</template>
<script>
export default {
    props: ['img', 'size', 'type']
}
</script>
<style lang="scss">
    
</style>