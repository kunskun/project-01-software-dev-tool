<template>
  <div>
    <v-app-bar color="#F90716" dense dark>
      <v-app-bar-nav-icon />
      <v-spacer />
      <v-btn icon>
        <v-icon> mdi-account-circle </v-icon>
      </v-btn>
      <v-menu left bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon> mdi-email </v-icon>
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
      <v-alert
        type="success"
        color="green lighten-2"
        dark
        :value="copyAlert"
        transition="scale-transition"
        style="position: absolute; z-index: 1"
      >
        Copy code success
      </v-alert>
      <v-card style="padding: 10px 20px 20px 20px">
        <v-row align="center" justify="center">
          <v-col cols="2">
            <v-img
              style="width: 90%"
              :src="family && family.service.serviceImage"
            />
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-col cols="8">
                <v-card-text>
                  {{ family && family.service.serviceName }}
                </v-card-text>
                <v-card-text
                  v-if="!isEdit"
                  style="font-size: 2rem; font-weight: bold"
                >
                  {{ family && family.familyName }}
                </v-card-text>
                <v-text-field
                  v-else
                  v-model="editFamiltName"
                  :placeholder="family && family.familyName"
                  filled
                />
              </v-col>
              <v-col v-show="!isEdit" cols="4">
                <v-progress-circular
                  color="pink dark-2"
                  :rotate="90"
                  :size="(family && family.service.serviceMaxMember) * 20"
                  :width="15"
                  :value="value"
                >
                  {{ value / 20 }} /
                  {{ family && family.service.serviceMaxMember }}
                </v-progress-circular>
              </v-col>
            </v-row>
          </v-col>
          <template v-if="viewAs === 'host'">
            <v-col v-if="!isEdit" cols="2">
              <div
                style="
                  background-color: #c5c5c5;
                  border-radius: 25px;
                  text-align: center;
                  height: 80px;
                  padding-top: 2%;
                  font-weight: bold;
                  font-size: 1.5em;
                "
              >
                {{ family && family.familyCode }} <br />
                <v-btn
                  color="black"
                  class="title"
                  style="
                    border-radius: 15px;
                    width: 100%;
                    height: 40px;
                    margin-top: 2%;
                  "
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
                  class="title btn"
                  @click="toggleEditAndSave"
                >
                  Edit
                </v-btn>
                <v-btn color="black" class="title btn" @click="dialog = true">
                  History
                </v-btn>
              </template>
              <v-btn
                v-else
                color="success"
                class="title btn"
                @click="toggleEditAndSave"
              >
                Done
              </v-btn>
            </v-col>
          </template>
          <template v-else-if="viewAs === 'member'">
            <v-col cols="2" />
            <v-col cols="2">
              <v-btn
                color="pink"
                class="title"
                style="
                  border-radius: 15px;
                  width: 100%;
                  height: 40px;
                  margin: 2%;
                "
                :to="url"
                large
                href="../family/paybill"
              >
                Pay bill
              </v-btn>
              <v-btn color="black" class="title btn" @click="dialog = true">
                History
              </v-btn>
            </v-col>
          </template>
        </v-row>
        <template>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="700">
              <v-card>
                <v-card-title class="text-h5"> Payment History </v-card-title>
                <v-row v-for="history in historys" :key="history.id">
                  <!-- this is loop from history -->
                  <v-col cols="4" style="margin: 3%">
                    <v-icon large style="font-size: 10rem">mdi-receipt</v-icon>
                  </v-col>
                  <v-col cols="4" style="margin-top: 5%">
                    <p>Member name: {{ history.name }}</p>
                    <p>Email: {{ history.email }}</p>
                    <p>Phone: {{ history.phone }}</p>
                    <p>Method: {{ history.bank }} ฿:{{ history.total }}</p>
                  </v-col>
                </v-row>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="gray" text @click="dialog = false">
                    close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>
        <v-row>
          <v-col cols="3">
            <span> ราคา </span><br />
            <span style="font-size: 2rem">
              {{ family && family.service.serviceAmount }} บาท
            </span>
          </v-col>
          <v-col cols="3">
            <span> ราคา/คน </span><br />
            <!-- count member ex. mockup have 6 member to divide -->
            <span style="font-size: 2rem">
              {{
                (
                  (family && family.service.serviceAmount) / members.length
                ).toFixed(2)
              }}
              บาท
            </span>
          </v-col>
          <v-col cols="3">
            <span> จำนวนคนสูงสุด </span><br />
            <!-- count member ex. mockup have 6 member to count -->
            <span style="font-size: 2rem">
              {{ members.length }}/{{
                family && family.service.serviceMaxMember
              }}
              คน
            </span>
          </v-col>
          <v-col cols="3" />
        </v-row>
        <v-row>
          <v-col cols="4" style="font-weight: bold"> MEMBER </v-col>
          <v-col cols="3" style="font-weight: bold"> EMAIL </v-col>
          <v-col cols="3" style="font-weight: bold"> PHONE </v-col>
          <v-col cols="1" />
          <v-col cols="1" />
        </v-row>
        <!-- member 1-6 -->
        <v-row
          v-for="member in members"
          :key="member.id"
          align="center"
          justify="center"
        >
          <v-col cols="4">
            <v-row align="center" justify="center">
              <v-col cols="4">
                <v-img :src="member.image" width="50px" />
              </v-col>
              <v-col cols="8">
                {{ member.name }}
                <span v-show="member.role === 'host'"> (HOST)</span>
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
            <v-col v-if="viewAs === 'host'" cols="2">
              <v-btn
                v-if="member.status === 'waiting'"
                depressed
                color="warning"
              >
                Approve
              </v-btn>
              <v-btn v-else depressed disabled> Approve </v-btn>
            </v-col>
            <v-col v-else-if="viewAs === 'member'" cols="2" />
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
          <template v-else-if="isEdit">
            <v-col cols="2" />
            <v-col cols="1">
              <v-btn
                v-show="member.role !== 'host'"
                style="width: 100%"
                color="error"
                @click="kickMemberModal(member)"
              >
                Kick
              </v-btn>
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
            <v-btn text @click="kickModal = false"> Cancel </v-btn>
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

