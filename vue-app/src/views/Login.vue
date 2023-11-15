<template>
    <v-app>
        <v-main id="login_main">
            <v-sheet
            :elevation="6" 
            :height="500" 
            :width="400"
            rounded
            style="background:rgba(255, 255, 255, 0.7);"
            >
                <v-form 
                @submit.prevent
                class="d-flex flex-column align-center"
                >
                    <v-img
                    cover
                    :height="180"
                    src="../src/assets/login_img.png"
                    class="mt-5"
                    ></v-img>
                    <v-text-field
                        label="Account"
                        :width="70%"
                    ></v-text-field>
                    <v-text-field
                        label="Password"
                    ></v-text-field>
                    <v-btn type="submit" block class="mt-2">Submit</v-btn>
                </v-form>
                <v-text label="or login with"></v-text>
                
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