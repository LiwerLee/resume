$(document).ready(function(){

//打字機效果
	$.fn.autotype = function(){
		var $text = $(this);
		// console.log('this',this); 測試

		var str = $text.html();//返回被選元素的內容

		var index = 0;
		var x = $text.html('');
		//$text.html()和$(this).html('')有區別

		var timer = setInterval(function(){
			//substr(index, 1) 方法在字符串中抽取從index下標開始的第一個字
			var current = str.substr(index, 1);

			if(current == '<'){
			//indexOf() 方法返回">"在字符串中首次出现的位置。
				index = str.indexOf('>', index) + 1;
			}else{
				index ++ ;
			}

			//console.log(["0到index下標下的字符",str.substring(0, index)],["符號",index & 1 ? '_': '']);
			//substring() 方法用於提取字符串中介于兩個指定下標之間的字符
			$text.html(str.substring(0, index) + (index & 1 ? '_': ''));
			if(index >= str.length){
				clearInterval(timer);
			}
		},100);
	};

	$("#autotype").autotype();
//下捲
	setTimeout(function(){
		$('html,body').animate({scrollTop:$('#about').offset().top}, 1000);
	},6000);

//頁面滾動
	$('#a_top').click(function(){ $('html,body').animate({scrollTop:$('#top').offset().top}, 1000); });
	$('#a_about').click(function(){ $('html,body').animate({scrollTop:$('#about').offset().top}, 1000); });
	$('#a_knowledge').click(function(){ $('html,body').animate({scrollTop:$('#knowledge').offset().top}, 1000); });
	$('#a_myWorks').click(function(){ $('html,body').animate({scrollTop:$('#myWorks').offset().top}, 1000); });

//canvas百分比

    var canvas1 = document.getElementById('canvas1'),
        context1 = canvas1.getContext('2d'),
        canvas2 = document.getElementById('canvas2'),
        context2 = canvas2.getContext('2d'),
        canvas3 = document.getElementById('canvas3'),
        context3 = canvas3.getContext('2d'),
        canvas4 = document.getElementById('canvas4'),
        context4 = canvas4.getContext('2d'),
        centerX = canvas1.width/2,  //中心x軸
        centerY = canvas1.height/2,  //中心y軸
        rad = Math.PI*2/100, //360度分100份，rad等於一份
        speed1 = 0.1; //動畫速度
        speed2 = 0.1;
        speed3 = 0.1;
        speed4 = 0.1;

var timer1 = setInterval(function () {
                speed1 += 0.1;
                if(speed1 > 60){
                    clearInterval(timer1);
                    return false;
                }
                context1.clearRect(0, 0, canvas1.width, canvas1.height);
                blueCircle(context1);
                text(context1,speed1);
                whiteCircle(context1,speed1);
            },10);

var timer2 = setInterval(function () {
                speed2 += 0.08;
                if(speed2 > 60){
                    clearInterval(timer2);
                    return false;
                }
                context2.clearRect(0, 0, canvas2.width, canvas2.height);
                blueCircle(context2);
                text(context2,speed2);
                whiteCircle(context2,speed2);
            },10);

var timer3 = setInterval(function () {
                speed3 += 0.04;
                if(speed3 > 30){
                    clearInterval(timer3);
                    return false;
                }
                context3.clearRect(0, 0, canvas3.width, canvas3.height);
                blueCircle(context3);
                text(context3,speed3);
                whiteCircle(context3,speed3);
            },10);

var timer4 = setInterval(function () {
                speed4 += 0.06;
                if(speed4 > 30){
                    clearInterval(timer4);
                    return false;
                }
                context4.clearRect(0, 0, canvas4.width, canvas4.height);
                blueCircle(context4);
                text(context4,speed4);
                whiteCircle(context4,speed4);
            },10);

//畫外圈
    function whiteCircle(context,n){
        context.save();
        context.strokeStyle = "#fff"; //描邊樣式
        context.lineWidth = 39; //線寬
        context.beginPath(); //路徑開始
        context.arc(centerX, centerY, 114 , -Math.PI/2, -Math.PI/2 - n*rad, true); //(x座標，y座標，半徑，起始角度，終止角度，順/逆時針)
        context.stroke(); //繪製
        context.closePath(); //路徑結束
        context.restore();
    }
    //藍色內圈
    function blueCircle(context){
        context.save();
        context.fillStyle="#4EC2EA";
        context.lineWidth=39;
        context.strokeStyle = "#81D5F1";
        context.beginPath();
        context.arc(centerX,centerY,114,0,2*Math.PI,false);//順時針
        context.fill();
        context.stroke();
        context.restore();
    }
    //百分比文字
    function text(context,n){
        context.save(); //save和restore保證該段屬性只用在該canvas元素
        context.fillStyle = "#fff"; //描邊樣式
        context.font = "62px arial"; //设置字体大小和字体
        //繪製字體和指定位置
        context.fillText(n.toFixed(0)+"%", centerX-53, centerY+20);
        context.restore();
    }
});
