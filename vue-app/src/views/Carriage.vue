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
            title="Carriage"
            :elevation="6" 
            :width="400"
            :height="600"
            rounded
            style="background:rgba(255, 255, 255, 0.9);"     
            class="d-flex flex-column justify-space-around align-center text-center"       
            >     
                <v-tabs
                v-model="tab"
                style="width: 100%;"
                >
                    <v-tab value="0" style="width: 50%;">
                        <v-icon>mdi-alpha-b-box</v-icon>
                    </v-tab>

                    <v-tab value="1" style="width: 50%;">
                        <v-icon>mdi-alpha-s-box</v-icon>
                    </v-tab>
                </v-tabs>     
                <v-form 
                @submit.prevent
                class="d-flex flex-column align-center justify-center"
                style="width: 100%;"
                >   
                    <!-- 商品名稱 -->
                    <v-text-field
                        v-model="product"
                        variant="outlined"
                        label="product"
                        style="width: 70%;"
                    ></v-text-field>
                    <!-- 序號 -->
                    <v-textarea
                        rows="1"
                        v-model="serialNumber"
                        variant="outlined"
                        label="serial number"
                        style="width: 70%;"
                    ></v-textarea>  
                   <!-- 價格 -->
                   <v-text-field
                        v-model="price"
                        variant="outlined"
                        label="price"
                        style="width: 70%;"
                    ></v-text-field>  
                    <!-- Line -->
                    <v-text-field
                        v-model="line"
                        variant="outlined"
                        label="line"
                        style="width: 70%;"
                    ></v-text-field>  
                    <!-- 備註 -->
                    <v-text-field
                        v-model="remark"
                        variant="outlined"
                        label="remark"
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
import { onMounted, ref } from 'vue'
import axios from 'axios'

/* 基本參數 */

/* 表格資料 */
const tab = ref()
const product = ref('白剪')
const serialNumber = ref()
const price = ref()
const line = ref()
const remark = ref()

/* 載入頁面動作 */
onMounted(async() => {})

/* Enter按鈕 */
const submit = async() =>{
    console.log(tab.value)
    const formData = ref({
        'type': tab.value,
        'buproducter': product.value,
        'serialNumber': serialNumber.value,
        'price': price.value,
        'line': line.value,
        'remark': remark.value,
    })
    const { data: { success, msg } }  = await axios.post(
        'http://170.187.229.132:9092/api/carriage', JSON.stringify(formData.value)
    )
    alert(success)
}

</script>
