<template>
  <main class="main-wrapper profile">
    <CardUser :user="user" :posts="posts" />
    <section class="main-profile mr-top pd-profile">
      <div class="container">
        <div class="nav">
          <ul class="nav__options">
            <li class="nav__options-item">
              <nuxt-link to="/profile">Bài viết</nuxt-link>
            </li>
            <li class="nav__options-item">
              <nuxt-link to="/profile/save">Đã lưu</nuxt-link>
            </li>
            <li class="nav__options-item" @click="modalPost = true">
              <a><a-icon type="plus" /></a>
              <PostModal
                :isvisible="modalPost"
                :url="'/decks'"
                @handdleCancelModal="handdleCancelModal"
                @fetchData="fectData"
              />
            </li>
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
            <div
              class="posts__item-delete"
              @click="showDeleteConfirm(item._id)"
            >
              <a-icon type="delete" style="font-size: 30px; color: #fff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import PostModal from '@/components/modal/PostModal'
import CardUser from '@/components/profile/CardUser'
export default {
  components: {
    PostModal,
    CardUser,
  },
  asyncData(context) {
    return context.app.$axios
      .$get(process.env.baseApiUrl + '/api/auth/user/decks')
      .then((data) => {
        return {
          posts: data.decks.reverse(),
        }
      })
      .catch((e) => {})
  },
  data() {
    return {
      modalPost: false,
      user: this.$store.getters.user,
      posts: null,
      isLoadingDelete: false,
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
    handdleCancelModal() {
      this.modalPost = false
    },
    async fectData() {
      const result = await this.$axios.$get(
        process.env.baseApiUrl + '/api/auth/user/decks'
      )
      this.posts = result.decks.reverse()
    },
    showDeleteConfirm(id) {
      const thisHandle = this
      this.$confirm({
        title: 'Bạn có chắc chắn muốn xóa bài viết này?',
        okText: 'Xóa',
        okType: 'danger',
        cancelText: 'Hủy',
        onOk() {
          thisHandle.onDelete(id)
        },
      })
    },
    async onDelete(id) {
      const result = await this.$axios.$delete(
        process.env.baseApiUrl + `/decks/${id}`
      )
      if (result.success === true) {
        this.fectData()
        this.visibleDelete = false
        this.isLoadingDelete = false
      }
    },
  },
  head() {
    return {
      title: `${this.user.fullName ? this.user.fullName : this.user.name}`,
    }
  },
}
</script>
