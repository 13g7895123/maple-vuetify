<template>
    <v-btn
    color="#2784FF"
    style="color: #fff;"
    >
        新增
    </v-btn>
    <v-card>
        <v-data-table-server
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items-length="totalItems"
            :items="serverItems"
            class="elevation-1"
            item-value="columns"
            :loading="loading"
            @update:options="loadItems"
        >
            <template v-slot:item="{ item }">
                <v-chip>{{ item }}</v-chip>
            </template>
        </v-data-table-server>
    </v-card>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import axios from 'axios'

const tableData = ref([])
// const tableData2 = []

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

let serverItems = ref([])
let loading = true
let totalItems= 0
const type = ''
const amount_maple = ''

const loadItems = ({ page, itemsPerPage, sortBy }) => {
    loading = true
    FakeAPI.fetch({ page, itemsPerPage, sortBy, search: { name: type, calories: amount_maple } }).then(({ items, total }) => {
        serverItems.value = items
        totalItems = total
        loading = false
    })
}

const convertStatus = (num) => {
    if (num == 0){
        return '進貨'
    }else if (num == 1){
        return '出貨'
    }
}

</script>