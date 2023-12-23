<template>
    <v-navigation-drawer>
      <v-list>
        <div v-for="(link, i) in links">

            <v-list-tile
                v-if="!link.sublinks"
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
                    v-for="sublink in link.sublinks"
                    :to="sublink.to"
                    :key="sublink.text"
                >
                    <v-list-tile-title v-text="sublink.text" />
                </v-list-tile>

            </v-list-group>

        </div>
    </v-list>
    </v-navigation-drawer>
  </template>
  <script setup>

  links =  [
      {
          to     : '/dashboard',
          icon   : 'mdi-view-dashboard',
          text   : 'dashboard',
      },
      {
          icon     : 'mdi-tennis',
          text     : 'players',
          sublinks : [
              {
                  text : 'players list',
                  to    : '/players',
              },
              {
                  text : 'import wta players',
                  to    : '/players/import',
              },
          ]
      },
      {
          to     : '/tournaments',
          icon   : 'mdi-trophy',
          text   : 'tournaments',
      },
  ]
  
  </script>