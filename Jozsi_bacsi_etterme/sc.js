function $(id) {
	return document.getElementById(id);
}

function pipa1() {
	$('Mbody').innerHTML = '';

	var osszeg = 0;

	//hétfő

	if ($('checkbox1').checked == true && $('checkbox2').checked == false) {
		var cod =
			'<div class="rendeles" ><p>Hétfői menü: Fokhagymakrém leves </p><p>1350.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 1350;
	} else if ($('checkbox1').checked == false && $('checkbox2').checked == true) {
		var cod =
			'<div class="rendeles"><p>Hétfői menü: Rántott karaj szelet sült burgonyával </p><p>1350.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 1350;
	} else if ($('checkbox1').checked == true && $('checkbox2').checked == true) {
		var cod =
			'<div class="rendeles"><p>Hétfői menü: Fokhagyma krémleves és Rántott karaj szelet sült burgonyával </p><p>2130.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 2130;
	}

	//kedd

	if ($('checkbox3').checked == true && $('checkbox4').checked == false) {
		var cod = '<div class="rendeles"><p>Keddi menü: Egres leves </p><p>1350.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 1350;
	} else if ($('checkbox3').checked == false && $('checkbox4').checked == true) {
		var cod =
			'<div class="rendeles"><p>Keddi menü: Debreceni töltött káposzta </p><p>1350.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 1350;
	} else if ($('checkbox3').checked == true && $('checkbox4').checked == true) {
		var cod =
			'<div class="rendeles"><p>Keddi menü: Egres leves és Debreceni töltött káposzta </p><p>2130.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 2130;
	}

	//Szerda

	if ($('checkbox5').checked == true && $('checkbox6').checked == false) {
		var cod = '<div class="rendeles"><p>Szerdai menü: Korhelyleves </p><p>1350.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 1350;
	} else if ($('checkbox5').checked == false && $('checkbox6').checked == true) {
		var cod =
			'<div class="rendeles"><p>Szerdai menü: Csikós tokány főtt tésztával </p><p>1350.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 1350;
	} else if ($('checkbox5').checked == true && $('checkbox6').checked == true) {
		var cod =
			'<div class="rendeles"><p>Szerdai menü:  Korhelyleves és Csikós tokány főtt tésztával </p><p>2130.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 2130;
	}

	//Csütörtök

	if ($('checkbox7').checked == true && $('checkbox8').checked == false) {
		var cod =
			'<div class="rendeles"><p>Csütörtöki menü: Paradicsom leves </p><p>1350.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 1350;
	} else if ($('checkbox7').checked == false && $('checkbox8').checked == true) {
		var cod =
			'<div class="rendeles"><p>Csütörtöki menü: Mediterrán csirke </p><p>1350.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 1350;
	} else if ($('checkbox7').checked == true && $('checkbox8').checked == true) {
		var cod =
			'<div class="rendeles"><p>Csütörtöki menü: Paradicsom leves és Mediterrán csirke </p><p>2130.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 2130;
	}

	//Péntek

	if ($('checkbox9').checked == true && $('checkbox10').checked == false) {
		var cod = '<div class="rendeles"><p>Pénteki menü: Zölbableves </p><p>1350.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 1350;
	} else if ($('checkbox9').checked == false && $('checkbox10').checked == true) {
		var cod = '<div class="rendeles"><p>Pénteki menü: Gombapörkölt  </p><p>1350.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 1350;
	} else if ($('checkbox9').checked == true && $('checkbox10').checked == true) {
		var cod =
			'<div class="rendeles"><p>Pénteki menü: Zölbableves Gombapörkölt  </p><p>2130.- Ft</p></div>';
		$('Mbody').innerHTML += cod;
		osszeg += 2130;
	}

	//összeg

	$('Mbody').innerHTML += '<div class="rendeles"><p>Összesen: </p><p>' + osszeg + '- Ft</p></div>';
}
