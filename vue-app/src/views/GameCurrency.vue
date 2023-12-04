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

  if (success){
    console.log(data)
    tableData.value = data
  }
}

watchEffect(() => getData())

</script>