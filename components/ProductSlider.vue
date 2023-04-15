<template>
  <v-slide-group>
    <v-slide-item v-for="(i, index) in products" :key="`hotProduct-${index}`">
      <v-card
        nuxt
        :to="`/products/${i.id}`"
        color="surface"
        width="300"
        class="al ma-2 mb-5 mr-5"
      >
        <v-img height="300" :src="i.image">
          <template #placeholder>
            <v-row class="fill-height" justify="center" align="center">
              <v-progress-circular
                width="2"
                size="100"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-card-title class="text-md-body-1 font-weight-bold">
          {{ i.name }}
        </v-card-title>
        <v-card-subtitle class="primary--text pb-3">
          {{ $formatMoney(i.price) }}
        </v-card-subtitle>
        <v-card-text>
          <v-chip
            x-small
            label
            outlined
            class="mr-1"
            v-for="(t, index) in i.tags"
            :key="`prod${t.id}-${index}`"
          >
            {{ t }}
          </v-chip>
        </v-card-text>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  props: {
    products: Array,
  },
};
</script>

<style lang="css" scoped>
</style>