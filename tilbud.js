function button() {
  let tilbud = [
    {
        title: "Roses",
        price: "199kr",
        text: "Du kan køb buket af de smukkeste roser vi har",
        image: "billeder/ros.jpg"
    },

    {
        title: "Hyacinth",
        price: "299kr",
        text: "Du kan køb buket af de smukkeste hyacinth vi har",
        image: "billeder/hyacinth.jpg"
    },
    
    {
        title: "Lilje",
        price: "149kr",
        text: "Du kan køb buket af de smukkeste lilje vi har",
        image: "billeder/liljur.jpg"
    },
    
    {
        title: "Marigold",
        price: "259kr",
        text: "Du kan køb buket af de smukkeste marigold vi har",
        image: "billeder/marigold.jpg"
    },
    
    {
        title: "Tulipaner",
        price: "199kr",
        text: "Du kan køb buket af de smukkeste tulipaner vi har",
        image: "billeder/tulipaner.jpg"
    },
  ]

  let alletilbud = "";

for (let i = 0; i < tilbud.length; i++) {
    alletilbud = alletilbud
      + (i + 1) + ". " + tilbud[i].title + "\n"
      + "Pris: " + tilbud[i].price + "\n"
      + tilbud[i].text + "\n\n";
 }
 alert(alletilbud);
}

