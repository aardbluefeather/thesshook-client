<template>
  <v-app-bar class="semitransparentblur" absolute flat height="85">
    <v-container class="px-0 text-right d-flex align-center">
      <v-toolbar-title
        class="font-weight-light hidden-xs-only"
        dark
        v-text="title"
      />

      <v-spacer />

      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        min-height="48"
        min-width="40"
        text
        exact
      >
        <v-icon
          :left="$vuetify.breakpoint.mdAndUp"
          size="20"
          v-text="item.icon"
        />

        <span class="hidden-sm-and-down" v-text="item.text" />
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'PublicAppBar',

  data: () => ({
    items: [
      {
        icon: 'mdi-home',
        text: 'Home',
        to: '/public'
      },
      {
        icon: 'mdi-map',
        text: 'Maps',
        to: '/public/maps'
      },
      {
        icon: 'mdi-trash-can-outline',
        text: 'Mudbin',
        to: '/public/mudbin'
      },
      {
        icon: 'mdi-wrench-outline',
        text: 'Tools',
        to: '/public/tools'
      },
      {
        icon: 'mdi-login',
        text: 'Login',
        to: '/private'
      }
    ],
    titles: {
      '/public': 'Public Home Page',
      '/public/maps': 'Public Maps Page',
      '/public/mudbin': 'Public Mudbin Page',
      '/public/tools': 'Public Tools Page'
    }
  }),

  computed: {
    title() {
      return this.titles[this.$route.path];
    }
  }
};
</script>
