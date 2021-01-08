<template>
  <div class="main-wrapper">
    <div class="add__main-wrapper">
      <div class="add__form-control">
        <h2>ADD GROUP</h2>
        <h3 for="">Group name</h3>
        <div class="components-input-demo-size">
          <a-input
            v-model="form.name"
            placeholder="your group name..."
            style="width: 100%"
          />
        </div>
        <h3>Description</h3>
        <a-textarea
          v-model="form.description"
          placeholder="more information about your group..."
          :rows="4"
        />
        <a-button type="primary" style="width: 100%" @click="onSubmit">
          Create Group
        </a-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      form: {
        descriptions: null,
        name: null,
      },
    }
  },
  methods: {
    async onSubmit() {
      const result = await this.$axios.post(
        process.env.baseApiUrl + '/group',
        this.form
      )
      if (result.success) {
        this.$store.state.groups = this.form
        console.log('helo')
      }
    },
  },
}
</script>
