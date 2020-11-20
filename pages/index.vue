<template>
  <div class="container" style="flex-grow: 1">
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
  layout: 'public',
}
</script>
