<template>
  <main class="main-wrapper message">
    <div class="container">
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
      <div class="messsage__right"></div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      dataChats: [
        { name: 'Tuan Huynh', id: '123' },
        { name: 'Van A', id: '124' },
        { name: 'Van B', id: '125' },
        { name: 'Van C', id: '126' },
        { name: 'Van D', id: '127' },
        { name: 'Cao Tuan Tai', id: '128' },
        { name: 'Tran Thi Mong Mo', id: '103' },
        { name: 'Ly Dai Phuc', id: '139' },
        { name: 'Ly Dai Phuc', id: '149' },
        { name: 'Ly Dai Phuc', id: '169' },
      ],
    }
  },
}
</script>
