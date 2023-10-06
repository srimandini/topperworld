let image = document.querySelector(".sliderimg");
let translate = 0;

setInterval(() => {
	if(translate >= 0 && translate < 500){
		translate+=100
	}
	else{
		translate = 0
	}
	console.log("hii")
	image.style.transition ="1s";
	image.style.transform = `translateX(${-translate}%)`
},5000)

function right(){
	if(translate < 500 ){
		translate +=100
		image.style.transition ="1s";
		image.style.transform = `translateX(${-translate}%)`
	}
	console.log("hii")
}

function left(){
	if(translate > 0 ){
		translate -=100
		image.style.transition ="1s";
		image.style.transform = `translateX(${-translate}%)`
	}
	console.log("hello")
}