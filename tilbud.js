function button() {
  let tilbud = [
    {
        title: "Mandags tilbud",
        price: "199kr",
        text: "Du kan køb buket af de smukkeste roser vi har",
        image: "billeder/ros.jpg"
    },

    {
        title: "Tirsdags tilbud",
        price: "299kr",
        text: "Du kan køb buket af de smukkeste hyacinth vi har",
        image: "billeder/hyacinth.jpg"
    },
    
    {
        title: "Onsdags tilbud",
        price: "149kr",
        text: "Du kan køb buket af de smukkeste lilje vi har",
        image: "billeder/liljur.jpg"
    },
    
    {
        title: "torsdags tilbud",
        price: "259kr",
        text: "Du kan køb buket af de smukkeste marigold vi har",
        image: "billeder/marigold.jpg"
    },
    
    {
        title: "Fredags tilbud",
        price: "199kr",
        text: "Du kan køb buket af de smukkeste tulipaner vi har",
        image: "billeder/tulipaner.jpg"
    },
 ];

  let container = document.getElementById("tilbudContainer");
  container.innerHTML = "";

  for (let i = 0; i < tilbud.length; i++) {
    container.innerHTML = container.innerHTML
      + "<div>"
      + "<img src='" + tilbud[i].image + "' alt='" + tilbud[i].title + "' width='200'>"
      + "<h3>" + tilbud[i].title + "</h3>"
      + "<p>Pris: " + tilbud[i].price + "</p>"
      + "<p>" + tilbud[i].text + "</p>"
      + "</div>";
  }
}

