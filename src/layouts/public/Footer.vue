<template>
  <v-footer id="public-footer" absolute color="transparent" dark>
    <v-container>
      <v-row align="center" no-gutters>
        <v-col
          v-for="(link, i) in links"
          :key="i"
          class="text-center"
          cols="6"
          md="auto"
        >
          <a
            :href="link.href"
            class="mr-0"
            rel="noopener"
            target="_blank"
            v-text="link.text"
          />
        </v-col>

        <v-spacer class="hidden-sm-and-down" />

        <v-col cols="12" md="auto">
          <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
            Made in 2020 by o-}HooK{-o
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'PublicFooter',

  data: () => ({
    links: [
      {
        href: '#',
        text: 'Aardwolf'
      },
      {
        href: '#',
        text: 'Treasure'
      },
      {
        href: '#',
        text: 'Pirates'
      },
      {
        href: '#',
        text: 'Landlubbers'
      }
    ]
  }),
};
</script>

<style lang="sass">
#public-footer
  a
    color: #fff
    font-size: .825rem
    font-weight: 500
    text-decoration: none
    text-transform: uppercase
</style>