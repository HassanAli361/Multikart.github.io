<template>
  <q-page class="bg-grey-2">
    <div class="q-pa-md">
      <div class="text-h4 text-weight-bold">Sales</div>
      <div class="text-caption text-grey-6">Multikart Admin Panel</div>
      <!-- ----------------------- -->
      <q-table class="q-mt-sm" :rows-per-page-options="[0]" title="Transaction Details" :rows="rows" :columns="columns"
        row-key="name" />
      <!-- ----------------------- -->
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Order Id",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Transaction Id",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Date", field: "fat", sortable: true },
  { name: "carbs", label: "Payment Method", field: "carbs" },
  { name: "protein", label: "Delivery Status", field: "protein" },
  { name: "sodium", label: "Amount", field: "sodium" },
];

const rows = [
  {
    name: "142",
    calories: "#212145214510",
    fat: "Sep 2,19",
    carbs: "Paypal",
    protein: "Pending",
    sodium: "$175/-",
  },
  {
    name: "217",
    calories: "#784561421721",
    fat: "Dec 10,19",
    carbs: "Stripe",
    protein: "Process",
    sodium: "$845/-",
  },
  {
    name: "546",
    calories: "#476547821142",
    fat: "Feb 15,19",
    carbs: "Stripe",
    protein: "Delivered",
    sodium: " $314/-",
  },
  {
    name: "617",
    calories: "#745384127541",
    fat: "Mar 27,19",
    carbs: "Paypal",
    protein: "Pending",
    sodium: "$217/-",
  },
  {
    name: "565",
    calories: "#96725125102",
    fat: "Sep 1,19",
    carbs: "Stripe",
    protein: "Process",
    sodium: "$542/-",
  },
  {
    name: "754",
    calories: "#547121023651",
    fat: "May 18,19",
    carbs: "Paypal",
    protein: "Pending",
    sodium: "$2141/-",
  },
  {
    name: "164",
    calories: "#876412242215",
    fat: "Jan 14,19",
    carbs: "Stripe",
    protein: "Delivered",
    sodium: "$4872/-",
  },
  {
    name: "841",
    calories: "#31534221621",
    fat: "Apr 22,19",
    carbs: "Paypal",
    protein: "Process",
    sodium: " $7841/-",
  },
  {
    name: "354",
    calories: "#78412457421",
    fat: "Mar 26,19",
    carbs: "Paypal",
    protein: "Pending",
    sodium: "$2784/-",
  },
  {
    name: "784",
    calories: "#241524757448",
    fat: "Feb 29,19",
    carbs: "Stripe",
    protein: "Delivered",
    sodium: "$461/-",
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
