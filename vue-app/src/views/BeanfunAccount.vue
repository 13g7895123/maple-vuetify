<template>
    <v-app>
        <v-main id="login_main">
            <v-card
            title="Beanfun Account"
            :elevation="6" 
            :width="400"
            :height="540"
            rounded
            style="background:rgba(255, 255, 255, 0.9);"
            >
                <!-- <v-card
                class="mx-auto"
                max-width="344"
                title="User Registration">
                </v-card> -->
                <v-form 
                @submit.prevent
                class="d-flex flex-column align-center justify-center"
                >
                    <!-- <v-img
                        cover
                        :height="180"
                        src="../src/assets/login_img.png"
                        class="mt-5 d-flex justify-center"
                    ></v-img> -->
                    <v-text-field
                        variant="outlined"
                        label="Account"
                        height="30px"
                        class="mt-3"
                        style="width: 70%;"
                    ></v-text-field>
                    <v-text-field
                        variant="outlined"
                        label="email"
                        style="width: 70%;"
                    ></v-text-field>
                    <v-text-field
                        variant="outlined"
                        label="phone"
                        style="width: 70%;"
                    ></v-text-field>
                    <v-text-field
                        variant="outlined"
                        label="phone owner"
                        style="width: 70%;"
                    ></v-text-field>
                    <v-btn type="button" 
                        class="mt-2"
                        style="width: 70%; color:#fff;"
                        color="#4287f5"
                        @click="router.push('/bonus')"
                    >LOGIN</v-btn>
                    <!-- divider -->
                    <div class="d-flex align-center mt-5" style="width: 70%; position: relative;">
                        <div class="divider-line text-left"></div>
                        <div class="px-3 text-no-wrap">or login with</div>
                        <div class="divider-line text-left"></div>
                    </div>
                    <div 
                        class="d-flex justify-space-between"
                        style="width: 70%;"
                    >
                        <v-btn 
                            type="button" 
                            class="mt-2"
                            style="width: 45%; color:#fff;"
                            color="#d34f41"
                        >Google</v-btn>
                        <v-btn 
                            type="button" 
                            class="mt-2"
                            style="width: 45%; color:#fff;"
                            color="#05c654"
                        >Line</v-btn>
                    </div>
                </v-form>                
            </v-card>
        </v-main>
    </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
// import { ref } from 'vue'
import axios from 'axios'

/* 基本參數 */
const router = useRouter();

const { data: { success, test } } = await axios.get('http://170.187.229.132:9092/api/bonus')
console.log(test);

</script>
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
.divider-line {
  flex-grow: 1;
  height: 1px;
  width: 100%;
  background-color: #555;  /* 设置横线颜色 */
}
.v-img__img{
    width: auto;
}
</style>