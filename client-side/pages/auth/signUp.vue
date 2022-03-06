<template>
  <v-sheet>
    <v-row class="justify-center">
      <v-card style="width: 100%">
        <!-- singup -->
        <v-card-text class="title">
          SIGNUP
        </v-card-text>
        <v-col cols="12">
          <!-- firstname -->
          <v-row>
            <v-col cols="6">
              <v-card-text> Fill Your First Name </v-card-text>
              <v-col cols="12">
                <v-text-field
                  v-model="first"
                  label="First Name"
                  filled
                />
              </v-col>
            </v-col>
            <!-- lastname -->
            <v-col cols="6">
              <v-card-text> Fill Your Last Name </v-card-text>
              <v-col cols="12">
                <v-text-field
                  v-model="last"
                  label="Last Name"
                  filled
                />
              </v-col>
            </v-col>
          </v-row>
          <!-- nickname -->
          <v-row>
            <v-col cols="6">
              <v-card-text> Fill Your Nick Name </v-card-text>
              <v-col cols="12">
                <v-text-field
                  v-model="nick"
                  label="Nick Name"
                  filled
                />
              </v-col>
            </v-col>
            <!-- phonenumber -->
            <v-col cols="6">
              <v-card-text> Fill Your Phone Number </v-card-text>
              <v-col cols="12">
                <v-text-field
                  v-model="phone"
                  label="Phone Number"
                  filled
                  maxlength="10"
                  counter="10"
                />
              </v-col>
            </v-col>
          </v-row>
          <!-- book bank -->
          <v-row>
            <v-col cols="6">
              <v-card-text> Fill Your Book Bank </v-card-text>
              <v-col cols="12">
                <v-text-field
                  v-model="bank"
                  label="Book Bank"
                  filled
                  maxlength="10"
                  counter="10"
                />
              </v-col>
            </v-col>
            <!-- account provider -->
            <v-col cols="6">
              <v-card-text> Select Your Account Provider </v-card-text>
              <v-col cols="12">
                <v-autocomplete
                  ref="slbrc"
                  v-model="slbrc"
                  :rules="[() => !!slbrc || 'This field is required']"
                  :items="branch"
                  label="Account Provider"
                  placeholder="Select..."
                  required
                  filled
                />
              </v-col>
            </v-col>
          </v-row>
          <!-- account name -->
          <v-row>
            <v-col cols="6">
              <v-card-text> Fill Your Account Name </v-card-text>
              <v-col cols="12">
                <v-text-field
                  v-model="accname"
                  label="Account Name"
                  filled
                />
              </v-col>
            </v-col>
            <!-- provider name -->
            <v-col cols="6">
              <v-card-text> Fill Your Branch Name </v-card-text>
              <v-col cols="12">
                <v-text-field
                  v-model="prvname"
                  label="Branch Name"
                  filled
                />
              </v-col>
            </v-col>
          </v-row>
          <!-- email -->
          <v-row>
            <v-col cols="6">
              <v-card-text> Fill Your Email </v-card-text>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  label="example ( kokova@gmail.com )"
                  filled
                  type="email"
                />
              </v-col>
            </v-col>
            <!-- password -->
            <v-col cols="6">
              <v-card-text> Fill Your Password </v-card-text>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  label="Password"
                  filled
                  type="password"
                />
              </v-col>
            </v-col>
          </v-row>
          <!-- promt pay -->
          <v-row>
            <v-col cols="6">
              <v-card-text> Fill Your PromtPay </v-card-text>
              <v-col cols="12">
                <v-text-field
                  v-model="promt"
                  label="ID Card Code OR Phone Number"
                  filled
                  maxlength="13"
                  counter="13"
                />
              </v-col>
            </v-col>
            <!-- QRCODE -->
            <v-col cols="6">
              <v-card-text> Select Image QRCODE Your Account Bank </v-card-text>
              <v-col cols="12">
                <v-file-input
                  label="Click To Select Image From Your Device"
                  filled
                  prepend-icon="mdi-camera"
                />
              </v-col>
            </v-col>
          </v-row>
          <!-- back -->
          <v-row align="center" justify="space-around">
            <v-col cols="6" align="right">
              <v-btn
                depressed
                color="primary"
                x-large
                href="../landing"
              >
                BACK
              </v-btn>
            </v-col>
            <!-- regis -->
            <v-col cols="6" align="left">
              <v-btn
                depressed
                color="success"
                x-large
                href="../family"
              >
                REGISTER
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    branch: ['BBL', 'KBANK', 'KTB', 'TTB', 'SCB', 'BAY', 'KKP', 'CIMBT', 'TISCO', 'UOBT', 'TCD', 'LHFG', 'ICBCT'],
    country: null,
    nick: '',
    first: '',
    last: '',
    phone: '',
    bank: '',
    email: '',
    password: '',
    accname: '',
    prvname: '',
    promt: ''
  }),
  computed: {
    form () {
      return {
        slbrc: this.slbrc
      }
    }
  }
}
</script>
<style scoped>
.title {
  color: red !important;
  text-align: center;
  font-size: 25px !important;
  align-items: center;
}
</style>
