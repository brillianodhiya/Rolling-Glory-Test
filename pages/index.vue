<template>
    <div class="mt-5">
      <div class="container">
        <div class="card-columns">
          <div class="card" v-for="item in allGift" v-bind:key="item.key">
            <div v-if="item.isNew != 1">
              <div class="overlay">
                <h2 class="title">{{ item.name }}</h2>
                <a class="info"><i class="fa fa-eye"></i> &nbsp; View detail</a>
              </div>
            </div>
            <div v-else>
              <div class="overlay2">
                <h2 class="title2">{{ item.name }}</h2>
                <a class="info2" href="#" @click="openDetail(item)"><i class="fa fa-eye"></i> &nbsp; View detail</a>
              </div>
              <div class="stock">
                <img class="new" src="~/assets/images/ic_new@2x.png" alt="">
              </div>
            </div>
            <div v-if="item.isNew != 1">
              <div class="detailgift">
                <div class="row">
                  <div class="col-md-6">
                    <button class="btn btn-outline-secondary btnstockout" type="button"><i class="fa fa-heart"></i></button>
                  </div>
                  <p class="stockout col-md-6">Out of stock</p>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="detailgift">
                <div class="row">
                  <div class="col-md-6">
                    <button class="btn btn-outline-secondary btnstock" type="button"><i class="fa fa-heart"></i></button>
                  </div>
                </div>
              </div>              
            </div>
            <img class="card-img-top" :src="item.image" alt="">
            <div class="card-body">
              <h6 class="card-title">{{ item.name }}</h6>
              <p class="card-text poins">
                <img src="~/assets/images/ic_point.png" alt="">
                {{ item.points }}
              </p>
              <div class="row detailrating" id="app">
                <star-rating class="col-sm-3 star" :rating="item.rating" :read-only="true" :increment="0.01" :star-size="15" :show-rating="false"></star-rating>
                <p class="review col-sm-9">{{ item.num_reviews }} reviews </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: 'MyWebFont';
  src: url('../assets/fonts/Raleway/Raleway-Medium.ttf') format('truetype');
}
.card {
  font-family: 'MyWebFont';
  border: 1px solid #D8D8D8;
  border-radius: 14px;
  overflow: hidden;
  position: relative;

  // outstock
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    left: 0;
    background-color: rgba(218, 218, 218, 0.7);
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: all 0.1s ease-out 0.5s;
    transition: all 0.1s ease-out 0.5s;
    background-image: url('../assets/images/ic_batik_abu@2x.png');
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .title {
    color: rgb(37, 37, 37);
    text-align: center;
    position: relative;
    margin: 20px;
    font-size: 25px;
    font-weight: 100;
    padding-top: 65%;
    -webkit-transform: translateY(50px);
    -ms-transform: translateY(50px);
    transform: translateY(50px);
    -webkit-transition: all ease-in-out 0.5s;
    transition: all ease-in-out 0.5s;
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }
  a.info {
    display: inline-block;
    position: relative;
    text-decoration: none;
    top: 80px;
    margin: 15%;
    padding: 12px 80px;
    font-size: 14px;
    -webkit-transform: translateY(-200px);
    -ms-transform: translateY(-200px);
    transform: translateY(-200px);
    color: white;
    background-color: rgba(65, 65, 65, 0.7);
    border-radius: 100px;
    -webkit-transition: all ease-in-out 0.5s;
    transition: all ease-in-out 0.5s;
  }
  a.info:hover {
    box-shadow: 0 0 5px #fff;
  }
  //new
  .overlay2 {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    left: 0;
    background-color: rgba(67, 146, 64, 0.904);
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: all 0.1s ease-out 0.5s;
    transition: all 0.1s ease-out 0.5s;
    background-image: url('../assets/images/ic_batik_ijo@2x.png');
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .title2 {
    color: white;
    text-align: center;
    position: relative;
    margin: 20px;
    font-size: 25px;
    font-weight: 100;
    padding-top: 65%;
    -webkit-transform: translateY(50px);
    -ms-transform: translateY(50px);
    transform: translateY(50px);
    -webkit-transition: all ease-in-out 0.5s;
    transition: all ease-in-out 0.5s;
    -webkit-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }
  a.info2 {
    display: inline-block;
    position: relative;
    text-decoration: none;
    top: 80px;
    border: 1px solid white;
    margin: 12%;
    padding: 12px 80px;
    font-size: 14px;
    -webkit-transform: translateY(-200px);
    -ms-transform: translateY(-200px);
    transform: translateY(-200px);
    color: white;
    background-color: rgba(67, 146, 64, 0.904);
    border-radius: 100px;
    -webkit-transition: all ease-in-out 0.5s;
    transition: all ease-in-out 0.5s;
  }
  a.info2:hover {
    box-shadow: 0 0 5px #fff;
  }
}
//out
.card:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    top: 0px;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
}
.card:hover .title {
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
}
.card:hover a.info {
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
    color: white;
    background-color: rgba(65, 65, 65, 0.7);
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
}
.card:hover .card-body .detailrating {
  opacity: 0;
}
.card:hover .btnstockout {
  background-color: #E7246B;
  border-radius: 100px;
  border: 1px solid #E7246B;
  width: 70px;
  position: relative;

  .fa {
    color: white;
  }
}
//new
.card:hover .overlay2 {
    opacity: 1;
    filter: alpha(opacity=100);
    top: 0px;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
}
.card:hover .title2 {
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
}
.card:hover a.info2 {
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
    color: white;
    background-color: rgba(67, 146, 64, 0.904);
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
    border: 1px solid white;
}
.card:hover .card-body .detailrating2 {
  opacity: 0;
}
.card:hover .btnstock {
  background-color: transparent;
  border-radius: 100px;
  border: 1px solid #E1E1E1;
  width: 70px;
  position: relative;
}

