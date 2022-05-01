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
        <v-card class="backgroud">
            <v-row class="text-center" justify="center">
                <v-col
                    cols="12"
                    md="3"
                    class="align-center justify-center d-flex flex-row"
                >
                    <a href="./paybill">
                        <div
                        class="
                            px-8
                            py-6
                            secondary
                            rounded-circle
                            d-inline-block
                            fontcircles"
                        >
                        1
                        </div>
                    </a>
                    <v-progress-linear
                        color="secondary"
                        rounded
                        value="100"
                    />
                    <a href="./upload">
                        <div
                        class="
                            px-8
                            py-6
                            secondary
                            rounded-circle
                            d-inline-block
                            fontcircles"
                        >
                        2
                        </div>
                    </a>
                </v-col>
            </v-row>
            <div class="text-center fontpay" justify="center">PAY</div>
            <v-row class="row">
                <v-col cols="12" class="text-center" >
                    <div class="upload text-center">
                        <div class="my-1">
                            <img src="../../static/upload.jpg" alt="">
                        </div>
                        <div class="my-1">
                            <input type="file" id="file" ref="file" @click="Upload(file)"/>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-col class=" d-flex justify-end px-5">
                <v-btn class="button" color="primary" :to="url" large href="./paybill">
                    Back
                </v-btn>
                <v-btn class="button" color="info" :to="url" large href="./detail">
                    FINISH
                </v-btn>
            </v-col>
        </v-card>
    </div>
</template>
<style scoped>
.backgroud {
  background-color: white;
  padding: 50px;
}
.pay{
    background-color: rgb(88, 86, 86);
    width: 20%;
    border-radius: 10px;
}
.upload{
    background-color: white;
    justify-content:space-around;
    padding: 20px;
}
.button{
    margin: 5px;
}
.btn-right{
    margin-left: 76%;
}
.line{
    background-color: black;
    width: 20px;
    height: 500px;
}
.circle{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: -20px;
    position: relative;
    justify-content: center;
    display:flex;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    border: 10px solid black;
    background-color: black;
    color: white;
    text-decoration: none;
}
#c1{
    top: 100px;
}
#c1:hover{
    background-color: rgb(114, 110, 110);
    color: black;
}
#c2{
    top: 300px;
}
.triangle{
    width: 60px;
    height: 60px;
    position: relative;
    background-color: rgb(0, 0, 0);
    top: 240px;
    clip-path: polygon(0 0, 0 100%, 100% 50%);
    margin-left: 20px
}
.right{
    min-height: 500px;
    margin-top: 100px;
}
.fontpay {
  font-weight: bold;
  font-size: 50px;
}
a{
    text-decoration: none;
    color: white !important;
}
</style>
<script>
export default {
  methods: {
    Upload (file) {
      return file
    }
  }
}
</script>
