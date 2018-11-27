 //组件区
 function smallHint (sele,place,count,time){//小提示卡
    sele.tooltip({
        title    : count,
        placement: place,
        delay    : 400
        });
        sele.tooltip('show');
        if(time){
            setTimeout(function(){
            sele.tooltip('destroy');
          },time)
        }else{
            setTimeout(function(){
            sele.tooltip('destroy');
           },2000)
        }
       
    }

function bigerHint(sele,place,count,time){//中提示卡
    sele.popover({
            placement: place,
            content  : count
        })
        sele.popover('show')//展示
        
        if(time){
            setTimeout(function(){
                sele.popover('destroy')//销毁
          },time)
        }else{
            setTimeout(function(){
                sele.popover('destroy')//销毁
           },2000)
        }
}

function bigestHint(title,count,style,time){//大提示卡
 //info、danger、warning、success ——给警告框设置情景效果
  var mes = $('   <div class="alert pBalert alert-'+style+' fade in"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>'+title+'</strong>'+count+'</div>');
  $("body").prepend(mes);
  if(time){
        setTimeout(function(){
            $(".pBalert").remove();
          },time)
        }else{
            setTimeout(function(){
                $(".pBalert").remove();
        },2800)
    }

}

//手机格式是否正确           
function isPoneAvailable($poneInput) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test($poneInput.val())) {
        return false;
    } else {
        return true;
    }
}

//邮箱是否正确
function checkEmail(str){
    var reg = new RegExp(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/);
　  //console.log(str);
　　if(str === ""){ //输入不能为空
　　　　//alert("输入不能为空!");
　　　　return false;
　　}else if(!reg.test(str)){ //正则验证不通过，格式不对
　　　　//alert("验证不通过!");
　　　　return false;
　　}else{
　　　　//alert("通过！");
　　　　return true;
　　}
}
 //对修改手机号改造为修改邮箱
 function useEmail(self){
    var parent = $('.jt2');
    var copy   = parent.clone(true);
     if(self){//新建
    copy.removeClass('jt2').addClass('jt3'); 
    copy.find('h3').html("修改绑定邮箱");
     //   parent.find('h4,h5').css("visibility","hidden");
     copy.find('h4').html('修改绑定邮箱须先短信验证');
     copy.find('h5').html('<em>请使用：</em><span class="thatPho">'+$('.thatPho').html()+' 接收验证码</span>');
     copy.find('section').eq(0).find('span').html('<em>*</em>新的邮箱');
     copy.find('section').eq(0).find('input').attr('placeholder',"请输入邮箱");
     copy.find('section').eq(0).find('input').val(" ");
     copy.find('section').eq(1).find('input').eq(0).val(" ");
     copy.find('#wc').data('type','email');
     copy.find('#wc').attr('id','Ewc');
     copy.find('#qx').attr('id','Eqx');
     $('body').prepend(copy)
    //  console.log(copy)
    
   
     }else{//销毁

      $('.jt3').remove();
     }

 }

 var countdown = 60;
 function settime(obj) { //发送验证码倒计时
 if (countdown == 0) { 
     obj.attr('disabled',false); 
     //obj.removeattr("disabled"); 
     obj.val("获取验证码");
     countdown = 60;
     return;
 } else { 
     obj.attr('disabled',true);
     obj.val("重新发送(" + countdown + ")");
     countdown--; 
 } 
setTimeout(function() { 
 settime(obj) }
 ,1000) 
}

 //对

