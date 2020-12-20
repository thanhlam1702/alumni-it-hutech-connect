<template>
  <div class="main-wrapper error">
    <div class="container">
      <a-result
        status="404"
        title="404"
        sub-title="Xin lỗi, trang bạn đến không tồn tại hoặc bị lỗi ."
      >
        <template #extra>
          <a-button type="primary" @click.prevent="backHome">
            Trở về trang chủ
          </a-button>
        </template>
      </a-result>
    </div>
  </div>
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
