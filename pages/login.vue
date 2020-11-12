<template>
  <div class="container">
    <div class="login__container">
      <div class="form__control">
        <h3>Đăng Nhập</h3>
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Vui lòng nhập tài khoản hoặc MSSV!',
                    },
                  ],
                },
              ]"
              placeholder="Tài khoản / mssv"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input-password
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: 'Vui lòng nhập mật khẩu!' },
                  ],
                },
              ]"
              type="password"
              placeholder="Mật khẩu"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                },
              ]"
            >
              Nhớ mật khẩu
            </a-checkbox>
            <nuxt-link to="/forgot-password" class="login-form-forgot"
              >Quên mật khẩu
            </nuxt-link>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              Đăng nhập
            </a-button>
            Hoặc
            <nuxt-link to="/register">Đăng ký ngay!</nuxt-link>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="login__banner"></div>
  </div>
</template>
<script>
export default {
  layout: 'auth',
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
        }
      })
    },
  },
  head() {
    return {
      title: 'Login',
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
