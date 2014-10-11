var pixGrid = function() {
	var myNode = document.querySelector('.pixgrid');

	myNode.addEventListener("click",function(e) {
		if (e.target.tagName === "IMG"){

			var myOverlay = document.createElement('div');
			myOverlay.id = 'overlay';
			document.body.appendChild(myOverlay);

			myOverlay.style.position = 'absolute';
			myOverlay.style.top = 0;
			myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
			myOverlay.style.cursor = 'pointer';

			myOverlay.style.width = window.innerWidth+ 'px';
			myOverlay.style.height = window.innerHeight+ 'px';
			myOverlay.style.pageYOffset+ 'px';
			myOverlay.style.pageXOffset+ 'px';

			var imageSrc = e.target.src;
			var largeImage = document.createElement('img');
			largeImage.id = 'largeImage';
			largeImage.src = imageSrc.substr(0,imageSrc.length-7)+'.jpg';
			largeImage.style.display = 'block';
			largeImage.style.position = 'absolute';

			largeImage.addEventListener('load',function() {
				if(this.height > window.innerHeight){
					this.ratio = window.innerHeight/this.height;
					this.height = this.height * this.ratio;
					this.width = this.width * this.ratio;
				}

				if (this.width > window.innerWidth) {
					this.ratio = window.innerWidth/this.width;
					this.height = this.height * this.ratio;
					this.width = this.width * this.ratio;
				}

				centerImage(this);
				myOverlay.appendChild(largeImage);
			});

			largeImage.addEventListener('click',function(\) {
				if(myOverlay){
					myOverlay.parentNode.removeChild(myOverlay);
					window.removeEventListener('resize',window,false);
					window.removeEventListener('scroll',window,false);
				}
			},false)

			window.addEventListener('resize',function() {
				if(myOverlay){
					myOverlay.style.width = window.innerWidth+ 'px';
					myOverlay.style.height = window.innerHeight+ 'px';
					myOverlay.style.top = window.pageXOffset+ 'px';
					myOverlay.style.left = window.pageYOffset+ 'px';
					centerImage(largeImage);
				}
			},false);

			window.addEventListener('scroll',function() {
				if(myOverlay){
					myOverlay.style.top = window.pageYOffset+ 'px';
					myOverlay.style.left = window.pageXOffset+ 'px';
				}
			},false)
		}
	},false)
	function centerImage (theImage) {
		var myDifX = (window.innerWidth - theImage.width)/2;
		var myDifY = (window.innerHeight - theImage.height)/2;

		theImage.style.top = myDifY+ 'px';
		theImage.style.left = myDifX+ 'px';

		return theImage;
	}
};