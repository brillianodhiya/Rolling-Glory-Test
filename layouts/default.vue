<template>
    <div class="imgbg">
        <Navigation />
        <div class="container content">
          <nuxt/>
        </div>
        <Footers/>
    </div>
</template>

<script>
import Navigation from "~/components/navigation"
import Footers from "~/components/footers"

export default {
  components: {
    Navigation,
    Footers
  }
}
</script>