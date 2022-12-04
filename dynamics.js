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

function insertDexElements() {
	var dexLinks, dexIcons, i;
	dexIcons = document.getElementsByClassName("dex-icon");
	dexLinks = document.getElementsByClassName("dex-link");
	for (i = 0; i < (dexLinks.length); i++) {
		dexIcons[i].src = "Icons/" + dexLinks[i].innerText + ".png";
		dexLinks[i].href = "Pokédex/" + dexLinks[i].innerText + ".html";
	}
}

function insertGalleryElements() {
	var dexLinks, dexSprites, i;
	dexSprites = document.getElementsByClassName("dex-sprite");
	dexLinks = document.getElementsByClassName("dex-link");
	for (i = 0; i < (dexLinks.length); i++) {
		dexSprites[i].src = "Sprites/" + dexLinks[i].innerText + ".png";
		dexSprites[i].id = dexLinks[i].innerText;
		flipFun = "flipSprite('" + dexLinks[i].innerText + "', 'Sprites/" + dexLinks[i].innerText + ".png', 'Sprites/" + dexLinks[i].innerText + "-back.png')";
		dexSprites[i].setAttribute('onclick', flipFun);
		dexLinks[i].href = "Pokédex/" + dexLinks[i].innerText + ".html)";
	}
}

function stylizeTypes() {
	var typeP, i;
	typeP = document.getElementsByClassName("type");
	for (i = 0; i < (typeP.length); i++) {
		if (typeP[i].innerText == "???") {
			typeP[i].className = "type qqq";
		}
		else {
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