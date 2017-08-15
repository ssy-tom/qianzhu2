(function(window){
	window.onload = function(){
		//全屏滚动块
		screenScrolling()
		function screenScrolling(){
			let box = document.getElementById('box');
			let openBox = document.getElementById('openBox');
			//赵佳佳 第一屏下箭头点击
			var btnOne=document.getElementsByClassName("btnOne")[0];
			let Bbox = new Cboxc();
			Bbox.ChuShi(openBox,box,btnOne)
			function Cboxc(){
				this.ChuShi = function(openBox,box,btnOne){
					this.openBox = openBox;
					this.openBoxs = this.openBox.children;
					this.box = box;
					this.boxs = this.box.children;
					this.num = 0;
					this.btnOne=btnOne;
					this.Create();
					this.ClickNum();
					this.StyleBack();
					this.lungun();
					this.ifOpen();
					//赵佳佳 第一屏点击下箭头
					this.clickOne();
				}
				this.Create = function(){
					for (let i = 0; i < this.boxs.length; i++) {
						let Inner = document.createElement('a');
						Inner.className = 'active';
						this.openBox.appendChild(Inner);
					};
				}
				this.IfNum = function(tra){
					if (tra == true) {
						if (this.num < this.boxs.length-1) {
							this.num ++;
							this.start();
						}else{
							return ;
						}
						this.StyleBack();
					}else{
						if (this.num > 0) {
							this.num --;
							this.start();
						}else{
							return ;
						}
						this.StyleBack();
					}
				}
				this.StyleBack = function(){
					this.openBoxs[this.num].style.background = 'red';
					[...this.openBoxs].forEach(function(value,index){
						value.style.background = '';
					})
					this.openBoxs[this.num].style.background = 'red';
				}

				this.ClickNum = function(){
					this.openBox.addEventListener('click',function(e){
						if(e.target.className == 'active'){
							console.log(this.num)
							this.num = [...this.openBoxs].indexOf(e.target);
							this.StyleBack();
							this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
						}
					}.bind(this),false)
				}
				this.Remove = function(event){
					if(event.deltaY < 0){
						this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
						this.IfNum(false);
						this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
					}else if(event.deltaY > 0){
						this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
						this.IfNum(true);
						this.box.style.transform = 'translate3d(0px,'+-this.num*100+'%, 0px)';
					}
				}.bind(this)
				this.lungun = function(){
					window.addEventListener("mousewheel",this.Remove,false);
				}
				this.start = function(){
					window.removeEventListener("mousewheel",this.Remove,false);
				}
				this.ifOpen = function(){
					this.openBox.addEventListener('webkitTransitionEnd',function(){this.lungun()}.bind(this),false)
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
		NumOneLunbo();
		function NumOneLunbo(){
			var bgBox=document.getElementById("bgBox");
			var homepageLunbo=document.getElementsByClassName("homepageLunbo");
			var cw=document.body.clientWidth;
			bgBox.style.width=cw*(homepageLunbo.length)+"px";
			var LunBoNum=0;
			var indexNum=0;
			var furIndex=0;
			var time;
			var LunboBtn=document.getElementsByClassName("LunboBtn");
			// 获取第一个子元素
			function getFirstChild(obj){
				return obj.children[0];
			}
			function getLastChild(obj){
				return obj.children[obj.children.length-1];
			}
			for (var i = 0; i < homepageLunbo.length; i++) {
				homepageLunbo[i].style.width=cw+'px'
			};

			function move(){
				LunBoNum++;
				if (LunBoNum>LunboBtn.length-1) {
					LunBoNum=0;
				};
				animate(bgBox,{left:-cw},function(){
					var fir=bgBox.children[0];
					bgBox.appendChild(fir);
					bgBox.style.left=0

					for(var j=0;j<LunboBtn.length;j++){
						LunboBtn[j].style.background=""
					}
					LunboBtn[LunBoNum].style.background="#00DFB9"
				})
			}
			function moveLunBo2(){
				time=setInterval(move,2000);
			}
			function clearLunBo2(){
				clearInterval(time);
			}
			moveLunBo2();
			var LunboBtn=document.getElementsByClassName("LunboBtn");
			function hoverBtn(){
				for(var i=0;i<LunboBtn.length;i++){
					LunboBtn[i].index=i;
					LunboBtn[i].onmouseover=function(){
						clearLunBo2();
						indexNum=LunBoNum;
						furIndex=this.index;
						LunBoNum=this.index;
						for(var j=0;j<LunboBtn.length;j++){
							LunboBtn[j].style.background=""
						}
						LunboBtn[LunBoNum].style.background="#00DFB9";

						var cha=furIndex-indexNum;
						if (cha>0) {
							animate(bgBox,{left:-cw},function(){
								var fir=bgBox.children[0];
								bgBox.appendChild(fir);
								bgBox.style.left=0;
								indexNum=furIndex;
							})
						}else{
							var abs=Math.abs(cha);
							bgBox.style.left=-cw*abs+"px";
							for(var i=0;i<LunboBtn.length;i++){
								// animate(bgBox,left:0,)
								var fir2=getFirstChild(bgBox);
								var last=getLastChild(bgBox);
								bgBox.insertBefore(last,fir2);
							}
							animate(bgBox,{left:0},function(){
								indexNum=furIndex;
							})
						}
						moveLunBo2()
					}
				}
			}
			hoverBtn();
		}
		//改变屏幕大小
		window.onresize=function() {
			var homepageLunbo = document.getElementsByClassName("homepageLunbo");
			for (var i = 0; i < homepageLunbo.length; i++) {
				homepageLunbo[i].style.width = window.innerWidth + "px";

			}
		}
	}
})(window)