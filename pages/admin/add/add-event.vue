<template>
  <div class="main-wrapper">
    <div class="add__main-wrapper">
      <div class="add__form-control">
        <h2>ADD EVENTS</h2>

        <h3 for="">Event</h3>
        <div class="components-input-demo-size">
          <a-input
            v-model="title"
            placeholder="event name..."
            style="width: 100%"
          />
        </div>
        <h3>Description</h3>
        <a-textarea
          v-model="description"
          placeholder="more information..."
          :rows="5"
        />
        <h3>Select date of the events</h3>
        <a-range-picker>
          <template slot="dateRender" slot-scope="current">
            <div class="ant-calendar-date" :style="getCurrentStyle(current)">
              {{ current.date() }}
            </div>
          </template>
        </a-range-picker>
        <a-button type="primary" style="width: 100%" @click="onSubmit">
          Create News
        </a-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      title: '',
      description: '',
      start: '',
      end: '',
    }
  },
  methods: {
    getCurrentStyle(current, today) {
      const style = {}
      if (current.date() === 1) {
        style.border = '1px solid #1890ff'
        style.borderRadius = '50%'
      }
      return style
    },
    async onSubmit() {
      const data = new FormData()
      data.append('title', this.title)
      data.append('description', this.description)

      const result = await this.$axios.$post(
        'http://localhost:3000/admin/event',
        data
      )
      console.log(result)
      this.$router.push('/admin/news')
    },
  },
}
</script>
