(function(window){
	window.onload = function(){
		//全屏滚动块
		screenScrolling()
		function screenScrolling(){
			let box = document.getElementById('box');
			let openBox = document.getElementById('headerul');
			var line = document.getElementById('line')
			// line.style.transform = "translateX(800px)"
			//赵佳佳 第一屏下箭头点击
			var btnOne=document.getElementsByClassName("btnOne")[0];
			let Bbox = new Cboxc();
			Bbox.ChuShi(openBox,box,btnOne)
			function Cboxc(){
				this.ChuShi = function(openBox,box,btnOne){
					this.openBox = openBox;
					this.openBoxs = document.getElementsByClassName('liBtn');
					this.box = box;
					this.boxs = this.box.children;
					this.num = 0;
					this.btnOne=btnOne;
					// this.Create();
					this.ClickNum();
					this.lungun();
					this.ifOpen();
					//赵佳佳 第一屏点击下箭头
					this.clickOne();

					this.numChange();
					this.lineChange();
				}
                this.numChange = function (flag) {
					if(flag&&this.num<this.openBoxs.length-1){
							this.num++;
							this.start()
					}else if (!flag&&this.num>0){
						this.num--;
                        this.start()
                    }
                    if(this.num==6&&document.body.clientWidth>1440){
                        document.getElementsByClassName('seven_font')[0].style.animationPlayState="running"
                        document.getElementsByClassName('box7_bottom')[0].style.animationPlayState="running"
                    }
                }
				this.ClickNum = function(){
					this.openBox.addEventListener('click',function(e){
						if(e.target.className == 'liBtn'){
							console.log(this.num)
							this.num = [...this.openBoxs].indexOf(e.target);
							this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
						}
						this.headchange();
					}.bind(this),false)
				}
				this.Remove = function(event){
					if(event.deltaY < 0){
						this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
						this.numChange(false);
						this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
					}else if(event.deltaY > 0){
						this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
						this.numChange(true);
						this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
					}
					this.headchange()

                }.bind(this)
                //linechange wangkan//
                this.lineChange = function () {
                    openBox.addEventListener('mouseover',function (e) {
                    	let posleft;
                    	if(e.target.className == 'liBtn'){
                    		posleft = e.target.offsetLeft;
                            line.style.transform = 'translateX('+ posleft + 'px)'
                        }
                        // line.style.transform = "translateX(500px)"
                    },false)
					openBox.addEventListener('mouseleave',function () {
                        let posleft = this.openBoxs[this.num].offsetLeft;
                        line.style.transform = 'translateX('+ posleft + 'px)'
                    }.bind(this))
                }.bind(this);
				// headchange wangkan
				this.headchange = function () {
                    line.style.transform = 'translateX('+ this.openBoxs[this.num].offsetLeft + 'px)';
                    for(let i=0;i<this.openBoxs.length;i++){
                        this.openBoxs[i].style.color="#ccc"
                    }
                    this.openBoxs[this.num].style.color="#00dfb9"
                    if(this.num == 0){
						for(var i =0;i<this.openBoxs.length;i++){
							this.openBoxs[i].style.fontSize=20+'px';
							this.openBoxs[i].style.margin = "auto 8px";
						}
                        line.style.width = 40+ 'px';
                        line.style.transform = 'translateX(20px)'
					}else if(this.num == 1){
                        line.style.transform = 'translateX('+ this.openBoxs[1].offsetLeft + 'px)'
                        for(var i =0;i<this.openBoxs.length;i++){
                            this.openBoxs[i].style.fontSize=16+'px';
                            this.openBoxs[i].style.margin = "auto 5px"
                        }
                        line.style.width = 32+ 'px';
                        line.style.transform = 'translateX(120px)'
                    } else {
                        for(var i =0;i<this.openBoxs.length;i++){
                            this.openBoxs[i].style.fontSize=16+'px';
                            this.openBoxs[i].style.margin = "auto 5px"
                        }
                        line.style.width = 32+ 'px';
                    }
                }.bind(this)





				this.lungun = function(){
					window.addEventListener("mousewheel",this.Remove,false);
				}
				this.start = function(){
					window.removeEventListener("mousewheel",this.Remove,false);
				}
				this.ifOpen = function(){
					this.box.addEventListener('webkitTransitionEnd',function(){this.lungun()}.bind(this),false)
				}

				//赵佳佳 第一屏点击下箭头
				this.clickOne=function(){
					this.btnOne.addEventListener("click",function(){
						this.num=1;
						this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
					}.bind(this),false)
				}

			}
		}

		//赵佳佳 第一屏轮播
		Lunbo1();
		function Lunbo1() {
			// 第一屏轮播
			let bgBox = document.getElementById('bgBox');
			let BgBtnBox = document.getElementById('BgBtnBox');
			let LunboBtn = document.getElementsByClassName('LunboBtn');
			let cw=document.body.clientWidth;
			bgBox.style.width=cw*(bgBox.children.length)+"px";
			let NumIn = 0;
			var XinNum = 0;
			let Timer = null;
			for (var i = 0; i < bgBox.children.length; i++) {
				bgBox.children[i].style.width=cw+'px'
			};
			Timer = setInterval(Main,2000);
			function Main(){
				NumIn++;
				XinNum ++;
				if(NumIn > bgBox.children.length - 1){
					NumIn = 1;
					bgBox.style.left = 0;
				}
				animtion(bgBox,-NumIn*cw);
				XinNum = XinNum>LunboBtn.length-1?0:XinNum;
				for (let i = 0; i < LunboBtn.length; i ++){
					LunboBtn[i].style.background = '#fff';
				}
				LunboBtn[XinNum].style.background = '#00dfb9';
			}
			for(var i=0;i<LunboBtn.length;i++){
				LunboBtn[i].index = i;
				LunboBtn[i].onmouseover = function () {
					for (let i = 0; i < LunboBtn.length; i ++){
						LunboBtn[i].style.background = '#fff';
					}
					LunboBtn[this.index].style.background = '#00dfb9';
					animtion(bgBox,-this.index*cw)
					NumIn = XinNum = this.index;
				}
			}
			BgBtnBox.onmouseover = function(){
				clearInterval(Timer);
			}
			BgBtnBox.onmouseout = function(){
				Timer = setInterval(Main,2000)
			}
			function animtion(obj,target){
				clearInterval(obj.Timer);
				let speen = obj.offsetLeft < target ? 15 : -15;
				obj.Timer = setInterval(function(){
					let seates = target - obj.offsetLeft;
					obj.style.left = obj.offsetLeft + speen + 'px';
					if (Math.abs(seates) <= 15){
						obj.style.left = target + 'px';
						clearInterval(obj.Timer)
					}
				},10)
			}
		}

       // 马雅婷  第四屏
        var cutop = document.getElementsByClassName('cutop')[0];
        cutop.addEventListener("transitionend", function() {
            cutop.style.opacity = '1';
        }, false);
        var cuddiv1 = document.getElementsByClassName('cuddiv1')[0];
        cuddiv1.addEventListener("transitionend", function() {
            cuddiv1.style.top = '0';
        }, false);
        var cuddiv2 = document.getElementsByClassName('cuddiv2')[0];
        cuddiv2.addEventListener("transitionend", function() {
            cuddiv2.style.top = '0';
        }, false);
        var cuddiv3 = document.getElementsByClassName('cuddiv3')[0];
        cuddiv3.addEventListener("transitionend", function() {
            cuddiv3.style.top = '0';
        }, false);
        var cuddiv4 = document.getElementsByClassName('cuddiv4')[0];
        cuddiv4.addEventListener("transitionend", function() {
            cuddiv4.style.top = '0';
        }, false);
        var cuddiv5 = document.getElementsByClassName('cuddiv5')[0];
        cuddiv5.addEventListener("transitionend", function() {
            cuddiv5.style.top = '0';
        }, false);
        var cuddiv6 = document.getElementsByClassName('cuddiv6')[0];
        cuddiv6.addEventListener("transitionend", function() {
            cuddiv6.style.top = '0';
        }, false);
        var cuddiv7 = document.getElementsByClassName('cuddiv7')[0];
        cuddiv7.addEventListener("transitionend", function() {
            cuddiv7.style.top = '0';
        }, false);
        var cuddiv8 = document.getElementsByClassName('cuddiv8')[0];
        cuddiv8.addEventListener("transitionend", function() {
            cuddiv8.style.top = '0';
        }, false);
        var cuddiv9 = document.getElementsByClassName('cuddiv9')[0];
        cuddiv9.addEventListener("transitionend", function() {
            cuddiv9.style.top = '0';
        }, false);
        var cuddiv10 = document.getElementsByClassName('cuddiv10')[0];
        cuddiv10.addEventListener("transitionend", function() {
            cuddiv10.style.top = '0';
        }, false);
      // 跟随鼠标移动
        var cusbutton = document.getElementById('cusbutton')
        var cushade = document.getElementById('cushade')
        var cushade2 = document.getElementById('cushade2')
        var ele = document.createElement('div')
        ele.className = 'cushade2'
        var poTop
        var poLeft
        var flag = false
        cusbutton.addEventListener('mouseover', function(event) {
            cushade2.style.display = 'block'
            poLeft = event.target.offsetLeft
            poTop = event.target.offsetTop
            cushade2.style.top = poTop + 'px'
            cushade2.style.left = poLeft + 'px'

        }, false)
        cusbutton.addEventListener('mouseleave', function() {
            var ele = document.getElementsByClassName('cushade2')
            cushade2.style.display = 'none'
        }, false)
     // 第四屏结束
        // 王侃  第七屏选项卡
        seven_option()
        function seven_option() {
            let opt_box = document.getElementsByClassName('option_box')[0];
            let opt_ulbg = document.getElementById('bg');
            let sev_lish = document.getElementsByClassName("option_li1")[0].offsetWidth;

            if(document.body.clientWidth<720){
                document.getElementsByClassName('option_1')[0].onmouseover=function () {
                    opt_box.style.transform = 'translateX(0)'
                    opt_ulbg.style.transform = 'translateX(0)'
                }
                document.getElementsByClassName('option_2')[0].onmouseover=function () {
                    opt_box.style.transform = 'translateX('+ -sev_lish +'px )';
                    opt_ulbg.style.transform = 'translateX(80px)'

                }
                document.getElementsByClassName('option_3')[0].onmouseover=function () {
                    opt_box.style.transform = 'translateX('+ -sev_lish*2 +'px )'
                    opt_ulbg.style.transform = 'translateX(160px)'
                }
            }else {
                document.getElementsByClassName('option_1')[0].onmouseover=function () {
                    opt_box.style.transform = 'translateX(0)'
                    opt_ulbg.style.transform = 'translatey(0)'
                }
                document.getElementsByClassName('option_2')[0].onmouseover=function () {
                    opt_box.style.transform = 'translateX('+ -sev_lish +'px )';
                    opt_ulbg.style.transform = 'translatey(42px)'

                }
                document.getElementsByClassName('option_3')[0].onmouseover=function () {
                    opt_box.style.transform = 'translateX('+ -sev_lish*2 +'px )'
                    opt_ulbg.style.transform = 'translatey(84px)'
                }
            }

        }



		//改变屏幕大小
		window.onresize=function() {
            seven_option();
            // deemo9562
			var cw = document.body.clientWidth;
			var LunBoNum = 0;
			var homepageLunbo = document.getElementsByClassName("homepageLunbo");
			bgBox.style.width = cw * (homepageLunbo.length) + "px";
			for (var i = 0; i < homepageLunbo.length; i++) {
				homepageLunbo[i].style.width = window.innerWidth + "px";
			}
			bgBox.style.left = -cw * LunBoNum + "px";
		}
	};
	/*李威第三屏*/
    var slideUP=$('.shade_up').innerHeight();
    var slideDown=$('.shade_dowm').innerHeight();
    $(".box_shade").each(function(index){
        $('.box_shade').eq(index).hover(function(){
            $(this).find('.shade_dowm').stop(true).animate({bottom:'0px'},300);
            $(this).find('.shade_up').stop(true).animate({top:'0px'},300);
        },function(){
            $(this).find('.shade_dowm').stop(true).animate({bottom:-slideDown+'px'},300);
            $(this).find('.shade_up').stop(true).animate({top:-slideUP+'px'},300);
            $(this).find('.shade_content>p').css({color:'#999999'})
        });
    });

})(window);
