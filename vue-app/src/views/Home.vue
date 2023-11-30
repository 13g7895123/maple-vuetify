<template>
    <v-app
        :style="{ background: $vuetify.theme.themes.dark.background }"
    >
        <Sidebar />
        <!-- <Navbar /> -->
        <v-main>
            <v-container class="px-3 mt-2" fluid>
                <div id='main_area' class="mx-3 px-3">
                    <router-view />
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
</script>
<style>
html { overflow-y: auto }
#main_area{
    border: 2px solid #555;
    border-radius: 5px;
    box-shadow: 3px 3px #555;
}
</style>