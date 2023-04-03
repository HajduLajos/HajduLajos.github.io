


function gomb(){
    document.getElementById("talalat").innerHTML = " "
    var keresszo = document.getElementById("keresszo").value
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '13db850201mshb1f5d30e33cedf1p129af9jsnac77e5436012',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    
    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${keresszo}`, options)
        .then(response => response.json())
        .then(response => kiir(response))
        .catch(err => console.error(err));
    



}

function kiir(response){
    console.log(response)
    var db = 1

    if(response.d.lenght == 0){
        document.getElementById("talalat").innerHTML = "Nincs találat"
    }
    else{
    for (const elem of response.d) {
        console.log(elem.l)
        var div = document.createElement("div")
        document.getElementById("talalat").appendChild(div)
        div.style.border = "1px solid blue"
        var kep = document.createElement("img")
        div.appendChild(kep)
        kep.src = elem.i.imageUrl
        kep.style.width = "300px "
        var p = document.createElement("p")
        div.appendChild(p)
        p.innerHTML= db+" Találat: "+elem.l
        var p2 = document.createElement("p")
        div.appendChild(p2)
        p2.innerHTML = elem.s
        var p3 = document.createElement("p")
        div.appendChild(p3)
        p3.innerHTML = "Rank: "+elem.rank
        var p4 = document.createElement("p")
        div.appendChild(p4)

        if(typeof elem.y === "undefined"){
            p4.innerHTML = "Év: Nincs adat"
        }
        else{
            p4.innerHTML = "Év: "+elem.y

        }

        p.style.fontsize = "20px"
        div.style.marginBottom = "10px"
        div.style.paddingTop = "10px"
        div.style.textAlign = "center"
        db++
        }
    }
}