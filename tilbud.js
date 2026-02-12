let isOpen = false;
//Báras kode, fået fra mig, men sparred med chatGBT
function button() {
  let tilbud = [
    {
      title: "Mandags tilbud",
      price: "199 kr",
      text: "Du kan købe buket af de smukkeste roser vi har",
      image: "billeder/ros.jpg"
    },
    {
      title: "Tirsdags tilbud",
      price: "299 kr",
      text: "Du kan købe buket af de smukkeste hyacinth vi har",
      image: "billeder/hyacinth.jpg"
    },
    {
      title: "Onsdags tilbud",
      price: "149 kr",
      text: "Du kan købe buket af de smukkeste lilje vi har",
      image: "billeder/liljur.jpg"
    },
    {
      title: "Torsdags tilbud",
      price: "259 kr",
      text: "Du kan købe buket af de smukkeste marigold vi har",
      image: "billeder/marigold.jpg"
    },
    {
      title: "Fredags tilbud",
      price: "199 kr",
      text: "Du kan købe buket af de smukkeste tulipaner vi har",
      image: "billeder/tulipaner.jpg"
    }
  ];

  let container = document.getElementById("tilbudContainer");

  // 👉 EF opið → loka
  if (isOpen === true) {
    container.innerHTML = "";
    isOpen = false;
    return;
  }

  // 👉 EF lokað → opna
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

  isOpen = true;
}