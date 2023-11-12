<template>
  <div class="nav">
    <NavBar />
  </div>
  <div class="form">
    <h1>إضافة منتج<span> جديد</span></h1>
    <form @submit.prevent="addProduct">
      <input placeholder="اسم المنتج" type="text" id="productName" v-model="newProduct.name" required>
      <input placeholder="سعر المنتج" type="number" id="productPrice" v-model="newProduct.price" required>
      <input placeholder="وصف المنتج" type="text" id="productImage" v-model="newProduct.image" required>
      <button type="submit">إضافة المنتج</button>
    </form>
    <button class="clear" @click="clearData">مسح البيانات</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue'

export default {
  data() {
    return {
      newProduct: {
        name: '',
        price: '',
        image: ''
      }
    };
  },
  methods: {
  async addProduct() {
    const db = await this.$db;
    const tx = db.transaction('products', 'readwrite');
    const store = tx.objectStore('products');

    console.log('newProduct:', this.newProduct);

    try {
      const parsedProduct = JSON.parse(JSON.stringify(this.newProduct));
      await store.add(parsedProduct);
      console.log('تمت إضافة المنتج بنجاح');
      this.newProduct = { name: '', price: '', image: '' };
    } catch (error) {
      console.error('حدث خطأ أثناء إضافة المنتج:', error);
    }
  },
  async clearData() {
    const db = await this.$db;
    const tx = db.transaction('products', 'readwrite');
    const store = tx.objectStore('products');

    // استخدام clear لحذف جميع البيانات في objectStore
    await store.clear();
    
    console.log('تم حذف جميع البيانات بنجاح');
  }
},
components:{
  NavBar,
},
};
</script>

<style scoped>

.nav{
  position:sticky;
}

.form{
  margin-top:100px;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:60px;
}

.form h1{
  font-size:50px;
  color: #cecece;;
}

span{
  color:rgb(65, 148, 243);
}

.form form{
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:30px;
}

.clear{
  margin-top:-50px;
}

.form form input{
  width:40%;
  height:40px;
  padding-right:20px;
  border:none;
  border-radius:25px;
  outline:none;
  color:white !important;
  background-color:rgba(128, 128, 128, 0.247);
  text-align:right;
}

button{
  width:40%;
  height:40px;
  border:none;
  border-radius:25px;
  outline:none;
  color:white;
  background-color:rgba(128, 128, 128, 0.247);
}

</style>