document.addEventListener("DOMContentLoaded", function () {
    const binaryInput = document.getElementById("binary");
    const hexaInput = document.getElementById("hexa");
    const decimalInput = document.getElementById("decimal");
    const form = document.getElementById("form");
  

    form.addEventListener("submit", function (event) {
      event.preventDefault();
 
      const binaryValue = binaryInput.value.trim();
      const hexaValue = hexaInput.value.trim();
      const decimalValue = decimalInput.value.trim();
      const filledInputs = [binaryValue, hexaValue, decimalValue].filter(Boolean);
  
      if (filledInputs.length !== 1) {
        alert("Por favor, utilize apenas um campo por vez.");
        return;
      }
  
      if (binaryValue !== "") {
        if (/^[01]+$/.test(binaryValue)) {
          const decimalValue = parseInt(binaryValue, 2);
          hexaInput.value = decimalValue.toString(16).toUpperCase();
          decimalInput.value = decimalValue;
        } else {
          alert("Por favor, digite apenas 0s e 1s no campo binário.");
        }
      }
      else if (hexaValue !== "") {
        if (/^[0-9A-Fa-f]+$/.test(hexaValue)) {
          const decimalValue = parseInt(hexaValue, 16);
          binaryInput.value = decimalValue.toString(2);
          decimalInput.value = decimalValue;
        } else {
          alert("Por favor, digite apenas caracteres hexadecimais válidos.");
        }
      }
      else if (decimalValue !== "") {
        if (/^\d+$/.test(decimalValue)) {
          const decimalIntValue = parseInt(decimalValue, 10);
          binaryInput.value = decimalIntValue.toString(2);
          hexaInput.value = decimalIntValue.toString(16).toUpperCase();
        } else {
          alert("Por favor, digite apenas números inteiros no campo decimal.");
        }
      }
      else {
        alert("Por favor, preencha pelo menos um dos campos.");
      }
    });
  });
  