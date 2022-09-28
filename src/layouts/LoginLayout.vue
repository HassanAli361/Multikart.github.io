<template>
  <q-layout view="hHh Lpr lff">
    <div class="row absolute-center gt-xs">
      <div class="col-md-6 col-sm-6 col-xs-12 bg-primary shadow-3" style="width: 400px; height: 500px">
        <q-img src="~assets/login-bg.png">
          <div class="text-h5 text-weight-bolder bg-transparent" style="margin-left: 70px; margin-top: 120px">Wellcome
            to Multikart</div>
          <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
            control-color="white" navigation padding autoplay infinite style="z-index: 1" height="300px"
            class="bg-transparent q-pa-xl text-white absolute-bottom">
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
          </q-carousel>
        </q-img>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12" style="width: 500px; height: 500px">
        <q-card class="q-pa-md">
          <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="left"
            narrow-indicator>
            <q-tab name="Login" label="Login" />
            <q-tab name="Register" label="Register" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="Login">
              <q-input class="q-my-md" rounded outlined v-model="names" type="text" label="Username" />
              <q-input class="q-my-md" rounded outlined v-model="password" type="password" label="Password" />
              <q-list>
                <q-item>
                  <q-item-section>
                    <q-checkbox v-model="teal" label="Remember me" />
                  </q-item-section>
                  <q-item-section avatar>
                    <q-btn flat color="primary" label="lost your password" />
                  </q-item-section>
                </q-item>
              </q-list>
              <q-btn class="q-px-xl q-my-md q-py-sm" rounded color="primary" label="Login" />
              <div class="text-body1 q-mt-md text-grey-6">
                Or Login up with social platforms
              </div>
              <div class="q-gutter-md q-mt-md">
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-facebook" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-instagram" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-twitter" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-youtube" />
              </div>
            </q-tab-panel>

            <q-tab-panel name="Register">
              <q-input class="q-my-md" rounded outlined v-model="names" type="text" label="Username" />
              <q-input class="q-my-md" rounded outlined v-model="password" type="password" label="Password" />
              <q-checkbox v-model="teal" label="I agree all statement in "><span class="text-primary">Terms &
                  Conditions</span></q-checkbox>
              <q-btn class="q-px-xl q-my-md q-py-sm" rounded color="primary" label="Register" />
              <div class="text-body1 q-mt-md text-grey-6">
                Or Sign up with social platforms
              </div>
              <div class="q-gutter-md q-mt-md">
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-facebook" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-instagram" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-twitter" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-youtube" />
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
      <q-btn rounded class="q-px-xl text-right q-my-md q-py-sm" color="primary" icon="fas fa-arrow-left" to="/"
        label="Back" />
    </div>
    <div class="row lt-sm">
      <div class="col-md-6 col-sm-6 col-xs-12 bg-primary shadow-3" style="width: 400px; height: 500px">
        <q-img src="~assets/login-bg.png">
          <div class="text-h5 text-weight-bolder bg-transparent" style="margin-left: 70px; margin-top: 120px;">
            to Multikart</div>
          <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated
            control-color="white" navigation padding autoplay infinite style="z-index: 1" height="300px"
            class="bg-transparent q-pa-xl text-white absolute-bottom">
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
          </q-carousel>
        </q-img>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12" style="width: 500px; height: 500px;">
        <q-card flat class="q-pa-md" style="border-radius: 30px 30px 0px 0px; margin-top: -40px;">
          <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="left"
            narrow-indicator>
            <q-tab name="Login" label="Login" />
            <q-tab name="Register" label="Register" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="Login">
              <q-input class="q-my-md" rounded outlined v-model="names" type="text" label="Username" />
              <q-input class="q-my-md" rounded outlined v-model="password" type="password" label="Password" />
              <q-list class="gt-xs">
                <q-item>
                  <q-item-section avatar>
                    <q-checkbox v-model="teal" label="Remember me" />
                  </q-item-section>
                  <q-item-section>
                    <q-btn class="text-caption" flat color="primary" label="lost your password" />
                  </q-item-section>
                </q-item>
              </q-list>
              <div class="row lt-sm">
                <div class="col-5">
                  <q-checkbox size="xs" class="text-caption" v-model="teal" label="Remember me" />
                </div>
                <div class="col-7">
                  <q-btn class="text-caption" flat color="primary" label="lost your password" />
                </div>
              </div>
              <q-btn class="q-px-xl q-my-md q-py-sm" rounded color="primary" label="Login" />
              <div class="text-body1 q-mt-md text-grey-6">
                Or Login up with social platforms
              </div>
              <div class="q-gutter-md q-mt-md">
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-facebook" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-instagram" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-twitter" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-youtube" />
              </div>
            </q-tab-panel>

            <q-tab-panel name="Register">
              <q-input class="q-my-md" rounded outlined v-model="names" type="text" label="Username" />
              <q-input class="q-my-md" rounded outlined v-model="password" type="password" label="Password" />
              <q-checkbox v-model="teal" label="I agree all statement in "><span class="text-primary">Terms &
                  Conditions</span></q-checkbox>
              <q-btn class="q-px-xl q-my-md q-py-sm" rounded color="primary" label="Register" />
              <div class="text-body1 q-mt-md text-grey-6">
                Or Sign up with social platforms
              </div>
              <div class="q-gutter-md q-mt-md">
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-facebook" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-instagram" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-twitter" />
                <q-icon size="26px" style="border-radius: 10px" class="q-pa-sm bg-primary text-white"
                  name="fab fa-youtube" />
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
      <q-btn rounded unelevated class="q-px-lg text-right q-my-md" color="primary" icon="fas fa-arrow-left" to="/"
        label="Back" />
    </div>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("Login"),
      teal: ref(false),
      names: ref(""),
      password: ref(""),
      slide: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>
