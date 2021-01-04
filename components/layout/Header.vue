<template>
  <header v-if="$auth.$state.loggedIn">
    <div class="container">
      <div class="logo">
        <nuxt-link to="/"
          ><img src="~/assets/images/logo.svg" alt="IT alumni association"
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
            <nuxt-link to="/"
              ><i class="icon">
                <img src="~/assets/images/icon/home.svg" alt="" /></i
            ></nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/group"
              ><i class="icon">
                <img src="~/assets/images/icon/group.svg" alt="" /></i
            ></nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/message"
              ><i class="icon">
                <img src="~/assets/images/icon/message.svg" alt="" /></i
            ></nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/notification"
              ><i class="icon">
                <img src="~/assets/images/icon/bell.svg" alt="" /></i
            ></nuxt-link>
          </li>
        </ul>
        <div class="nav__right-user">
          <a-dropdown :trigger="['hover']">
            <a class="ant-dropdown-link">
              <a-avatar
                :size="40"
                src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-1/s320x320/84687227_2512620948993884_221115220024623104_n.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_ohc=424qpho3fzsAX-7s-iJ&_nc_ht=scontent-xsp1-1.xx&tp=7&oh=948fd3ecc9916bc72265dcc2ef8bb6c1&oe=5FE153A8"
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
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      listMenu: [
        { link: 'public/about', text: 'About' },
        { link: 'public/communities-clubs', text: 'Communities & clubs' },
        { link: 'public/events', text: 'Events' },
        { link: 'public/news', text: 'News' },
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
  },
}
</script>
