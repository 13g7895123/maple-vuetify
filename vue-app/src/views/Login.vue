<template>
    <v-app>
        <v-main id="login_main">
            <v-sheet
              :elevation="6" 
              :height="200" 
              :width="200"
              rounded
              style="background:rgba(255, 255, 255, 0.37);"
            >
            </v-sheet>
        </v-main>
    </v-app>
</template>
<style>
html{
    overflow-y: auto;
}
#login_main{
    background-image: url('../assets/christmas_1920_1200.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>