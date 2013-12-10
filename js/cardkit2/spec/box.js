
define([
    'mo/lang',
    'dollar',
    '../card/box',
    './common/scaffold',
    './common/source_scaffold'
], function(_, $, box_card, 
        scaffold_specs, source_scaffold_specs){

var selector = 'ck-card[type="box"]';

return function(guard, parent){
    guard.watch(parent && $(selector, parent) || selector);
    guard.bond({
        subtype: 'subtype',
        paperStyle: 'paper-style',
        plainStyle: 'plain-style',
        plainHdStyle: 'plain-hd-style'
    });
    guard.component('content', function(guard){
        guard.watch('ck-part[type="content"]');
    });
    _.each(scaffold_specs, function(spec, name){
        guard.component(name, spec);
    });
    guard.source().component('content', function(source){
        source.watch('.ckd-content');
    });
    _.each(source_scaffold_specs, function(spec, name){
        this.component(name, spec);
    }, guard.source());
};

});

