<template>
  <header>
    <nav class="navbar">
      <div class="logo"></div>
      <div class="search__bar"></div>
      <div class="nav__right">
        <ul class="nav__list">
          <li>
            <nuxt-link to="/"><a-icon type="home" /></nuxt-link>
          </li>
          <li>
            <nuxt-link to="/group"><a-icon type="team" /></nuxt-link>
          </li>
          <li>
            <nuxt-link to="/group"><a-icon type="message" /></nuxt-link>
          </li>
          <li>
            <nuxt-link to="/group"><a-icon type="notification" /></nuxt-link>
          </li>
        </ul>
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()"> </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="http://www.alipay.com/">1st menu item</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="http://www.taobao.com/">2nd menu item</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3"> 3rd menu item </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </nav>
  </header>
</template>
