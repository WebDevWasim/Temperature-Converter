
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('C').addEventListener('input',function(e) {
	document.getElementById('output').style.visibility = 'visible';
	var C = parseInt(e.target.value);
	document.getElementById('F').innerHTML = (C * 1.8) + 32;
	document.getElementById('K').innerHTML = (C + 273.15);
});