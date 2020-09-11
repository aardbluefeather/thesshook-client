<template>
  <v-app>
    <public-app-bar />

    <public-view />

    <public-footer />
  </v-app>
</template>

<script>
export default {
  name: 'PublicLayout',

  components: {
    PublicAppBar: () => import('@/layouts/public/AppBar'),
    PublicFooter: () => import('@/layouts/public/Footer'),
    PublicView: () => import('@/layouts/public/View')
  }
};
</script>
