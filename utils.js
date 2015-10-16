window.addEvent = function(elem,type,callback) {
    var evt = function(e) {
        e = e || window.event;
        return callback.call(elem,e);
    }, cb = function(e) {return evt(e);};

    if( elem.addEventListener) {
        elem.addEventListener(type,cb,false);
    }
    else if( elem.attachEvent) {
        elem.attachEvent("on"+type,cb);
    }
    return elem;
};
window.findParent = function(child,filter,root) {
    do {
        if( filter(child)) return child;
        if( root && child == root) return false;
    } while(child = child.parentNode);
    return false;
};
window.hasClass = function(elem,cls) {
    if( !('className' in elem)) return;
    return !!elem.className.match(new RegExp("\\b"+cls+"\\b"));
};
