const stylesheet = document.styleSheets[0]

function isСhangeСolorDark () {
    return (
        document.styleSheets[0].insertRule(`:root {  --color-button: #f7f7f9; --color-background: #fff; 
        --color-font: #000; --color-background-keyboard:#f9f9f9; --color-button-active: #dbdbdb; 
        --color-button-light-off: #000; --color-button-light-on: #e4e4e4;}`, stylesheet.cssRules.length)
    );
};

function isСhangeСolorLight () {
    return (    
        document.styleSheets[0].insertRule(`:root {  --color-button: ##272b35; --color-background: #000; 
        --color-font: #fff; --color-background-keyboard:#292d38; --color-button-active: #4e4f51; 
        --color-button-light-off: #6c707b; --color-button-light-on: #d2d4d4;}`, stylesheet.cssRules.length)
    );
};
 export {isСhangeСolorDark, isСhangeСolorLight};