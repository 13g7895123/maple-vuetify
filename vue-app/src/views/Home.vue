<template>
    <v-app
        :style="{ background: $vuetify.theme.themes.dark.background }"
    >
        <Sidebar />
        <v-main>
            <v-container class="px-3 mt-2" fluid>
                <div id='main_area' class="mx-3 px-5 py-5">
                    <router-view />
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
import Test from '../components/sidebar/Test.vue'
import Test2 from '../components/sidebar/Test2.vue'
</script>
<style>
html { overflow-y: auto }
#main_area{
    height: 93vh;
    border: 4px solid rgba(39, 132, 255, .5);
    border-radius: 20px;
}
</style>