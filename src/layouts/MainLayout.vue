<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="bg-white">
      <q-toolbar class="gt-xs">
        <q-toolbar-title>
          <q-img width="200px" src="~assets/multikart-logo.png" />
        </q-toolbar-title>
        <div class="q-gutter-md">
          <q-btn flat @click="drawer = !drawer" color="primary" round dense icon="menu" />
          <q-btn flat dense class="text-primary bg-transparent" @click="$q.fullscreen.toggle()"
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
            :label="$q.fullscreen.isActive ? '' : ''" />
          <q-btn flat dense color="primary" label="EN" />
          <q-btn flat dense color="primary" icon="message" />
          <q-btn dense round flat color="primary" icon="fas fa-bell">
            <q-badge color="primary" floating transparent> 4 </q-badge>
          </q-btn>
          <q-avatar size="46px" class="shadow-2 q-mb-sm q-ml-lg q-mt-lg">
            <img src="~assets/man.png" />
          </q-avatar>
        </div>
      </q-toolbar>
      <q-toolbar class="lt-sm">
        <q-toolbar-title>
          <q-img width="120px" src="~assets/multikart-logo.png" />
        </q-toolbar-title>
        <div class="q-mt-sm">
          <q-btn flat @click="drawer = !drawer" color="primary" round dense icon="menu" />
          <q-btn flat dense class="text-primary bg-transparent" @click="$q.fullscreen.toggle()"
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
            :label="$q.fullscreen.isActive ? '' : ''" />
          <q-btn flat dense color="primary" label="EN" />
          <q-btn flat dense color="primary" icon="message" />
          <q-btn dense size="10px" flat color="primary" icon="fas fa-bell">
            <q-badge color="primary" floating transparent> 4 </q-badge>
          </q-btn>
          <q-avatar size="40px" class="shadow-2 q-mb-sm q-ml-sm">
            <img src="~assets/man.png" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" show-if-above :width="250">
      <q-scroll-area style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        ">
        <q-list v-for="item in sidebar" :key="item">
          <q-item clickable v-ripple :to="item.to" exact active-class="text-primary">
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section> {{ item.name }} </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-center bg-transparent">
          <q-avatar size="76px" class="shadow-9 q-mb-sm q-ml-lg">
            <img src="~assets/man.png" />
          </q-avatar>
          <div class="text-weight-bold text-primary q-ml-md text-center">
            JOHN
          </div>
          <div class="text-caption text-center text-grey-4 q-ml-md">
            MANAGER.
          </div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(false),
      sidebar: [
        {
          icon: "fas fa-home",
          name: "Dashboard",
          to: "/",
        },
        {
          icon: "fab fa-product-hunt",
          name: "Product",
          to: "/product",
        },
        {
          icon: "fas fa-dollar-sign",
          name: "Sales",
          to: "/sales",
        },
        {
          icon: "fas fa-tag",
          name: "Coupons",
          to: "/coupons",
        },
        {
          icon: "fas fa-file",
          name: "Pages",
          to: "/pages",
        },
        {
          icon: "fas fa-chart-line",
          name: "Reports",
          to: "/reports",
        },
        {
          icon: "fas fa-user",
          name: "Profile",
          to: "/profile",
        },
        {
          icon: "fas fa-print",
          name: "Invoice",
          to: "/invoice",
        },
      ],
    };
  },
};
</script>
