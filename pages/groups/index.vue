<template>
  <div class="main-wrapper group group-detail">
    <section class="content">
      <div class="container">
        <div class="group-contain">
          <div class="group__left">
            <div class="group__left-title">Nhóm của bạn</div>
            <ul v-if="userGroup.length !== 0" class="groups">
              <li v-for="(item, index) in userGroup" :key="index">
                <nuxt-link :to="'/groups/' + item._id" class="groups__item">
                  <div class="groups__item-img">
                    <img v-if="item.image" :src="item.image" alt="" />
                    <img
                      v-else
                      src="~/assets/images/default_group.png"
                      alt=""
                    />
                  </div>
                  <div class="groups__item-info">
                    <div class="name">{{ item.name }}</div>
                    <div class="member">{{ item.users.length }} thành viên</div>
                    <div class="post">{{ item.decks.length }} bài viết</div>
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="group__right show">
            <div class="listgroup">
              <div
                v-for="(item, index) in groups"
                :key="index"
                class="listgroup__item"
              >
                <div class="listgroup__item-img">
                  <img v-if="item.image" :src="item.image" alt="" />
                  <img v-else src="~/assets/images/default_group.png" alt="" />
                </div>
                <div class="listgroup__item-info">
                  <div class="name">{{ item.name }}</div>
                  <div class="amount-user">
                    {{ item.users.length }} thành viên
                  </div>
                  <div class="amount-post">
                    {{ item.decks.length }} bài viết
                  </div>
                  <a class="btn-main btn-join" @click="onJoin(item._id)"
                    >Tham gia nhóm</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  asyncData({ $axios }) {
    return $axios
      .$get(process.env.baseApiUrl + '/groups')
      .then((data) => {
        return { groups: data.groups }
      })
      .catch((e) => {})
  },
  data() {
    return {
      groups: null,
      userGroup: this.$store.state.user.groups,
    }
  },
  mounted() {
    console.log(this.groups)
  },

  methods: {
    async onJoin(id) {
      try {
        const result = await this.$axios.$post(
          process.env.baseApiUrl + '/groups/' + id
        )
        console.log(result)
      } catch (error) {}
    },
  },
}
</script>
