<template>
  <div class="main-wrapper">
    <BannerHome />
  </div>
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
