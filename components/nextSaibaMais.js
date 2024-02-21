let criaNextSaibaMais = function(){

  let nextSaibaMaisItem = document.createElement("div");
  nextSaibaMaisItem.classList.add("nextSaibaMais-item");

  let filledNext = document.createElement("div");
  filledNext.classList.add("filled-inicio");

  nextSaibaMaisItem.appendChild(filledNext);

  return nextSaibaMaisItem;

}