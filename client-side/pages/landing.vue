<template>
  <v-container
    class="d-flex flex-column align-center"
    style="position: absolute; min-height: 100%"
  >
    <v-row>
      <a href="/" class="d-flex justify-center align-center" style="text-decoration: none">
        <p class="pt-4 text-h1 font-weight-bold orange--text">Pay</p>
        <v-icon size="200" color="green darken-2"> mdi-cash-multiple </v-icon>
        <p class="pt-8 text-h1 font-weight-bold orange--text">Pai</p>
      </a>
    </v-row>
    <v-row class="d-flex flex-column justify-center align-center">
      <div class="align-self-center mb-5">
        <v-btn
          href="/auth/signUp"
          min-width="400"
          class="pa-8 light-green darken-4 white--text text-h5"
          elevation="7"
          rounded
        >
          Sign Up
        </v-btn>
      </div>
      <div class="align-self-center">
        <h4 class="d-flex justify-self-center">Already have an account? &nbsp;
        <a href="/auth/signIn" class="green--text text--darken-4">Sign In</a></h4>
      </div>
    </v-row>
    <v-row align-content="center">
      <v-col>
        <v-card elevation="5" shaped>
          <v-card-title class="text-h5 font-weight-bold">
            Managment
          </v-card-title>

          <v-card-content>
            <v-card-text>
              ช่วยจัดการสมาชิกในแต่ละกลุ่ม Subscription
              ได้หลายหลายไม่จำกัดอยู่ที่กลุ่มใดกลุ่มนึง
            </v-card-text>
          </v-card-content>
        </v-card>
      </v-col>

      <v-col>
        <v-card elevation="5" shaped>
          <v-card-title class="text-h5 font-weight-bold"> Notification </v-card-title>

          <v-card-content>
            <v-card-text>
              ไม่พลาดทุกเหตุการ์ณด้วยการแจ้งเตือน ไม่ว่าจะเป็น ครบกำหนดวันจ่าย
              มีสมาชิกเพิ่มเติม หรือสมาชิกลดลงไป
            </v-card-text>
          </v-card-content>
        </v-card>
      </v-col>

      <v-col>
        <v-card elevation="5" shaped>
          <v-card-title class="text-h5 font-weight-bold"> Free </v-card-title>

          <v-card-content>
            <v-card-text>
              ไม่มีค่าบริการใดๆทั้งสิ้ง สามารถเข้าใช้งานเพื่อทำให้ชีวิต
              การใช้ระบบ Subscription ง่ายขึ้นในทุกๆวัน
            </v-card-text>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
