define([], function(){

    return {"template":"{% if (context.isItemLinkAlone) { %}\n<a href=\"{%= context.itemLink %}\" \n    target=\"{%= (context.itemLinkTarget || '_self') %}\">{%= content %}</a>\n{% } else { %}\n<span class=\"ck-title\">{%= content %}</span>\n{% } %}\n\n"}; 

});