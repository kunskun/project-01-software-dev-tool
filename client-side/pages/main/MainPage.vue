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
    <v-row class="justify-center" style="margin-top: 1%">
      <v-card style="padding: 0px 20px 20px 20px">
        <v-row>
          <v-row style="padding: 10px"></v-row>
          <v-col cols="10">
            <v-card-text style="font-size: 1.5rem; font-weight: bold">
              Host
            </v-card-text>
          </v-col>
          <v-col cols="2">
            <v-btn style="background-color: blue; color: white; margin-top: 7px"
              >Create</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-card style="background-color: #a2afbc">
            <v-row>
              <v-col cols="2">
                <v-img
                  style="width: 50%; height: 50%; margin: 20px"
                  src="https://cdn-icons-png.flaticon.com/512/1383/1383260.png"
                />
                <v-text style="margin-left: 30px"> YouTube </v-text><br />
                <v-text style="margin-left: 30px"> Premium </v-text>
              </v-col>
              <v-col cols="2">
                <v-text>Progress</v-text>
              </v-col>
              <v-col cols="6" align="center" justify="center">
                <v-text>Member</v-text>
                <v-row>
                  <v-col cols="2"
                    ><v-img
                      src="https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png"
                      width="50px"
                    ></v-img
                  ></v-col>
                  <v-col cols="2"><v-btn color="success">Paid</v-btn></v-col>
                  <v-col cols="2"
                    ><v-img
                      src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png"
                      width="50px"
                    ></v-img
                  ></v-col>
                  <v-col cols="2"><v-btn color="success">Paid</v-btn></v-col>
                  <v-col cols="2"
                    ><v-img
                      src="https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png"
                      width="50px"
                    ></v-img
                  ></v-col>
                  <v-col cols="2"><v-btn color="success">Paid</v-btn></v-col>
                </v-row>
                <v-row>
                  <v-col cols="2"
                    ><v-img
                      src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png"
                      width="50px"
                    ></v-img
                  ></v-col>
                  <v-col cols="2"><v-btn color="success">Paid</v-btn></v-col>
                  <v-col cols="2"
                    ><v-img
                      src="https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png"
                      width="50px"
                    ></v-img
                  ></v-col>
                  <v-col cols="2"><v-btn color="error">Not Paid</v-btn></v-col>
                  <v-col cols="2"
                    ><v-img
                      src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png"
                      width="50px"
                    ></v-img
                  ></v-col>
                  <v-col cols="2"><v-btn color="error">Not Paid</v-btn></v-col>
                </v-row>
              </v-col>
              <v-col cols="2" align="center" justify="center">
                <v-btn style="margin:50px">>>></v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-col cols="3"></v-col>
        </v-row>
        <v-row>
          <v-row style="padding: 10px"></v-row>
          <v-col cols="10">
            <v-card-text style="font-size: 1.5rem; font-weight: bold">
              Member
            </v-card-text>
          </v-col>
          <v-col cols="2">
            <v-btn style="background-color: purple; color: white; margin-top: 7px"
              >Join</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-card style="background-color: #a2afbc">
            <v-row>
              <v-col cols="2">
                <v-img
                  style="width: 50%; height: 50%; margin: 20px"
                  src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504929.png?token=exp=1645367214~hmac=361ca5952e310eb9b7dc65ba512a548c"
                />
                <v-text style="margin-left: 40px"> Netfilx </v-text>
              </v-col>
              <v-col cols="2">
                <v-text>Progress</v-text>
              </v-col>
              <v-col cols="6" align="center" justify="center">
                <v-text>Member</v-text>
                <v-row>
                  <v-col cols="2"
                    ><v-img
                      src="https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png"
                      width="50px"
                    ></v-img
                  ></v-col>
                  <v-col cols="2"><v-btn color="success">Paid</v-btn></v-col>
                  <v-col cols="2"
                    ><v-img
                      src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png"
                      width="50px"
                    ></v-img
                  ></v-col>
                  <v-col cols="2"><v-btn color="error">Not Paid</v-btn></v-col>
                  <v-col cols="2"
                    ><v-img
                      src="https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png"
                      width="50px"
                    ></v-img
                  ></v-col>
                  <v-col cols="2"><v-btn color="success">Paid</v-btn></v-col>
                </v-row>
                <v-row>
                  <v-col cols="2"
                    ><v-img
                      src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png"
                      width="50px"
                    ></v-img
                  ></v-col>
                  <v-col cols="2"><v-btn color="success">Paid</v-btn></v-col>
                  <v-col cols="2"
                    ><v-img
                      src="https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png"
                      width="50px"
                    ></v-img
                  ></v-col>
                  <v-col cols="2"><v-btn color="success"> Paid </v-btn></v-col>
                </v-row>
              </v-col>
              <v-col cols="2" align="center" justify="center">
                <v-btn style="margin:50px">>>></v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-col cols="3"></v-col>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>
<style scoped>
.title {
  color: white;
  font-weight: bold;
}
</style>
