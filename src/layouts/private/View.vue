<template>
  <v-main
    id="private"
    :class="$vuetify.theme.dark ? undefined : 'grey lighten-3'"
  >
    <v-fade-transition mode="out-in">
      <v-img
        :class="{
          'v-image--sm': this.$vuetify.breakpoint.smAndDown,
          'v-image--md': this.$vuetify.breakpoint.mdAndDown
        }"
        :src="require(`@/assets/${src || 'lock.jpg'}`)"
        gradient="to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)"
        min-height="100%"
      >
        <v-responsive
          :style="styles"
          min-height="100vh"
          class="d-flex align-center"
        >
          <router-view />
        </v-responsive>
        <private-footer />
      </v-img>
    </v-fade-transition>
  </v-main>
</template>

<script>
export default {
  name: 'PrivateView',

  components: {
    PrivateFooter: () => import('@/layouts/private/Footer')
  },

  data: () => ({
    srcs: {
      '/private/lock': 'lock.jpg',
      '/private/login': 'login.jpg',
      '/private/pricing': 'pricing.jpg',
      '/private/register': 'register.jpg'
    }
  }),

  computed: {
    src() {
      return this.srcs[this.$route.path];
    },
    styles() {
      const paddingTop = this.$vuetify.breakpoint.mdAndUp ? 175 : 100;
      const paddingBottom = this.$vuetify.breakpoint.mdAndUp ? 175 : 150;
      return {
        padding: `${paddingTop}px 0 ${paddingBottom}px 0`
      };
    }
  }
};
</script>
