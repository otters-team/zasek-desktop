import Vue from 'vue'
import Vuetify, {
  VApp,
  VNavigationDrawer,
  VToolbar,
  VCard,
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
    VCard,
  },
  directives: {
    Ripple
  },
  theme: {
    primary: '#FA709A',
    secondary: '#FEE140',
    accent: '#52ACFF',
    error: '#b71c1c',
    black: '#17252A',
    white: '#FEFFFF',
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
