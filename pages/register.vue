<template>
  <div class="container">
    <div class="login__container">
      <div class="form__control">
        <h3>Đăng Ký</h3>
        <a-form-model ref="ruleForm" :model="form" :rules="rules">
          <a-form-model-item ref="name" label="Tài khoản / MSSV" prop="name">
            <a-input
              v-model="form.name"
              placeholder="Nhập tài khoản / MSSV"
              allow-clear
            >
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item ref="email" label="Email" prop="email">
            <a-input
              v-model="form.email"
              placeholder="example@email.com"
              allow-clear
            >
              <a-icon slot="prefix" type="mail" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="Mật khẩu" prop="password" has-feedback>
            <a-input
              v-model="form.password"
              placeholder="Gồm chữ, số và lớn hơn 6 ký tự"
              type="password"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item
            label="Nhập lại mật khẩu"
            prop="confirm"
            has-feedback
          >
            <a-input
              v-model="form.confirm"
              placeholder="Nhập lại mật khẩu"
              type="password"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-model-item>
          <a-button type="primary" style="width: 100%" @click="onSubmit">
            Đăng nhập
          </a-button>
          <a-form-model-item
            ><div class="or__register">
              Hoặc <nuxt-link to="/login">Đăng nhập ngay!</nuxt-link>
            </div></a-form-model-item
          >
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
    // Kiểm tra khi nhập mật khảu phải lớn hơn 6 ký tự và gồm có chữ và số
    const validatePass = (rule, value, callback) => {
      const re = /^(?=.*\d)(?=.*[a-zA-Z]).{6,25}$/
      if (this.form.confirm !== null || this.form.confirm !== '') {
        if (re.exec(this.form.password) === null) {
          callback(new Error('Mật khẩu gồm chữ, số và lớn hơn 6 ký tự!'))
        }
        this.$refs.ruleForm.validateField('confirm')
      }
      callback()
    }
    // Kiểm tra nhập lại mật khảu có khớp hay không
    const validateConfirm = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error('Mật khẩu không trùng khớp!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        name: null,
        emai: null,
        password: null,
        confirm: null,
      },
      // Kiểm tra rỗng hoặc không hợp lệ theo yêu cầu
      rules: {
        name: {
          required: true,
          message: 'Vui lòng nhập tài khoản hoặc MSSV!',
        },
        email: [
          {
            type: 'email',
            message: 'Định dạng email không chính xác!',
          },
          {
            required: true,
            message: 'Vui lòng nhập email!',
          },
        ],
        password: [
          { validator: validatePass, trigger: 'change' },
          {
            required: true,
            message: 'Vui lòng nhập mật khẩu!',
          },
        ],
        confirm: [
          { validator: validateConfirm, trigger: 'change' },
          {
            required: true,
            message: 'Vui lòng nhập lại mật khẩu!',
          },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      // Xử lý gọi api
      this.$refs.ruleForm.validate((valid) => {})
    },
  },
  head() {
    return {
      title: 'Đăng ký',
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
