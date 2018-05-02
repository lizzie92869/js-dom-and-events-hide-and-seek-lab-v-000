

let getFirstSelector = function(selector){

	return document.querySelector(selector);
}

let nestedTarget = function(){
	return document.querySelector('#nested .target');
}


let increaseRankBy = function(n){
	let array = document.querySelectorAll('.ranked-list');
	//this returns an array of length 2 - each have their own list
		//iterate over those lists (children)
	//and THEN - parseInt and add n
	for (let i = 0; i<array.length; i++){
		let children = array[i].children
		for (let j = 0; j<children.length; j++){
			let children = array[i].children
			children[j].innerHTML = parseInt(children[j].innerHTML) + n
		}
	}

}






let deepestChild = function(){
	
	let parent = document.getElementById("grand-node");
	// loop until element fund. when no more return the last one
	let children = parent.children[0]

	while (children){

		parent = children
		children = parent.children[0] 
	}
		return parent
}
	


