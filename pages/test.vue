<template>
  <div class="main-wrapper">
    <Flickity ref="flickity" class="testaaaa" :options="flickityOptions">
      <div class="test-item">1</div>
      <div class="test-item">2</div>
      <div class="test-item">3</div>
      <div class="test-item">4</div>
      <div class="test-item">5</div>
    </Flickity>
    <!-- <nuxt-link
      v-for="item in posts"
      :key="item._id"
      :to="`/posts/${item._id}`"
      class="posts__item"
    >
      <Flickity
        ref="flickity"
        class="posts__item-img"
        :options="flickityOptions"
      >
        <img
          v-for="(item, index) in item.image"
          :key="index"
          :src="item"
          alt=""
        />
      </Flickity>
      <div class="posts__item-img">
              <div
                v-if="
                  item.image == '' ||
                  item.image == null ||
                  item.image == undefined
                "
                class="description"
              >
                {{ item.content }}
              </div>
              <img v-else :src="item.image[0]" alt="" />
            </div>
    </nuxt-link> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: true,
        wrapAround: true,
      },
    }
  },
}
</script>
<style lang="less">
.carousel {
  background: #eee;
}

.test-item {
  width: 66%;
  height: 500px;
  margin-right: 10px;
  background: #8c8;
  border-radius: 5px;
  counter-increment: test-item;
}

/* cell number */
.test-item::before {
  display: block;
  text-align: center;
  content: counter(test-item);
  line-height: 200px;
  font-size: 80px;
  color: white;
}
</style>
