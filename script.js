$(document).ready(function(){
    
    
    $('#clouds').pan({fps: 30, speed: 0.7, dir: 'right', depth: 10});
    $('#hill2').pan({fps: 30, speed: 0.7, dir: 'right', depth: 30});
    $('#hill1').pan({fps: 30, speed: 0.2, dir: 'right', depth: 70});
    $('#land').pan({fps: 30, speed: 2, dir: 'right', depth: 70});
    $('#hill1, #hill2, #clouds').spRelSpeed(8);
//    
    
//    function bgChange(){
//        for(var i = 0; i <= 11; i++){
//            $("#zombie").css(
//                "background" : "transparent url(img/Walk" + i + ".png) 100% 85% no-repeat",
//                 "background-size": "200px 200px");
//            
//        }
//    }
//    
//    setInterval(bgChange, 100);
    
    
    var now = 0;
    
    var array = ["Walk0.png","Walk1.png","Walk2.png","Walk3.png","Walk4.png","Walk5.png","Walk6.png","Walk7.png","Walk8.png","Walk9.png","Walk10.png","Walk11.png" ];

    function changeBG(){
        //array of backgrounds
        now = (now+1) % array.length ;
        $('#zombie').css('background-image', 'url(img/' + array[now] + ')');
    }
    
    self.setInterval(changeBG, 170);
})
    
    
    