export const state = () => ({
  familyId: ''
})

export default {
  data: () => ({
    dialog: false,
    isEdit: false,
    serviceImage: 'https://cdn-icons-png.flaticon.com/512/1383/1383260.png',
    familyName: 'Bruno Family',
    editFamiltName: '',
    kickModal: false,
    viewAs: 'member', // change 'host' to 'member' to view as member role
    value: 40, // 2*20
    tmp: {},
    copyAlert: false,
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters'
    ],
    members: [
      {
        id: '1',
        name: 'แพรไหม',
        role: 'host',
        email: 'preamai@gmail.com',
        phone: '0123456789',
        status: 'paid',
        image: 'https://cdn-icons-png.flaticon.com/512/122/122454.png'
      },
      {
        id: '2',
        name: 'อนุชา',
        role: 'member',
        email: 'anucha@gmail.com',
        phone: '0896547321',
        status: 'waiting',
        image: 'https://cdn-icons-png.flaticon.com/512/122/122492.png'
      },
      {
        id: '3',
        name: 'แพรไหม',
        role: 'member',
        email: 'preamai@gmail.com',
        phone: '0123456789',
        status: 'waiting',
        image: 'https://cdn-icons-png.flaticon.com/512/122/122445.png'
      },
      {
        id: '4',
        name: 'อนุชา',
        role: 'member',
        email: 'anucha@gmail.com',
        phone: '0896547321',
        status: 'not paid',
        image: 'https://cdn-icons-png.flaticon.com/512/122/122478.png'
      },
      {
        id: '5',
        name: 'อนุชา',
        role: 'member',
        email: 'preamai@gmail.com',
        phone: '0123456789',
        status: 'paid',
        image: 'https://cdn-icons-png.flaticon.com/512/122/122481.png'
      },
      {
        id: '6',
        name: 'แพรไหม',
        role: 'member',
        email: 'preamai@gmail.com',
        phone: '0123456789',
        status: 'waiting',
        image: 'https://cdn-icons-png.flaticon.com/512/122/122448.png'
      }
    ],

    historys: [
      {
        id: '1',
        name: 'แพรไหม',
        role: 'host',
        email: 'preamai@gmail.com',
        phone: '0123456789',
        status: 'paid',
        image:
          'https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png',
        bank: 'ttb',
        total: '83.80'
      },
      {
        id: '5',
        name: 'แพรไหม',
        role: 'member',
        email: 'preamai@gmail.com',
        phone: '0123456789',
        status: 'paid',
        image:
          'https://www.pngitem.com/pimgs/m/74-749452_business-woman-woman-icon-hd-png-download.png',
        bank: 'ttb',
        total: '83.80'
      }
    ]
  }),
  methods: {
    kickMember (id) {
      this.members = this.members.filter((member) => {
        return member.id !== id
      })
      this.kickModal = false
    },
    toggleEditAndSave () {
      this.isEdit = !this.isEdit
      // แก้ตอน save ลง DB ให้หน่อย
      if (this.editFamiltName !== this.familyName && this.editFamiltName) {
        this.familyName = this.editFamiltName
      }
      // make sure ว่าปิด dialog แน่นอนตอนปิด edit
      this.kickModal = false
    },
    kickMemberModal (member) {
      this.tmp = member
      this.kickModal = true
    },
    copyCode (code) {
      navigator.clipboard.writeText(code)
      this.copyAlert = true
      setTimeout(() => {
        this.copyAlert = false
      }, 2000)
    }
  },
  apollo: {
    family: {
      query: gql`
        query getFamily($id: String!) {
          family(id: $id) {
            familyName
            familyCode
            service {
              serviceName
              serviceAmount
              servicePeriod
              serviceMaxMember
              serviceImage
            }
          }
        }
      `,
      variables: {
        // id: state.familyId
        id: '62094f951d5751ba7b8db601'
      }
    }
  }
}
</script>
<style scoped>
.title {
  color: white;
  font-weight: bold;
}
.v-progress-circular {
  margin: 1rem;
}
.btn {
  border-radius: 15px;
  width: 100%;
  height: 40px;
  margin: 2%;
}
</style>
