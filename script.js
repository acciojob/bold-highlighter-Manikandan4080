function highlight() {
	let boldEle = document.getElementsByTagName("strong");
	for(i in boldEle){
		boldEle[i].style.color = 'rgb(0, 128, 0)';
	}
}


function return_normal() {
	let boldEle = document.getElementsByTagName("strong");
	for(i in boldEle){
		boldEle[i].style.color ='rgb(0, 0, 0)';
	}
}
const link = document.getElementsByTagName('a');
// const link = document.getElementByTagNmame('a');
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);