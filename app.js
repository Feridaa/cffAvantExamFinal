"use strict";

// gérer mon api

const depart = (ville, nb) => {
  fetch(
    `https://transport.opendata.ch/v1/stationboard?station=${ville}&limit=${nb}`
  )
    .then((resultat) => resultat.json())

    .then((data) => {
      console.log(data);

      // affiche chaque élément de mon tableau de donnée
      data.stationboard.forEach((element) => {
        affichage(element);
      });
    })

    .catch((err) => {
      console.log(err.message);
    });
};

depart("Lausanne", 5);

// affichage

const tableauAffichage = document.querySelector("#board");

const affichage = (train) => {
  const html = `<article>
    <div class="time">13:50</div>
    <div class="category" data-category="${train.category}">${train.category}</div>
    <div class="destination">${train.to}</div>
</article>`;

  tableauAffichage.insertAdjacentHTML("afterbegin", html);
};
