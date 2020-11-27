<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: 'body-login',
      },
    }
  },
}
</script>
<style>
.body-login {
  overflow: hidden;
}
</style>
