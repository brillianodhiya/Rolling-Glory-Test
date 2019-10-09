<template>
    <div>
        <div v-if="this.$route.name !== 'detail'">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#" @click="goBack()">
                        <img src="~/assets/images/logo.png" height="100" alt="">
                    </a>
                </div>
            </nav>
        </div>
        <div v-else>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="~/assets/images/logo.png" height="100" alt="">
                    </a>
                </div>
            </nav>
            <div class="container">
                <p><span @click="goBack()">List Product</span> > <span>{{ $store.state.gift.name }}</span> </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@font-face {
    font-family: 'MyWebFont';
    src: url('../assets/fonts/Raleway/Raleway-Medium.ttf') format('truetype');
}
p {
    font-family: 'MyWebFont';
}
</style>

<script>
export default {
    methods: {
        goBack () {
            this.$store.commit('setGift', {})
            this.$router.replace({ 'path' : '/' })
        }
    }
}
</script>
