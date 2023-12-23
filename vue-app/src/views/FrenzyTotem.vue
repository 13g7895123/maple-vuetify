<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="4">
                <v-card color="#B49239" class="rounded-xl" height="150">
                    <div class="flex flex-no-wrap justify-between">
                        <div>
                            <v-card-title>Daily Summary</v-card-title>
                            <v-card-subtitle>3e/3H</v-card-subtitle>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card color="#B49239" class="rounded-xl" height="150">
                    <div class="h-full flex flex-nowrap justify-between">
                        <div class="h-full flex flex-col items-center">
                            <v-card-title>當月累績(金額/時數)</v-card-title>
                            <v-card-subtitle>6e/6H</v-card-subtitle>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card color="#B49239" class="rounded-xl" height="150">
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title>過去累績(金額/時數)</v-card-title>
                            <v-card-subtitle>9e/9H</v-card-subtitle>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>