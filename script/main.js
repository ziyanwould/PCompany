
$(function(){
   let big = $('.use .mes');
   let use = $('.useImg');
   use.mouseenter(()=>{
    big.show();
  });
   big.mouseleave(()=>{
    big.hide();
  });
})