import Column from "./Column";

document.addEventListener("DOMContentLoaded", () => {
  console.log("app worked");

  let cardsArray = JSON.parse(localStorage.getItem("columns"));
  let columns = Array.from(document.querySelectorAll(".column"));
  let colList = [];
  for (let i = 0; i < columns.length; i++) {
    colList.push(new Column(columns[i], cardsArray[i]));
  }
  window.colList = colList;
  for (let col of colList) {
    col._list.addEventListener("change", () => {
      let cardList = [];
      for (let i = 0; i < colList.length; i++) {
        cardList.push(colList[i]._cards);
      }
      localStorage.setItem("columns", JSON.stringify(cardList));
    });
  }
});
