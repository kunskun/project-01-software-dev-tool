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
                    </label>
                    <div>
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
</style>
