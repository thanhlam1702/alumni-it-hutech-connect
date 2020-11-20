<template>
  <div>
    <HeaderPublic />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderPublic from '@/components/layout/HeaderPublic'
import Footer from '@/components/layout/Footer'
export default {
  components: {
    HeaderPublic,
    Footer,
  },
}
</script>
