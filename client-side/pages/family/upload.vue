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
            <v-btn class="button" color ="info" :to="url" large href="../family">
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
</style>
