<template>
  <div class="main-wrapper search">
    <div class="container">
      <div class="result-contain">
        <div class="results">
          <div
            v-for="(item, index) in result"
            :key="index"
            class="results__item"
          >
            <nuxt-link :to="'/user/' + item._id" class="results__item-avatar">
              <img v-if="item.avatar" :src="item.avatar" alt="" />
              <img v-else src="~/assets/images/avatart-default.jpg" alt=""
            /></nuxt-link>
            <div class="results__item-info">
              <nuxt-link :to="'/user/' + item._id" class="name">{{
                item.name
              }}</nuxt-link>
              <div class="social">
                <div v-if="item.role" class="social__role">{{ item.role }}</div>
                <div class="social__follow">
                  {{ item.followers.length }} người theo dõi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    result() {
      return this.$store.getters.search
    },
  },
  head() {
    return {
      title: 'Kết quả tìm kiếm | Alumni IT Hutech',
    }
  },
}
</script>
