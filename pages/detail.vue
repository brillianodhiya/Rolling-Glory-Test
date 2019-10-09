<template>
    <div class="mt-5">
        <div class="container">
            <div class="row">
                <div class="card col-md-5">
                    <div class="stock">
                        <img class="new" src="~/assets/images/ic_new@2x.png" alt="">
                    </div>
                    <img class="card-img" :src="gift.image" alt="">
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-6" id="app">
                    <h3><b>{{ gift.name }}</b></h3>
                    <div class="row rating">
                        <star-rating :rating="gift.rating" :read-only="true" :increment="0.01" :star-size="20" :show-rating="false"></star-rating>
                        <h6>{{ gift.num_reviews }} reviews</h6>
                    </div>
                    <div class="row poins">
                        <h4>
                            <img src="~/assets/images/ic_point-1.png" alt="">
                            {{ gift.points }} poins
                        </h4>
                        <h6> &emsp; In Stock</h6>
                    </div>
                    <div v-html="gift.info" class="text"></div>
                    <div class="jumlah">
                        <p>Jumlah</p>
                        <div class="row plusmin">
                            <button type="button" class="btn" @click="kurang"><i class="fa fa-minus"></i></button>
                            <div class="btn">{{ jumlah }}</div>
                            <button type="button" class="btn" @click="tambah"><i class="fa fa-plus"></i></button>
                        </div>
                    </div>
                    <div class="row buttonlist">
                        <div class="col-sm-2 btns">
                            <button class="btn btn-outline-secondary btnstock" type="button"><i class="fa fa-heart"></i></button>
                        </div>
                        <div class="col-sm-4 btns">
                            <button class="btn green">Redeem</button>
                        </div>
                        <div class="col-sm-6 btns">
                            <button class="btn btn-outline-success cart">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="keterangan">
                <div class="judul">
                    <h5>Info produk</h5>
                    <hr>
                </div>
                <div class="rincian">
                    <h4>Rincian</h4>
                    <div v-html="gift.description" class="rincian-detail"></div>
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
.row {
    font-family: 'MyWebFont';
}
.rating {
    margin-left: 0;

    h6 {
        margin-top: 5px;
        margin-left: 5px;
        color: #838EAB;
    }
}
.poins {
    margin-left: 0;
    margin-top: 5px;

    h4 {
        color: #74B71B;
        font-weight: bold;
    }

    h6 {
        color: #006A4E;
    }
}
.jumlah {
    margin-top: 5px;
    p {
        color: #838EAB;
    }
    .plusmin {
        margin-left: 0;
        cursor: text;
    }
}
.buttonlist {
    margin-left: 0;
    margin-top: 25px;
    .btnstock {
        background-color: #E7246B;
        position: relative;
        border-radius: 100px;
        border: 1px solid #E7246B;
        width: 60px;
        position: relative;

        .fa {
            color: white;
        }
    }
    .green {
        position: relative;
        background: #006A4E;
        color: white;
        border-radius: 100px;
        width: 150px;
        font-size: 15px;
    }
    .cart {
        position: relative;
        border-radius: 100px;
        font-size: 15px;
    }
    .btns {
        position: relative;
    }
}
.card {
    border: none;
}
.stock {
    position: absolute;
    right: 0;

    .new {
        height: 68px;
    }
}
.keterangan {
    font-family: 'MyWebFont';
    padding-top: 110px;

    h5 {
        color: #74B71B;
        box-shadow: 0 3px 0 0 #74B71B;
        width: 120px;
        height: 30px;
    }
    hr {
    display: block;
    margin-top: 0;
    border-width: 2px;
    }

    .rincian {
    margin-top: 50px;
        h4 {
            color: #006A4E;
        }
        .rincian-detail {
            line-height: 2.2;
        }
    }
}
@media (min-width: 768px) {  
    .buttonlist {
        .btnstock {
            width: 40px;
        }
        .green {
            width: 90px;
        }
        .cart {
            width: 100px;
        }
    }
}
    
@media (min-width: 992px) { 
    .buttonlist {
        .green {
            width: 140px;
        }
        .cart {
            width: 140px;
        }
    }
}
    
@media (min-width: 1200px) {  
    .buttonlist {

        .green {
            width: 140px;
        }
        .cart {
            width: 130px;
        }
    }
}
</style>

<script>
import StarRating from 'vue-star-rating'

export default {
    computed: {
        gift () {
            return this.$store.state.gift
        }
    },
    components: {
        StarRating
    },
    methods: {
        tambah () {
            this.jumlah += 1
        },
        kurang () {
            if (this.jumlah > 0) {
                this.jumlah -= 1
            }
        }
    },
    data () {
        return {
            jumlah: 1
        }
    }
}
</script>