<template>
  <q-page class="bg-grey-2">
    <div class="q-pa-md">
      <div class="text-h4 text-weight-bold">Profile</div>
      <div class="text-caption text-grey-6">Multikart Admin Panel</div>
      <!-- ----------------------- -->
      <div class="row q-mt-md q-col-gutter-md">
        <div class="col-xs-12 col-sm-6 col-md-5">
          <div class="bg-white" style="border-radius: 20px">
            <div class="text-center q-pa-md">
              <q-avatar size="130px">
                <q-img src="~assets/designer.jpg" />
              </q-avatar>
              <div class="text-h6 q-mt-md text-weight-bold">Hassan Ali</div>
              <div class="text-subtitle1 q-mb-md text-weight-light">
                hassanali4u2003@gmail.com
              </div>
              <div class="q-gutter-md q-mb-md">
                <q-icon
                  class="q-pa-sm bg-blue-9 text-white"
                  size="20px"
                  name="fab fa-facebook"
                  style="border-radius: 30px"
                />
                <q-icon
                  class="q-pa-sm bg-red-5 text-white"
                  size="20px"
                  name="fab fa-youtube"
                  style="border-radius: 30px"
                />
                <q-icon
                  class="q-pa-sm bg-blue-5 text-white"
                  size="20px"
                  name="fab fa-twitter"
                  style="border-radius: 30px"
                />
              </div>
              <q-separator class="q-mx-lg" />
            </div>
            <div class="q-ml-lg">
              <div class="text-h6 text-weight-bold">Employee Status</div>
              <div class="q-pb-md q-pr-md">
                <q-list>
                  <q-item>
                    <q-item-section class="text-left"
                      >Performance</q-item-section
                    >
                    <q-item-section class="text-right">80%</q-item-section>
                  </q-item>
                </q-list>
                <q-linear-progress
                  class="q-mt-sm"
                  color="accent"
                  stripe
                  size="10px"
                  :value="progress1"
                />
                <q-list>
                  <q-item>
                    <q-item-section class="text-left">Overtime</q-item-section>
                    <q-item-section class="text-right">60%</q-item-section>
                  </q-item>
                </q-list>
                <q-linear-progress
                  class="q-mt-sm"
                  color="positive"
                  stripe
                  size="10px"
                  :value="progress2"
                />
                <q-list>
                  <q-item>
                    <q-item-section class="text-left"
                      >Leaves taken</q-item-section
                    >
                    <q-item-section class="text-right">70%</q-item-section>
                  </q-item>
                </q-list>
                <q-linear-progress
                  class="q-mt-sm"
                  color="primary"
                  stripe
                  size="10px"
                  :value="progress3"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-7">
          <q-card flat class="q-pa-md" style="border-radius: 20px">
            <q-tabs
              v-model="tab"
              dense
              active-color="primary"
              indicator-color="primary"
              align="left"
              narrow-indicator
            >
              <q-tab name="Profile" label="Profile" />
              <q-tab name="Contact" label="Contact" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="Profile">
                <div class="text-h6">Profile</div>
                <q-list v-for="item in lst" :key="item">
                  <q-item>
                    <q-item-section>{{ item.name }}</q-item-section>
                    <q-item-section>{{ item.title }}</q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>

              <q-tab-panel name="Contact">
                <div class="text-subtitle1 text-weight-bold q-mt-lg">
                  Notification
                </div>
                <q-checkbox
                  v-model="teal1"
                  label="Allow Desktop Notifications"
                /><br />
                <q-checkbox
                  v-model="teal2"
                  label="Enable Notifications"
                /><br />
                <q-checkbox
                  v-model="teal3"
                  label="Get notification for my own activity"
                /><br />
                <q-checkbox v-model="teal4" label="DND" />
                <div class="text-subtitle1 text-weight-bold q-mt-lg">
                  Deactivate Account
                </div>
                <q-checkbox
                  v-model="teal5"
                  label="I have a privacy concern"
                /><br />
                <q-checkbox v-model="teal6" label="This is temporary" /><br />
                <q-checkbox v-model="teal7" label="Other" /><br />
                <q-btn
                  class="q-px-lg text-white bg-primary"
                  label="Deactivate Account"
                />
                <div class="text-subtitle1 text-weight-bold q-mt-lg">
                  Delete Account
                </div>
                <q-checkbox v-model="teal8" label="No longer usable" /><br />
                <q-checkbox
                  v-model="teal9"
                  label="Want to switch on other account"
                /><br />
                <q-checkbox v-model="teal10" label="Other" /><br />
                <q-btn
                  class="q-px-lg text-white bg-primary"
                  label="Delete Account"
                />
              </q-tab-panel>
            </q-tab-panels>
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
      tab: ref("Profile"),
      teal1: ref(false),
      teal2: ref(false),
      teal3: ref(false),
      teal4: ref(true),
      teal5: ref(false),
      teal6: ref(false),
      teal7: ref(true),
      teal8: ref(false),
      teal9: ref(false),
      teal10: ref(true),
      progress1: 0.8,
      progress2: 0.6,
      progress3: 0.7,
      lst: [
        {
          name: "First Name:",
          title: "Johan",
        },
        {
          name: "Last Name:",
          title: "Deo",
        },
        {
          name: "Email:",
          title: "johndeo@gmail.com",
        },
        {
          name: "Gender:",
          title: "Male",
        },
        {
          name: "Mobile Number:",
          title: "2124821463",
        },
        {
          name: "DOB:",
          title: "Dec, 15 1993",
        },
        {
          name: "Location:",
          title: "USA",
        },
      ],
    };
  },
};
</script>
