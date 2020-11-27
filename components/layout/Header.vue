<template>
  <header>
    <nav class="navbar">
      <div class="logo">Logo</div>
      <div class="search__bar">
        <a-input-search
          placeholder="Tìm kiếm trên IT Huetch Connect"
          style="width: 100%"
        />
      </div>
      <div class="nav__right">
        <ul class="nav__right-list">
          <li class="list__item">
            <nuxt-link to="/"><a-icon type="home" /></nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/group"><a-icon type="team" /></nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/message"><a-icon type="message" /></nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="/notification"
              ><a-icon type="notification"
            /></nuxt-link>
          </li>
        </ul>
        <div class="nav__right-user">
          <a-dropdown :trigger="['click']">
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
              <a-menu-item
                ><a-icon type="logout" class="icon" /> Đăng xuất</a-menu-item
              >
            </a-menu>
          </a-dropdown>
        </div>
      </div>
    </nav>
  </header>
</template>
