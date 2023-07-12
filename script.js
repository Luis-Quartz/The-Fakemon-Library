function includeHTML() {
	var z, i, elmnt, file, xhttp;
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		file = elmnt.getAttribute("include-html");
		if (file) {
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Wild MissingNo. appeared!";}
					elmnt.removeAttribute("include-html");
					includeHTML();
				}
			}      
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
	}
}

function toggleBar(id) {
	var bar = document.getElementById(id);
	if (bar.style.display === "none") {
		bar.style.display = "block";
	}
	else {
		bar.style.display = "none";
	}
}

function insertGalleryElements() {
	var dexLinks, dexSprites, i;
	dexLinks = document.getElementsByClassName("dex-link");
	dexSprites = document.getElementsByClassName("dex-sprite");
	sprLinks = document.getElementsByClassName("spr-link");
	for (i = 0; i < (dexLinks.length); i++) {
		dexLinks[i].href = "Pokédex/" + dexLinks[i].innerText + ".html";
		dexSprites[i].src = "Sprites/" + dexLinks[i].innerText + ".png";
		sprLinks[i].href = "Pokédex/" + dexLinks[i].innerText + ".html";
	}
}

function stylizeTypes() {
	var typeP, i;
	typeP = document.getElementsByClassName("type");
	for (i = 0; i < (typeP.length); i++) {
		switch (typeP[i].innerText) {
			case "Unknown":
				typeP[i].className = "type nkdf";
				break;
			case "???":
				typeP[i].className = "type qqq";
				break;
			default:
				typeP[i].className = "type " + typeP[i].innerText;
		}
	}
}

function flipSprite(spr, front, back) {
	var sp = document.getElementById(spr);
	if (sp.title == "Front") {
		sp.src = back;
		sp.title = "Back";
	} else {
		sp.src = front;
		sp.title = "Front";
	}
}

function distortReality() {
	var fallerMessages = Array(
		"Hahaha, I guess not. That white hand on your shoulder... I'm just imagining it.",
		"Stay... Won't you stay with me?",
		"By the way, who is that standing behind you?",
		"Dad, Mom, Abra... Where are you...?",
		"No, you're not the one...",
		"I'm going to go for help. Wait in the usual place.",
		"Where... Where am I?",
		"Bold, precise, experimental.",
		"Don't become his lunch.",
		"I think you are lost. It’s got to be around here somewhere...",
		"Please don't think about this anymore.",
		"Can anyone hear me? Help...",
		"It pulls the strings and makes them ring.",
		"It's dark... It's so dark here...",
		"It could not be.",
		"The pain itself is reason why."
	)
	var fun = Math.floor(Math.random()*fallerMessages.length);
	gonerEchoes = document.getElementsByClassName("void");
	gonerEchoes[0].innerText = fallerMessages[fun];
	pid = Math.floor(Math.random() * 66) + 1
	if (pid == 66) {
		G = document.getElementsByClassName("G");
		G[0].src = "/Main/Pokédex/Gen4/Giratina-Origin-Shiny.png";
	}
}