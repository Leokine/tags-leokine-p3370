 function f(){
	var object = {tag: null, text: null, count: 0}
 		var pTag = document.getElementsByTagName('p')[0];
 		var pTagStr = pTag.textContent;
		console.log(pTag);
		console.log(pTagStr);
		object.tag = pTagStr.match(/tag:([a-z]*)\;/)[1]; 
		object.text = pTagStr.match(/text:(.*)\;/)[1]; 
		object.count = parseInt(pTagStr.match(/count:(\d)/)[1],10); 
		console.log(object);
		document.body.removeChild(pTag);
		var newTag = document.createElement(object.tag);
		newTag.insertAdjacentHTML("afterbegin", object.text);
		var newTagClone = newTag.cloneNode(true);
		for (var i = 0; i < object.count; i++) {
			var newTagClone = newTag.cloneNode(true);
			document.body.appendChild(newTagClone);
		}
		console.log(document.body.innerHTML);
};