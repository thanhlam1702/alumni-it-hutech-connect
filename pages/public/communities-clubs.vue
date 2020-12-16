<template>
  <div class="communities">
    <div class="communites__categories">
      <div class="communities__categories-section">
        <div class="categories">Categories</div>
        <div class="categories__sidebar">
          <a v-for="(item, index) in listCategoriesItems" :key="index">
            <nuxt-link :to="item.link" class="tag">{{ item.Text }}</nuxt-link>
          </a>
        </div>
        <div class="result__box">Result:</div>
      </div>
    </div>
    <!-- // main container about clubs -->
    <!-- img1 -->
    <div class="communities__grid">
      <div class="communities__grid-items">
        <a
          class="items"
          href="https://facebook.com/groups/clbhutechyouthdev/
"
          target="_blank"
        >
          <div class="items__top"></div>
          <div class="background__item img1">
            <div class="background__shadow"></div>
            <div class="flexbox">
              <div class="flexbox__item">
                <p class="name">Hutech youth dev Club</p>
              </div>
            </div>
          </div></a
        >
      </div>

      <div class="communities__grid-items">
        <a
          class="items"
          href="https://facebook.com/groups/CLBHocThuatITHUTECH/"
          target="_blank"
        >
          <div class="items__top"></div>
          <div class="background__item img2">
            <div class="background__shadow"></div>
            <div class="flexbox">
              <div class="flexbox__item">
                <p class="name">Hutech IT Club</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <!-- img3 -->
      <div class="communities__grid-items">
        <a class="items" href="#" target="_blank"></a>
        <div class="items__top"></div>
        <div class="background__item img3">
          <div class="background__shadow"></div>
          <div class="flexbox">
            <div class="flexbox__item">
              <p class="name">Class K17</p>
            </div>
          </div>
        </div>
      </div>
      <!-- img4 -->
      <div class="communities__grid-items">
        <a class="items" href="#" target="_blank"></a>
        <div class="items__top"></div>
        <div class="background__item img4">
          <div class="background__shadow"></div>
          <div class="flexbox">
            <div class="flexbox__item">
              <p class="name">Alumni k16</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <ul class="communities__grid-items">
      <li v-for="(item, index) in listItems" :key="index" class="list__items">
        <nuxt-link :to="'/' + item.link">{{ item.text }}</nuxt-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import BannerHome from '@/components/layout/BannerHome'
export default {
  components: {
    // BannerHome,
  },
  data() {
    return {
      listCategoriesItems: [
        {
          link: '',
          Text: 'All',
        },
        {
          link: '',
          Text: 'Graduted Classes',
        },
        {
          link: '',
          Text: 'Undergraduate Classes',
        },
        {
          link: '',
          Text: 'Hutech IT clubs',
        },
        {
          link: '',
          Text: 'Affinity Groups',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Hutech It Alumni Association',
    }
  },
  layout: 'public',
}
</script>
