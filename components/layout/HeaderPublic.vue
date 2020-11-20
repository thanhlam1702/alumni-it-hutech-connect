<template>
  <header class="header__public">
    <nav class="navbar">
      <div class="logo"></div>
      <ul class="menu">
        <li class="menu__item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="menu__item">
          <nuxt-link to="/communities-clubs">Communities & clubs</nuxt-link>
        </li>
        <li class="menu__item"><nuxt-link to="/events">Events</nuxt-link></li>
        <li class="menu__item"><nuxt-link to="/news">News</nuxt-link></li>
      </ul>
      <div class="nav__right">
        <nuxt-link to="/register" class="nav__right-item">Register</nuxt-link>
        <nuxt-link to="/login" class="nav__right-item">Login</nuxt-link>
      </div>
    </nav>
  </header>
</template>
