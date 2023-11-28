<template>
    <v-app
        :style="{ background: $vuetify.theme.themes.dark.background }"
    >
        <Sidebar />
        <!-- <Navbar /> -->
        <v-main>
            <v-container class="mx-3 mt-2" fluid style="background-color: #555;">
                <!-- <v-col cols="12" sm="4"></v-col> -->
                <router-view />
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