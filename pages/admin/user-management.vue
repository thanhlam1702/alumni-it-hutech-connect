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
            :data-source="data"
            :scroll="{ x: 500, y: 500 }"
          >
            <a slot="name" slot-scope="text">{{ text }}</a>
            <span slot="customTitle">Username </span>
            <span slot="role" slot-scope="roles">
              <a-tag
                v-for="role in roles"
                :key="role"
                :color="
                  role === 'loser'
                    ? 'volcano'
                    : role.length > 5
                    ? 'geekblue'
                    : 'green'
                "
              >
                {{ role.toUpperCase() }}
              </a-tag>
            </span>
            <span slot="action" slot-scope="text, record">
              <a>Invite 一 {{ record.name }}</a>
              <a-divider type="vertical" />
              <a>Delete</a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link">
                More actions <a-icon type="down" />
              </a>
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
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Email',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Password',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'role',
    key: 'roles',
    dataIndex: 'roles',
    scopedSlots: { customRender: 'role' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    roles: ['Teacher', 'software'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

export default {
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get('http://localhost:3000/admin/users')
      return {
        users: response.users,
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  },
  layout: 'admin',
  data() {
    return {
      data,
      columns,
    }
  },
  methods: {
    async onDeleteUser(userID) {
      try {
        const response = await this.$axios.$delete(
          `http://localhost:3000/admin/${userID}`
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
  // beforeMount() {
  //   return (this.user = this.$store.getters.user)
  // },
}
</script>
