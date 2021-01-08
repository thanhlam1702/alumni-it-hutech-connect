<template>
  <div class="main-wrapper main">
    <div class="container">
      <div class="main-post">
        <PostCard :posts="posts" />
      </div>
      <div class="back-top" @click="scrollTop">
        <a-icon type="up" />
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/post/PostCard'
export default {
  components: {
    PostCard,
  },
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
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    },
  },
  head() {
    return {
      title: 'Bài viết | Alumni IT Hutech',
    }
  },
  layout: 'default',
}
</script>
