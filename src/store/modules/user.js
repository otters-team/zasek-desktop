import Api from '@/api'

const accessTokenName = 'zasek-auth-token'

export default {
  state: {
    accessToken: window.localStorage.getItem(accessTokenName) || '',
  },
  getters: {
    user: (state) => state,
    token: (state) => state.accessToken,
  },
  actions: {
    register: (username, password, email) => {
      
    },
    login: (username, password, email) => {
      
    },
    logout: () => {

    },
  },
  mutations: {
    LOGIN: (state, accessToken) => {
      state.accessToken = accessToken
    },
  },
}