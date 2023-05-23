<template>
    <section class="wrapper">
      <div class="container-fostrap">
          <div>
              <img src="../assets/image/logo.jpg" class="fostrap-logo"/>
              <h2 class="heading">
                  ria rizkina 
              </h2>
          </div>
          <div class="content">
              <div class="container">
                  <div class="row">
                      <div class="col-xs-12 col-sm-4" v-for="club in FootBallClub" :key="club.kunci">
                          <div class="card">
                              <a class="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                              <img :src="club.Logo" class="mt-3"/>
                            </a>
                              <div class="card-content">
                                  <H5 class="card-title text-center">
                                      <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">{{ club.NamaClub }}
                                    </a>
                                  </H5>
                              </div>
                              <div class="card-read-more" >
                                  <a class="btn btn-link btn-block">
                                    <router-link :to="'/detail/'+ club.id">Detail</router-link> 
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  
  
  </template>
  
  <style>
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);
  
  .wrapper {
    display: table;
    height: 100%;
    width: 100%;
  }
  
  .container-fostrap {
    display: table-cell;
    padding: 1em;
    text-align: center;
    vertical-align: middle;
  }
  .fostrap-logo {
    width: 100px;
    margin-bottom:15px
  }
  h2.heading {
    color: #fff;
    font-size: 1.15em;
    font-weight: 700;
    margin: 0 0 0.5em;
    color: #505050;
  }
  @media (min-width: 450px) {
    h2.heading {
      font-size: 3.55em;
    }
  }
  @media (min-width: 760px) {
    h2.heading {
      font-size: 3.05em;
    }
  }
  @media (min-width: 900px) {
    h2.heading {
      font-size: 3.25em;
      margin: 0 0 0.3em;
    }
  } 
  .card {
    display: block; 
      margin-bottom: 20px;
      line-height: 1.42857143;
      background-color:rgb(250, 250, 250);
      border-radius: 14px;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
      transition: box-shadow .25s; 
  }
  .card:hover {
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  }
  .img-card {
    width: 100%;
    height:250px;
    border-top-left-radius:2px;
    border-top-right-radius:2px;
    display:block;
      overflow: hidden;
  }
  .img-card img{
    width: 50%;
    height: 200px;
    object-fit:cover; 
    transition: all .25s ease;
  } 
  .card-content {
    padding:15px;
    text-align:left;
  }
  .card-title {
    margin-top:0px;
    font-weight: 700;
    font-size: 1em;
  }
  .card-title a {
    color: #000;
    text-decoration: none !important;
  }
  .card-read-more {
    border-top: 1px solid #D4D4D4;
  }
  .card-read-more a {
    text-decoration: none !important;
    padding:10px;
    font-weight:600;
    text-transform: uppercase
  }
  
  </style>
  <script>
  
  export default {
    data() {
      return {
        FootBallClub: [
          {
            NamaClub : 'REAL MADRID FC ',
            Logo : require('@/assets/image/realmadrid.png'),
            Win: 2,
            Loss: 3,
            Draw: 0,
            Goals: 0,
            Yellow_Card: 0,
            Red_Card: 1,
            Matches_Played: 2,
            id : 1,
          },
          {
            NamaClub : 'MANCHESTER CITY ',
            Logo : require('@/assets/image/manchestercity.png'),
            Win: 2,
            Loss: 3,
            Draw: 0,
            Goals: 0,
            Yellow_Card: 0,
            Red_Card: 1,
            Matches_Played: 2,
            id : 2,
          },
          {
            NamaClub : 'TOTTENHAM HOTSPUR',
            Logo : require('@/assets/image/tottenham.png'),
            Win: 2,
            Loss: 3,
            Draw: 0,
            Goals: 0,
            Yellow_Card: 0,
            Red_Card: 1,
            Matches_Played: 2,
            id : 3,
          },
          {
            NamaClub : 'AC MILAN',
            Logo : require('@/assets/image/ac.png'),
            Win: 2,
            Loss: 3,
            Draw: 0,
            Goals: 0,
            Yellow_Card: 0,
            Red_Card: 1,
            Matches_Played: 2,
            id : 4,
          },
          {
            NamaClub : 'LIVERPOOL F.C',
            Logo : require('@/assets/image/liverpool.png'),
            Win: 2,
            Loss: 3,
            Draw: 0,
            Goals: 0,
            Yellow_Card: 0,
            Red_Card: 1,
            Matches_Played: 2,
            id : 5,
          },
          {
            NamaClub : 'FULHAM F.C',
            Logo : require('@/assets/image/fulham.png'),
            id : 6,
          },
          {
            NamaClub : 'JUVENTUS',
            Logo : require('@/assets/image/juventus.png'),
            Win: 2,
            Loss: 3,
            Draw: 0,
            Goals: 0,
            Yellow_Card: 0,
            Red_Card: 1,
            Matches_Played: 2,
            id : 7,
          },
          {
            NamaClub : 'PARIS SAINT GERMAIN ',
            Logo : require('@/assets/image/psg.png'),
            Win: 2,
            Loss: 3,
            Draw: 0,
            Goals: 0,
            Yellow_Card: 0,
            Red_Card: 1,
            Matches_Played: 2,
            id : 8,
          },
          {
            NamaClub : 'EVERTON F.C',
            Logo : require('@/assets/image/everton.png'),
            Win: 2,
            Loss: 3,
            Draw: 0,
            Goals: 0,
            Yellow_Card: 0,
            Red_Card: 1,
            Matches_Played: 2,
            id : 9,
          },
          {
            NamaClub : 'F.C. BARCELONA',
            Logo : require('@/assets/image/barcelona.png'),
            Win: 2,
            Loss: 3,
            Draw: 0,
            Goals: 0,
            Yellow_Card: 0,
            Red_Card: 1,
            Matches_Played: 2,
            id : 10,
          },
          {
            NamaClub : 'ATLETICO MADRID',
            Logo : require('@/assets/image/cb.png'),
            Win: 2,
            Loss: 3,
            Draw: 0,
            Goals: 0,
            Yellow_Card: 0,
            Red_Card: 1,
            Matches_Played: 2,
            id : 11,
          },
          {
            NamaClub : 'BAYERN MUNCHEN',
            Logo : require('@/assets/image/at.png'),
            Win: 2,
            Loss: 3,
            Draw: 0,
            Goals: 0,
            Yellow_Card: 0,
            Red_Card: 1,
            Matches_Played: 2,
            id : 12,
          },
        ]
          
      };
    }
  };
  </script>