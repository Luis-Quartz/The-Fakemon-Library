function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain attribute:*/
		file = elmnt.getAttribute("include-html");
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute("include-html");
					includeHTML();
				}
			}      
			xhttp.open("GET", file, true);
			xhttp.send();
			/*exit the function:*/
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

function showError() {
	var gonerMessages = Array(
		"No, you're not the one...",
		"When I think about it, you, too, are all alone in the world.",
		"I am Error.",
		"I think you are lost. It’s got to be around here somewhere...",
		"It's a secret to everybody.",
		"I always thought I might be bad, now I'm sure that it's true.",
		"Can anyone hear me? Help...",
		"The pain itself is reason why.",
		"Have you ever thought of a world where everything is exactly the same... except you don't exist?",
		"It feels like a whirlwind.",
		"It pulls the strings and makes them ring.",
		"L is real 2401.",
		"This message should not appear. I'll be scared if it does...",
		"If you're not careful and you noclip out of reality in the wrong areas, you'll end up in the Backrooms."
	)
	var gonerMessage = gonerMessages[Math.floor(Math.random()*gonerMessages.length)];
	gonerP = document.getElementsByClassName("goner-p");
	gonerP[0].innerText = gonerMessage;
	shiny = Math.floor(Math.random() * 100) + 1
	if (shiny == 66) {
		gonerI = document.getElementsByClassName("article-img");
		gonerI[0].src = "/Resources/Giratina-Origin-Shiny.png";
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

function sortTable(n, target) {
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById(target);
	switching = true;
	// Set the sorting direction to ascending:
	dir = "asc";
	/* Make a loop that will continue until no switching has been done: */
	while (switching) {
		// Start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/* Loop through all table rows (except the first, which contains table headers): */
		for (i = 1; i < (rows.length - 1); i++) {
			// Start by saying there should be no switching:
			shouldSwitch = false;
			/* Get the two elements you want to compare, one from current row and one from the next: */
			x = rows[i].getElementsByTagName("td")[n];
			y = rows[i + 1].getElementsByTagName("td")[n];
			/* Check if the two rows should switch place, based on the direction, asc or desc: */
			if (dir == "asc") {
				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
					}
				}
			else if (dir == "desc") {
				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
					// If so, mark as a switch and break the loop:
					shouldSwitch = true;
					break;
				}
			}
		}
		if (shouldSwitch) {
			/* If a switch has been marked, make the switch and mark that a switch has been done: */
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			// Each time a switch is done, increase this count by 1:
			switchcount ++;
		}
		else {
			/* If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again. */
			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
		}
	}
}

function toggleTables (tag) {
	var tablesToToggle, btn;
	tablesToToggle = document.getElementsByClassName(tag);
	btn = document.getElementById(tag);
	if (btn.innerHTML == "On") {
		for(var i = 0; i < tablesToToggle.length; i++) {
			tablesToToggle[i].style.display="none";
		}
		btn.innerHTML = "Off";
	} else if (btn.innerHTML == "Off") {
		for(var i = 0; i < tablesToToggle.length; i++) {
			tablesToToggle[i].style.display="block";
		}
		btn.innerHTML = "On";
	}
}