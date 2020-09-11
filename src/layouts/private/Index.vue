<template>
  <v-app>
    <private-app-bar v-model="expandOnHover" />

    <private-drawer :expand-on-hover.sync="expandOnHover" />

    <private-view />
  </v-app>
</template>

<script>
export default {
  name: 'PrivateLayout',

  components: {
    PrivateAppBar: () => import('@/layouts/private/AppBar'),
    PrivateDrawer: () => import('@/layouts/private/Drawer'),
    PrivateView: () => import('@/layouts/private/View')
  },

  data: () => ({
    expandOnHover: false
  })
};
</script>
