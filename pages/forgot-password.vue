<template>
  <div class="main-wrapper auth">
    <div class="login__main-wrapper">
      <div class="form__control">
        <h3>Quên mật khẩu</h3>
        <a-form-model ref="ruleForm" :model="form" :rules="rules">
          <a-form-model-item ref="email" label="Nhập email" prop="email">
            <a-input
              v-model="form.email"
              placeholder="example@email.com"
              allow-clear
            >
              <a-icon slot="prefix" type="mail" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item>
            <a-button type="primary" style="width: 100%" @click="onSubmit">
              Quên mật khẩu
            </a-button>
            <nuxt-link to="/login">
              <a-icon type="arrow-left" />Trở về</nuxt-link
            >
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
    <div class="bg__login">
      <img
        class="bg__login-img"
        src="~/assets/images/bg_login.svg"
        alt="Alumni IT Hutech"
      />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'auth',
  data() {
    return {
      form: {
        email: null,
      },
      rules: {
        email: [
          { type: 'email', message: 'Định dạng email không chính xác!' },
          {
            required: true,
            message: 'Vui lòng nhập email để lấy lại mật khẩu!',
          },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {})
      this.$axios
        .$post(process.env.baseApiUrl + `/api/auth/lostPassword`, this.form)
        .then((data) => {
          this.openNotification('success')
          this.$router.push('/login')
        })
        .catch((e) => {
          this.openNotification('error')
          // eslint-disable-next-line no-console
          console.log(e)
        })
    },
    openNotification(type) {
      if (type === 'error') {
        this.$notification[type]({
          message: 'Lấy mật khẩu thất bại!',
        })
      } else {
        this.$notification[type]({
          message:
            'Mật khẩu mới đã được gửi đên Email của bạn, Kiểm tra và đăng nhập lại!',
        })
      }
    },
  },
  head() {
    return {
      title: 'Quên Mật Khẩu',
    }
  },
}
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
