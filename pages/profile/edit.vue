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
              src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-1/s320x320/84687227_2512620948993884_221115220024623104_n.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=424qpho3fzsAX-7s-iJ&_nc_ht=scontent-xsp1-1.xx&tp=7&oh=948fd3ecc9916bc72265dcc2ef8bb6c1&oe=5FE153A8"
              alt=""
            />
          </div>
          <div class="profile__user-name">{{ user.name }}</div>
        </div>
        <div class="profile__info">
          <a-form-model>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Họ & tên:</label>
              </div>
              <a-input :value="user.name" class="info"> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Tài khoản:</label>
              </div>
              <a-input value="" class="info" readonly> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">MSSV:</label>
              </div>
              <a-input value="" class="info" readonly> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Email:</label>
              </div>
              <a-input :value="user.email" readonly class="info"> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Role:</label>
              </div>
              <a-input value="" class="info"> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Di động:</label>
              </div>
              <a-input value="" class="info"> </a-input>
            </div>
            <div class="profile__info-item">
              <div class="title">
                <label for="">Giới tính:</label>
              </div>
              <a-input value="" class="info"> </a-input>
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
      user: this.$store.getters.user,
    }
  },
}
</script>
