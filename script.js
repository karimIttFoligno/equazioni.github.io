function calcola1(){
	a = document.getElementById("a1").value
	b = document.getElementById("b1").value
	c = document.getElementById("c1").value

	risultato = document.getElementById("risultato1")

	if((b == 0) && (c==0)) risultato.textContent = "equazione indeterminata"
	else if(b == 0) risultato.textContent = "equazione impossibile"
	else{
		x = -c/(a+b)
		risultato.textContent = `Esiste una soluzione x= ${x}`
	}
}


function calcola2(){
	a = document.getElementById("a2").value
	b = document.getElementById("b2").value
	c = document.getElementById("c2").value

	delta = b*b-4*a*c
	// alert((-b)/(2*a))
	alert(delta)
	risultato = document.getElementById("risultato2")

	if(delta < 0){
		// alert("test")
		risultato.textContent = "non esistono soluzioni"
	}else if(delta == 0){
		x1=(-b)/(2*a)
		const risultato_stringa = `Esistono due soluzioni coincidenti x1= ${x1} x2= ${x1}`
		risultato.textContent = risultato_stringa
	}else if(delta > 0){
		x1=(-b-Math.sqrt(delta))/(2*a)
		x2=(-b+Math.sqrt(delta))/(2*a)
		const risultato_stringa = `Esistono due soluzioni reali distinte x1= ${x1} x2= ${x2}`
		risultato.textContent = risultato_stringa
	}

}

