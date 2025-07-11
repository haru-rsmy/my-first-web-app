export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 }
  ];

  lengthUnit.forEach(unit => {
    const optionFrom = document.createElement("option");
    optionFrom.value = unit.base;
    optionFrom.textContent = unit.name;
    converterFrom.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = unit.base;
    optionTo.textContent = unit.name;
    converterTo.appendChild(optionTo);
  });

  converterFrom.selectedIndex = 1; // kilometer
  converterTo.selectedIndex = 7;   // mile

  function convert() {
    const value = parseFloat(converterInput.value);
    if (isNaN(value)) {
      converterResult.textContent = "Please enter a valid number";
      return;
    }

    const fromUnit = parseFloat(converterFrom.value);
    const toUnit = parseFloat(converterTo.value);
    const result = (value * fromUnit) / toUnit;

    const fromText = converterFrom.options[converterFrom.selectedIndex].text;
    const toText = converterTo.options[converterTo.selectedIndex].text;

    converterResult.textContent = `${value} ${fromText} = ${result.toFixed(3)} ${toText}`;
  }

  converterForm.addEventListener("input", convert);
  convert();
}
