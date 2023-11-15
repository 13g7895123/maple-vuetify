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
                    <!-- <v-divider
                        :thickness="2"
                        color="black"
                        style=""
                    ></v-divider> -->
                    <v-row align="center">
                        <v-col>
                            <div class="divider-with-text">
                            <span class="divider-line"></span>
                            <span class="divider-text">Your Text Here</span>
                            <span class="divider-line"></span>
                            </div>
                        </v-col>
                    </v-row>
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
  flex-grow: 1;
  height: 1px;
  background-color: #000;  /* 设置横线颜色 */
  margin: 0 10px;  /* 设置横线与文字之间的间距 */
}

.divider-text {
  margin: 0 5px;  /* 设置文字与横线之间的间距 */
}
</style>