function highlight() {
	let boldEle = document.querySelectorAll('strong');
	boldEle.forEach(element =>{
		 element.style.color = 'green';
	})
}


function return_normal() {
	let boldEle = document.querySelectorAll('strong');
	boldEle.forEach(element => {
        element.style.color = 'black';
    });
}
const link = document.getElementsByTagName('a');
// const link = document.getElementByTagNmame('a');
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);