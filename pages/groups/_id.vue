<template>
  <div class="main-wrapper group">
    <section class="content">
      <div class="container">
        <div class="group-contain">
          <!-- -->
          <div class="group__left">
            <div class="group__left-title detail-title">
              <div class="avatar">
                <img v-if="group.image" :src="group.image" alt="" />
                <img v-else src="~/assets/images/default_group.png" alt="" />
              </div>
              <div class="name">{{ group.name }}</div>
              <div class="control" @click="activeDropmore">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="dropmore">
                <div class="dropmore__item" @click="onOutGroup">
                  <i class="icon">
                    <img src="~/assets/images/icon/log-out.svg" alt="" />
                  </i>
                  <span>Rời khỏi nhóm</span>
                </div>
              </div>
            </div>
            <div class="group__left-info">
              <div class="title">Giới thiệu</div>
              <div class="description">{{ group.description }}</div>
              <div class="amount-user">
                <b>{{ group.users.length }}</b> thành viên
              </div>
              <div class="amount-post">
                <b>{{ group.decks.length }}</b> bài viết
              </div>
            </div>
          </div>
          <!-- -->
          <div class="group__right">
            <div class="group__right-post">
              <div class="avatar">
                <img :src="this.$store.state.user.avatar" alt="" />
              </div>
              <div class="post-box" @click="modalPost = true">Ae</div>
              <PostModal
                :isvisible="modalPost"
                :url="'/groups/decks/' + group._id"
                @handdleCancelModal="handdleCancelModal"
                @fetchData="fectData"
              />
            </div>
            <PostCardGroup :posts="groupPosts" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import PostCardGroup from '@/components/post/PostCardGroup'
import PostModal from '@/components/modal/PostModal'

export default {
  components: {
    PostCardGroup,
    PostModal,
  },
  asyncData({ $axios, params }) {
    return $axios
      .$get(process.env.baseApiUrl + '/groups/' + params.id)
      .then((data) => {
        return { group: data.groups, groupPosts: data.groups.decks.reverse() }
      })
      .catch((e) => {})
  },
  data() {
    return {
      group: null,
      groupPosts: null,
      modalPost: false,
    }
  },
  mounted() {
    // Menu dropmenu when click outsite and remove active class
    const dropmenu = document.querySelector('.dropmore')
    document.addEventListener('click', (e) => {
      e.preventDefault()
      dropmenu.classList.remove('active')
    })
  },
  methods: {
    handdleCancelModal() {
      this.modalPost = false
    },
    activeDropmore() {
      event.stopPropagation()
      const dropmenu = document.querySelector('.dropmore')
      dropmenu.classList.toggle('active')
    },
    async onOutGroup() {
      try {
        const result = await this.$axios.$post(
          process.env.baseApiUrl + '/groups/' + this.$route.params.id
        )
        if (result.success) {
          await this.$store.dispatch('getUser')
          this.$router.push('/groups')
        }
      } catch (error) {}
    },
    async fectData() {
      const result = await this.$axios.$get(
        process.env.baseApiUrl + '/groups/' + this.$route.params.id
      )
      this.group = result.groups
      this.groupPosts = result.groups.decks.reverse()
    },
  },
}
</script>
