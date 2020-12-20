<template>
  <main class="main-wrapper home">
    <BannerHome />
  </main>
</template>

<script>
import BannerHome from '@/components/layout/BannerHome'
export default {
  components: {
    BannerHome,
  },
  head() {
    return {
      title: 'IT Hutech Connect',
    }
  },
  layout: 'default',
}
</script>
