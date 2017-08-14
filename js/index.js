(function(window){
	window.onload = function(){
		//全屏滚动块
		screenScrolling()
		function screenScrolling(){
			var box = document.getElementById('box');
			var Bbox = new Cboxc();
			Bbox.ChuShi(box)
				function Cboxc(){
					this.ChuShi = function (box) {
						this.box = box;
						this.boxs = this.box.children;
						this.num = 0;
						this.lungun();
						this.ifOpen();
					}
					this.IfNum = function(tra){
						if (tra == true) {
							if (this.num < this.boxs.length-1) {
								this.num ++;
								this.start();
							}else{
								return ;
							}
						}else{
							if (this.num > 0) {
								this.num --;
								this.start();
							}else{
								return ;
							}
						}
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
						this.box.addEventListener('webkitTransitionEnd', function () {
							this.lungun()
						}.bind(this), false)
					}
				}
		}


	}
})(window)