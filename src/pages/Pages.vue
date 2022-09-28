<template>
  <q-page class="bg-grey-2">
    <div class="q-pa-md">
      <div class="text-h4 text-weight-bold">CREATE PAGE</div>
      <div class="text-caption text-grey-6">Multikart Admin Panel</div>
      <!-- ----------------------- -->
      <q-card>
        <div class="text-h6 q-pa-md q-mt-md">Add Page</div>
        <q-tabs v-model="tab" class="q-mt-md" active-color="primary" indicator-color="primary" align="left"
          narrow-indicator>
          <q-tab name="General" label="General" />
          <q-tab name="SEO" label="SEO" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="General">
            <div class="text-h6 q-mt-sm">General</div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">* Name</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text1" type="text" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">* Description</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text2" type="textarea" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">
                  Status
                </div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-checkbox v-model="teal" label="Enable the page" />
              </div>
            </div>
            <div class="text-right">
              <q-btn unelevated class="text-subtitle2 q-px-xl" color="primary" text-color="white" label="Save" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="SEO">
            <div class="text-h6 q-mt-sm">SEO</div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">Meta Title</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text3" type="text" />
              </div>
            </div>
            <div class="row q-mt-lg">
              <div class="col-md-2 col-sm-4 col-xs-12">
                <div class="text-subtitle1 text-weight-light">Meta Description</div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <q-input dense outlined v-model="text4" type="textarea" />
              </div>
            </div>
            <div class="text-right">
              <q-btn unelevated class="text-subtitle2 q-px-xl q-mt-md" color="primary" text-color="white" label="Save" />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      <!-- ----------------------- -->
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      tab: ref("General"),
      text1: ref(""),
      text2: ref(""),
      text3: ref(""),
      text4: ref(""),
      teal: ref(false),
    }
  }
}
</script>
