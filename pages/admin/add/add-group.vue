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
        <a-upload-dragger
          list-type="picture-card"
          accept=".jpg, .jpeg, .png"
          @change="onChange"
        >
          <a-button> <a-icon type="upload" />Tải ảnh lên </a-button>
        </a-upload-dragger>
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
      image: null,
    }
  },
  methods: {
    async onSubmit() {
      const formData = new FormData()
      formData.append('name', this.form.name)
      formData.append('description', this.form.description)
      formData.append('image', this.image)
      try {
        const result = await this.$axios.$post(
          process.env.baseApiUrl + '/groups',
          formData
        )
        if (result.success) {
          console.log('hoan thanh')
        }
      } catch (err) {
        console.log(err)
      }
    },
    onChange(e) {
      if (e.file.status === 'done') {
        this.image = e.file.originFileObj
        // this.image = e.file.originFileObj.name
      }
    },
  },
}
</script>
