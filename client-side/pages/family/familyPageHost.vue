<template>
  <div>
    <v-app-bar color="#F90716" dense dark >
      <v-app-bar-nav-icon />
      <v-spacer />
      <v-btn icon>
        <v-icon>
          mdi-account-circle
        </v-icon>
      </v-btn>
      <v-menu left bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>
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
                <v-card-text style="font-size: 2rem; font-weight: bold;" v-if="!isEdit"> {{familyName}}</v-card-text>
                <v-text-field :placeholder="familyName" filled v-else></v-text-field>
              </v-col>
              <v-col v-show="!isEdit">
                <v-card-text> Progress Bar </v-card-text>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2" v-if="!isEdit">
            <div style="background-color:#C5C5C5; border-radius: 25px; text-align: center; height: 80px;">BRUQ856 <br>
              <v-btn color="black" class="title" style="border-radius: 15px; width: 100%; height: 35px; margin-top: 10%">Copy Code</v-btn>
            </div>
          </v-col>
          <v-col cols="2" v-else></v-col>
          <v-col cols="2">
            <template v-if="!isEdit" >
              <v-btn color="purple" class="title" style="border-radius: 15px; width: 100%; height: 40px; margin: 2%" @click="isEdit = !isEdit">Edit</v-btn>
              <v-btn color="black" class="title" style="border-radius: 15px; width: 100%; height: 40px; margin: 2%">History</v-btn>
            </template>
            <v-btn color="success" class="title" style="border-radius: 15px; width: 100%; height: 40px; margin: 2%" @click="isEdit = !isEdit" v-else>Done</v-btn>
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
        <v-row align="center" justify="center" v-for="member in members" :key="member.id">
          <v-col cols="4">
            <v-row align="center" justify="center">
              <v-col cols="4"><v-img :src='member.image' width="50px"></v-img></v-col>
              <v-col cols="8">{{member.name}}<span v-show="member.role === 'Host'"> (HOST)</span></v-col>
            </v-row>
          </v-col>
          <v-col cols="3">{{member.email}}</v-col>
          <v-col cols="2">{{member.phone}}</v-col>
          <template v-if="!isEdit">
            <v-col cols="2">
              <v-btn depressed color="warning" v-if="member.status === 'waiting'"> Approve </v-btn>
              <v-btn depressed disabled v-else> Approve </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn style="width: 100%" color="success" v-if="member.status === 'paid'"> Paid </v-btn>
              <v-btn style="width: 100%" color="warning" v-if="member.status === 'waiting'"> Waiting </v-btn>
              <v-btn style="width: 100%" color="error" v-if="member.status === 'not paid'"> Not Paid </v-btn>
            </v-col>
          </template>
          <template v-else>
            <v-col cols="2"></v-col>
            <v-col cols="1">
              <v-btn style="width: 100%" color="error" v-show="member.role !== 'Host'" @click='kickMember(member.id)'> Kick </v-btn>
            </v-col>
          </template>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    isEdit: false,
    familyName: 'Bruno Family',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ],
    members: [
      {
        id: '1',
        name: 'แพรไหม',
        role: 'Host',
        email: 'preamai@gmail.com',
        phone: '0123456789',
        status: 'paid',
        image: 'https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png'
      },
      {
        id: '2',
        name: 'อนุชา',
        role: 'Member',
        email: 'anucha@gmail.com',
        phone: '0896547321',
        status: 'waiting',
        image: 'https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png'
      },
      {
        id: '3',
        name: 'แพรไหม',
        role: 'Member',
        email: 'preamai@gmail.com',
        phone: '0123456789',
        status: 'waiting',
        image: 'https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png'
      },
      {
        id: '4',
        name: 'อนุชา',
        role: 'Member',
        email: 'anucha@gmail.com',
        phone: '0896547321',
        status: 'not paid',
        image: 'https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png'
      },
      {
        id: '5',
        name: 'แพรไหม',
        role: 'Member',
        email: 'preamai@gmail.com',
        phone: '0123456789',
        status: 'paid',
        image: 'https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png'
      },
      {
        id: '6',
        name: 'อนุชา',
        role: 'Member',
        email: 'anucha@gmail.com',
        phone: '0896547321',
        status: 'not paid',
        image: 'https://toppng.com/uploads/preview/man-icon-icon-11553432006itw46zhhk8.png'
      }
    ]
  }),
  methods: {
    kickMember (id) {
      this.members = this.members.filter((member) => {
        return member.id !== id
      })
      // console.log(this.members)
    }
  }
}
</script>
<style scoped>
  .title{
    color: white;
    font-weight: bold;
  }
</style>
