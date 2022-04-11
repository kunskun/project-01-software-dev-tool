<template>
  <div>
    <v-app-bar color="#F90716" dense dark>
      <v-app-bar-nav-icon />
      <v-spacer />
      <v-btn icon>
        <v-icon color="info"> mdi-account-circle </v-icon>
      </v-btn>
      <v-menu left bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="warning"> mdi-email </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Notifications {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-card style="card">
      <div class="pa-7 secondary rounded-circle d-inline-block">
      </div>
    </v-card>
  </div>
</template>
<style scoped>
.card {
   padding: 10px 20px 20px 20px
}
</style>
