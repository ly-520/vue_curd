<template>
  <div class="details container">
    <router-link to="/" class="btn btn-default" id="rrr">返回</router-link>
    <h1 class="page-header">{{customer.name}}
        <span class="pull-right">
          <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">编辑</router-link>
          <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
        </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.id}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-asterisk">{{customer.phone}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{customer.phone}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-euro">{{customer.email}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-eur">{{customer.age}}</span></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-plus">{{customer.company}}</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'customerdetails',
    data () {
      return {
        customer: ""
      }
    },
    methods:{
      fetchCustomers(id){
        let that=this;
        this.$axios.get("/employee?id="+id).then(function (response) {
          console.log(response.data);
          that.customer = JSON.parse(JSON.stringify(response.data));
        })
      },
      deleteCustomer(id){
        let that=this;
       this.$axios.get("/deleteEmployee?id="+id).then(function (response) {
         that.$router.push({path:"/",query:{alert:"用户删除成功！"}});
       })
      }
    },
    created() {
      this.fetchCustomers(this.$route.params.id);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  #rrr{
    margin-top:60px;
  }*/
</style>
