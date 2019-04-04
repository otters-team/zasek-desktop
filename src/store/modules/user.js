// import Api from '@/api'

const defaultState = () => ({
  login: '',
  email: '',
  accessToken: '',
})

export default {
  state: defaultState(),
  getters: {
    user: (state) => state,
    isAuthenticated: (state) => Boolean(state.accessToken),
    accessToken: (state) => state.accessToken,
  },
  actions: {
    login: async (state, loginFormData) => {
      const { commit } = state
      const { login, password } = loginFormData

      const userData = {
        login,
        password,
        accessToken: '123cjhksduichsducgsdicuhsduicduich'
      }

      // const response = await Api.Login(name, email)
      commit('LOGIN', userData)
    },
    logout: async (state) => {
      const { commit } = state

      // const response = await Api.Login(name, email)
      commit('LOGOUT')
    },
  },
  mutations: {
    LOGIN: (state, userData) => {
      const newState = {
        ...userData
      }

      Object.assign(state, newState)
    },
    LOGOUT: (state) => {
      Object.assign(state, defaultState())
    },
  },
}