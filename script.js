const brg = document.querySelector('.nav__burger'),
	brgLine = document.querySelector('.nav__links'),
	header = document.querySelector('.header'),
	mainPic = document.querySelector('.main__picture'),
	mainPicUrl = ["url('img/main__picture_2.png')",
				  "url('img/main__picture_1.png')",
			      "url('img/main__picture_3.png')"],
	sliderLeft = document.querySelector('.slider__left'),
	sliderRight = document.querySelector('.slider__right'),
	sliderIdent = document.querySelectorAll('.indicator__item'),
	body = document.querySelector('.body');
let picNum = 1;
brg.onclick = () => {
	brg.classList.toggle('active');
	brgLine.classList.toggle('active');
	header.classList.toggle('active');
}

function ChancePic () {
	mainPic.style.background = mainPicUrl[picNum];
	mainPic.style.backgroundPosition = 'center';
	mainPic.style.backgroundSize = 'contain';
	mainPic.style.backgroundRepeat = 'no-repeat'
}

RightSwipe = () => {
	if (picNum == 0 || picNum == 1) {
		if (picNum == 0) {
		sliderIdent[picNum].classList.add('active');
		sliderIdent[picNum+2].classList.remove('active');
		}
		if (picNum == 1) {
			sliderIdent[picNum].classList.add('active');
			sliderIdent[picNum-1].classList.remove('active');
		}
		++picNum;
	}
	else {
		sliderIdent[picNum].classList.add('active');
		sliderIdent[picNum-1].classList.remove('active');
		picNum = 0;
	};
	ChancePic ();
}

LeftSwipe = () => {
	if (picNum == 1 || picNum == 2) {
		if (picNum == 1) {
		sliderIdent[2].classList.add('active')
		}
		if (picNum == 2) {
			sliderIdent[0].classList.add('active')
		}
		--picNum;
	}
	else {
		picNum = 2;
		sliderIdent[1].classList.add('active')
	};
	sliderIdent[picNum].classList.remove('active');
	ChancePic ();
}

sliderLeft.onclick = () => {
	LeftSwipe();
};

sliderRight.onclick = () => {
	RightSwipe();
};

sliderIdent[1].onclick = () => {
   picNum = 2;
   sliderIdent[1].classList.add('active');
   sliderIdent[0].classList.remove('active');
   sliderIdent[2].classList.remove('active');
   ChancePic ();
};

sliderIdent[2].onclick = () => {
   picNum = 0;
   sliderIdent[2].classList.add('active');
   sliderIdent[0].classList.remove('active');
   sliderIdent[1].classList.remove('active');
   ChancePic ();
};

sliderIdent[0].onclick = () => {
   picNum = 1;
   sliderIdent[0].classList.add('active');
   sliderIdent[1].classList.remove('active');
   sliderIdent[2].classList.remove('active');
   ChancePic ();
};

let startX = null,
	endX = null;

body.addEventListener('touchstart', (e) => {
	startX = e.targetTouches[0].pageX;
})

body.addEventListener('touchend', (e) => {
	endX = e.changedTouches[0].pageX;
	if (endX - startX > 50) {
		LeftSwipe();
	}

	if (startX - endX > 50) {
		RightSwipe();
	}
})
