<template>
  <main class="main-wrapper profile">
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
      </div>
    </section>
    <section class="main-profile mr-top pd-profile">
      <div class="container">
        <div class="nav">
          <ul class="nav__options">
            <li class="nav__options-item">
              <nuxt-link to="">Bài viết</nuxt-link>
            </li>
            <li class="nav__options-item">
              <nuxt-link to="/profile/save">Đã lưu</nuxt-link>
            </li>
            <li class="nav__options-item" @click="modalPost = true">
              <a><a-icon type="plus" /></a>
              <PostModal
                :isvisible="modalPost"
                @handdleCancelModal="handdleCancelModal"
                @fetchData="fectData"
              />
            </li>
          </ul>
        </div>
        <div class="posts">
          <nuxt-link
            v-for="item in posts"
            :key="item._id"
            class="posts__item"
            :to="`/posts/${item._id}`"
          >
            <div
              v-if="
                item.image == '' ||
                item.image == null ||
                item.image == undefined
              "
              class="description"
            >
              <span>{{ item.content }}</span>
            </div>
            <no-ssr v-else>
              <Flickity ref="flickity" class="slide" :options="flickityOptions">
                <div
                  v-for="(img, index) in item.image"
                  :key="index"
                  class="posts__item-img"
                >
                  <img :src="img" alt="" />
                </div>
              </Flickity>
            </no-ssr>
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import PostModal from '@/components/modal/PostModal'
export default {
  components: {
    PostModal,
  },
  asyncData(context) {
    return context.app.$axios
      .$get(process.env.baseApiUrl + '/api/auth/user/decks')
      .then((data) => {
        return {
          posts: data.decks,
        }
      })
      .catch((e) => {})
  },
  data() {
    return {
      modalPost: false,
      user: this.$store.getters.user,
      posts: null,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 4000,
        contain: true,
      },
    }
  },
  methods: {
    handdleCancelModal() {
      this.modalPost = false
    },
    async fectData() {
      return await this.$axios
        .$get(process.env.baseApiUrl + '/api/auth/user/decks')
        .then((data) => {
          return {
            posts: data.decks,
          }
        })
        .catch((e) => {})
    },
  },
}
</script>
