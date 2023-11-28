<template>
    <v-app
        :style="{ background: $vuetify.theme.themes.dark.background }"
    >
        <Sidebar />
        <!-- <Navbar /> -->
        <v-main>
            <v-container class="px-3 mt-2" fluid>
                <div class="mx-3" style="background-color: #555;">
                    <router-view />
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
// import Sidebar from '../components/Sidebar.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
</script>
<style>
html { overflow-y: auto }
</style>