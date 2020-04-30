function GoogleMap() {
	var Sagrada = {lat:41.409190, lng:2.174858};
	var map = new google.maps.Map(document.getElementById('map'), {zoom: 13, center: Sagrada});
	var marker = new google.maps.Marker({position: Sagrada, map:map});

}



  var slides = 0;
  var images = [];
  var time = 3000;
  
  images[0] = 'images/Sagrada.png';
  images[1] = 'images/fam.jpg';
  images[2] = 'images/fam2.jpg';
  images[3] = 'images/fam3.jpg';
  images[4] = 'images/fam4.jpg';
  
function Slideshow(){
	document.getElementById('slideshow').src = images[slides];
	if (slides < images.length - 1){
		slides++;
	}else {
		slides = 0;
	}
	setTimeout("Slideshow()", time);
}
window.onload = Slideshow;

