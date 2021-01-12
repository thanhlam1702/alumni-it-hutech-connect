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
            <a-table
              :columns="columns"
              :data-source="deck"
              :scroll="{ x: 500, y: 500 }"
            >
              <a slot="name" slot-scope="text">{{ text }}</a>
              <span slot="action" slot-scope="record">
                <a @click="showDeleteConfirm(record._id)">Delete</a>
              </span>
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
    dataIndex: '_id',
    key: 'id',
    scopedSlots: { customRender: 'id' },
  },
  {
    title: 'Title',
    dataIndex: 'content',
    key: 'age',
    ellipsis: true,
  },
  {
    title: 'Author',
    dataIndex: 'owner.name',
    key: 'owner',
    ellipsis: true,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
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
  asyncData({ $axios }) {
    return $axios
      .$get(process.env.baseApiUrl + '/decks')
      .then((data) => {
        return {
          deck: data.decks,
        }
      })
      .catch((e) => {})
  },
  data() {
    return {
      columns,
      deck: null,
    }
  },
  methods: {
    async fetchData() {
      const result = await this.$axios.$get(process.env.baseApiUrl + '/decks')
      this.deck = result.decks
      console.log('da xoa')
    },
    showDeleteConfirm(id) {
      const thisHandle = this
      this.$confirm({
        title: 'Bạn có chắc chắn muốn xóa post này?',
        okText: 'Xóa',
        okType: 'danger',
        cancelText: 'Hủy',
        onOk() {
          thisHandle.onDelete(id)
        },
      })
    },
    async onDelete(id) {
      const result = await this.$axios.$delete(
        process.env.baseApiUrl + '/decks/' + id
      )

      if (result.success) {
        this.fetchData()
      }
    },
  },
}
</script>
