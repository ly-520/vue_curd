<template>
  <div id="topstyle" class="customers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
      <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput"/><br />
      <table class="table table-striped">
        <thead>
            <tr>
              <td>姓名</td>
              <td>电话</td>
              <td>邮箱</td>
              <td>操作</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in filterBy(customers,filterInput)">
            <!--<tr v-for="customer in customers">-->
              <td>{{customer.name}}</td>
              <td>{{customer.phone}}</td>
              <td>{{customer.email}}</td>
              <td><router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">详情</router-link></td>
            </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
  import Alert from "./Alert"
  export default {
    name: 'customers',
    data () {
      return {
          customers: [],
          alert:"",
          filterInput:""
      }
    },
    methods:{
      fetchCustomers(){
        let that = this; //axios内部不识别this关键字，所以内部不能使用this.customers=JSON.parse(JSON.stringify(response.data));接收数据
        this.$axios.get('/index').then(function (response) {
          that.customers=JSON.parse(JSON.stringify(response.data));
        })
      },
      filterBy(customers,value){
        return customers.filter(function (customer) {
          return customer.name.match(value);
        })
      }
    },
    created() {
     if(this.$route.query.alert){
        this.alert=this.$route.query.alert;
      }
      this.fetchCustomers();
    },
    updated() {
      this.fetchCustomers();
    },
   components:{
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  h1{
    margin-top:60px;
  }
  .alert {
    margin-top:60px;
  }*/
</style>
