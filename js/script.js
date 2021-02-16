let app = new Vue ({
  el: "#app",
  data: {
    menu: [
      {
        testo: "Business",
        icona: "fas fa-chart-area"
      },
      {
        testo: "Design",
        icona: "fas fa-palette"
      },
      {
        testo: "Development",
        icona: "fas fa-cog"
      },
      {
        testo: "LIfestyle",
        icona: "far fa-smile"
      },
      {
        testo: "Office Productivity",
        icona: "fas fa-wallet"
      }
    ],
    voto: 4,
    categories: [
      "All categories",
      "Business",
      "Design",
      "Development",
      "IT & Software",
      "Lifestyle",
      "Marketing",
      "Office Prodictivity"
    ]
  }
});
