import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#00C853',
          secondary: '#01579B',
          accent: '#212121',
          error: '#D50000',
          info: '#2196f3',
          success: '#4caf50',
          danger: '#FF1744',
        }
      },
    }
  },
});