<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert" id="topalert"></Alert>
    <h1 class="page-header">添加用户</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
          <label>年龄</label>
          <input type="text" class="form-control" placeholder="age" v-model="customer.age">
          <label>公司</label>
          <input type="text" class="form-control" placeholder="companyId" v-model="customer.companyId"><br />
          <button type="submit" class="btn btn-primary">添加</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import Alert from './Alert'
  export default {
    name: 'add',
    data () {
      return {
        customer: {},
        alert: ""
      }
    },
    methods:{
      addCustomer(e){
        if(!this.customer.name || !this.customer.phone || !this.customer.email ){
          this.alert="请添加相应信息";
        }else{
          let newCustomer={
            name: this.customer.name,
            phone: this.customer.phone,
            email: this.customer.email,
            age: this.customer.age,
            company: this.customer.company
          }
          /*this.$http.post("http://localhost:3000/users",newCustomer)
            .then(function (response) {
              //console.log(response)
             // this.$router.push({path:"/"})
              this.$router.push({path:"/",query:{alert:"用户信息添加成功！"}});
            })*/
          let that=this;
          this.$axios.post("/addEmployee",newCustomer)
            .then(function (response) {
              //if (response.data.status())
              that.$router.push({path:"/",query:{alert:"用户信息添加成功！"}});
            })
          e.preventDefault();
        }
        e.preventDefault();
      }
    },
    components:{
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*  #topalert{
    margin-top:60px;
  }
  h1{
    margin-top:60px;
  }*/
</style>
