<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert" id="topalert"></Alert>
    <h1 class="page-header">修改用户</h1>
    <form v-on:submit="editCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <input type="hidden" class="form-control" placeholder="name" v-model="customer.id">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
          <label>年龄</label>
          <input type="text" class="form-control" placeholder="age" v-model="customer.age">
          <label>公司</label>
          <input type="text" class="form-control" placeholder="companyId" v-model="customer.company">
          <button type="submit" class="btn btn-primary">提交</button>
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
      fetchCustomer(id){
        let that=this;
        this.$axios.get("/employee?id="+id).then(function (response) {
          console.log(response.data);
          that.customer = JSON.parse(JSON.stringify(response.data));
        })
      },
      editCustomer(e){
        if(!this.customer.name || !this.customer.phone || !this.customer.email ){
          this.alert="请添加相应信息";
        }else{
          let editCustomer={
            id: this.customer.id,
            name: this.customer.name,
            phone: this.customer.phone,
            email: this.customer.email,
            age: this.customer.age,
            company: this.customer.company
          }
          let that =this;
          this.$axios.post("/editEmployee",editCustomer).then(function (response) {
              that.$router.push({path:"/",query:{alert:"用户信息修改成功！"}})
          })
          e.preventDefault();
        }
        e.preventDefault();
      }
    },
    components:{
      Alert
    },
    created() {
      this.fetchCustomer(this.$route.params.id);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
