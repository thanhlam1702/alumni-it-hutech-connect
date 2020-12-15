<template>
  <div class="main-profile">
    <section class="container content-profile">
      <div class="nav">
        <ul class="nav__options">
          <li class="nav__options-item">
            <nuxt-link to="/profile/edit">Edit profile</nuxt-link>
          </li>
          <li class="nav__options-item">
            <nuxt-link to="/profile/change-password">Change password</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="profile">
        <div class="profile__user">
          <div class="profile__user-avatar">
            <img
              :src="
                this.$store.getters.user.avatar !== undefined
                  ? user.avatar
                  : '/_nuxt/assets/images/avatart-default.jpg'
              "
              alt=""
            />
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
              <a-input v-model="form.fullName" value class="info"> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Tài khoản:</label>
              </div>
              <a-input v-model="form.name" class="info" readonly> </a-input>
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
              <a-input v-model="form.email" readonly class="info"> </a-input>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      // user: this.$store.getters.user,
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

      // this.$store
      //   .dispatch('editUser', this.form)
      //   .then(() => {
      //     this.$notification.success({
      //       message: 'Đã lưu',
      //     })
      //     this.$router.push('/profile')
      //   })
      //   .catch(() => {
      //     this.$notification.error({
      //       message: 'Lưu thất bại',
      //     })
      //   })
    },
    onCancle() {
      this.$router.push('/profile')
    },
  },
}
</script>
