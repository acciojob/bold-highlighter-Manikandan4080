let boldEle = document.querySelectorAll('strong');
function highlight() {
	boldEle.forEach(element => {
		 element.style.color = 'green';
	})
}


function return_normal() {
	boldEle.forEach(element => {
        element.style.color = 'black';
    });
}
const link = document.getElementsByTagName('a');
// const link = document.getElementByTagNmame('a');
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);