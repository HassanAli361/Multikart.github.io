<template>
  <q-page class="bg-grey-2">
    <div class="q-pa-md">
      <div class="text-h4 text-weight-bold">PRODUCT LIST</div>
      <div class="text-caption text-grey-6">Multikart Admin Panel</div>
      <!-- ----------------------- -->
      <div class="row q-mt-md q-col-gutter-md">
        <div class="col-md-3 col-sm-6 col-xs-12" v-for="item in product" :key="item">
          <q-card class="my-card q-pa-lg">
            <img :src="item.src" />
            <q-rating
              class="q-mt-sm q-ml-md"
              v-model="model"
              max="5"
              size="1.5em"
              color="negative"
              icon="star_border"
              icon-selected="star"
              icon-half="star_half"
              no-dimming
            />
            <q-card-section>
              <div class="text-subtitle1 text-grey-8">
                Slim Fit Cotton Shirt
              </div>
              <div class="text-subtitle1 text-weight-bold">
                $500.00
                <span
                  class="text-grey-7 text-weight-light"
                  style="text-decoration: line-through"
                  >$600.00</span
                >
              </div>
            </q-card-section>
            <div class="q-gutter-sm q-ml-sm">
            <q-icon size="20px" class="text-blue-2" name="fas fa-circle" />
            <q-icon size="20px" style="color: #FFE2A7;" name="fas fa-circle" />
            <q-icon size="20px" class="text-grey-5" name="fas fa-circle" />
            </div>
          </q-card>
        </div>
      </div>
      <!-- ----------------------- -->
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      model: ref(4),
      product: [
        {
          src: require("assets/remote.jpg"),
        },
        {
          src: require("assets/tab.jpg"),
        },
        {
          src: require("assets/remote.jpg"),
        },
        {
          src: require("assets/tab.jpg"),
        },
        {
          src: require("assets/remote.jpg"),
        },
        {
          src: require("assets/tab.jpg"),
        },
        {
          src: require("assets/remote.jpg"),
        },
        {
          src: require("assets/tab.jpg"),
        },
      ],
    };
  },
};
</script>
