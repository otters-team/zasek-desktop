import Vue from 'vue'
import Vuetify, {
  VApp,
  VNavigationDrawer,
  VToolbar,
} from 'vuetify/lib'
import {
  Ripple
} from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  components: {
    VApp,
    VNavigationDrawer,
    VToolbar,
  },
  directives: {
    Ripple
  },
  theme: {
    primary: '#3AAFA9',
    secondary: '#DEF2F1',
    accent: '#2B7A78',
    error: '#b71c1c',
    black: '#17252A',
    white: '#FEFFFF',
    test: '#FF0000'
  },
  options: {
    customProperties: true,
    minifyTheme: function (css) {
      return process.env.NODE_ENV === 'production'
        ? css.replace(/[\s|\r\n|\r|\n]/g, '')
        : css
    }
  },
})
