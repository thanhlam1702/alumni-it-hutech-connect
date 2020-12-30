<template>
  <a-modal
    v-model="visible"
    class="modal-post"
    title="Đăng bài"
    @cancel="handleCancel"
  >
    <template slot="footer">
      <a-button
        key="submit"
        style="width: 100%"
        type="primary"
        :loading="loading"
        @click="submit"
      >
        Đăng
      </a-button>
    </template>
    <div class="content">
      <div class="placeholder">Ae</div>
      <div class="content__text" contenteditable="true"></div>
      <a-upload
        list-type="picture-card"
        class="img-upload"
        accept=".jpg, .jpeg, .png"
        :multiple="true"
        @change="onChange"
      >
        <div>
          <a-icon type="upload" />
          <div class="ant-upload-text">Tải ảnh lên</div>
        </div>
      </a-upload>
    </div>
  </a-modal>
</template>
<script>
export default {
  props: {
    isvisible: {
      type: Boolean,
    },
  },
  data() {
    return {
      visible: false,
      loading: false,
      listImg: [],
    }
  },
  watch: {
    isvisible() {
      this.isvisible ? (this.visible = true) : (this.visible = false)
    },
  },
  methods: {
    handleCancel(e) {
      this.$emit('handdleCancelModal')
    },
    async submit() {
      this.loading = true

      const formData = new FormData()
      const content = document.querySelector('.content__text').innerHTML
      formData.append('content', content)
      this.listImg.forEach((item) => {
        formData.append('image', item)
      })

      try {
        const result = await this.$axios.$post(
          process.env.baseApiUrl + `/decks`,
          formData
        )
        console.log(result)
        if (result.success === 'true') {
          this.$emit('handdleCancelModal')
          this.$emit('fetchData')
        }
      } catch (error) {}
      this.loading = false
    },
    onChange(e) {
      if (e.file.status === 'done') {
        e.fileList.forEach((item, index) => {
          this.listImg[index] = item.originFileObj
        })
      }
    },
  },
}
</script>
