<template>
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :search="search"
      :headers="headers"
      :items-length="totalItems"
      :items="serverItems"
      :loading="loading"
      item-value="name"
      @update:options="loadItems"
    >
      <template v-slot:tfoot>
        <tr>
          <td>
            <v-text-field v-model="name" hide-details placeholder="Search name..." class="ma-2" density="compact"></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="calories"
              hide-details
              placeholder="Minimum calories"
              type="number"
              class="ma-2"
              density="compact"
            ></v-text-field>
          </td>
        </tr>
      </template>
    </v-data-table-server>
  </template>
  <script>
  import { ref, watchEffect } from 'vue'
  import axios from 'axios'
  const desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1',
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      iron: '0',
    },
    {
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      iron: '6',
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      iron: '7',
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      iron: '16',
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: '1',
    },
    {
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      iron: '2',
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      iron: '8',
    },
    {
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      iron: '45',
    },
    {
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      iron: '22',
    },
  ]
  // console.log(desserts);
  // console.log(desserts[0]['name']);

  const tableData = ref([])
  const getData = async() => {
    const { data: { success, data } } = await axios.get('/api/game_currency.php?action=all_data')
    if (success){ tableData.value = data }
    console.log(tableData.value);
  }

  watchEffect(() => getData())

  const FakeAPI = {
    async fetch ({ page, itemsPerPage, sortBy, search }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const start = (page - 1) * itemsPerPage
          const end = start + itemsPerPage
          console.log(tableData.value);
          const items = tableData.value.slice().filter(item => {
            if (search.id && !item.id.toLowerCase().includes(search.id.toLowerCase())) {
              return false
            }

            // eslint-disable-next-line sonarjs/prefer-single-boolean-return
            if (search.calories && !(item.calories >= Number(search.calories))) {
              return false
            }

            return true
          })
          console.log(items);

          if (sortBy.length) {
            const sortKey = sortBy[0].key
            const sortOrder = sortBy[0].order
            items.sort((a, b) => {
              const aValue = a[sortKey]
              const bValue = b[sortKey]
              return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
            })
          }

          const paginated = items.slice(start, end)
          // console.log(paginated);
          // console.log(items.length);
          resolve({ items: paginated, total: items.length })
        }, 500)
      })
    },
  }

  export default {
    data: () => ({
      itemsPerPage: 5,
      headers : [
        { title: '類型', align: 'start', sortable: false, key: 'type' },
        { title: '金額(楓幣)', key: 'amount_maple', align: 'center' },
        { title: '金額(新台幣)', key: 'amount_ntd', align: 'end' },
        { title: '折合台幣', key: 'convert_to_ntd', align: 'center' },
        { title: '比值', key: 'ratio', align: 'center' },
        { title: '實際比值', key: 'actual_ratio', align: 'center' },
        { title: '支付方式', key: 'paytype', align: 'center' },
      ],
      serverItems: [],
      loading: true,
      totalItems: 0,
      name: '',
      calories: '',
      search: '',
    }),
    watch: {
      name () {
        this.search = String(Date.now())
      },
      calories () {
        this.search = String(Date.now())
      },
    },
    methods: {
      loadItems ({ page, itemsPerPage, sortBy }) {
        this.loading = true
        FakeAPI.fetch({ page, itemsPerPage, sortBy, search: { name: this.name, calories: this.calories } }).then(({ items, total }) => {
          // console.log(items);
          // console.log(total);
          this.serverItems = items
          this.totalItems = total
          this.loading = false
        })
      },
    },
  }
</script>