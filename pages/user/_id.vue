<template>
  <main class="main-wrapper profile">
    <section class="user pd-profile">
      <div class="container">
        <div class="user__card">
          <div class="user__card-info">
            <div class="user__card-avatar">
              <img v-if="user.avatar !== undefined" :src="user.avatar" alt="" />
              <img v-else src="~/assets/images/avatart-default.jpg" alt="" />
            </div>
            <div class="user__card-text">
              <div class="name">{{ user.fullName }}</div>
              <div class="school-year">{{ user.role }}</div>
            </div>
            <div class="user__card-control">
              <div class="btn-sendmess">Nhắn tin</div>
              <div
                v-if="
                  user.followers.findIndex(
                    (item) => item._id === this.$store.state.user._id
                  ) === -1
                "
                class="btn-follow"
                @click="onFollow"
              >
                Theo dõi
              </div>
              <div v-else class="btn-follow" @click="onFollow">
                <a-icon type="user" />
                <a-icon type="check" :style="{ fontSize: '10px' }" />
              </div>
            </div>
          </div>
          <div class="user__card-connect">
            <div class="post">Bài viết: {{ user.decks.length }}</div>
            <div class="follower">
              {{ user.followers.length }} người theo dõi
            </div>
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
    <section class="main-profile mr-top pd-profile">
      <div class="container">
        <div class="nav">
          <ul class="nav__options">
            <li class="nav__options-item">
              <nuxt-link :to="'/user/' + user._id">Bài viết</nuxt-link>
            </li>
            <!-- <li class="nav__options-item">
              <nuxt-link to="/profile/save">Đã lưu</nuxt-link>
            </li> -->
          </ul>
        </div>
        <div class="posts">
          <div v-for="item in posts" :key="item._id" class="posts__item">
            <nuxt-link class="posts__item-slide" :to="`/posts/${item._id}`">
              <div
                v-if="
                  item.image == '' ||
                  item.image == null ||
                  item.image == undefined
                "
                class="description"
              >
                <span v-html="item.content"></span>
              </div>
              <client-only v-else>
                <Flickity
                  ref="flickity"
                  class="slide"
                  :options="flickityOptions"
                >
                  <div
                    v-for="(img, index) in item.image"
                    :key="index"
                    class="slide__img"
                  >
                    <img :src="img" alt="" />
                  </div>
                </Flickity>
              </client-only>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  asyncData({ $axios, params }) {
    return $axios
      .$get(process.env.baseApiUrl + '/api/auth/' + params.id)
      .then((data) => {
        return {
          user: data.user,
          posts: data.user.decks.reverse(),
        }
      })
      .catch((e) => {})
  },
  data() {
    return {
      user: null,
      posts: null,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 4000,
        contain: true,
        // lazyLoad: 2,
      },
    }
  },
  methods: {
    async fetchUser() {
      try {
        const result = await this.$axios.$get(
          process.env.baseApiUrl + '/api/auth/' + this.$route.params.id
        )
        this.user = result.user
      } catch (error) {}
    },
    async onFollow() {
      try {
        const result = await this.$axios.$post(
          process.env.baseApiUrl + `/api/auth/${this.$route.params.id}`
        )
        if (result.success) {
          this.fetchUser()
          this.$store.dispatch('getUser')
        }
      } catch (error) {}
    },
  },
  head() {
    return {
      title: `${this.user.fullName ? this.user.fullName : this.user.name}`,
    }
  },
}
</script>
