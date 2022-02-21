<template>
  <v-sheet>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12">
            My Family:<br>
            {{ family && family.familyName }}
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(item, i) in families" :key="i" cols="12">
            Family: {{ item.familyName }}
            <br>
            Service:
            <ul>
              <li>
                <v-img :src="item.service.serviceImage" width="25" />
                <div>
                  {{ item.service.serviceName }}
                </div>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="my-12">
      <v-container>
        <v-row>
          <v-col cols="12">
            <form @submit.prevent="createFamily">
              <v-text-field
                v-model="familyData.familyName"
                label="Family Name"
                required
              />
              <v-text-field
                v-model="familyData.familyCode"
                label="Family Code"
                required
              />
              <v-select
                v-model="familyData.service"
                :items="services"
                item-value="id"
                item-text="serviceName"
                label="Services"
                dense
              />

              <v-btn
                class="mr-4"
                type="submit"
              >
                create
              </v-btn>
            </form>
          </v-col>
          <v-col class="d-flex justify-center">
            {{ familyData }}
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-sheet>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      familyData: {
        familyName: '',
        familyCode: '',
        service: ''
      }
    }
  },
  apollo: {
    // Query only
    family: gql`query {
      family (id: "6207ffe9c038d2a224c601e8") {
        familyName
      }
    }`,
    families: gql`query {
      families {
        familyName
        service {
          serviceName
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
        console.log(e)
      }
    }
  }
}
</script>
