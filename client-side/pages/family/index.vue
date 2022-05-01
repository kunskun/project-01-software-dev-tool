<template>
  <div>
    <v-app-bar color="#F90716" dense dark>
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
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Notifications {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-row class="justify-center" style="margin-top: 1%">
      <v-card style="padding: 0px 20px 20px 20px">
        <v-row class="d-flex justify-space-between">
          <v-col cols="11">
            <v-card-text style="font-size: 1.5rem; font-weight: bold">
              Host
            </v-card-text>
          </v-col>
          <v-col cols="1">
            <v-btn
              class="create-button"
              style="
                width: 100%;
                background-color: blue;
                color: white;
                margin-top: 7px"
              @click="createDialog = true"
            >
              Create
            </v-btn>
          </v-col>
        </v-row>
        <template v-if="families != null">
          <v-row v-for="family in families" :key="family.id" class="host-data">
            <nuxt-link style="text-decoration: none;" to="../family/detail">
              <v-card class="cardstyle" @click="selectFamily(family.id)">
                <v-row>
                  <v-col cols="2" align="center" justify="center">
                    <v-img
                      style="width: 70%;"
                      :src="family.service.serviceImage"
                    />
                    <v-text align="center" justify="center">
                      <span>
                        {{ family.familyName }}
                      </span>
                    </v-text>
                  </v-col>
                  <v-col cols="2" align="center" justify="center">
                    <v-progress-circular
                      color="pink dark-2"
                      :rotate="90"
                      :size="6*15"
                      :width="10"
                      :value="value"
                    >
                      {{ value/15 }} / {{ family.service.serviceMaxMember }}
                    </v-progress-circular>
                  </v-col>
                  <v-col cols="6" align="center" justify="center" style="padding: 2%;">
                    <v-row align="center" justify="center">
                      <v-text style="font-weight: bold;">
                        Member
                      </v-text>
                    </v-row>
                    <v-row>
                      <v-col v-for="member in members" :key="member.id" cols="4">
                        <v-row>
                          <v-col cols="3">
                            <v-img
                              :src="member.image"
                              style="width: 100%; border-radius: 50%;"
                            />
                          </v-col>
                          <v-col cols="1">
                            <v-btn v-if="member.status === 'paid'" color="success" class="btn">
                              Paid
                            </v-btn>
                            <v-btn v-else-if="member.status === 'not paid'" color="error" class="btn">
                              Not Paid
                            </v-btn>
                            <v-btn v-else-if="member.status === 'waiting'" color="warning" class="btn">
                              Waiting
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="2" align="center" justify="center">
                    <v-btn style="margin:50px">
                      >>>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </nuxt-link>
            <v-col cols="3" />
          </v-row>
        </template>
        <template v-else>
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <div class="font-weight-medium">
                Not Found
              </div>
            </v-col>
          </v-row>
        </template>
        <v-row>
          <v-col cols="11">
            <v-card-text style="font-size: 1.5rem; font-weight: bold">
              Member
            </v-card-text>
          </v-col>
          <v-col cols="1">
            <v-btn
              class="join-button"
              style="width: 100%;
              background-color: purple;
              color: white;
              margin-top: 7px"
              @click="joinDialog = true"
            >
              Join
            </v-btn>
          </v-col>
        </v-row>
        <template v-if="families != null">
          <v-row v-for="family in memberFamily" :key="family.id" class="member-data">
            <nuxt-link style="text-decoration: none;" to="../family/detail">
              <v-card style="background-color: #a2afbc; padding: 3% 0">
                <v-row>
                  <v-col cols="2">
                    <v-img
                      style="width: 70%; height: 50%; margin: 20px"
                      :src="family.familyImage"
                    />
                    <v-text style="margin-left: 30px; text-align: center;">
                      {{ family.familyName }}
                    </v-text>
                  </v-col>
                  <v-col cols="2" align="center" justify="center">
                    <v-progress-circular
                      color="pink dark-2"
                      :rotate="90"
                      :size="6*15"
                      :width="10"
                      :value="value"
                    >
                      {{ value/15 }} / 6
                    </v-progress-circular>
                  </v-col>
                  <v-col cols="6" align="center" justify="center" style="padding: 2%;">
                    <v-row align="center" justify="center">
                      <v-text style="font-weight: bold;">
                        Member
                      </v-text>
                    </v-row>
                    <v-row>
                      <v-col v-for="member in members" :key="member.id" cols="4">
                        <v-row>
                          <v-col cols="3">
                            <v-img
                              :src="member.image"
                              style="width: 100%; border-radius: 50%;"
                            />
                          </v-col>
                          <v-col cols="1">
                            <v-btn v-if="member.status === 'paid'" color="success" class="btn">
                              Paid
                            </v-btn>
                            <v-btn v-else-if="member.status === 'not paid'" color="error" class="btn">
                              Not Paid
                            </v-btn>
                            <v-btn v-else-if="member.status === 'waiting'" color="warning" class="btn">
                              Waiting
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="2" align="center" justify="center">
                    <v-btn style="margin-top: 40%;">
                      >>>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </nuxt-link>
            <v-col cols="3" />
          </v-row>
        </template>
        <template v-else>
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <div class="font-weight-medium">
                Not Found
              </div>
            </v-col>
          </v-row>
        </template>
      </v-card>
    </v-row>
    <!-- create family dialog -->
    <v-row justify="center">
      <v-dialog
        v-model="createDialog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Create New Family</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <form @submit.prevent="createFamily">
                    <v-text-field
                      v-model="familyData.familyName"
                      label="Family Name"
                      required
                    />
                    <!-- <v-text-field
                      v-model="familyData.familyCode"
                      label="Family Code"
                      required
                      disabled
                    /> -->
                    <br>
                    <v-select
                      v-model="familyData.service"
                      :items="services"
                      item-value="id"
                      item-text="serviceName"
                      label="Services"
                      dense
                    />
                  </form>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              class="close-create-btn"
              color="darken-1"
              text
              @click="createDialog = false"
            >
              Close
            </v-btn>
            <NuxtLink style="text-decoration: none;" to="../family/detail">
              <v-btn
                color="blue darken-1"
                class="save-button-family mr-4"
                type="submit"
                text
                @click="createFamily(), createDialog = false"
              >
                Save
              </v-btn>
            </NuxtLink>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- join family dialog -->
    <v-row justify="center">
      <v-dialog
        v-model="joinDialog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Join Family</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <form @submit.prevent="joinFamily">
                    <v-text-field
                      v-model="joinCode"
                      label="Family Code"
                      required
                    />
                  </form>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              class="close-join-btn"
              color="darken-1"
              text
              @click="joinDialog = false"
            >
              Close
            </v-btn>
            <NuxtLink style="text-decoration: none;" to="../family/detail">
              <v-btn
                color="blue darken-1"
                class="save-button-code mr-4"
                type="submit"
                text
                @click="joinFamily(), joinDialog = false"
              >
                Save
              </v-btn>
            </NuxtLink>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-named-as-default
import gql from 'graphql-tag'
// import { state } from './detail.vue'
export default {
  data: () => ({
    value: 30,
    createDialog: false,
    joinDialog: false,
    familyData: {
      familyName: '',
      familyCode: Math.random().toString(36).toUpperCase().substr(2, 6),
      service: ''
    },
    joinCode: '',
    selectId: '',
    members: [
      {
        id: 1,
        image: 'https://cdn-icons-png.flaticon.com/512/122/122454.png',
        status: 'paid'
      },
      {
        id: 2,
        image: 'https://cdn-icons-png.flaticon.com/512/122/122492.png',
        status: 'not paid'
      },
      {
        id: 3,
        image: 'https://cdn-icons-png.flaticon.com/512/122/122445.png',
        status: 'not paid'
      },
      {
        id: 4,
        image: 'https://cdn-icons-png.flaticon.com/512/122/122478.png',
        status: 'not paid'
      },
      {
        id: 5,
        image: 'https://cdn-icons-png.flaticon.com/512/122/122481.png',
        status: 'paid'
      },
      {
        id: 6,
        image: 'https://cdn-icons-png.flaticon.com/512/122/122448.png',
        status: 'not paid'
      }
    ]
  }),
  apollo: {
    // Query only
    family: gql`query {
      family(id: "6207ffe9c038d2a224c601e8"){
        familyName
        familyCode
        service{
          serviceName
          serviceAmount
          servicePeriod
          serviceMaxMember
          serviceImage
        }
      }
    }`,
    families: gql`query {
      families {
        id
        familyName
        familyCode
        service{
          serviceName
          serviceAmount
          servicePeriod
          serviceMaxMember
          serviceImage
        }
      }
    }`,
    services: gql`query {
      services {
        id
        serviceName
      }
    }`
  },
  methods: {
    // Mutation
    async createFamily () {
      try {
        await this.$apollo.mutate({
          mutation: gql`mutation ($input: CreateFamilyInput!) {
            createFamily (input: $input) {
              familyName
              id
            }
          }`,
          variables: {
            input: this.familyData
          }
        })
      } catch (e) {
        // console.log(e)
        return e
      }
    },
    joinFamily () {
      alert('not done yet')
      // try {
      //   await this.$apollo.mutate({
      //     mutation: gql`mutation ($input: CreateFamilyInput!) {
      //       createFamily (input: $input) {
      //         familyName
      //         id
      //       }
      //     }`,
      //     variables: {
      //       input: this.familyData
      //     }
      //   })
      // } catch (e) {
      //   console.log(e)
      // }
    }
    // selectFamily (id) {
    //   state.familyId = id
    // }
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
.cardstyle {
  background-color: #a2afbc;
  padding: 2% 0
}
.btn{
  width: 100%;
  font-size: 0.7rem;
}
</style>
