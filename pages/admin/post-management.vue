<template>
  <main class="admin">
    <section class="management-content" style="padding: 15px">
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
      <div class="post__management">
        <div class="post__management-infor">
          <template>
            <a-table :columns="columns" :scroll="{ x: 500, y: 500 }">
              <a slot="name" slot-scope="text">{{ text }}</a>
              <a slot="action" slot-scope="" href="javascript:;">Delete</a>
            </a-table>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
const columns = [
  {
    title: 'Id',
    dataIndex: 'postID',
    key: 'name',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Title',
    dataIndex: 'postTitle',
    key: 'age',
    ellipsis: true,
  },
  {
    title: 'Author',
    dataIndex: 'UserID',
    key: 'address 1',
    width: 80,
  },
  {
    title: 'Topic',
    dataIndex: 'Topic',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    scopedSlots: { customRender: 'action' },
  },
]
export default {
  layout: 'admin',
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get('http://localhost:3000/decks')

      return {
        decks: response.decks,
      }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      columns,
    }
  },
  methods: {
    async onDeleteUser(deckID) {
      try {
        const response = await this.$axios.$delete(
          `http://localhost:3000/admin/${deckID}`
        )

        if (response.success) {
          this.message = response.message
        }
      } catch (err) {
        this.message = err.message
        console.log(err)
      }
    },
  },
}
</script>
