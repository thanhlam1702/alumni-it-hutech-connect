<template>
  <div class="main-wrapper">
    <div class="add__main-wrapper">
      <div class="add__form-control">
        <h2>ADD GROUP</h2>
        <h3 for="">Group name</h3>
        <div class="components-input-demo-size">
          <a-input
            v-model="name"
            placeholder="your group name..."
            style="width: 100%"
          />
        </div>
        <h3>Description</h3>
        <a-textarea
          v-model="description"
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
      title: 'Add Group',
      name: '',
      description: '',
    }
  },
  methods: {
    async onSubmit() {
      const data = new FormData()
      data.append('name', this.name)
      data.append('description', this.description)

      const result = await this.$axios.$post(
        'http://localhost:3000/groups',
        data
      )
      console.log(result)
      this.$router.push('/admin/news')
    },
  },
}
</script>
