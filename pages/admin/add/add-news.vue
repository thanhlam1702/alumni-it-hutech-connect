<template>
  <div class="main-wrapper">
    <div class="add__main-wrapper">
      <div class="add__form-control">
        <h2>ADD NEWS</h2>
        <a-dropdown>
          <a-menu slot="overlay">
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
            :multiple="true"
            list-type="picture-card"
            @change="handleChange"
          >
            <div>
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload images</div>
            </div>
          </a-upload>
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
    return {
      title: 'Add Group',
      previewVisible: false,
      previewImage: '',
      listImg: [],
    }
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
    handleChange(e) {
      if (e.file.status === 'done') {
        // console.log(e.file.originFileObj)
        e.fileList.forEach((item, index) => {
          this.listImg[index] = item.originFileObj
        })
      }
      // console.log(e.fileList)
    },
    onSubmit() {
      console.log(this.listImg)
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
