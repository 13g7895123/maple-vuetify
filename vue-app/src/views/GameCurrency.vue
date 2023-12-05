<template>
    <v-card>
        <v-data-table-server
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items-length="totalItems"
            :items="tableData"
            class="elevation-1"
            item-value="name"
            @update:options="loadItems"
        ></v-data-table-server>
    </v-card>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import axios from 'axios'

const tableData = ref([])

const getData = async() => {
  const { data: { success, data } } = await axios.get('/api/game_currency.php?action=all_data')
  if (success){ tableData.value = data }
}

watchEffect(() => getData())

const FakeAPI = {
    async fetch ({ page, itemsPerPage, sortBy }) {
        return new Promise(resolve => {
            setTimeout(() => {
                const start = (page - 1) * itemsPerPage
                const end = start + itemsPerPage
                const items = tableData.value.slice()

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

                resolve({ items: paginated, total: items.length })
            }, 500)
        })
    }
}

/* 列表 */
const itemsPerPage = 5
const headers = [
    { title: 'type', align: 'start', sortable: false, key: 'type' },
    { title: 'amount_maple', key: 'amount_maple', align: 'center' },
    { title: 'amount_ntd', key: 'amount_ntd', align: 'end' },
    { title: 'convert_to_ntd', key: 'convert_to_ntd', align: 'center' },
    { title: 'ratio', key: 'ratio', align: 'center' },
    { title: 'actual_ratio', key: 'actual_ratio', align: 'center' },
    { title: 'paytype', key: 'paytype', align: 'center' },
]

let serverItems = []
let loading = true
let totalItems= 0

const loadItems = ({ page, itemsPerPage, sortBy }) => {
    loading = true
    FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        serverItems = items
        totalItems = total
        loading = false
        console.log(serverItems);
        console.log(loading);
    })
}

</script>