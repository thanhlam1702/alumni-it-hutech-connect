<template>
  <div class="main-wrapper">
    <div class="add__main-wrapper">
      <div class="add__form-control">
        <h2>ADD NEWS</h2>
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">Association news</a-menu-item>
            <a-menu-item key="2">Awards and Honors</a-menu-item>
            <a-menu-item key="3">Career & Professional</a-menu-item>
            <a-menu-item key="3">Learning</a-menu-item>
          </a-menu>
          <a-button style="padding-bottom: 10px">
            <h3>SELECT CATEGORIES</h3>
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
        <h3 for="">Title</h3>
        <div class="components-input-demo-size">
          <a-input placeholder="title of the news..." style="width: 100%" />
        </div>
        <h3>Description</h3>
        <a-textarea placeholder="more information..." :rows="10" />
        <div class="clearfix" style="margin-top: 10px">
          <a-upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            list-type="picture-card"
            :file-list="fileList"
            @preview="handlePreview"
            @change="handleChange"
          >
            <div>
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload images</div>
            </div>
          </a-upload>
          <a-modal
            :visible="previewVisible"
            :footer="null"
            @cancel="handleCancel"
          >
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
        </div>
        <a-button type="primary" style="width: 100%" @click="onSubmit">
          Create News
        </a-button>
      </div>
    </div>
  </div>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
export default {
  layout: 'auth',
  data() {
    return { title: 'Add Group', previewVisible: false, previewImage: '' }
  },

  methods: {
    handleCancel() {
      this.previewVisible = false
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleChange({ fileList }) {
      this.fileList = fileList
    },
  },
}
</script>

<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  float: left;
  width: 200px;
  margin-right: 8px;
  margin-bottom: 10px;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
