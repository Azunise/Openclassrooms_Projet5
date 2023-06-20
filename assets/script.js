const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let pic_list = document.querySelectorAll("#banner img")

var arrow_left = pic_list[1]
var arrow_right = pic_list[2]

for (let i = 0; i < pic_list.length; i++) {
	console.log(pic_list[i])
}

var nbImg = slides.length


var current_pic = 0;

console.log(nbImg);

arrow_left.onclick = function() {
	/*current_pic--;
	current_pic = ((current_pic % nbImg) + nbImg) % nbImg;*/
	if (current_pic == 0) {
		current_pic = (nbImg - 1);
	} else {
		current_pic--;
	}
	
	let placeholder = '';
	for (i = 0; i < current_pic; i++) {
		placeholder+= '<li class="dot"></li>';
	
	}
	placeholder+= '<li class="dot dot_selected"></li>'
	for (i = current_pic + 1; i < nbImg; i++) {
		placeholder+= '<li class="dot"></li>';
	
	}
	document.querySelector('#banner .banner-img').outerHTML = '<img class="banner-img" src="./assets/images/slideshow/' + slides[current_pic].image + '" alt="Banner Print-it">';
	document.querySelector('#banner p').outerHTML = '<p>' + slides[current_pic].tagLine + '</p>';
	document.querySelector('#banner .dots').outerHTML = '<ul class="dots">\n '+ placeholder + '</ul>';
	

}

arrow_right.onclick = function() {
	/*current_pic++;
	current_pic = current_pic % nbImg;*/
	if (current_pic == (nbImg - 1)) {
		current_pic = 0;
		console.log(current_pic);
	} else {
		current_pic++;
		console.log(current_pic);
	}
	
	let placeholder = '';
	for (i = 0; i < current_pic; i++) {
		placeholder+= '<li class="dot"></li>';
	
	}
	placeholder+= '<li class="dot dot_selected"></li>'
	for (i = current_pic + 1; i < nbImg; i++) {
		placeholder+= '<li class="dot"></li>';
	
	}
	document.querySelector('#banner .banner-img').outerHTML = '<img class="banner-img" src="./assets/images/slideshow/' + slides[current_pic].image + '" alt="Banner Print-it">';
	document.querySelector('#banner p').outerHTML = '<p>' + slides[current_pic].tagLine + '</p>';
	document.querySelector('#banner .dots').outerHTML = '<ul class="dots">\n '+ placeholder + '</ul>';
	
	
}

console.log(document.querySelector(".dots"))




