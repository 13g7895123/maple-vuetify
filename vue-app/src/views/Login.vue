<template>
    <v-app>
        <v-main id="login_main">
            <v-sheet
              :elevation="6" 
              :height="500" 
              :width="400"
              rounded
              style="background:rgba(255, 255, 255, 0.7);"
              class="d-flex flex-column align-center"
            >
                <v-img
                  :width="150"
                  cover
                  src="../src/assets/login_img.png"
                  style="height: auto;"
                ></v-img>
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