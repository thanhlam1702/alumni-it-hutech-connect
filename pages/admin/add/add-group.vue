<template>
  <div class="main-wrapper">
    <div class="add__main-wrapper">
      <div class="add__form-control">
        <h2>ADD GROUP</h2>
        <h3 for="">Group name</h3>
        <div class="components-input-demo-size">
          <a-input placeholder="your group name..." style="width: 100%" />
        </div>
        <h3>Description</h3>
        <a-textarea
          placeholder="more information about your group..."
          :rows="4"
        />
        <a-button type="primary" style="width: 100%" @click="onSubmit">
          Create Group
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
