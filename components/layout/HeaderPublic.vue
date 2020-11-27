<template>
  <header class="header__public">
    <nav class="navbar">
      <div class="logo"></div>
      <ul class="menu">
        <li v-for="(item, index) in listMenu" :key="index" class="menu__item">
          <nuxt-link :to="'/' + item.link">{{ item.text }}</nuxt-link>
        </li>
      </ul>
      <div class="nav__right">
        <nuxt-link to="/register" class="nav__right-item">Register</nuxt-link>
        <nuxt-link to="/login" class="nav__right-item">Login</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      listMenu: [
        { link: 'about', text: 'About' },
        { link: 'communities-clubs', text: 'Communities & clubs' },
        { link: 'events', text: 'Events' },
        { link: 'news', text: 'News' },
      ],
    }
  },
}
</script>
