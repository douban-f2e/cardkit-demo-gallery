define([], function(){

    return {"template":"<span class=\"ck-hd {%= (hdLink && 'clickable' || '') %}\">\n    {% if (hdLink) { %}\n    <a href=\"{%= hdLink %}\" \n        target=\"{%= (hdLinkTarget || '_self') %}\" \n        class=\"ck-link-mask\"></a>\n    {% } %}\n    <span>{%= content %}</span>\n</span>\n"}; 

});