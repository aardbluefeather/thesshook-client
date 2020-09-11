<template>
  <v-container class="fill-height" tag="section">
    <v-row justify="center">
      <v-slide-y-transition appear>
        <v-card light max-width="100%" width="250" class="semitransparentblur">
          <v-card-text class="text-center">
            Here be a Public Mudbin page!
          </v-card-text>
        </v-card>
      </v-slide-y-transition>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PublicMudbin'
};
</script>
