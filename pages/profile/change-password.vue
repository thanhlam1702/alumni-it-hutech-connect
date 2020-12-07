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
        <div class="profile__info">
          <a-form-model ref="ruleForm" :model="form" :rules="rules">
            <a-form-model-item label="Mật khẩu hiện tại" prop="oldPass">
              <a-input-password
                v-model="form.oldPass"
                allow-clear
                type="password"
                class="info"
              >
                <a-icon slot="prefix" type="lock" />
              </a-input-password>
            </a-form-model-item>
            <a-form-model-item label="Mật khẩu mới" prop="newPass" has-feedback>
              <a-input-password
                v-model="form.newPass"
                allow-clear
                type="password"
                class="info"
              >
                <a-icon slot="prefix" type="lock" />
              </a-input-password>
            </a-form-model-item>
            <a-form-model-item
              label="Nhập lại mật khẩu mới"
              prop="confirm"
              has-feedback
            >
              <a-input-password
                v-model="form.confirm"
                allow-clear
                type="password"
                class="info"
              >
                <a-icon slot="prefix" type="lock" />
              </a-input-password>
            </a-form-model-item>
            <div class="profile__info-item button">
              <a-button type="primary" @click="onSubmit"> Lưu </a-button>
              <a-button
                style="background-color: #e4e6eb"
                @click="this.$router.back()"
              >
                Trở về
              </a-button>
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
    // Kiểm tra khi nhập mật khảu phải lớn hơn 6 ký tự và gồm có chữ và số
    const validatePass = (rule, value, callback) => {
      const re = /^(?=.*\d)(?=.*[a-zA-Z]).{6,25}$/
      if (this.form.confirm !== null || this.form.confirm !== '') {
        if (re.exec(this.form.newPass) === null) {
          callback(new Error('Mật khẩu gồm chữ, số và lớn hơn 6 ký tự!'))
        }
        this.$refs.ruleForm.validateField('confirm')
      }
      callback()
    }
    // Kiểm tra nhập lại mật khảu có khớp hay không
    const validateConfirm = (rule, value, callback) => {
      if (value !== this.form.newPass) {
        callback(new Error('Mật khẩu không trùng khớp!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        oldPass: null,
        newPass: null,
        confirm: null,
      },
      rules: {
        oldPass: {
          required: true,
          message: 'Vui lòng nhập mật khẩu cũ',
        },
        newPass: [
          { validator: validatePass, trigger: 'change' },
          {
            required: true,
            message: 'Vui lòng nhập mật khẩu mới!',
          },
        ],
        confirm: [
          { validator: validateConfirm, trigger: 'change' },
          {
            required: true,
            message: 'Vui lòng nhập lại mật khẩu mới!',
          },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {})
    },
  },
}
</script>
