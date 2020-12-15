<template>
  <div class="main-profile">
    <section class="container user">
      <div class="user__card">
        <div class="user__card-info">
          <div class="user__card-avatar">
            <img
              v-if="this.$store.getters.user.avatar !== undefined"
              :src="user.avatar"
              alt=""
            />
            <img v-else src="~/assets/images/avatart-default.jpg" alt="" />
          </div>
          <div class="user__card-text">
            <div class="name">{{ user.fullName }}</div>
            <div class="school-year">{{ user.role }}</div>
            <div class="edit-profile">
              <nuxt-link to="/profile/edit"
                >Chỉnh sửa thông tin<a-icon type="edit"
              /></nuxt-link>
            </div>
          </div>
        </div>
        <div class="user__card-connect">
          <div class="post">Bài viết: 1</div>
          <div class="follower">Theo dõi: 0</div>
          <div class="following">Đang theo dõi: 0</div>
        </div>
      </div>
      <div class="user__bg">
        <div class="user__bg-img">
          <img
            src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-9/p960x960/90349064_2552378661684779_2995561576666234880_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_ohc=Yhq-7lqNoZQAX8eGlcN&_nc_ht=scontent.fhan5-6.fna&tp=6&oh=eb75606501b3ab6c131be6aab010950b&oe=5FF3905A"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="container content-profile mr-top">
      <div class="nav">
        <ul class="nav__options">
          <li class="nav__options-item">Bài viết</li>
          <li class="nav__options-item">Đã lưu</li>
        </ul>
      </div>
      <div class="profile"></div>
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
