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
  name: 'PrivateAppBar',

  data: () => ({
    items: [
      {
        icon: 'mdi-home',
        text: 'Home',
        to: '/private'
      },
      {
        icon: 'mdi-account',
        text: 'Members',
        to: '/private/members'
      },
      {
        icon: 'mdi-map',
        text: 'Maps',
        to: '/private/maps'
      },
      {
        icon: 'mdi-wrench-outline',
        text: 'Gear',
        to: '/private/gear'
      },
      {
        icon: 'mdi-wrench-outline',
        text: 'Scripts',
        to: '/private/scripts'
      },
      {
        icon: 'mdi-wrench-outline',
        text: 'Guides',
        to: '/private/guides'
      },
      {
        icon: 'mdi-login',
        text: 'Logout',
        to: '/public'
      }
    ],
    titles: {
      '/private': 'Private Home Page',
      '/private/members': 'Private Members Page',
      '/private/maps': 'Private Maps Page',
      '/private/gear': 'Private Gear Page',
      '/private/scripts': 'Private Scripts Page',
      '/private/guides': 'Private Guides Page',
    }
  }),

  computed: {
    title() {
      return this.titles[this.$route.path];
    }
  }
};
</script>
