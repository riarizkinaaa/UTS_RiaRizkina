<script>
export default{
    props: ['id']
}
</script>
<template>
    <div class="container mt-5 mb-3">
        <div class="p"  v-if="id == 1">
            <img src="../assets/image/realmadrid.png" alt="" srcset="" class="m-4">
                <h1>Real Madrid</h1>
        </div>
        <div class="p" v-if="id == 2">
            <img src="../assets/image/manchestercity.png" alt="" srcset="" class="m-4">
            <h1> Machester City</h1>
        </div>
        <div class="p" v-if="id == 3" >
            <img src="../assets/image/tottenham.png" alt="" srcset="" class="m-4">
            <h1> Tottenham Hotspur</h1>
        </div>
        <div class="p" v-if="id == 4">
            <img  src="../assets/image/ac.png" alt="" srcset="" class="m-4">
            <h1>AC Milan</h1>
        </div>
        <div class="p" v-if="id == 5">
            <img src="../assets/image/liverpool.png" alt="" srcset="" class="m-4">
            <h1>Liverpool</h1>
        </div>
        <div class="p"  v-if="id == 6">
            <img src="../assets/image/fulham.png" alt="" srcset="" class="m-4">
            <h1>Fulham</h1>
        </div>
        <div class="p" v-if="id == 7">
            <img  src="../assets/image/juventus.png" alt="" srcset="" class="m-4">
            <h1>Juventus</h1>
        </div>
        <div class="p" v-if="id == 8" >
            <img src="../assets/image/psg.png" alt="" srcset="" class="m-4">
            <h1>Paris Saint Germain</h1>
        </div>
        <div class="p" v-if="id == 9">
            <img  src="../assets/image/everton.png" alt="" srcset="" class="m-4">
            <h1>Everton</h1>
        </div>
        <div class="p" v-if="id == 10">
            <img src="../assets/image/barcelona.png" alt="" srcset="" class="m-4">
            <h1>Barcelona</h1>
        </div>
        <div class="p"  v-if="id == 11">
            <img src="../assets/image/cb.png" alt="" srcset="" class="m-4">
            <h1>Atlectio Madrid</h1>
        </div>
        <div class="p" v-if="id == 12" >
            <img src="../assets/image/at.png" alt="" srcset="" class="m-4">
            <h1>Bayern Munchen</h1>
        </div>
    <div class="row">
        <div class="col-md-3">
            <div class="card p-3 mb-2">
                <div class="mt-5">
                    <h2 class="heading fw-bold">0</h2>
                    <div class="mt-5">
                        <div class="mt-3"> <h6 class="text1">   Matches_Played</h6> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-3 mb-2">
                <div class="mt-5">
                    <h2 class="heading fw-bold">12</h2>
                    <div class="mt-5">
                        <div class="mt-3"> <h6 class="text1">Win</h6> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-3 mb-2">
                <div class="mt-5">
                    <h2 class="heading fw-bold">7</h2>
                    <div class="mt-5">
                        <div class="mt-3"> <h6 class="text1">Loss</h6> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-3 mb-2">
                <div class="mt-5">
                    <h2 class="heading fw-bold">9</h2>
                    <div class="mt-5">
                        <div class="mt-3"> <h6 class="text1">Goals</h6> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-3 mb-2">
                <div class="mt-5">
                    <h2 class="heading fw-bold">1</h2>
                    <div class="mt-5">
                        <div class="mt-3"> <h6 class="text1">Draw</h6> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-3 mb-2  bg-warning">
                <div class="mt-5">
                    <h2 class="heading fw-bold">5</h2>
                    <div class="mt-5">
                        <div class="mt-3"> <h6 class="text1">Yellow Card</h6> </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card p-3 mb-2  bg-danger">
                <div class="mt-5">
                    <h2 class="heading fw-bold">4</h2>
                    <div class="mt-5">
                        <div class="mt-3"> <h6 class="text1">Red Card</h6> </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</div>

</template>

<style>
body {
    background-color: #eee
}
h2{
    color: black;
}

.card {
    border: none;
    border-radius: 10px
}

.c-details span {
    font-weight: 300;
    font-size: 13px
}

.icon {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 39px
}

.badge span {
    background-color: #fffbec;
    width: 60px;
    height: 25px;
    padding-bottom: 3px;
    border-radius: 5px;
    display: flex;
    color: #fed85d;
    justify-content: center;
    align-items: center
}

.progress {
    height: 10px;
    border-radius: 10px
}

.progress div {
    background-color: red
}

.text1 {
    font-size: 14px;
    font-weight: 600
}

.text2 {
    color: #a5aec0
}
.p img {
    width: 200px;
    height: 200px;
}
</style>
