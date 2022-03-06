<template>
  <v-sheet>
    <v-card>
      <v-card-title>
        Sign in
      </v-card-title>

      <v-card-content>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="username"
              label="Username"
              filled
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="password"
              label="Password"
              filled
            />
          </v-col>
          <v-col>
            <v-btn :to="url" large href="../landing">
              Back
            </v-btn>
            <v-btn :to="url" large href="../family">
              Signin
            </v-btn>
          </v-col>
        </v-row>
      </v-card-content>
    </v-card>
  </v-sheet>
</template>
