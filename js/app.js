let searchInput = document.getElementById("searchbar");
const figcaption = document.querySelectorAll("figcaption");
const imgDiv = document.querySelectorAll(".imagery");
const imglinks = document.querySelectorAll("figure a");

//while javascript enabled remove disabled attribute.
searchInput.removeAttribute("disabled");

//implement filter/search
searchInput.addEventListener("keyup", (event) => {
	const textInput = new RegExp(`(${searchInput.value.toLowerCase()})+`);
	//check for textInput in captions of images
	for(let i = 0; i < figcaption.length; i += 1) {
		if(textInput[Symbol.search](figcaption[i].textContent.toLowerCase()) === -1){
			imgDiv[i].style.display = "none"; //hide if no match
		}
		else {
			imgDiv[i].style.display = ""; //else show
		}
	}
});
// Implementing Lightbox by adding attributes & captions.
for(let i = 0; i < imglinks.length; i += 1) {
	figcaption[i].style.display = "none"; // hide captions while javascript enabled
	imglinks[i].setAttribute("data-lightbox", "nature");
	imglinks[i].setAttribute("data-title", figcaption[i].innerHTML);
}