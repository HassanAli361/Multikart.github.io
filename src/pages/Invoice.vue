<template>
  <q-page class="bg-grey-2">
    <div class="q-pa-md">
      <div class="text-h4 text-weight-bold">INVOICE</div>
      <div class="text-caption text-grey-6">Multikart Admin Panel</div>
      <!-- ----------------------- -->
      <q-table
      class="q-mt-sm"
        :rows-per-page-options="[0]"
        title="Invoice List"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
      <!-- ----------------------- -->
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "No",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Invoice",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Date", field: "fat", sortable: true },
  { name: "carbs", label: "Shipping", field: "carbs" },
  { name: "protein", label: "Amount", field: "protein" },
  { name: "sodium", label: "Tax", field: "sodium" },
  {
    name: "calcium",
    label: "Total",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "1",
    calories: 50764,
    fat: "1 / 1 / 2018",
    carbs: 3.62,
    protein: 816,
    sodium: 65.28,
    calcium: "884.16",
  },
  {
    name: "2",
    calories: 50765,
    fat: "15 / 3 / 2018",
    carbs: 8.4,
    protein: 146,
    sodium: 129,
    calcium: "225.4",
  },
  {
    name: "3",
    calories: 50766,
    fat: "28 / 4 / 2018",
    carbs: 7.3,
    protein: 47,
    sodium: 724,
    calcium: "789",
  },
  {
    name: "4",
    calories: 507647,
    fat: "31 / 4 / 2018",
    carbs: 2.0,
    protein: 478,
    sodium: 35,
    calcium: "512",
  },
  {
    name: "5",
    calories: 50768,
    fat: "2 / 5 / 2018",
    carbs: 1.5,
    protein: 1460,
    sodium: 45.32,
    calcium: "1515",
  },
  {
    name: "6",
    calories: 50769,
    fat:" 3 / 5 / 2018",
    carbs: 8.45,
    protein: 768,
    sodium: 17,
    calcium: "780",
  },
  {
    name: "7",
    calories: 50770,
    fat: "4 / 5 / 2018",
    carbs: 25.8,
    protein: 874,
    sodium: 27.2,
    calcium: "945.10",
  },
  {
    name: "8",
    calories: 50771,
    fat: "8 / 5 / 2018",
    carbs: 17.2,
    protein: 671,
    sodium: 83.7,
    calcium: "775.9",
  },
  {
    name: "9",
    calories: 50772,
    fat: "12 / 5 / 2018",
    carbs: 87.5,
    protein: 572,
    sodium: 8.7,
    calcium: "615",
  },
  {
    name: "10",
    calories: 50773,
    fat: "16 / 5 / 2018",
    carbs: 78.12,
    protein: 489,
    sodium: 10.57,
    calcium: "516",
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

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f6f8ff;
}
</style>
