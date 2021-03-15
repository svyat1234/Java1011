function plus(){
	
	var num1, num2, result;
	
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = num1 + num2;
	
	document.getElementById('out').innerHTML = result;
}

function minus(){
	
	var num1, num2, result;
	
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = num1 - num2;
	
	document.getElementById('out').innerHTML = result;
}

function multiplication(){
	
	var num1, num2, result;
	
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = num1 * num2;
	
	document.getElementById('out').innerHTML = result;
}

function division(){
	
	var num1, num2, result;
	
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = num1 / num2;
	
	document.getElementById('out').innerHTML = result;
}






let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.608855, lng: 38.0981 },
    zoom: 20,
  })};