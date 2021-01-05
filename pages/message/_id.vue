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
            <!-- content chat -->
          </div>
          <div class="message__right-enter">
            <div class="placeholder">Ae</div>
            <div
              class="content"
              contenteditable="true"
              @input="enterText"
            ></div>
            <div class="icon-send">
              <i class="icon">
                <img src="~/assets/images/icon/send-mess.svg" alt="" />
              </i>
            </div>
          </div>
          <!-- <div class="message__right-control">
            <form class="form-mess">
              <textarea
                name="mess-box"
                class="form-mess__box"
                placeholder="Ae"
              ></textarea>
            </form>
            <div class="icon-send">
              <i class="icon">
                <img src="~/assets/images/icon/send-mess.svg" alt="" />
              </i>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
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
  mounted() {
    this.dataChats.filter((item) =>
      item.id === this.$route.params.id ? (this.name = item.name) : null
    )
  },
  methods: {
    enterText(e) {
      if (e.target.innerHTML !== '') {
        document
          .querySelector('.message__right-enter .placeholder')
          .classList.add('hidden')
        document.querySelector('.icon-send').classList.add('notActive')
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
