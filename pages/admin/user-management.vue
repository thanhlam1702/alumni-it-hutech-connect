<template>
  <main class="admin">
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
            :columns="columns"
            :data-source="user"
            :scroll="{ x: 500, y: 500 }"
          >
            <a slot="name" slot-scope="text">{{ text }}</a>
            <span slot="customTitle">Username </span>
            <span slot="role"> </span>
            <span slot="action" slot-scope="record">
              <a @click="showDeleteConfirm(record._id)"> Delete</a>
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
    dataIndex: '_id',
    key: '_id',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'Role',
    key: 'role',
    dataIndex: 'role',
  },
  {
    dataIndex: 'phone',
    title: 'Phone',
    key: 'phone',
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]

export default {
  layout: 'admin',

  asyncData({ $axios }) {
    return $axios
      .$get(process.env.baseApiUrl + '/admin/users')
      .then((data) => {
        return {
          user: data.users,
        }
      })
      .catch((e) => {})
  },
  data() {
    return {
      columns,
      user: null,
    }
  },
  methods: {
    async fectData() {
      const result = await this.$axios.$get(
        process.env.baseApiUrl + '/admin/users'
      )

      this.user = result.users
      console.log('helo')
    },
    showDeleteConfirm(id) {
      const thisHandle = this
      this.$confirm({
        title: 'Bạn có chắc chắn muốn xóa user này?',
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
        process.env.baseApiUrl + '/admin/' + id
      )
      if (result.success) {
        this.fectData()
      }
    },
  },
}
</script>
