<template>
  <main class="main-wrapper message-page">
    <div class="container">
      <div class="message">
        <div class="message__left">
          <ul class="chats">
            <li v-for="(item, index) in dataChats" :key="index">
              <nuxt-link class="chats__item" :to="'/message/' + item.id">
                <div class="chats__item-img">
                  <img src="~/assets/images/avatart-default.jpg" alt="" />
                </div>
                <div class="chats__item-name">{{ item.name }}</div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="message__right"></div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      dataChats: [{ name: 'Khoa 2017', id: '123' }],
    }
  },
  mounted() {
    this.dataChats.filter((item) =>
      item.id === this.$route.params.id ? (this.name = item.name) : null
    )
  },
  head() {
    return {
      title: `Tin nhắn | Alumni IT Hutech`,
    }
  },
}
</script>
