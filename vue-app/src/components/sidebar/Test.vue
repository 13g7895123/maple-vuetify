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
        <div v-for="(link, i) in links">
            <v-list-tile
                v-if="!link.subLinks"
                :key="i"
                :to="link.to"
                :active-class="color"
                avatar
                class="v-list-item"
            >
                <v-list-tile-action>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-title v-text="link.text" />
            </v-list-tile>

            <v-list-group
                v-else
                :key="link.text"
                no-action
            >
                <template v-slot:activator>
                <v-list-tile>
                    <v-list-tile-content>
                    <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                </template>

                <v-list-tile
                    v-for="sublink in link.subLinks"
                    :to="sublink.to"
                    :key="sublink.text"
                >
                    <v-list-tile-title v-text="sublink.text" />
                </v-list-tile>

            </v-list-group>

            </div>
      </v-list>
      <!-- 登出可以放在這裡 -->
      <div style="position: absolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right: 0; text-align: center;">
      </div>
    </v-navigation-drawer>
  </template>
<script setup>

const links = [
    {
        to     : '/frenzyTotem',
        icon   : 'mdi-view-dashboard',
        text   : 'Dashboard',
    },
    {
        icon     : 'mdi-tennis',
        text     : 'Players',
        subLinks : [
            {
                text : 'Players list',
                to    : '/fashion',
            },
            {
                text : 'Import WTA Players',
                to    : '/gameCurrency',
            },
        ]
    },
]
</script>