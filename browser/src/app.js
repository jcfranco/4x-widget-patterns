define(["require", "exports", "dojo/text!patterns/manifest.json"], function (require, exports, manifest) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.addEventListener("hashchange", function () {
        window.location.reload(true);
    });
    function byId(id) {
        return document.getElementById(id);
    }
    function toLabel(pattern) {
        return pattern.replace(/([a-z])([A-Z])/g, "$1 $2");
    }
    var patternToken = decodeURI(location.hash).slice(1);
    var patternName = patternToken.replace(/-/g, ""); // strip delimiters
    var patterns = JSON.parse(manifest).patterns;
    var select = byId("pattern-select");
    function redirectToOption(optionIndex) {
        window.location.hash = select.options[optionIndex].value;
    }
    patterns.forEach(function (pattern) {
        var option = document.createElement("option");
        option.label = toLabel(pattern);
        option.value = pattern;
        option.selected = pattern.toLowerCase() === patternName.toLowerCase();
        select.appendChild(option);
    });
    select.addEventListener("input", function () {
        redirectToOption(select.selectedIndex);
    });
    if (!patternName) {
        redirectToOption(0);
    }
    document.title = document.title + " - " + patternToken;
    var patternMid = "patterns/" + patternName;
    var patternCodeMid = "dojo/text!" + patternMid + ".tsx";
    require([
        patternMid,
        patternCodeMid,
        "highlight"
    ], function (Pattern, patternCode, highlight) {
        var codeDiv = byId("codeDiv");
        codeDiv.textContent = patternCode;
        highlight.highlightBlock(codeDiv);
        new Pattern({ container: "widgetDiv" });
    });
});
