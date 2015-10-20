/**
 The MIT License (MIT)

 Copyright (c) 2015 Andrea Terruggia

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

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
