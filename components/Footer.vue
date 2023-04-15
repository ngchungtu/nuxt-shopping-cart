<template>
  <v-card title flat class="pa-md-10 pa-5 text-center" color="surface">
    <h2 class="text-md-h6 font-weight-bold">Ecommerce</h2>
    <div class="text-center">
      <v-btn
        v-for="(i, index) in sm"
        :key="`socialMedia-${index}`"
        color="surface"
        class="mr-2"
        fab
        depressed
      >
        <v-icon>{{ i.icon }}</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      sm: [
        {
          icon: "mdi-facebook",
          link: "#",
        },
        {
          icon: "mdi-github",
          link: "#",
        },
        {
          icon: "mdi-instagram",
          link: "#",
        },
        {
          icon: "mdi-youtube",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>