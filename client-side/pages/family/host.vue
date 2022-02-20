<template>
  <div>
    <v-app-bar color="#F90716" dense dark>
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
            <v-img style="width: 100%" :src="serviceImage" />
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-col style="">
                <v-card-text> Youtube Premium </v-card-text>
                <v-card-text
                  v-if="!isEdit"
                  style="font-size: 2rem; font-weight: bold;"
                >
                  {{ family && family.familyName }}
                </v-card-text>
                <v-text-field
                  v-else
                  v-model="editFamiltName"
                  :placeholder="familyName"
                  filled
                />
              </v-col>
              <v-col v-show="!isEdit">
                <v-card-text> Progress Bar </v-card-text>
              </v-col>
            </v-row>
          </v-col>
          <v-col v-if="!isEdit" cols="2">
            <div
              style="
                background-color:#C5C5C5;
                border-radius: 25px;
                text-align: center;
                height: 80px;
                padding-top: 2%;
                font-weight: bold;
                font-size: 1.5em"
            >
              {{ family && family.familyCode }} <br>
              <v-btn
                color="black"
                class="title"
                style="
                  border-radius: 15px;
                  width: 100%;
                  height: 40px;
                  margin-top: 2%"
                @click="copyCode(family && family.familyCode)"
              >
                Copy Code
              </v-btn>
            </div>
          </v-col>
          <v-col v-else cols="2" />
          <v-col cols="2">
            <template v-if="!isEdit">
              <v-btn
                color="purple"
                class="title"
                style="
                  border-radius: 15px;
                  width: 100%;
                  height: 40px;
                  margin: 2%"
                @click="toggleEditAneSave"
              >
                Edit
              </v-btn>
              <v-btn
                color="black"
                class="title"
                style="
                  border-radius: 15px;
                  width: 100%;
                  height: 40px;
                  margin: 2%"
              >
                History
              </v-btn>
            </template>
            <v-btn
              v-else
              color="success"
              class="title"
              style="
                border-radius: 15px;
                width: 100%;
                height: 40px;
                margin: 2%"
              @click="toggleEditAneSave"
            >
              Done
            </v-btn>
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
          <v-col cols="3" />
        </v-row>
        <v-row>
          <v-col cols="4" style="font-weight: bold">
            MEMBER
          </v-col>
          <v-col cols="3" style="font-weight: bold">
            EMAIL
          </v-col>
          <v-col cols="3" style="font-weight: bold">
            PHONE
          </v-col>
          <v-col cols="1" />
          <v-col cols="1" />
        </v-row>
        <!-- member 1-6 -->
        <v-row v-for="member in members" :key="member.id" align="center" justify="center">
          <v-col cols="4">
            <v-row align="center" justify="center">
              <v-col cols="4">
                <v-img :src="member.image" width="50px" />
              </v-col>
              <v-col cols="8">
                {{ member.name }}
                <span v-show="member.role === 'Host'"> (HOST)</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="3">
            {{ member.email }}
          </v-col>
          <v-col cols="2">
            {{ member.phone }}
          </v-col>
          <template v-if="!isEdit">
            <v-col cols="2">
              <v-btn
                v-if="member.status === 'waiting'"
                depressed
                color="warning"
              >
                Approve
              </v-btn>
              <v-btn v-else depressed disabled>
                Approve
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn
                v-if="member.status === 'paid'"
                style="width: 100%"
                color="success"
              >
                Paid
              </v-btn>
              <v-btn
                v-if="member.status === 'waiting'"
                style="width: 100%"
                color="warning"
              >
                Waiting
              </v-btn>
              <v-btn
                v-if="member.status === 'not paid'"
                style="width: 100%"
                color="error"
              >
                Not Paid
              </v-btn>
            </v-col>
          </template>
          <template v-else>
            <v-col cols="2"/>
            <v-col cols="1">
              <v-btn
                v-show="member.role !== 'Host'"
                style="width: 100%"
                color="error"
                @click="kickMemberModal(member)"
              > Kick </v-btn>
            </v-col>
          </template>
        </v-row>
      </v-card>
    </v-row>
    <!-- confirm delete -->
    <div class="text-center">
      <v-dialog v-model="kickModal" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Kick Member
          </v-card-title>
          <v-card-text style="padding: 5%">
            Do you want to kick {{ tmp.name }} from your family
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer />
            <v-btn text @click="kickModal = false">
              Cancel
            </v-btn>
            <v-btn color="primary" text @click="kickMember(tmp.id)">
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'

export default {
  data: () => ({
    isEdit: false,
    serviceImage: 'https://cdn-icons-png.flaticon.com/512/1383/1383260.png',
    familyName: 'Bruno Family',
    editFamiltName: '',
    kickModal: false,
    tmp: {},
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
      this.kickModal = false
      // console.log(this.members)
    },
    toggleEditAneSave () {
      this.isEdit = !this.isEdit
      if (this.editFamiltName !== this.familyName && this.editFamiltName) {
        this.familyName = this.editFamiltName
      }
      this.kickModal = false
    },
    kickMemberModal (member) {
      this.tmp = member
      this.kickModal = true
    },
    copyCode (code) {
      navigator.clipboard.writeText(code)
    }
  },
  apollo: {
    family: gql`query {
      family(id: "6207ffe9c038d2a224c601e8"){
        familyName
        familyCode
      }
    }`
  }
}
</script>
<style scoped>
  .title{
    color: white;
    font-weight: bold;
  }
</style>
