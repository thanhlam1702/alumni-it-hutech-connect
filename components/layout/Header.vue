<template>
  <header v-if="$auth.$state.loggedIn">
    <div class="container">
      <div class="logo">
        <nuxt-link to="/"
          ><img src="~/assets/images/logo.svg" alt="IT alimni association"
        /></nuxt-link>
      </div>
      <div class="search__bar">
        <a-input-search
          placeholder="Tìm kiếm trên IT Hutech Connect"
          style="width: 100%"
          @search="onSearch"
        />
      </div>
      <div class="nav__right">
        <ul class="nav__right-list">
          <li class="list__item">
            <nuxt-link to="/main">
              <IconHome />
            </nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/groups">
              <IconGroup />
            </nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/message">
              <IconMessage />
            </nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/notification">
              <IconNotification />
            </nuxt-link>
          </li>
        </ul>
        <div class="nav__right-user">
          <div class="img-avatar" @click="activeDropMenu">
            <img
              :src="
                this.$store.getters.user.avatar
                  ? this.$store.getters.user.avatar
                  : '/_nuxt/assets/images/avatart-default.jpg'
              "
              alt="Alumni IT Hutech Connect"
            />
          </div>
          <ul class="dropmenu">
            <li class="dropmenu__item">
              <nuxt-link to="/profile"
                ><a-icon type="user" class="icon" />Trang cá nhân</nuxt-link
              >
            </li>
            <li class="dropmenu__item">
              <nuxt-link to="/profile/save"
                ><a-icon type="save" class="icon" />Đã lưu</nuxt-link
              >
            </li>
            <li class="dropmenu__item">
              <nuxt-link to="/profile/edit"
                ><a-icon type="setting" class="icon" />Cài đặt</nuxt-link
              >
            </li>
            <li class="dropmenu__item" @click="onLogout">
              <a><a-icon type="logout" class="icon" />Đăng xuất</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <header v-else class="header__public">
    <div class="container-fluid">
      <div class="logo">
        <nuxt-link to="/"
          ><img src="~/assets/images/logo.svg" alt="IT alumni association"
        /></nuxt-link>
      </div>
      <ul class="menu">
        <li v-for="(item, index) in listMenu" :key="index" class="menu__item">
          <nuxt-link :to="'/' + item.link">{{ item.text }}</nuxt-link>
        </li>
      </ul>
      <div class="nav__right">
        <nuxt-link to="/register" class="nav__right-item">Register</nuxt-link>
        <nuxt-link to="/login" class="nav__right-item">Login</nuxt-link>
      </div>
      <ul class="menu-mobile" :class="{ active: isActive }">
        <li
          v-for="(item, index) in listMenu"
          :key="index"
          class="menu-mobile-item"
        >
          <nuxt-link :to="'/' + item.link">{{ item.text }}</nuxt-link>
        </li>
        <li class="menu-mobile-item">
          <nuxt-link to="/register">Register</nuxt-link>
        </li>
        <li class="menu-mobile-item">
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
      </ul>
      <div :class="{ clicked: isActive }" class="btn-menu" @click="activeClass">
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
import IconHome from '@/components/icon/IconHome'
import IconGroup from '@/components/icon/IconGroup'
import IconMessage from '@/components/icon/IconMessage'
import IconNotification from '@/components/icon/IconNotification'

export default {
  components: {
    IconHome,
    IconGroup,
    IconMessage,
    IconNotification,
  },
  data() {
    return {
      isActive: false,
      listMenu: [
        { link: 'public/about', text: 'About' },
        { link: 'public/communities-clubs', text: 'Communities & clubs' },
        { link: 'public/events', text: 'Events' },
        { link: 'public/news', text: 'News' },
      ],
    }
  },
  mounted() {
    // let prevScroll = window.pageYOffset
    // window.onscroll = function () {
    //   const header = document.getElementsByTagName('header')[0]

    //   const currentScroll = window.pageYOffset
    //   if (prevScroll > currentScroll) {
    //     header.style.top = '0'
    //   } else {
    //     header.style.top = '-80px'
    //   }
    //   prevScroll = currentScroll
    // }

    // Menu dropmenu when click outsite and remove active class
    const dropmenu = document.querySelector('.dropmenu')
    document.addEventListener('click', (e) => {
      e.preventDefault()
      dropmenu.classList.remove('active')
    })
  },
  methods: {
    async onLogout() {
      await this.$auth.logout()
    },
    activeClass() {
      this.isActive = !this.isActive
      document.querySelector('body').classList.toggle('offScroll')
    },
    activeDropMenu() {
      event.stopPropagation()
      const dropmenu = document.querySelector('.dropmenu')
      dropmenu.classList.toggle('active')
    },

    async onSearch(value) {
      try {
        const result = await this.$axios.$post(
          process.env.baseApiUrl + '/admin/users/?name=' + value
        )
        if (result.success) {
          await this.$store.dispatch('setSearch', result.users)
          this.$router.push('/search')
        }
      } catch (error) {}
    },
  },
}
</script>
