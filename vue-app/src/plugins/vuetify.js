// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { VDataTableServer } from 'vuetify/labs/VDataTable'

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  components:{
    VDataTableServer,
  },
  theme: {
    themes: {
      dark: {
        backgroung: '#202124'
        // backgroung: '#F4F5F9'
      }
    }
  }
})
