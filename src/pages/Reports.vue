<template>
  <q-page class="bg-grey-2">
    <div class="q-pa-md">
      <div class="text-h4 text-weight-bold">REPORTS</div>
      <div class="text-caption text-grey-6">Multikart Admin Panel</div>
      <!-- ----------------------- -->
      <div class="row q-my-md q-col-gutter-md">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <div class="bg-white">
            <div class="text-h6 q-pa-md">Sales Summary</div>
            <q-separator />
            <q-img src="~assets/up.jpg" />
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md gt-xs">
          <q-img width="100%" height="520px" src="~assets/line.jpg" />
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 q-pa-md lt-sm">
          <q-img src="~assets/line.jpg" />
        </div>
      </div>
      <!-- ----------------------- -->
      <q-table :rows-per-page-options="[0]" title="Transfer Report" :rows="rows" :columns="columns" row-key="name" />
      <!-- ----------------------- -->
      <div class="row q-mt-md q-col-gutter-md">
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="bg-white">
            <div class="text-h6 q-pa-md">Expenses</div>
            <q-separator />
            <q-card flat class="my-card">
              <q-img src="~assets/wav.jpg" />
            </q-card>
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="bg-white">
            <div class="text-h6 q-pa-md">Sales / Purchase</div>
            <q-separator />
            <q-card flat class="my-card">
              <q-img height="480px" src="~assets/inc.jpg" />
            </q-card>
          </div>
        </div>
      </div>
      <!-- ----------------------- -->
      <div class="bg-white q-mt-md">
        <div class="text-h6 q-pa-md">Sales / Purchase Return</div>
        <q-separator />
        <q-img src="~assets/stat.jpg" />
      </div>
      <!-- ----------------------- -->
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Transfer Id",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Date", field: "fat", sortable: true },
  { name: "carbs", label: "Total", field: "carbs" },
  { name: "protein", label: "Actions", field: "protein" },
];

const rows = [
  {
    name: "Gray Brody",
    calories: "14783112",
    fat: "Nov 20, 2018",
    carbs: "$745",
    protein: 4.0,
  },
  {
    name: "Perez Alonzo",
    calories: "87541221",
    fat: "Dec 25, 2018",
    carbs: "$8136",
    protein: 4.3,
  },
  {
    name: "woters maxine",
    calories: "213514462",
    fat: "Feb 04, 2019",
    carbs: "$564",
    protein: 6.0,
  },
  {
    name: "Rowan torres",
    calories: "7512785568",
    fat: "Jan 07, 2019",
    carbs: "$2364",
    protein: 4.3,
  },
  {
    name: "Lane Skylar",
    calories: "7614585124",
    fat: "Apr 15, 2019",
    carbs: "$671",
    protein: 3.9,
  },
  {
    name: "alexander",
    calories: "574225447",
    fat: "Mar 21, 2019",
    carbs: "$8914",
    protein: 0.0,
  },
  {
    name: "christian",
    calories: "235896144",
    fat: "Mar 28, 2019",
    carbs: "$7952",
    protein: 0,
  },
  {
    name: "stephanie",
    calories: "5781425474",
    fat: "Feb 30, 2019",
    carbs: "$1236",
    protein: 6.5,
  },
  {
    name: "victoria",
    calories: "636512214",
    fat: "Mar 12, 2019",
    carbs: "$8914",
    protein: 4.9,
  },
  {
    name: "campbell",
    calories: "461178242",
    fat: "Apr 19, 2019",
    carbs: " $94174",
    protein: 7,
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>

<style lang="scss">
table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f6f8ff;
}
</style>
