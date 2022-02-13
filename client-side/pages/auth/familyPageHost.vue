<template>
  <div>
    <v-app-bar
      color="#F90716"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="info">mdi-account-circle</v-icon>
      </v-btn>
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon color="warning">mdi-email</v-icon>
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
    <v-row class="justify-center">
      <v-card style="width: 100%">
        <!-- singup -->
        <v-img
        height="250px"
        src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png"
        ></v-img>
        <v-card-text class="title"> Bruno Family </v-card-text>
        <v-row>
        <v-col cols="7">
        <v-card-subtitle> Youtube Premium </v-card-subtitle>
        </v-col>
        <v-col cols="3">
            <span style="background-color:#C5C5C5"> BRUQ856 </span>
            <v-btn color="black" class="title" style="margin-bottom:5px" small>Copy Family Code</v-btn>
        </v-col>
        <v-col cols="2">
        <v-btn color="purple" class="title" style="margin-bottom:5px" small>Edit</v-btn>
        <v-btn color="black" class="title" small>History</v-btn>
        </v-col>
        </v-row>
        <v-card-text class="text--primary">
            <v-row>
                <v-col cols="4">
                    <span> Price 299 บาท/เดือน </span>
                </v-col>
                <v-col cols="4">
                    <span> Price 49.83 บาท/คน </span>
                </v-col>
                <v-col cols="4">
                    <span> 6/6 คน </span>
                </v-col>
            </v-row>
            </v-card-text>
            <v-card-text class="text--primary">
            <v-row>
                <v-col cols="3">
                    <span> MEMBER </span>
                    <v-row style="height:75px">
                    <v-col cols="4"><v-img src="https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png" width="50px"></v-img></v-col>
                    <v-col cols="8">แพรไหม(HOST)</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="4"><v-img src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png" width="50px"></v-img></v-col>
                    <v-col cols="8">อนุชา</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="4"><v-img src="https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png" width="50px"></v-img></v-col>
                    <v-col cols="8">เพียว</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="4"><v-img src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png" width="50px"></v-img></v-col>
                    <v-col cols="8">ศิลา</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="4"><v-img src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png" width="50px"></v-img></v-col>
                    <v-col cols="8">โกเท็น</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="4"><v-img src="https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png" width="50px"></v-img></v-col>
                    <v-col cols="8">อับดุล</v-col>
                    </v-row>
                </v-col>
                <v-col cols="3">
                    <span> EMAIL </span>
                    <v-row style="height:75px">
                    <v-col cols="8">preamai@gmail.com</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="8">anu@gmail.com</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="8">pure@gmail.com</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="8">sira@gmail.com</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="8">goten@gmail.com</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="8">aubdull@gmail.com</v-col>
                    </v-row>
                </v-col>
                <v-col cols="3">
                    <span> PHONE </span>
                    <v-row style="height:75px">
                    <v-col cols="8">0123456789</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="8">0896547321</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="8">0236544789</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="8">0145698753</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="8">0321456987</v-col>
                    </v-row>
                    <v-row style="height:75px">
                    <v-col cols="8">0789632541</v-col>
                    </v-row>
                </v-col>
                <v-col cols="2">
                <v-row style="height:75px">
                <v-btn
                        depressed
                        disabled
                    >
                    Approve
                    </v-btn>
                </v-row>
                <v-row style="height:75px">
                <v-btn
                        depressed
                        color="warning"
                    >
                    Approve
                    </v-btn>
                </v-row>
                <v-row style="height:75px">
                <v-btn
                        depressed
                        disabled
                    >
                    Approve
                    </v-btn>
                </v-row>
                <v-row style="height:75px">
                <v-btn
                        depressed
                        disabled
                    >
                    Approve
                    </v-btn>
                </v-row>
                <v-row style="height:75px">
                <v-btn
                        depressed
                        color="warning"
                    >
                    Approve
                    </v-btn>
                </v-row>
                <v-row style="height:75px">
                <v-btn
                        depressed
                        disabled
                    >
                    Approve
                    </v-btn>
                </v-row>
                </v-col>
                <v-col cols="1">
                    <v-row style="height:75px">
                    <v-btn color="success" small>
                        Paid
                    </v-btn>
                    </v-row>
                    <v-row style="height:75px">
                    <v-btn color="success" small>
                        Paid
                    </v-btn>
                    </v-row>
                    <v-row style="height:75px">
                    <v-btn color="warning" small>
                        Waiting
                    </v-btn>
                    </v-row>
                    <v-row style="height:75px">
                    <v-btn color="success" small>
                        Paid
                    </v-btn>
                    </v-row>
                    <v-row style="height:75px">
                    <v-btn color="success" small>
                        Paid
                    </v-btn>
                    </v-row>
                    <v-row style="height:75px">
                    <v-btn color="error" small>
                        Not Paid
                    </v-btn>
                    </v-row>
                </v-col>
            </v-row>
            </v-card-text>
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
