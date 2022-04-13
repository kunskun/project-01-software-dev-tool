<template>
 <v-card class="backgroud">
        <center><h1 class="pay">PAY</h1></center>
        <br>
        <div class="row">
            <div class="col-lg-3">
                <center>
                    <div class="line">
                        <a class="circle" id="c1" @click="url" large href="#">1</a>
                        <div class="circle" id="c2">2</div>
                        <div class="triangle"></div>
                    </div>
                </center>
            </div>
            <div class="col-lg-9 right">
                <center><div class="upload">
                    <label> <img src="../../static/upload.jpg" alt="accusamus beatae ad facilis cum similique qui sunt">
                        <br><br>
                        <input type="file" id="file" ref="file" v-on:change="Upload()"/>
                    </label>
                    <div>
                        <v-btn class="button" color ="success" v-on:click="submitForm()">Upload
                            <v-icon right dark>mdi-cloud-upload</v-icon>
                        </v-btn>
                    </div>
                </div>
                </center>
            </div>
        </div>
        <v-col class="btn-right">
            <v-btn class="button" color ="primary" :to="url" large href="#">
              Back
            </v-btn>
            <v-btn class="button" color ="secondary" :to="url" large href="../family">
              FINISH
            </v-btn>
        </v-col>
    </v-card>
</template>
<style scoped>
.backgroud {
  background-color: rgb(138, 132, 132);
  padding: 50px;
}
.pay{
    background-color: rgb(88, 86, 86);
    width: 20%;
    border-radius: 10px;
}
.upload{
    background-color: rgb(245, 237, 237);
    justify-content:space-around;
    padding: 20px;
}
.button{
    margin: 5px;
}
</style>
