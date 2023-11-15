<template>
    <v-app>
        <v-main id="login_main">
            <v-sheet
            :elevation="6" 
            :width="400"
            :height="540"
            rounded
            style="background:rgba(255, 255, 255, 0.9);"
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
                        class="mt-3"
                        style="width: 70%;"
                    ></v-text-field>
                    <v-text-field
                        label="Password"
                        style="width: 70%;"
                    ></v-text-field>
                    <v-btn type="submit" 
                        class="mt-2"
                        style="width: 70%;"
                    >LOGIN</v-btn>
                    <!-- divider -->
                    <div class="d-flex align-center mt-5" style="width: 70%; position: relative;">
                        <div class="divider-line text-left" style="width: 100%; height: 1px background-color: #555;"></div>
                        <div class="px-3 text-no-wrap">or login with</div>
                        <div class="divider-line text-right" style="width: 100%; height: 1px background-color: #555;"></div>
                    </div>
                    <div 
                        class="d-flex justify-space-between"
                        style="width: 70%;"
                    >
                        <v-btn 
                            type="button" 
                            class="mt-2"
                            style="width: 45%;"
                            pre-icon="mdi-plus-circle-outline"
                        >Google</v-btn>
                        <v-btn 
                            type="button" 
                            class="mt-2"
                            style="width: 45%;"
                        >Line</v-btn>
                    </div>
                </v-form>                
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
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
}
.divider-with-text {
  display: flex;
  align-items: center;
}

.divider-line {
  background-color: #000;  /* 设置横线颜色 */
}

.divider-text {
  margin: 0 5px;  /* 设置文字与横线之间的间距 */
}
</style>