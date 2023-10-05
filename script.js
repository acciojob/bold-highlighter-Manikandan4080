function highlight() {
	let boldEle = document.getElementsByTagName("strong");
	for(i in boldEle){
		boldEle[i].style.color = "green";
	}
}


function return_normal() {
	let boldEle = document.getElementsByTagName("strong");
	for(i in boldEle){
		boldEle[i].style.color = "black";
	}
}
