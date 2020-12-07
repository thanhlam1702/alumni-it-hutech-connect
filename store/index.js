import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {},
    },
    mutations: {
      setUser(state, user) {
        state.user = user
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
      setUser(vuexContext, user) {
        vuexContext.commit('setUser', user)
      },
    },
    getters: {
      user(state) {
        return state.user
      },
    },
  })
}

export default createStore
