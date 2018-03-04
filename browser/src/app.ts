import manifest = require("dojo/text!patterns/manifest.json");

window.addEventListener("hashchange", function() {
  window.location.reload(true);
});

function byId(id: string): HTMLElement {
  return document.getElementById(id);
}

function toLabel(pattern: string): string {
  return pattern.replace(/([a-z])([A-Z])/g, "$1 $2");
}

interface Manifest {
  patterns: string[];
}

const patternToken = decodeURI(location.hash).slice(1);
const patternName = patternToken.replace(/-/g, "");  // strip delimiters
const { patterns } = JSON.parse(manifest) as Manifest;

const select = byId("pattern-select") as HTMLSelectElement;

function redirectToOption(optionIndex: number): void {
  window.location.hash = select.options[optionIndex].value
}

patterns.forEach(pattern => {
  const option = document.createElement("option");
  option.label = toLabel(pattern);
  option.value = pattern;
  option.selected = pattern.toLowerCase() === patternName.toLowerCase();
  select.appendChild(option);
});

select.addEventListener("input", function() {
  redirectToOption(select.selectedIndex);
});

if (!patternName) {
  redirectToOption(0);
}

document.title = `${document.title} - ${patternToken}`;

const patternMid = `patterns/${patternName}`;
const patternCodeMid = `dojo/text!${patternMid}.tsx`;

require([
  patternMid,
  patternCodeMid,
  "highlight"
], (Pattern: any, patternCode: string, highlight: any) => {
  const codeDiv = byId("codeDiv");
  codeDiv.textContent = patternCode;
  highlight.highlightBlock(codeDiv);

  new Pattern({ container: "widgetDiv" });
});
