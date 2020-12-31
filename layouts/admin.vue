<template>
  <div class="app">
    <AdminHeader />
    <Nuxt />
  </div>
</template>

<script>
import AdminHeader from '@/components/layout/AdminHeader'

export default {
  components: {
    AdminHeader,
  },
}
</script>
