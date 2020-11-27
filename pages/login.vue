<template>
  <div class="container">
    <div class="login__container">
      <div class="form__control">
        <h3>Đăng Nhập</h3>
        <a-form-model ref="ruleForm" :model="form" :rules="rules">
          <label for="">Tài khoản / MSSV:</label>
          <a-form-model-item ref="name" prop="name">
            <a-input v-model="form.name" placeholder="Nhập tài khoản / MSSV">
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
            <nuxt-link to="/forgot-password" class="login-form-forgot"
              >Quên mật khẩu
            </nuxt-link>
            <a-button type="primary" style="width: 100%" @click="onSubmit">
              Đăng nhập
            </a-button>
            <div class="or__register">
              Hoặc <nuxt-link to="/register">Đăng ký ngay!</nuxt-link>
            </div>
            <nuxt-link to="/">
              <a-icon type="arrow-left" />Trở về trang chủ</nuxt-link
            >
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
    <div class="bg__login"></div>
  </div>
</template>
<script>
export default {
  layout: 'auth',
  data() {
    return {
      form: {
        name: null,
        password: null,
      },
      rules: {
        name: {
          required: true,
          message: 'Vui lòng nhập tài khoản hoặc MSSV!',
        },
        password: {
          required: true,
          message: 'Vui lòng nhập mật khẩu!',
        },
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {})
    },
  },
  head() {
    return {
      title: 'Đăng nhập',
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
