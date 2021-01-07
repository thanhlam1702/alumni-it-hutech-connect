<template>
  <main class="admin">
    <p @click="onFetch">heloo</p>
    <section class="management-content">
      <div class="nav">
        <ul class="nav__options">
          <li class="nav__options-item">
            <nuxt-link to="/admin/user-management">User Management</nuxt-link>
          </li>
          <li class="nav__options-item">
            <nuxt-link to="/admin/post-management">Post Management</nuxt-link>
          </li>
          <li class="nav__options-item">
            <nuxt-link to="/admin/group-management">Group Management</nuxt-link>
          </li>
          <li class="nav__options-item">
            <nuxt-link to="/admin/news">News </nuxt-link>
          </li>
          <li class="nav__options-item">
            <nuxt-link to="/admin/events">Events</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="user__management">
        <div class="user__management-infor">
          <a-table
            v-if="data"
            :columns="columns"
            :data="data"
            :scroll="{ x: 500, y: 500 }"
          >
            <a slot="name" slot-scope="text">{{ text }}</a>
            <span slot="customTitle">Username </span>
            <span slot="role"> </span>
            <span slot="action">
              <a>Delete</a>
            </span>
          </a-table>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
const columns = [
  {
    title: 'Id',
    key: '_id',
  },
  {
    title: 'Email',
    key: 'email',
  },
  {
    title: 'Password',
    key: 'password',
  },
  {
    title: 'Role',
    key: 'role',
  },
  {
    title: 'Action',
    key: 'action',
  },
]

export default {
  layout: 'admin',
  data() {
    return {
      columns,
    }
  },

  methods: {
    async onFetch() {
      const result = await this.$axios.$get(
        process.env.baseApiUrl + '/admin/users'
      )
      console.log(result)
    },
  },
}
</script>
