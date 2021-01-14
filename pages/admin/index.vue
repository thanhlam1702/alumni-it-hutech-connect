<template>
  <div class="main-wrapper auth">
    <div class="login__main-wrapper">
      <div class="form__control">
        <h3>Admin</h3>
        <a-form-model ref="ruleForm" :model="form" :rules="rules">
          <label for="">Tài khoản:</label>
          <a-form-model-item ref="name" prop="name">
            <a-input v-model="form.name" placeholder="Nhập tài khoản">
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-model-item>
          <label for="">Mật khẩu:</label>
          <a-form-model-item ref="password" prop="password">
            <a-input-password
              v-model="form.password"
              allow-clear
              placeholder="Nhập mật khẩu"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input-password>
          </a-form-model-item>
          <a-form-model-item>
            <a-checkbox> Nhớ mật khẩu </a-checkbox>
            <a-button type="primary" style="width: 100%" @click="onSubmit">
              Đăng nhập
            </a-button>
            <nuxt-link to="/">
              <a-icon type="arrow-left" />Trở về trang chủ</nuxt-link
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
  middleware: 'auth',
  auth: {
    strategies: {
      admin: false,
    },
  },
  data() {
    return {
      form: {
        name: null,
        password: null,
      },
      rules: {
        name: {
          required: true,
          message: 'Vui lòng nhập tài khoản!',
        },
        password: {
          required: true,
          message: 'Vui lòng nhập mật khẩu!',
        },
      },
    }
  },
  methods: {
    async onSubmit() {
      console.log(this.form.name)
      console.log(this.form.password)
      this.$refs.ruleForm.validate((valid) => {})
      try {
        await this.$auth.loginWith('admin', {
          data: {
            email: this.form.name,
            password: this.form.password,
          },
        })
        this.openNotification('success')
      } catch (err) {
        console.log(err)
        this.openNotification('error')
      }
    },
    openNotification(type) {
      if (type === 'error') {
        this.$notification[type]({
          message: 'Đăng nhập thất bại',
        })
      } else {
        this.$notification[type]({
          message: 'Đăng nhập thành công',
        })
      }
    },
  },
  head() {
    return {
      title: 'Admin',
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
