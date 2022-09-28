<template>
  <q-page class="bg-grey-2">
    <div class="q-pa-md">
      <div class="text-h4 text-weight-bold">CREATE COUPON</div>
      <div class="text-caption text-grey-6">Multikart Admin Panel</div>
      <!-- ----------------------- -->
      <q-card>
        <div class="text-h6 q-pa-lg q-mt-md">Discount Coupon Details</div>
        <q-tabs v-model="tab" class="q-mt-md" active-color="primary" indicator-color="primary" align="left"
          narrow-indicator>
          <q-tab name="General" label="General" />
          <q-tab name="Restriction" label="Restriction" />
          <q-tab name="Usage" label="Usage" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="General">
            <div class="text-h6 q-mt-lg">General</div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">Coupan Title</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text1" type="text" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">Coupan Code</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text2" type="text" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">Start Date</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text3" type="date" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">End Date</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text4" type="date" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">
                  Free Shipping
                </div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-checkbox v-model="teal" label="Allow Free Shipping" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">Quantity</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text5" type="number" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">
                  Discount Type
                </div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text6" type="text" label="--Select--" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">Status</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-checkbox v-model="teal1" label="Enable the Coupon" />
              </div>
            </div>
            <div class="text-right">
              <q-btn unelevated class="text-subtitle2 q-px-xl" color="primary" text-color="white" label="Save" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="Restriction">
            <div class="text-h6 q-mt-lg">Restriction</div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">Products</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text7" type="text" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">Category</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text8" type="text" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">
                  Minimum Spend
                </div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text9" type="number" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">
                  Maximum Spend
                </div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text10" type="number" />
              </div>
            </div>
            <div class="text-right">
              <q-btn class="text-subtitle2 q-px-xl q-mt-md" color="primary" text-color="white" label="Save" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="Usage">
            <div class="text-h6 q-mt-lg">Usage</div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">Per Limit</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text11" type="number" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">Per Customer</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text12" type="number" />
              </div>
            </div>
            <div class="text-right">
              <q-btn class="text-subtitle2 q-px-xl q-mt-md" color="primary" text-color="white" label="Save" />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      <!-- ----------------------- -->
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("General"),
      text1: ref(""),
      text2: ref(""),
      text3: ref(""),
      text4: ref(""),
      text5: ref(""),
      text6: ref(""),
      text7: ref(""),
      text8: ref(""),
      text9: ref(""),
      text10: ref(""),
      text11: ref(""),
      text12: ref(""),
      teal: ref(false),
      teal1: ref(false),
    };
  },
};
</script>
