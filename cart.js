new Vue({
  el: '#hello',
  data:{
    cart:[],
    classDefault:'slt',
    allB:false,
    allMoney:0
  },
  filters:{
    forMoney:function(value){
      return '$'+value.toFixed(2);
    }
  },
  mounted: function () {
    this.$nextTick(function(){
      this.helloNew();
    })
  },
  methods: {
    helloNew:function(){
      this.cart = [{title:'one',price:123,id:1,num:1},{title:'two',price:321,id:1,num:2},{title:'一',price:123,id:2,num:3},{title:'二',price:321,id:2,num:4}]
    },
    add:function(item,way){
      if(way>0){
        item.num++
      } else {
        item.num--
        if(item.num<1){
          item.num = 1;
        }
      }
      this.totalMoney();
    },
    btn:function(item){
      if(typeof item.isB == 'undefined'){
        // Vue.set(item,'isB',false)
        this.$set(item,'isB',true)
      } else {
        item.isB = !item.isB
      }
      this.totalMoney();
    },
    checkAll:function(flag){
      this.allB = flag;
      var _this = this;
      this.cart.forEach(function(value,index){
        if(typeof value.isB =='undefined'){
          _this.$set(value,'isB',_this.allB)
        } else {
          value.isB = _this.allB
        }
      })
      this.totalMoney();
    },
    totalMoney:function(){
      var _this = this;
      this.allMoney = 0;
      this.cart.forEach(function(value,index){
        if(value.isB){
          _this.allMoney +=value.num*value.price
        }
      })
    },
    delDate:function(item){
      var index = this.cart.indexOf(item);
      this.cart.splice(index,1)
    }
  }
})
new Vue({
  el:'#address',
  data:{
    addressList:[],
    dftNum:3,
    currIndex:2,
    ship:1
  },
  mounted:function(){
    this.$nextTick(function(){
      this.getAddress();
    })
  },
  computed:{
    filterAddress:function(){
      return this.addressList.slice(0,this.dftNum);
    }
  },
  methods:{
    getAddress:function(){
      this.addressList = [{name:'one',address:'建立快速反击离开',id:1,dft:true},{name:'two',address:'撒旦撒',id:2,dft:false},{name:'一',address:'地方',id:3,dft:false},{name:'二',address:'看看',id:4,dft:false}]
    },
    setDft:function(id){
      this.addressList.forEach(function(value,index){
        if(value.id==id){
          value.dft = true
        } else {
          value.dft=false
        }
      })
    }
  }
})
// Vue.filter('money',function(value,type){
//   return '$'+value.toFixed(2)+type;
// })
