<template>
    <v-btn>新增</v-btn>
    <v-card>
        <v-data-table-server
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items-length="totalItems"
            :items="tableData"
            class="elevation-1"
            item-value="type"
            :loading="loading"
            @update:options="loadItems"
        >
            <template v-slot:items="props">
                <tr>
                    <td>{{ (props.item.type == 0) ? '進貨' : '出貨' }}</td>
                    <td>{{ props.item.amount_maple }}</td>
                    <td>{{ props.item.amount_ntd }}</td>
                    <td>{{ props.item.convert_to_ntd }}</td>
                    <td>{{ props.item.ratio }}</td>
                    <td>{{ props.item.actual_ratio }}</td>
                    <td>{{ props.item.paytype }}</td>
                </tr>
            </template>
        </v-data-table-server>
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
                console.log(tableData.value);
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
    { title: '類型', align: 'start', sortable: false, key: 'type' },
    { title: '金額(楓幣)', key: 'amount_maple', align: 'center' },
    { title: '金額(新台幣)', key: 'amount_ntd', align: 'end' },
    { title: '折合台幣', key: 'convert_to_ntd', align: 'center' },
    { title: '比值', key: 'ratio', align: 'center' },
    { title: '實際比值', key: 'actual_ratio', align: 'center' },
    { title: '支付方式', key: 'paytype', align: 'center' },
]

let serverItems = []
let loading = true
let totalItems= 0

const loadItems = ({ page, itemsPerPage, sortBy }) => {
    loading = true
    FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        console.log(`loadItems' items: ${items}`);
        console.log(`loadItems' total: ${total}`);
        serverItems = items
        totalItems = total
        loading = false
        tableData.value = serverItems
    })
}

</script>