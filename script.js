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

function insertGalleryElements() {
	var dexLinks, dexSprites, i;
	dexLinks = document.getElementsByClassName("dex-link");
	dexSprites = document.getElementsByClassName("dex-sprite");
	for (i = 0; i < (dexLinks.length); i++) {
		dexLinks[i].href = "Pokédex/" + dexLinks[i].innerText + ".html";
		dexSprites[i].src = "Sprites/" + dexLinks[i].innerText + ".png";
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

function toggleCaught(id) {
	var element = document.getElementById(id);
	element.classList.toggle("caught");
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
	var thoughts = Array(
		"Hahaha, I guess not. That white hand on your shoulder... I'm just imagining it.",
		"Our words shall remain here for the ages.",
		"Stay... Won't you stay with me?",
		"There is no one but you here...",
		"Every rumor has a kernel of truth to it.",
		"A flipped coin doesn't always land heads or tails. Sometimes it may never land at all...",
		"By the way, who is that standing behind you?",
		"Dad, Mom, Abra... Where are you...?",
		"No, you're not the one...",
		"I'm going to go for help. Wait in the usual place.",
		"Where... Where am I?",
		"When I think about it, you, too, are all alone in the world.",
		"Bold, precise, experimental.",
		"Hello, starlight, you certainly gave everyone a scare.",
		"Counting the seconds, standing alone, as thousands of years go by...",
		"Don't become his lunch.",
		"Shhh! Please walk quietly in the hallway!",
		"L is real 2401.",
		"We need to talk about parallel universes.",
		"This message should not appear. I'll be scared if it does...",
		"XD3R-B8HH-9ZR2-FL16",
		"It's a secret to everybody.",
		"I am Error.",
		"You've met with a terrible fate, haven't you?",
		"I think you are lost. It’s got to be around here somewhere...",
		"Have you ever thought of a world where everything is exactly the same... except you don't exist?",
		"Please don't think about this anymore.",
		"Yes, your friend... The one behind you, with the creepy smile.",
		"I just wasn't ready for the responsibility.",
		"The air crackles with freedom.",
		"It feels like a whirlwind.",
		"It pulls the strings and makes them ring.",
		"You lost it when you tried to see too far...",
		"Can anyone hear me? Help...",
		"It's dark... It's so dark here...",
		"It could not be.",
		"The pain itself is reason why.",
		"It's funny because we're all living in a simulation and free will is a lie.",
		"Who are you running from?",
		"You know how I never like letting people see my unfinished work.",
		"Welcome to the zone between zones.",
		"Warning: Nonstandard Spacetime",
		"God save you if you hear something wandering around nearby, because it sure as hell has heard you.",
		"This is the dimension of imagination."
	)
	var fun = Math.floor(Math.random()*thoughts.length);
	echo = thoughts[fun];
	abyss = document.getElementsByClassName("abyss");
	abyss[0].innerText = echo;
	pid = Math.floor(Math.random() * 66) + 1
	if (pid == 66) {
		G = document.getElementsByClassName("G");
		G[0].src = "/Main/Pokédex/Gen4/Giratina-Origin-Shiny.png";
	}
}