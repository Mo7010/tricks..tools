<script>
import { RouterLink } from 'vue-router';

</script>

<template>
<div class="nav">
    <div class="bg"></div>
    <h2><span>.</span>تريكس</h2>
    <ul>
        <li><RouterLink class="router" id="home-page" to="/">الرئيسية</RouterLink></li>
        <li><a href="#">عنا</a></li>
        <li><RouterLink class="router" to="/tools">الأدوات</RouterLink></li>
        <li><a href="#">الشركاء</a></li>
        <li><RouterLink class="router" to="/contact">التواصل</RouterLink></li>
    </ul>
    <a class="button">خادمنا</a>
</div>
</template>

<style scoped>

h2{
    color:white;
    font-weight:800;
}

span{
    color:rgb(65, 148, 243);
}

.nav{
    width:100%;
    padding:20px 20px;
    position:fixed;
    top:0;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:row-reverse;
}

.bg{
    background-color:rgba(0, 0, 0, 0.767);
    filter:blur(8px);
    -webkit-filter:blur(8px);
    position:absolute;
    width:100%;
    height:100%;
    z-index:-1;
}

ul{
    width:40%;
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:row-reverse;
}

ul li a,ul li .router{
    text-decoration:none;
    color:rgb(167, 166, 166);
}

ul li a:hover,ul li .router:hover{
    color:rgb(65, 148, 243);
}

.button{
    padding:5px 30px;
    background-color:rgb(65, 148, 243);
    border-radius:5px;
    color:white;
    cursor:pointer;
}

.button:hover{
    border-bottom:3px solid rgb(185, 183, 183);
}

</style>
