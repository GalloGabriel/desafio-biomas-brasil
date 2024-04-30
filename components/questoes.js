let criaAlternativas = function(checkCorreta, inputId, labelId, textoAlternativa, dataLabel){

  let inputAlternativa = document.createElement("input");
  inputAlternativa.classList.add("isHidden");
  inputAlternativa.setAttribute('type', 'radio');
  inputAlternativa.setAttribute('name', 'alternativas');
  inputAlternativa.setAttribute('value', `${checkCorreta}`);
  inputAlternativa.setAttribute('id', `input${inputId}`);

  let labelInputAlternativa = document.createElement("label");
  labelInputAlternativa.classList.add("alternativas-item");
  labelInputAlternativa.setAttribute('for', `input${labelId}`);
  labelInputAlternativa.setAttribute('data-label', dataLabel);

  let textoLabel = document.createElement("span");
  textoLabel.classList.add("texto-label");
  textoLabel.innerHTML = textoAlternativa;

  labelInputAlternativa.appendChild(inputAlternativa);
  labelInputAlternativa.appendChild(textoLabel)


  return labelInputAlternativa;

}