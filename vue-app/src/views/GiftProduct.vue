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
<template>
    <v-app>
        <v-main id="login_main">
            <v-card
            title="Gift Product"
            :elevation="6" 
            :width="400"
            :height="540"
            rounded
            style="background:rgba(255, 255, 255, 0.9);"     
            class="d-flex flex-column justify-space-around align-center"       
            >
                <v-form 
                @submit.prevent
                class="d-flex flex-column align-center justify-center"
                style="width: 100%;"
                >   
                    <v-text-field
                        v-model="name"
                        variant="outlined"
                        label="name"
                        style="width: 70%;"
                    ></v-text-field>
                    <v-text-field
                        v-model="price"
                        variant="outlined"
                        label="price"
                        style="width: 70%;"
                    ></v-text-field>                    
                </v-form>     
                <v-btn type="button" 
                        style="width: 70%; color:#fff;"
                        color="#4287f5"
                        @click="submit"
                    >ENTER</v-btn>           
            </v-card>
        </v-main>
    </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from 'vue'
import axios from 'axios'

/* 基本參數 */
const router = useRouter();

/* 表格資料 */
const name = ref()
const price = ref()

/* 測試資料 */
const testMode = 0
if (testMode == 1){
    // account.value       = '13g1017895123'
    // email.value         = '13g1017895123'
    // phone.value         = '0930191325'
    // phoneOwner.value    = '大妹男友'
}

/* Enter按鈕 */
const submit = async() =>{
    const formData = ref({
        'name': name.value,
        'price': price.value,
    })
    const { data: { success, msg } }  = await axios.post(
        'http://170.187.229.132:9092/api/giftproduct', JSON.stringify(formData.value)
    )
    alert(success)
}

</script>
