<template>
  <div class="main-wrapper main">
    <div class="container">
      <div class="posts">
        <div v-for="item in posts" :key="item._id" class="posts__item">
          <div class="posts__item-user">
            <div class="avatar">
              <img :src="item.owner.avatar" alt="" />
            </div>
            <div class="name">
              <nuxt-link :to="'/user/' + item.owner._id">
                {{
                  item.owner.fullName ? item.owner.fullName : item.owner.name
                }}
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
                <img :src="img" alt="" />
              </div>
            </Flickity>
          </client-only>
          <div class="posts__item-control"></div>
        </div>
      </div>
      <div class="back-top" @click="scrollTop">
        <a-icon type="up" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios
      .$get(process.env.baseApiUrl + '/decks')
      .then((data) => {
        return {
          posts: data.decks.reverse(),
        }
      })
      .catch((e) => {})
  },
  data() {
    return {
      posts: null,
      posttest: null,
      idPost: null,
      flagModal: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 4000,
        contain: true,
        lazyLoad: 2,
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
    scrollTop() {
      window.scrollTo(0, 0)
    },
    openModal(id) {
      this.idPost = id
      // this.$router.push('/test')
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
  head() {
    return {
      title: 'IT Hutech Connect',
    }
  },
  layout: 'default',
}
</script>
