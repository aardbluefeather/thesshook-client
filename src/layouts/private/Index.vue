<template>
  <v-app>
    <private-app-bar />

    <private-view />

    <private-footer />
  </v-app>
</template>

<script>
export default {
  name: 'PrivateLayout',

  components: {
    PrivateAppBar: () => import('@/layouts/private/AppBar'),
    PrivateFooter: () => import('@/layouts/private/Footer'),
    PrivateView: () => import('@/layouts/private/View')
  }
};
</script>
