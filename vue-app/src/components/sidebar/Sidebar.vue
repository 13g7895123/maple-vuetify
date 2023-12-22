<template>
  <v-navigation-drawer
    permanent
    color="#2784FF"
  >
    <v-list>
      <v-list-item
        prepend-avatar="./src/assets/apple-touch-icon.png"
        title="Assistant"
        base-color="white"
      ></v-list-item>
    </v-list>

    <v-divider class="mx-3"></v-divider>
      
    <!-- <v-list-group
      v-for = "item in items"
      :key = 'item.text'
    >
      <v-list-item slot='activator' :to="item.link">
        <template>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list-group> -->
    <v-list density="compact" nav flat class="mt-5" > 
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        active-class="border"
        class=""
        :ripple="false"
        rounded="xl"
        :prepend-icon="item.icon"
        :title = 'item.text'
        :to="item.link"
        link
        base-color="white"
      >
      </v-list-item> 
    </v-list>
    <v-list-group no-action v-for='navLink in items' :key="navLink.text">
      <v-list-item slot='activator' :to="navLink.route">
        <v-list-item-icon>
          <v-icon>{{ navLink.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ navLink.text }}</v-list-item-title>
      </v-list-item>
      <v-list-item v-for='sub in navLink.subLinks' :key="sub.text">
        <!-- <v-list-item-title :to="sub.route">{{ sub.text }}</v-list-item-title> -->
        <v-list-item-title>{{ sub.text }}</v-list-item-title>
      </v-list-item>
    </v-list-group>
    <!-- 登出可以放在這裡 -->
    <div style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right: 0; text-align: center;">
    </div>
  </v-navigation-drawer>
</template>
<script setup>
// const drawer = true
// const rail = true

const selectedItem = 0
const drawer = true
const mini =  false
const expandOnHover = true
const items =  [
    {icon: 'mdi-border-all', text: 'Frenzy Totem', link: '/frenzyTotem'},
    {icon: 'mdi-alpha-f-circle-outline', text: 'Fashion', link: '/fashion'},
    {icon: 'mdi-currency-usd', text: 'Game Currency', link: '/gameCurrency'},
    // {icon: 'mdi-account', text: 'account'},
    // {icon: 'mdi-account-group-outline', text: 'test'},
    // {icon: 'mdi-cash-plus', text: 'bonus', link: '/bonus'},
    {icon: 'mdi-cash', text: 'money', link: '/test',
      subLinks: [
        {text: 'bonus', link: '/test'}
      ]
    },
    {icon: 'mdi-ab-testing', text: 'test', link: '/test'},
]
</script>