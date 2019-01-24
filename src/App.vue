<template>
  <div id="app" class="container">
    <router-view/>
    <div class="nav_lsit" >
      <router-link :to="{name:'Index'}" tag="div" exact>首页</router-link>
      <router-link :to="{name:'Shopping'}" tag="div" >商城</router-link>
      <router-link :to="{name:'Add'}" tag="div"  ><img src="../static/ico/add.png" class="add_ico"></router-link>
      <router-link :to="{name:'News'}" tag="div" >消息</router-link>
      <router-link :to="{name:'Me'}" tag="div" >我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
.nav_lsit{
  width: 100%;
  height: 45px;
  background-color: white;
  justify-content: space-around; 
  display: flex;
  line-height: 45px;
  position: fixed;
  bottom: 0;
  border-top: 0.001rem solid #808080;
  div{
    color: #808080;
    display: inline;
    .add_ico{
      margin-top: 0.5rem;
      width: 2rem;
    }
      &.router-link-exact-active{
      font-weight: 600;
      font-size: 1rem;
      color: black;
    }
  }
}

</style>
