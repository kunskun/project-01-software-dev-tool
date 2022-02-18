<template>
  <div>
    <v-app-bar color="#F90716" dense dark >
      <v-app-bar-nav-icon />
      <v-spacer />
      <v-btn icon>
        <v-icon color="info">
          mdi-account-circle
        </v-icon>
      </v-btn>
      <v-menu left bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon color="warning">
              mdi-email
            </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Notifications {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-row class="justify-center" style="margin-top: 1%">
      <v-card style="padding: 0px 20px 20px 20px">
        <v-row align="center" justify="center">
          <v-col cols="2">
            <v-img style="width: 100%" src="https://cdn-icons-png.flaticon.com/512/1383/1383260.png" />
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-col style="">
                <v-card-text> Youtube Premium </v-card-text>
                <v-card-text style="font-size: 2rem; font-weight: bold;"> Bruno Family </v-card-text>
              </v-col>
              <v-col>
                <v-card-text> Progress Bar </v-card-text>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2"></v-col>
          <v-col cols="2">
            <v-btn color="pink" class="title" style="border-radius: 15px; width: 100%; height: 40px; margin: 2%">Pay bill</v-btn>
            <v-btn color="black" class="title" style="border-radius: 15px; width: 100%; height: 40px; margin: 2%">History</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <span> ราคา </span><br>
            <span style="font-size: 2rem;"> 299 บาท </span>
          </v-col>
          <v-col cols="3">
            <span> ราคา/คน </span><br>
            <span style="font-size: 2rem;"> 49.83 บาท </span>
          </v-col>
          <v-col cols="3">
            <span> จำนวนคนสูงสุด </span><br>
            <span style="font-size: 2rem;"> 6/6 คน </span>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
        <v-row>
          <v-col cols="4" style="font-weight: bold">MEMBER</v-col>
          <v-col cols="3" style="font-weight: bold">EMAIL</v-col>
          <v-col cols="3" style="font-weight: bold">PHONE</v-col>
          <v-col cols="1"></v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <!-- member 1-6 -->
        <v-row align="center" justify="center">
          <v-col cols="4">
            <v-row align="center" justify="center">
              <v-col cols="4"><v-img src="https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png" width="50px"></v-img></v-col>
              <v-col cols="8">แพรไหม(HOST)</v-col>
            </v-row>
          </v-col>
          <v-col cols="3">preamai@gmail.com</v-col>
          <v-col cols="2">0123456789</v-col>
          <v-col cols="2"></v-col>
          <v-col cols="1">
            <v-btn style="width: 100%" color="success"> Paid </v-btn>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="4">
            <v-row align="center" justify="center">
              <v-col cols="4"><v-img src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png" width="50px"></v-img></v-col>
              <v-col cols="8">อนุชา</v-col>
            </v-row>
          </v-col>
          <v-col cols="3">anu@gmail.com</v-col>
          <v-col cols="2">0896547321</v-col>
          <v-col cols="2"></v-col>
          <v-col cols="1">
            <v-btn style="width: 100%" color="warning"> Waiting </v-btn>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="4">
            <v-row align="center" justify="center">
              <v-col cols="4"><v-img src="https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png" width="50px"></v-img></v-col>
              <v-col cols="8">แพรไหม</v-col>
            </v-row>
          </v-col>
          <v-col cols="3">preamai@gmail.com</v-col>
          <v-col cols="2">0123456789</v-col>
          <v-col cols="2"></v-col>
          <v-col cols="1">
            <v-btn style="width: 100%" color="success"> Paid </v-btn>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="4">
            <v-row align="center" justify="center">
              <v-col cols="4"><v-img src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png" width="50px"></v-img></v-col>
              <v-col cols="8">อนุชา</v-col>
            </v-row>
          </v-col>
          <v-col cols="3">anu@gmail.com</v-col>
          <v-col cols="2">0896547321</v-col>
          <v-col cols="2"></v-col>
          <v-col cols="1">
            <v-btn style="width: 100%" color="warning"> Waiting </v-btn>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="4">
            <v-row align="center" justify="center">
              <v-col cols="4"><v-img src="https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png" width="50px"></v-img></v-col>
              <v-col cols="8">แพรไหม</v-col>
            </v-row>
          </v-col>
          <v-col cols="3">preamai@gmail.com</v-col>
          <v-col cols="2">0123456789</v-col>
          <v-col cols="2"></v-col>
          <v-col cols="1">
            <v-btn style="width: 100%" color="success"> Paid </v-btn>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="4">
            <v-row align="center" justify="center">
              <v-col cols="4"><v-img src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png" width="50px"></v-img></v-col>
              <v-col cols="8">อนุชา</v-col>
            </v-row>
          </v-col>
          <v-col cols="3">anu@gmail.com</v-col>
          <v-col cols="2">0896547321</v-col>
          <v-col cols="2"></v-col>
          <v-col cols="1">
            <v-btn style="width: 100%" color="error"> Not Paid </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>
<style scoped>
.title{
    color: white;
    font-weight: bold;
}
</style>
