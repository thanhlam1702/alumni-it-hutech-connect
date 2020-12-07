<template>
  <a-form-model v-bind="layout">
    <a-form-model-item has-feedback label="Password">
      <a-input type="password" autocomplete="off" />
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  data() {
    return {
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    }
  },
}
</script>
