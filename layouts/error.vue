<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <a-button type="primary" @click.prevent="backHome">
        Trở về trang chủ
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    backHome() {
      this.$router.push('/')
    },
  },
}
</script>
