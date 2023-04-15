<template>
  <div>
    <Nav />
    <v-container>
      <v-row dense>
        <v-col md="3">
          <div>
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              outlined
              clearable
              placeholder="Search"
            />
            <v-list
              subheader
              color="transparent"
              v-if="$vuetify.breakpoint.mdAndUp"
            >
              <v-subheader>Categories</v-subheader>
              <v-list-item
                v-for="i in categories"
                :key="`categories${i.id}`"
                link
              >
                <v-list-item-avatar>
                  <v-img :src="i.image"></v-img>
                </v-list-item-avatar>
                <v-list-item-content
                  @click="$store.commit('cart/FilterCate', i)"
                >
                  <v-list-item-title>
                    {{ i.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-col>

        <v-col md="9">
          <v-row>
            <template v-for="(i, index) in filteredProducts">
              <v-col cols="12" md="6" :key="`products${i.id}-${index}`">
                <v-card
                  nuxt
                  :to="`/products/${i.id}`"
                  color="surface"
                  class="el ma-2 mb-5 mr-5"
                >
                  <v-img :src="i.image" height="300">
                    <template #placeholder>
                      <v-row
                        class="fill-height"
                        justify="center"
                        align="center"
                      >
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
              </v-col>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
// import {mapActions, mapGetters} from 'vuex'
// import * as lc_types from '../../store/module-types/localtion'
export default {
  async created() {
    this.categories = await this.$content("category").fetch();
    this.products = await this.$content("products").fetch();

    console.log(this.categories);
    // console.log(this.FETCH_DATA_PROVINCES());
  },
  data() {
    return {
      products: null,
      categories: null,
      search: null,
    };
  },
  // methods:{
  //   ...mapActions(lc_types.LOCATION_MODULE,[lc_types.FETCH_DATA_PROVINCES])
  // },
  computed: {
    // ...mapGetters(lc_types.LOCATION_MODULE,[lc_types.PROVINCES]),
    filteredProducts() {
      if (!this.search || !this.products) return this.products || [];
      return this.products.filter((p) => {
        const s = this.search.toLowerCase();
        const n = p.name.toLowerCase();
        const price = p.price.toString();
        const sprice = p.salePrice?.toString() || "";
        const r = p.ratings.toString();

        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s)
        );
      });
    },
  },
};
</script>

<style lang="css" scoped>
</style>