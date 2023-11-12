<template>
  <div class="nav">
    <NavBar />
  </div>
  <div class="products">
    <h1>قائمة <span>المنتجات</span></h1>
    <div class="cont">
      <div v-for="(product, index) in products" :key="index" class="product">
      <div class="img">

      </div>
      <h2>{{ product.name }}</h2>
      <p>{{ product.image }}</p>
      <div class="bottom">
        <h4>السعر: {{ product.price }}</h4>
        <h4>شراء الأن</h4>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import NavBar from '@/components/NavBar.vue'

export default {
  data() {
    return {
      products: []
    };
  },
  async mounted() {
    const db = await this.$db;
    const tx = db.transaction('products', 'readonly');
    const store = tx.objectStore('products');
    this.products = await store.getAll();
  },
  components:{
    NavBar,
  }
};
</script>

<style scoped>

.nav{
  position:sticky;
}

.products{
  width:100%;
  margin-top:100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:60px;
}

p{
  color:#cecece;
  font-weight:lighter;
  margin-top:10px;
  width:70%;
}

.product{
  background-color:rgba(128, 128, 128, 0.11);
  width:250px;
  border-radius:8px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:4px 4px;
}

.img{
  width:100%;
  height:100px;
  background-image:url("https://media.discordapp.net/attachments/1171065901005668402/1172289142365880401/Picsart_23-11-07_13-52-20-236.png?ex=655fc657&is=654d5157&hm=80bf93b45c12ec6f45ae8db70be871357c5a1283e1e2ada0be71a031a7c6447b&=&width=712&height=473");
  background-repeat:no-repeat;
  background-size:100% 100%;
}

h2{
  margin-top:40px;
  color:#cecece;
  font-size:40px;
}

.bottom{
  display:flex;
  margin-top:30px;
  gap:60px;
}

h4{
  color:#cecece;
  font-weight:lighter;
  cursor:pointer;
  margin-top:10px;
  margin-bottom:30px;
}

h4:hover{
  color:rgb(65, 148, 243);
}

.cont{
  width:100%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items:center;
  gap:30px;
  justify-content:center;
}

span{
  color:rgb(65, 148, 243);
}

.products h1{
  font-size:50px;
  color: #cecece;;
}


</style>
