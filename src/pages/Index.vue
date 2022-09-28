<template>
  <q-page class="q-pa-md bg-grey-2">
    <div class="text-h4 text-weight-bold">DASHBOARD</div>
    <div class="text-caption text-grey-6">Multikart Admin Panel</div>
    <!-- ----------------------- -->
    <div class="row q-mt-md q-col-gutter-md">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-list class="bg-secondary q-pa-md" bordered style="border-radius: 30px">
          <q-item>
            <q-item-section avatar>
              <q-icon size="25px" class="q-pa-sm text-secondary bg-white" name="fas fa-euro-sign"
                style="border-radius: 20px" />
            </q-item-section>
            <q-item-section class="text-white">Earnings<br /><span class="text-h4 text-weight-bold">$ 6659</span><span
                class="text-caption">This Month</span></q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-list class="bg-accent q-pa-md" bordered style="border-radius: 30px">
          <q-item>
            <q-item-section avatar>
              <q-icon size="25px" class="q-pa-sm text-accent bg-white" name="fas fa-cube" style="border-radius: 20px" />
            </q-item-section>
            <q-item-section class="text-white">Products<br /><span class="text-h4 text-weight-bold">$ 6659</span><span
                class="text-caption">This Month</span></q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-list class="bg-primary q-pa-md" bordered style="border-radius: 30px">
          <q-item>
            <q-item-section avatar>
              <q-icon size="25px" class="q-pa-sm text-primary bg-white" name="fas fa-comment-alt"
                style="border-radius: 20px" />
            </q-item-section>
            <q-item-section class="text-white">Messages<br /><span class="text-h4 text-weight-bold">$ 893</span><span
                class="text-caption">This Month</span></q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <q-list class="bg-positive q-pa-md" bordered style="border-radius: 30px">
          <q-item>
            <q-item-section avatar>
              <q-icon size="25px" class="q-pa-sm text-positive bg-white" name="fas fa-user-friends"
                style="border-radius: 20px" />
            </q-item-section>
            <q-item-section class="text-white">New Vendors<br /><span class="text-h4 text-weight-bold">$
                45631</span><span class="text-caption">This Month</span></q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <!-- ----------------------- -->
    <div class="row q-mt-lg">
      <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md bg-white">
        <div class="text-h6 text-weight-bold q-mb-md">Market Value</div>
        <q-separator />
        <q-card flat class="my-card">
          <q-img src="~assets/trading.jpg"></q-img>
        </q-card>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md bg-white">
        <div class="text-h6 text-weight-bold q-mb-md">Lastest Order</div>
        <q-separator />
        <q-table :rows="rows" :columns="columns"> </q-table>
        <q-btn unelevated color="q-px-lg text-white bg-primary q-mt-md" label="View all order" />
      </div>
    </div>
    <!-- ----------------------- -->
    <div class="row q-mt-lg q-col-gutter-md">
      <div class="col-md-3 col-sm-6 col-xs-12" v-for="item in cards" :key="item">
        <q-card class="my-card q-pa-md full-height">
          <div class="text-h6">{{ item.title }}</div>
          <img :src="item.src" />
          <q-separator />
          <q-card-section>
            <q-list>
              <q-item>
                <q-item-section class="text-caption">{{ item.name }} <br />
                  <span class="text-h5 text-weight-bold">{{
                  item.number
                  }}</span>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon size="30px" :name="item.icon" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>

          <q-card-section class="q-pt-none text-h5 text-weight-bold">
            {{ item.head1 }}
          </q-card-section>
          <q-card-section class="text-body1 text-grey-6">
            {{ item.head2 }}
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- ----------------------- -->
    <div class="bg-white q-pa-md q-mt-lg">
      <div class="text-h5 q-my-lg text-weight-bold">Buy / Sell</div>
      <q-separator />
      <q-img src="~assets/tradline.jpg" />
    </div>
    <!-- ----------------------- -->
    <div class="row q-mt-lg q-col-gutter-md">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <q-table title="Products Cart" :rows="rows" :columns="columns">
        </q-table>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <q-table title="Empolyee Status" :rows="rows" :columns="columns">
        </q-table>
      </div>
    </div>
    <!-- ----------------------- -->
  </q-page>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Order ID",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: "Order Total",
    align: "center",
    label: "Order Total",
    field: "calories",
  },
  { name: "Payment Method", label: "Payment Method", field: "fat" },
  { name: "Status", label: "Status", field: "carbs" },
];

const rows = [
  {
    name: "1",
    calories: "$120.00",
    fat: "Bank Transfers",
    carbs: "On Way",
  },
  {
    name: "2",
    calories: "$90.00",
    fat: "Ewallets",
    carbs: "Delivered",
  },
  {
    name: "3",
    calories: "$240.00",
    fat: "Cash",
    carbs: "Delivered",
  },
  {
    name: "4",
    calories: "$120.00",
    fat: "Direct Deposit",
    carbs: "$6523",
  },
  {
    name: "5",
    calories: "$50.00",
    fat: "Bank Transfers",
    carbs: "Delivered",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
      cards: [
        {
          title: "Total Sales",
          src: require("assets/trad1.jpg"),
          name: "Last Month",
          number: "9054",
          caption: "0.25%",
          icon: "fas fa-suitcase",
          head1: "Gross sales of August",
          head2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
        },
        {
          title: "Total purchase",
          src: require("assets/trad2.jpg"),
          name: "Monthly purchase",
          number: "2154",
          icon: "fas fa-credit-card",
          head1: "Avg Gross purchaset",
          head2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
        },
        {
          title: "Total cash transaction",
          src: require("assets/trad3.jpg"),
          name: "Cash on hand",
          number: "4672",
          icon: "fas fa-shopping-cart",
          head1: "Details about cash",
          head2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
        },
        {
          title: "Daily Deposits",
          src: require("assets/trad4.jpg"),
          name: "Security Deposits",
          number: "0782",
          icon: "fas fa-calendar",
          head1: "Gross sales of June",
          head2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting",
        },
      ],
    };
  },
};
</script>
