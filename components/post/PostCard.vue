<template>
  <!-- -->
  <div class="posts">
    <div v-for="(item, ipost) in posts" :key="item._id" class="posts__item">
      <div class="posts__item-user">
        <div class="avatar">
          <img :src="item.owner.avatar" alt="" />
        </div>
        <div class="name">
          <nuxt-link :to="'/user/' + item.owner._id">
            {{ item.owner.fullName ? item.owner.fullName : item.owner.name }}
          </nuxt-link>
        </div>
        <div class="control" @click="openModal(item._id)">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="posts__item-content" v-html="item.content"></div>
      <client-only v-if="item.image.length !== 0">
        <Flickity ref="flickity" class="slide" :options="flickityOptions">
          <div
            v-for="(img, index) in item.image"
            :key="index"
            class="slide__item"
          >
            <div class="slide__item-img">
              <img :src="img" alt="" />
            </div>
          </div>
        </Flickity>
      </client-only>
      <div v-if="item.like.length !== 0" class="posts__item-count">
        {{ item.like.length }} lượt thích
      </div>
      <div class="posts__item-control">
        <div
          v-if="item.like.indexOf(_self.$store.state.user._id) === -1"
          class="like"
          @click="onLike(item._id, ipost)"
        >
          <a-icon type="like" />
          Thích
        </div>
        <div v-else class="like is-like" @click="onLike(item._id, ipost)">
          <a-icon type="like" theme="filled" />
          Thích
        </div>
        <div class="comment">
          <nuxt-link :to="'/posts/' + item._id">Bình luận</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      idPost: null,
      flagModal: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 4000,
        // contain: true,
        lazyLoad: 2,
        // setGallerySize: false,
      },
    }
  },
  watch: {
    flagModal() {
      document
        .querySelector('.modal__item.close')
        .addEventListener('click', function () {
          const modal = document.querySelector('.modal-contain')
          document.querySelector('body').removeChild(modal)
        })
      // handle go to post detail
      const _this = this
      document
        .querySelector('.modal__item.link')
        .addEventListener('click', function () {
          _this.$router.push(`/posts/${_this.idPost}`)
          _this.closeModal()
        })
      document
        .querySelector('.modal__item.save')
        .addEventListener('click', function () {
          _this.onSavePost()
          _this.closeModal()
        })
    },
  },
  methods: {
    async fetchLike(id, pos) {
      try {
        const result = await this.$axios.$get(
          process.env.baseApiUrl + '/decks/' + id
        )
        this.posts[pos].like = result.deck.like
      } catch (error) {}
    },
    async onLike(id, pos) {
      try {
        const result = await this.$axios.$post(
          process.env.baseApiUrl + '/decks/' + id
        )
        if (result.success) {
          this.fetchLike(id, pos)
        }
      } catch (error) {}
    },
    openModal(id) {
      this.idPost = id
      const modal = document.createElement('div')
      modal.classList = 'modal-contain'
      document.querySelector('body').appendChild(modal)
      modal.innerHTML = `
        <div class="modal">
          <div class="modal__item link">
            Đi đến bài biết
          </div>
          <div class="modal__item save">Lưu bài viết</div>
          <div class="modal__item close">Hủy</div>
        </div>`
      this.flagModal = !this.flagModal
    },
    async onSavePost() {
      try {
        const result = await this.$axios.$post(
          process.env.baseApiUrl + `/api/auth/user/${this.idPost}`
        )
        if (result.success === true) {
          this.$notification.success({
            message: 'Lưu thành công',
          })
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },
    closeModal() {
      const modal = document.querySelector('.modal-contain')
      document.querySelector('body').removeChild(modal)
    },
  },
}
</script>
