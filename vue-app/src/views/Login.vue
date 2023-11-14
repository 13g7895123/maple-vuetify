<template>
    <v-app>
        <v-main id="loginBg">
            <v-sheet :elevation="6" :height="200" :width="200"></v-sheet>
        </v-main>
    </v-app>
</template>
<style>
html{
    overflow-y: auto;
}
#loginBg{
    background-image: url('../assets/christmas_1920_1200.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>