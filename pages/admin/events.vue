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
      <div class="admin__content">
        <div class="search__bar">
          <a-input-search placeholder="Search Events.." style="width: 50%" />
          <a-button type="primary" icon="plus">
            <nuxt-link to="/admin/add/add-event">Add Event</nuxt-link>
          </a-button>
        </div>

        <div class="events__management-infor">
          <template>
            <a-table :columns="columns">
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
    title: 'EventID',
    dataIndex: 'eventId',
    key: 'eventId',
    scopedSlots: { customRender: 'eventId' },
  },
  {
    title: 'Event name',
    dataIndex: 'eventName',
    key: 'eventName',
    ellipsis: true,
  },
  {
    title: 'Date',
    dataIndex: 'date',
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
    }
  },
}
</script>
