div
<template>
  <main class="main-wrapper detail-post">
    <div class="container">
      <div class="post-detail-contain">
        <div v-if="post.image.length !== 0" class="post-left">
          <Flickity ref="flickity" class="imgs" :options="flickityOptions">
            <div
              v-for="(item, index) in post.image"
              :key="index"
              class="imgs__item"
            >
              <img :src="item" alt="" />
            </div>
          </Flickity>
        </div>
        <div class="post-right">
          <div class="post-right__owner">
            <div class="avatar">
              <img :src="post.owner.avatar" alt="" />
            </div>
            <div class="name">
              <span>
                <nuxt-link :to="'/user/' + post.owner._id">
                  {{ post.owner.fullName }}
                </nuxt-link>
              </span>
              <span class="date">{{ post.date }}</span>
            </div>
          </div>
          <div class="contain">
            <div id="content" class="post-right__content"></div>
            <div class="post-right__comment">
              <div
                v-for="(item, index) in comment"
                :key="index"
                class="comment"
              >
                <div class="comment__user">
                  <div class="comment__user-avatar">
                    <img :src="item.user.avatar" alt="" />
                  </div>
                </div>
                <div class="comment__body">
                  <div class="name-user">
                    <nuxt-link :to="'/user/' + item.user._id">
                      {{
                        item.user.fullName == null
                          ? item.user.name
                          : item.user.fullName
                      }}
                    </nuxt-link>
                  </div>
                  <div class="body"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="post-right__enter">
            <div class="placeholder">Thêm bình luận..</div>
            <div
              class="content"
              contenteditable="true"
              @input="enterText"
              @keydown="keyup"
            ></div>
            <i class="btn-send icon" @click="submit">
              <img src="~/assets/images/icon/send-mess.svg" alt="" />
            </i>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  async asyncData({ params, $axios }) {
    try {
      const post = $axios.$get(process.env.baseApiUrl + `/decks/${params.id}`)
      const review = $axios.$get(
        process.env.baseApiUrl + `/reviews/${params.id}`
      )
      const [postData, reviewData] = await Promise.all([post, review])
      return {
        post: postData.deck,
        comment: reviewData.reviews,
      }
    } catch (error) {}
  },
  data() {
    return {
      post: null,
      comment: null,
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
  mounted() {
    document.getElementById('content').innerHTML = this.post.content
    this.comment.forEach((item, index) => {
      document.querySelectorAll('.comment__body .body')[index].innerHTML =
        item.body
    })
  },
  methods: {
    async submit() {
      const comment = document.querySelector('.post-right__enter .content')
        .innerHTML
      const formData = new FormData()
      formData.append('body', comment)
      try {
        const result = await this.$axios.$post(
          process.env.baseApiUrl + '/reviews/' + this.$route.params.id,
          formData
        )
        if (result.success) {
          document.querySelector('.post-right__enter .content').innerHTML = ''
          this.fetchData()
        }
      } catch (error) {}
    },
    async fetchData() {
      try {
        const review = await this.$axios.$get(
          process.env.baseApiUrl + `/reviews/${this.$route.params.id}`
        )
        if (review.success) {
          this.comment = review.reviews
          setTimeout(function () {
            review.reviews.forEach((item, index) => {
              document.getElementsByClassName('body')[index].innerHTML =
                item.body
            })
          }, 500)
        }
      } catch (error) {}
    },
    keyup(e) {
      if (e.keyCode === 13) {
        this.submit()
      }
    },
    enterText(e) {
      if (e.target.innerHTML !== '') {
        document
          .querySelector('.post-right__enter .placeholder')
          .classList.add('hidden')
        document.querySelector('.btn-send').classList.add('notActive')
      } else {
        document
          .querySelector('.post-right__enter .placeholder')
          .classList.remove('hidden')
        document
          .querySelector('.post-right__enter .placeholder')
          .classList.add('hidden')
        document.querySelector('.btn-send').classList.remove('notActive')
      }
    },
  },
}
</script>
