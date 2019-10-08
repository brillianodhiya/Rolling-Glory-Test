<template>
    <div class="mt-5">
      <div class="container">
        <div class="card-columns">
          <div class="card">
            <div class="overlay">
              <h2>Hover</h2>
              <a class="info" href="#">Link</a>
            </div>
            <div class="detailgift">
              <div class="row">
                <div class="col-md-6">
                  <button class="btn btn-outline-secondary btnstockout" type="button"><i class="fa fa-heart-o"></i></button>
                </div>
                <p class="stockout col-md-6">Out of stock</p>
              </div>
            </div>
            <img class="card-img-top" src="~/assets/images/img_produk_2@2x.png" alt="">
            <div class="card-body">
              <h6 class="card-title">Samsung Galaxy S9 -Midnight Black 4/64 GB</h6>
              <p class="card-text poins">
                <img src="~/assets/images/ic_point.png" alt="">
                200000 poins
              </p>
              <div class="row detailrating" id="app">
                <star-rating class="col-md-3 star" :rating="3.72" :read-only="true" :increment="0.01" :star-size="15" :show-rating="false"></star-rating>
                <p class="review col-md-9">160 reviews</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="stock">
              <img class="new" src="~/assets/images/ic_new@2x.png" alt="">
            </div>
            <div class="detailgift">
              <div class="row">
                <div class="col-md-6">
                  <button class="btn btn-outline-secondary btnstock" type="button"><i class="fa fa-heart"></i></button>
                </div>
                <!-- <img class="stock col-md-6" src="~/assets/images/ic_new.png" alt=""> -->
              </div>
            </div>
            <img class="card-img-top" src="~/assets/images/img_produk_2@2x.png" alt="">
            <div class="card-body">
              <h6 class="card-title">Samsung Galaxy S9 -Midnight Black 4/64 GB</h6>
              <p class="card-text poins">
                <img src="~/assets/images/ic_point.png" alt="">
                200000 poins
              </p>
              <div class="row" id="app">
                <star-rating class="col-md-3 star" :rating="3.72" :read-only="true" :increment="0.01" :star-size="15" :show-rating="false"></star-rating>
                <p class="review col-md-9">160 reviews</p>
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

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    left: 0;
    background-color: rgba(218, 218, 218, 0.7);
    top: -200px;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: all 0.1s ease-out 0.5s;
    transition: all 0.1s ease-out 0.5s;
    background-image: url('../assets/images/ic_batik_abu@2x.png');
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .h2 {
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    position: relative;
    font-size: 17px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.6);
    -webkit-transform: translateY(-200px);
    -ms-transform: translateY(-200px);
    transform: translateY(-200px);
    -webkit-transition: all ease-in-out 0.1s;
    transition: all ease-in-out 0.1s;
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }
  a.info {
    display: inline-block;
    position: absolute;
    text-decoration: none;
    padding: 7px 14px;
    text-transform: uppercase;
    margin: 50px 0 0 0;
    background-color: transparent;
    -webkit-transform: translateY(-200px);
    -ms-transform: translateY(-200px);
    transform: translateY(-200px);
    color: #000;
    border: 1px solid #000;
    -webkit-transition: all ease-in-out 0.3s;
    transition: all ease-in-out 0.3s;
  }
  a.info:hover {
    box-shadow: 0 0 5px #fff;
  }
}
.card:hover .overlay {
    opacity: 1;
    filter: alpha(opacity=100);
    top: 0px;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
}
.card:hover h2 {
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
    box-shadow: 0 0 5px #000;
    color: #000;
    border: 1px solid #000;
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
}
.card:hover .card-body .detailrating .star {
  opacity: 0;
}
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

@media (min-width: 768px) {
  .card-columns {
    column-count: 3;
  }
}

@media (min-width: 992px) {
  .card-columns {
    column-count: 3;
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
export default {
  components: {
    StarRating
  }
}
</script>