//接入方式-标题
    var canvas1 = document.getElementById('canvas1'),
        context1 = canvas1.getContext('2d'),
        canvas2 = document.getElementById('canvas2'),
        context2 = canvas2.getContext('2d'),
        canvas3 = document.getElementById('canvas3'),
        context3 = canvas3.getContext('2d'),
        canvas4 = document.getElementById('canvas4'),
        context4 = canvas4.getContext('2d'),
        centerX = canvas1.width/2,  //Canvas中心点x轴坐标
        centerY = canvas1.height/2,  //Canvas中心点y轴坐标
        rad = Math.PI*2/100, //将360度分成100份，那么每一份就是rad度
        speed1 = 0.1; //加载的快慢
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

//绘制白色外圈
    function whiteCircle(context,n){
        context.save();
        context.strokeStyle = "#fff"; //设置描边样式
        context.lineWidth = 39; //设置线宽
        context.beginPath(); //路径开始
        context.arc(centerX, centerY, 114 , -Math.PI/2, -Math.PI/2 - n*rad, true); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
        context.stroke(); //绘制
        context.closePath(); //路径结束
        context.restore();
    }
    //绘制蓝色内圈
    function blueCircle(context){
        context.save();
        context.fillStyle="#4EC2EA";
        context.lineWidth=39;
        context.strokeStyle = "#81D5F1";
        context.beginPath();
        context.arc(centerX,centerY,114,0,2*Math.PI,false);//顺时针
        context.fill();
        context.stroke();
        context.restore();
    }
    //百分比文字绘制
    function text(context,n){
        context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
        context.fillStyle = "#fff"; //设置描边样式
        // context.font = "54px Microsoft Yahei"; //设置字体大小和字体
        context.font = "62px arial"; //设置字体大小和字体
        //绘制字体，并且指定位置
        context.fillText(n.toFixed(0)+"%", centerX-53, centerY+20);
        context.restore();
    }
