<template>
  <div class="admin">
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
      <div class="admin__content">
        <div class="search__bar">
          <a-input-search placeholder="Search group.." style="width: 50%" />
          <a-button type="primary" icon="plus">
            <nuxt-link to="/admin/add/add-group">Add Group</nuxt-link>
          </a-button>
        </div>

        <div class="group__management-infor">
          <template>
            <a-table
              :columns="columns"
              :data-source="group"
              :scroll="{ x: 500, y: 500 }"
            >
              <a slot="name" slot-scope="text">{{ text }}</a>
              <span slot="action" slot-scope="record">
                <a @click="onDelete(record._id)"> Delete</a>
              </span>
            </a-table>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
const columns = [
  {
    title: 'GroupID',
    dataIndex: '_id',
    key: 'groupId',
  },
  {
    title: 'Group name',
    dataIndex: 'name',
    key: 'groupName',
    ellipsis: true,
  },

  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    ellipsis: true,
  },
  {
    title: 'Member Count',
    dataIndex: 'users.length',
    key: '',
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
  data() {
    return {
      columns,
      group: null,
    }
  },
  asyncData({ $axios }) {
    return $axios
      .$get(process.env.baseApiUrl + '/groups')
      .then((data) => {
        return {
          group: data.groups,
        }
      })
      .catch((e) => {})
  },
  methods: {
    async fetchData() {
      const result = await this.$axios.$get(process.env.baseApiUrl + '/groups')
      this.group = result.groups
      console.log('helo')
    },
    // async onDelete(id) {
    //   const result = await this.$axios.$delete(
    //     process.env.baseApiUrl + '/groups/' + id
    //   )
    //   if (result.success) {
    //     this.fetchData()
    //   }
    // },
  },
}
</script>
