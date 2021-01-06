<style>
.float-right {
  float: right;
}
</style>
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
        <div class="message__right">
          <div class="message__right-top">
            <div class="img">
              <img src="~/assets/images/avatart-default.jpg" alt="" />
            </div>
            <div>
              {{ name }}
            </div>
          </div>
          <div class="message__right-content">
            <ul>
              <li v-for="(message, index) in messages" :key="index">
                <span :class="{ 'float-right': message.type === 0 }">{{
                  message.message
                }}</span>
                <br />
              </li>
            </ul>
            <!-- content chat -->
          </div>
          <div class="message__right-control">
            <small v-if="typing">User is typing</small>
            <form class="form-mess">
              <textarea
                v-model="newMessage"
                name="mess-box"
                class="form-mess__box"
              ></textarea>
            </form>
            <div class="icon-send">
              <i class="icon" @click="send">
                <img src="~/assets/images/icon/send-mess.svg" alt="" />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import io from 'socket.io-client'
const socket = io(process.env.baseApiUrl)
export default {
  data() {
    return {
      newMessage: null,
      messages: [],
      typing: false,
      ready: false,
      name: '',
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
  watch: {
    newMessage(value) {
      value ? socket.emit('typing') : socket.emit('stopTyping')
    },
  },
  methods: {
    send() {
      this.messages.push({ message: this.newMessage, type: 0 })
      socket.emit('chat-message', this.newMessage)
      this.newMessage = null
    },
    addName() {
      this.ready = true
      socket.emit('joined')
    },
  },
  mounted() {
    this.dataChats.filter((item) =>
      item.id === this.$route.params.id ? (this.name = item.name) : null
    )
  },
  created() {
    socket.emit('Created', {
      user: `$auth.$state.user.email`,
    })
    socket.on('Created', (data) => {})
    socket.on('chat-message', (data) => {
      this.messages.push({ message: data, type: 1 })
    })
    socket.on('typing', (data) => {
      this.typing = true
    })

    socket.on('stopTyping', (data) => {
      this.typing = false
    })
    socket.on('joined', (data) => {
      this.ready = true
    })
  },
}
</script>
