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
        />
      </div>
      <div class="nav__right">
        <ul class="nav__right-list">
          <li class="list__item">
            <!-- <nuxt-link to="/"
              ><i class="icon">
                <img src="~/assets/images/icon/home.svg" alt="" /></i
            ></nuxt-link> -->
            <nuxt-link to="/">
              <IconHome />
            </nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/group">
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
          <a-dropdown :trigger="['hover', 'click']">
            <a class="ant-dropdown-link">
              <a-avatar
                :size="40"
                :src="
                  this.$store.getters.user.avatar !== undefined
                    ? user.avatar
                    : '/_nuxt/assets/images/avatart-default.jpg'
                "
              />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <nuxt-link to="/profile"
                  ><a-icon type="user" class="icon" />Trang cá nhân</nuxt-link
                >
              </a-menu-item>
              <a-menu-item>
                <nuxt-link to="/save"
                  ><a-icon type="save" class="icon" />Đã lưu</nuxt-link
                >
              </a-menu-item>
              <a-menu-item>
                <nuxt-link to="/setting"
                  ><a-icon type="setting" class="icon" />Cài đặt</nuxt-link
                >
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item @click="onLogout"
                ><a-icon type="logout" class="icon" /> Đăng xuất</a-menu-item
              >
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    </div>
  </header>
  <header v-else class="header__public">
    <div class="container-fluid">
      <div class="logo">
        <nuxt-link to="/"
          ><img src="~/assets/images/logo.svg" alt="IT alimni association"
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
        { link: 'about', text: 'About' },
        { link: 'communities-clubs', text: 'Communities & clubs' },
        { link: 'events', text: 'Events' },
        { link: 'news', text: 'News' },
      ],
    }
  },
  mounted() {
    let prevScroll = window.pageYOffset
    window.onscroll = function () {
      const header = document.getElementsByTagName('header')[0]

      const currentScroll = window.pageYOffset
      if (prevScroll > currentScroll) {
        header.style.top = '0'
      } else {
        header.style.top = '-80px'
      }
      prevScroll = currentScroll
    }
  },
  methods: {
    async onLogout() {
      await this.$auth.logout()
    },
    activeClass() {
      this.isActive = !this.isActive
      document.querySelector('body').classList.toggle('offScroll')
    },
  },
}
</script>
