//changing individual properties with code and using setInterval
 var rotationSpeed = 0.7;
 var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
 	myOtherBox.object3D.rotation.x.y += rotationSpeed;
 	console.log(myOtherBox.object3D.rotation.x.y);
 }

 setInterval(spin, 16); equivalent to 60 fps;