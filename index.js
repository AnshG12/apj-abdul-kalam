const p = document.createElement("p");
p.innerHTML = "These webpages were made by Vatsal and Ansh.";


const x = document.createElement("h2");
x.innerHTML = "X";
x.classList.add("x");

$(x).click(e => {
	x.parentNode.classList.add("remove");
});


const popup = document.createElement("div");
popup.appendChild(p);
popup.appendChild(x);

popup.classList.add("popup");

popup.addEventListener('transitionend', function(e){
	p.remove();
	popup.remove();
});

document.body.appendChild(popup);