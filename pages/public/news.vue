<template>
  <div class="container news">
    <div class="news__categories">
      <div class="news__categories-section">
        <div class="newscategories">Categories</div>
        <div class="newscategories__sidebar">
          <a v-for="(item, index) in listNewsCategoriesItems" :key="index">
            <nuxt-link :to="item.link" class="newstag">{{
              item.Text
            }}</nuxt-link>
          </a>
        </div>
        <div class="newsresult__box">Result:</div>
      </div>
    </div>
    <!-- // main container about clubs -->
    <!-- img1 -->
    <div class="news__grid">
      <div class="news__grid-items">
        <a
          class="items"
          href="#
"
          target="_blank"
        >
          <div class="newsitems__top"></div>
          <div class="background__item img1">
            <div class="background__shadow"></div>
            <div class="flexbox">
              <div class="flexbox__item">
                <p class="name">Sinh viên Hutech trở lại trường sau dịch</p>
              </div>
            </div>
          </div></a
        >
      </div>

      <div class="news__grid-items">
        <a class="items" href="#" target="_blank">
          <div class="newsitems__top"></div>
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
      <div class="news__grid-items">
        <a class="items" href="#" target="_blank"></a>
        <div class="newsitems__top"></div>
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
      <div class="news__grid-items">
        <a class="items" href="#" target="_blank"></a>
        <div class="newsitems__top"></div>
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
      listNewsCategoriesItems: [
        {
          link: '',
          Text: 'All',
        },
        {
          link: '',
          Text: 'Association News',
        },
        {
          link: '',
          Text: 'Awards and Honors',
        },
        {
          link: '',
          Text: 'Career & Professional',
        },
        {
          link: '',
          Text: 'Learning',
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
