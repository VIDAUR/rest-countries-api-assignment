
var request = superagent;


function addDom(flag, country, capital){

	var card = document.createElement("div")
	var image = document.createElement("img")
	var title = document.createElement("h4")
	var paragraph = document.createElement("p")

	 card.className = "country-card"
	 image.src = flag
	 image.className = "country-flag"
	 title.textContent = country
	 paragraph.textContent = capital

	 card.appendChild(image)
	 card.appendChild(title)
	 card.appendChild(paragraph)

	 document.querySelector(".countries-container").appendChild(card)

}


request
   .get('https://restcountries.eu/rest/v2/all')
   .then(function(res){
   		
       res.body.forEach(function(item){
       // console.log(item)
       addDom(item.flag, item.name, item.capital)
       })
})


.catch(err => {
	console.log("not found",err)
})
 