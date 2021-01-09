<template>
  <div class="main-wrapper">
    <div class="add__main-wrapper">
      <div class="add__form-control">
        <h2>ADD GROUP</h2>
        <h3 for="">Group name</h3>
        <a-form-model class="components-input-demo-size" :model="form">
          <a-input
            v-model="form.name"
            placeholder="your group name..."
            style="width: 100%"
          />
        </a-form-model>
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
        description: null,
        name: null,
      },
    }
  },
  methods: {
    async onSubmit() {
      try {
        const data = {
          name: this.form.name,
          description: this.form.description,
        }
        const result = await this.$axios.$post(
          'http://localhost:3000/groups',
          data
        )
        if (result.success) {
          console.log('hoan thanh')
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
