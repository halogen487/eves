function update() {
	var today = new Date()
	var christmas = new Date(today.getFullYear(), 11, 25)
	if (today.getMonth() == 11 && today.getDate() > 25) {
		christmas.setFullYear(christmas.getFullYear() + 1)
	}
	var elapsedDays = Math.ceil((christmas - today) / 1000 / 60 / 60 / 24)
	verboseDate = "Christmas"
	for (i = 0; i < elapsedDays; i++) {
		verboseDate += " Eve";
	}
	document.getElementById("date").innerHTML = verboseDate
	if (elapsedDays == 0) {
		document.getElementById("message").innerHTML = "Merry Christmas!"
	}
	else if (elapsedDays == 1) {
		document.getElementById("message").innerHTML = "Merry Christmas Eve!"
	}
	else if (elapsedDays > 1) {
		document.getElementById("message").innerHTML = "Merry Christmas Eve * " + elapsedDays + "!"
	}
	document.getElementById("time").innerHTML = today.getHours() + ":" + today.getMinutes()
}
update()
setInterval(update, 10000)