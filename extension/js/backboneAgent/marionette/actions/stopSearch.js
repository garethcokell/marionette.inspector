
/*
 * stopSearch stops DevTools.search()
 *
 */
var stopSearch = function(appObserver, app) {
    var regionTree = appObserver.regionTree();
    var views = viewList(regionTree);
    var $els = $(_.pluck(views, 'el'));

    _.each($els, function(el) {
        var $el = $(el);
        $el.removeAttr('data-view-id');
        unhighlightEl($el);
        $el.off('.regionSearch');
    });

    $('.dev-tools.view-summary').remove();
};
