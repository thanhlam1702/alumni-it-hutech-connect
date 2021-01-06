<template>
  <section class="user pd-profile">
    <div class="container">
      <div class="user__card">
        <div class="user__card-info">
          <div class="user__card-avatar">
            <img
              v-if="this.$store.getters.user.avatar !== undefined"
              :src="this.$store.getters.user.avatar"
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
          <div class="post">Bài viết: {{ posts.length }}</div>
          <div class="follower">{{ user.followers.length }} người theo dõi</div>
          <div class="following">
            Đang theo dõi: {{ user.following.length }}
          </div>
        </div>
      </div>
      <div class="user__bg">
        <div class="user__bg-img">
          <img src="~/assets/images/bg-user-default.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      default: null,
    },
    posts: {
      type: Array,
      default: null,
    },
  },
}
</script>
