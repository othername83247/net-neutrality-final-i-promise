function afunction(){
			window.alert("Save Net Neutrality!");
			document.body.style.backgroundColor = 'red';
			document.getElementById("abutton").disabled = true;
			for(i=0;i<=1;i++){
				document.querySelectorAll('h4')[i].textContent = 'Loading...';
			}
			for(i=0;i<=1;i++){
				document.querySelectorAll('img')[i].src = 'http://media.giphy.com/media/JBeu9q9LC1Kve/giphy.gif';
			}
			for(i=0;i<=1;i++){
				document.querySelectorAll('p')[i].style.backgroundColor = 'black';
			}
			for(i=0;i<=document.querySelectorAll('a').length;i++){
				document.querySelectorAll('a')[i].href = '';
			}
		}
function addElement(x){
	var para = document.createElement('p')
	var node = document.createTextNode(document.querySelectorAll('input')[x].value);
	para.appendChild(node);
	var element = document.getElementById("petitiondiv");
	element.appendChild(para);
}
function petitionfunction(){
	addElement(1)
	addElement(2)
	addElement(3)
	var number = parseInt(document.getElementById('numberspan').textContent)
	var newnumber = number + 1
	document.getElementById('numberspan').textContent = newnumber
}
document.getElementById("abutton").addEventListener("click", afunction);
document.getElementById("petitionbutton").addEventListener("click", petitionfunction);