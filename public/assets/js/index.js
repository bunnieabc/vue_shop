$(document).ready(function() {
  //loading
 
  //loading END


});
$(".close").click(function(){
  $(".checklist").css("display","none")
  console.log("==1")
})
$(".check-btn").click(function(){
    $(".checklist").css("display","block")
    console.log("==2")
});
$(window).scroll(function(){
  if($(window).scrollTop()<=100)
  {
    $(".header").css({"background":"rgba(255,255,255,"+ $(window).scrollTop()/100 +")", "box-shadow": "0px 0px 0px 0px rgba(0,0,0,0.2)"})
  }
  else{
    $(".header").css({"background":"rgba(255,255,255,1)", "box-shadow": "0px 0px 20px -5px rgba(0,0,0,0.2)"})
  }
  console.log($(window).scrollTop())
})



var item = new Vue({
  el: '#element',
  data: {
    items: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    cart_items: []
  },
  created: function(){
    //this.get_api();
  },
  methods: {
    putToCart: function(i){
      this.cart_items.push(i);
      var t1 = this.cart_items.length
      console.log("???",t1)
      //return this.cart_item.size();
    },
    cartResult: function(){
      console.log(t1)
      var t1 = this.cart_items.length
      return this.cart_items.length;
    },
    deleteItem: function(index){
      /*
      this.cart_items = jQuery.grep(this.cart_items, function(value) {
        return value != index;
      })*/
      this.cart_items.splice(index, 1);
    }

  }
});












