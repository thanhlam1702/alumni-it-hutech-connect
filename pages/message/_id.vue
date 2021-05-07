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
          <!-- content chat -->
          <ul class="message__right-content">
            <li v-for="(message, index) in messages" :key="index">
              <span :class="{ 'float-right': message.type === 0 }">{{
                message.message
              }}</span>
              <br />
            </li>
          </ul>
          <div class="message__right-enter">
            <div class="placeholder">Ae</div>
            <div
              class="content"
              contenteditable="true"
              @input="enterText"
            ></div>
            <div class="icon-send" @click="send">
              <i class="icon">
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
      dataChats: [{ name: 'Khoa 2017', id: '123' }],
    }
  },
  watch: {
    newMessage(value) {
      value ? socket.emit('typing') : socket.emit('stopTyping')
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
  methods: {
    send() {
      this.messages.push({ message: this.newMessage, type: 0 })
      socket.emit('chat-message', this.newMessage)
      this.newMessage = null
      document.querySelector('.message__right-enter .content').innerHTML = ''
      document
        .querySelector('.message__right-enter .placeholder')
        .classList.remove('hidden')
      document.querySelector('.icon-send').classList.remove('notActive')
    },
    addName() {
      this.ready = true
      socket.emit('joined')
    },
    enterText(e) {
      if (e.target.innerHTML !== '') {
        document
          .querySelector('.message__right-enter .placeholder')
          .classList.add('hidden')
        document.querySelector('.icon-send').classList.add('notActive')
        // text of chat
        this.newMessage = e.target.innerHTML
      } else {
        document
          .querySelector('.message__right-enter .placeholder')
          .classList.remove('hidden')
        document.querySelector('.icon-send').classList.remove('notActive')
      }
    },
  },
}
</script>

<style>
.float-right {
  float: right;
}
</style>
