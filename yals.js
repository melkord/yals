var LanguageSelector = {
    "containerId": "container-lang-choicher",
    "selectNameId": "lang-choice",
    "defaultLanguage": 'italian',
    "mainParagraphId": 'main-paragraph',
    "secondaryParagraphId": 'secondary-paragraph',
    "texts": {},
    "selectLanguage": function () {
        var select = document.getElementById(LanguageSelector.selectNameId);
        var languageSelected = select.options[select.selectedIndex].value;
        LanguageSelector.setTexts(languageSelected);
    },
    "setTexts": function (language) {
        var mainParagraph = document.getElementById(LanguageSelector.mainParagraphId),
            secondaryParagraph = document.getElementById(LanguageSelector.secondaryParagraphId);
        mainParagraph.innerHTML = LanguageSelector.texts[language][LanguageSelector.mainParagraphId];
        secondaryParagraph.innerHTML = LanguageSelector.texts[language][LanguageSelector.secondaryParagraphId];
    },
    "printSelectName": function (selectedBool) {
        var container = document.getElementById(LanguageSelector.containerId),
            outputHtml = '',
            keyLang = {};

        selectedBool = true;
        outputHtml += "<select name=\"\" id=\"" + LanguageSelector.selectNameId + "\"> \n";
        for (keyLang in LanguageSelector.texts) {
            if (LanguageSelector.texts.hasOwnProperty(keyLang)) {
                var obj = LanguageSelector.texts[keyLang];
                var selected = '';
                if (selectedBool && LanguageSelector.defaultLanguage == keyLang) {
                    selected = ' selected = "selected" ';
                }
                outputHtml += "<option value=\"" + keyLang + "\"" + selected + ">" + obj.label + " </option>\n ";
            }
        }
        outputHtml += "</select>\n";
        container.innerHTML = outputHtml;

    },
    "addEvent": function(){
        var elem = document.body,
            type = 'change',
            callback = LanguageSelector.selectLanguage;

        if (elem.addEventListener) {
            elem.addEventListener(type, callback, false);
        }
        else if (elem.attachEvent) {
            elem.attachEvent("on" + type, callback);
        }
    },
    "initialize": function () {
        LanguageSelector.printSelectName(true);
        LanguageSelector.setTexts(LanguageSelector.defaultLanguage);
        LanguageSelector.addEvent();
    }
};