//head

.stock {
  position: absolute;
  right: 0;

  .new {
    height: 68px;
  }
}

.detailgift {
  margin-top: 20px;
  margin-left: 26px;
  width: 100%;

  // overflow: auto;
  // .stock {
  //   margin-top: -20px;
  //   // float: right;
  //   // position: absolute;
  // }
  .stockout {
    color: #E64580;
    position: relative;
    font: SemiBold 12px/14px Raleway;
    letter-spacing: 0;
  }

  .btnstockout {
    border-radius: 100px;
    border: 1px solid #E1E1E1;
    width: 70px;
    position: relative;
  }

  .btnstock {
    background-color: #E7246B;
    border-radius: 100px;
    border: 1px solid #E7246B;
    width: 70px;
    position: relative;

    .fa {
      color: white;
    }
  }
}

.row {
  .review {
    margin-top: 13px;
    color: #838EAB;
    font-size: 14px;
  }
}

// @font-face {
//   font-family: 'MyWebFont2';
//   src: url('~assets/fonts/Raleway/Raleway-Medium.ttf') format('truetype');
// }

.poins {
  color: #74B71B;
  margin: 0 !important;
}

@media (min-width: 320px) {
  .card-columns {
    column-count: 1;
  }
  .card {
    a.info {
      padding: 12px 40px;
    } 
    a.info2 {
      padding: 12px 40px;
    } 
  }
}

@media (min-width: 360px) {
  .card-columns {
    column-count: 1;
  }
  .card {
    a.info {
      padding: 12px 55px;
    } 
    a.info2 {
      padding: 12px 55px;
    } 
  }
}

@media (min-width: 411px) {
  .card-columns {
    column-count: 1;
  }
  .card {
    a.info {
      padding: 12px 73px;
    } 
    a.info2 {
      padding: 12px 73px;
    } 
  }
}

@media (min-width: 576px) {
  .card-columns {
    column-count: 1;
  }
  .card {
    a.info {
      padding: 12px 128px;
    }
    a.info2 {
      padding: 12px 128px;
    }  
  }
}

@media (min-width: 768px) {
  .card-columns {
    column-count: 2;
  }
  .card {
    a.info {
      padding: 12px 60px;
    }
    a.info2 {
      padding: 12px 60px;
    }  
  }
}

@media (min-width: 992px) {
  .card-columns {
    column-count: 2;
  }
  .card {
    a.info {
      padding: 12px 72px;
    } 
    a.info2 {
      padding: 12px 72px;
    } 
  }
}

@media (min-width: 1200px) {
  .card-columns {
    column-count: 3;
  }
}
</style>

<script>
import StarRating from 'vue-star-rating';
import axios from 'axios';

export default {
  methods: {
    openDetail (data) {
      this.$store.commit('setGift', data)
      this.$router.replace({ 'path': '/detail' })
    }
  },
  components: {
    StarRating
  },
  data () {
    return {
      allGift: []
    }
  },
  mounted () {
    axios('https://recruitment.dev.rollingglory.com/api/gift', {
      crossDomain: true
    })
    .then(({data}) => {
      this.allGift = data.data.gift
    })
  }
}
</script>