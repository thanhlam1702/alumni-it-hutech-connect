import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {},
      search: [],
    },
    mutations: {
      setUser(state, user) {
        state.user = user
      },
      editUser(state, editUser) {
        state.user = editUser
      },
      setSearch(state, result) {
        state.search = result
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get(process.env.baseApiUrl + '/api/auth/user')
          .then((data) => {
            vuexContext.commit('setUser', data.user)
          })
          .catch((e) => {
            context.error(e)
          })
      },
      getUser(vuexContext) {
        return this.$axios
          .$get(process.env.baseApiUrl + '/api/auth/user')
          .then((data) => {
            vuexContext.commit('setUser', data.user)
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e)
          })
      },
      setUser(vuexContext, user) {
        vuexContext.commit('setUser', user)
      },
      editUser(vuexContext, userData) {
        return this.$axios
          .$put(process.env.baseApiUrl + `/api/auth/user`, userData)
          .then(() => {
            vuexContext.commit('editUser', userData)
          })
          .catch(() => {})
      },
      setSearch(vuexContext, result) {
        vuexContext.commit('setSearch', result)
      },
    },
    getters: {
      user(state) {
        return state.user
      },
      search(state) {
        return state.search
      },
    },
  })
}

export default createStore
