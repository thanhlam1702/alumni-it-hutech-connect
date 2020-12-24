<template>
  <main class="main-wrapper edit-profile">
    <section class="container content-profile pd-profile">
      <NavOption />
      <div class="profile">
        <div class="profile__user">
          <div class="profile__user-avatar">
            <div class="img">
              <img
                :src="
                  this.$store.getters.user.avatar !== undefined
                    ? this.$store.getters.user.avatar
                    : '/_nuxt/assets/images/avatart-default.jpg'
                "
                alt="Alumni IT Hutech Connect"
              />
            </div>
            <div class="change-avatar" @click="showModal">
              <i class="icon">
                <img
                  src="~/assets/images/icon/camera-black.svg"
                  alt="Alumni It Hutech Connect"
                />
              </i>
            </div>
            <a-modal v-model="modelStatus" title="Thay đổi avatar">
              <a-upload-dragger accept=".jpg, .jpeg, .png" @change="onChange">
                <a-button> <a-icon type="upload" />Tải ảnh lên </a-button>
              </a-upload-dragger>
              <template slot="footer">
                <a-button key="back" @click="handleCancel"> Hủy bỏ </a-button>
                <a-button
                  key="submit"
                  type="primary"
                  :loading="loadingBtn"
                  @click="onChangeAvatar"
                >
                  Lưu
                </a-button>
              </template>
            </a-modal>
          </div>
          <div class="profile__user-name">
            {{ form.fullName !== null ? form.fullName : form.name }}
          </div>
        </div>
        <div class="profile__info">
          <a-form-model :model="form">
            <div class="profile__info-item">
              <div class="title">
                <label for="">Họ & tên:</label>
              </div>
              <a-input v-model="form.fullName" class="info"> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Tài khoản:</label>
              </div>
              <a-input v-model="form.name" class="info" read-only> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">MSSV:</label>
              </div>
              <a-input v-model="form.yearID" class="info"> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Email:</label>
              </div>
              <a-input v-model="form.email" read-only class="info"> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Địa chỉ:</label>
              </div>
              <a-input v-model="form.address" value class="info"> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Role:</label>
              </div>
              <a-input v-model="form.role" class="info"> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Di động:</label>
              </div>
              <a-input v-model="form.phone" class="info"> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Giới tính:</label>
              </div>
              <a-input v-model="form.gender" class="info"> </a-input>
            </div>
            <div class="profile__info-item button">
              <a-button type="primary" @click="onSubmit">
                Lưu thay đổi
              </a-button>
              <a-button @click="onCancle"> Hủy bỏ </a-button>
            </div>
          </a-form-model>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavOption from '@/components/profile/NavOption'
export default {
  components: {
    NavOption,
  },
  data() {
    return {
      loadingBtn: false,
      modelStatus: false,
      seclectedFile: null,
      fileName: null,
      form: {
        fullName:
          this.$store.getters.user.fullName === undefined
            ? null
            : this.$store.getters.user.fullName,
        name:
          this.$store.getters.user.name === undefined
            ? null
            : this.$store.getters.user.name,
        email:
          this.$store.getters.user.email === undefined
            ? null
            : this.$store.getters.user.email,
        yearID:
          this.$store.getters.user.yearID === undefined
            ? null
            : this.$store.getters.user.yearID,
        address:
          this.$store.getters.user.address === undefined
            ? null
            : this.$store.getters.user.address,
        role:
          this.$store.getters.user.role === undefined
            ? null
            : this.$store.getters.user.role,
        phone:
          this.$store.getters.user.phone === undefined
            ? null
            : this.$store.getters.user.phone,
        gender:
          this.$store.getters.user.gender === undefined
            ? null
            : this.$store.getters.user.gender,
        background:
          this.$store.getters.user.background === undefined
            ? null
            : this.$store.getters.user.background,
        avatar:
          this.$store.getters.user.avatar === undefined
            ? null
            : this.$store.getters.user.avatar,
      },
    }
  },
  methods: {
    async onSubmit(data) {
      try {
        // const result = await this.$store.dispatch('editUser', this.form)
        const result = await this.$axios.$put(
          process.env.baseApiUrl + `/api/auth/user`,
          this.form
        )
        if (result.success) {
          this.$store.state.user = this.form
          this.$notification.success({
            message: 'Lưu thành công',
          })
          this.$router.push('/profile')
        }
      } catch (error) {
        this.$notification.error({
          message: 'Lưu không thành công',
        })
      }
    },
    onCancle() {
      this.$router.push('/profile')
    },
    showModal() {
      this.modelStatus = true
    },
    onChange(e) {
      if (e.file.status === 'done') {
        this.seclectedFile = e.file.originFileObj
        this.fileName = e.file.originFileObj.name
      }
    },
    async onChangeAvatar(e) {
      const formData = new FormData()
      formData.append('image', this.seclectedFile, this.fileName)
      try {
        this.loadingBtn = true
        const result = await this.$axios.$put(
          process.env.baseApiUrl + `/api/auth/user`,
          formData
        )
        if (result.success) {
          this.modelStatus = false
          this.loadingBtn = false
          console.log(result)
        }
      } catch {
        this.loadingBtn = false
      }
    },
    handleCancel() {
      this.modelStatus = false
    },
  },
}
</script>
