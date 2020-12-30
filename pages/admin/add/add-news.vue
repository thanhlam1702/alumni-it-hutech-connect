<template>
  <div class="main-wrapper">
    <div class="add__main-wrapper">
      <div class="add__form-control">
        <h2>ADD NEW</h2>
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">Association news</a-menu-item>
            <a-menu-item key="2">Awards and Honors</a-menu-item>
            <a-menu-item key="3">Career & Professional</a-menu-item>
            <a-menu-item key="3">Learning</a-menu-item>
          </a-menu>
          <a-button style="padding-bottom: 10px">
            <h3>SELECT CATEGORIES</h3>
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
        <h3 for="">Title</h3>
        <div class="components-input-demo-size">
          <a-input placeholder="title of the news..." style="width: 100%" />
        </div>
        <h3>Description</h3>
        <a-textarea placeholder="more information..." :rows="10" />
        <a-button type="primary" style="width: 100%" @click="onSubmit">
          Create News
        </a-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'auth',
  data() {
    return { title: 'Add Group' }
  },
}
</script>
