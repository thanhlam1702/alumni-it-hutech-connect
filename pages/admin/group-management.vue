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
            <a-table :columns="columns" :scroll="{ x: 500, y: 500 }">
              <a slot="name" slot-scope="text">{{ text }}</a>
              <a slot="action" slot-scope="" href="javascript:;">Delete</a>
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
    dataIndex: 'groupId',
    key: 'grouId',
    scopedSlots: { customRender: 'groupId' },
  },
  {
    title: 'Group name',
    dataIndex: 'groupName',
    key: 'groupName',
    ellipsis: true,
  },
  {
    title: 'Admin',
    dataIndex: 'UserID',
    key: '',
    width: 80,
  },
  {
    title: 'Decription',
    dataIndex: 'Topic',
    key: 'decription',
    ellipsis: true,
  },
  {
    title: 'Member',
    dataIndex: '',
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
  layout: 'auth',
  data() {
    return {
      columns,
    }
  },
}
</script>
