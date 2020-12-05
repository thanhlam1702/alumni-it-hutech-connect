<template>
  <div class="main-wrapper">
    <BannerHome />
  </div>
</template>

<script>
import BannerHome from '@/components/layout/BannerHome'
import MainJs from '@/assets/js/main'
export default {
  components: {
    BannerHome,
  },
  mixins: [MainJs],
  head() {
    return {
      title: 'IT Hutech Connect',
    }
  },
  layout: 'default',
}
</script>
