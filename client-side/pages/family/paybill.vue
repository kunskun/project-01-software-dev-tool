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
      <v-row class="text-center" justify="center">
        <v-col
          cols="12"
          md="3"
          class="align-center justify-center d-flex flex-row"
        >
          <div
            class="
              px-8
              py-6
              secondary
              rounded-circle
              d-inline-block
              fontcircles
            "
          >
            1
          </div>
          <v-progress-linear
            color="blue-grey lighten-2"
            rounded
            value="100"
          ></v-progress-linear>
          <div
            class="
              px-8
              py-6
              blue-grey lighten-2
              rounded-circle
              d-inline-block
              fontcircles
            "
          >
            2
          </div>
        </v-col>
      </v-row>
       <div class="text-center fontpay" justify="center">PAY</div>
    </v-card>
  </div>
</template>
<style scoped>
.card {
  padding: 10px 20px 20px 20px;
}
.fontcircles {
  color: white;
  font-size: 15px;
  font-weight: bold;
}
.fontpay{
    font-weight: bold;
    font-size: 50px;
}
</style>
