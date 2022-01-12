/**
 * @author      dangtung
 * @since       9/7/18
 * @category    vndid-frontend-app
 */

var vndaTrackerName;

function HappyEnding() {
    return this;
}

HappyEnding.prototype.initTracking = function (uid, vName, vTrackerName) {
    vndaTrackerName = vTrackerName;

    window.vnda = window.vnda || function () {
        (window.vnda.q = window.vnda.q || []).push(arguments)
    };
    window.vnda.l = +new Date;
    window.vnda('create', vName, 'auto', vndaTrackerName, {
        userId: uid
    });
    window.vnda(vndaTrackerName + '.send', 'pageview');
};

HappyEnding.prototype.track = function (category, action, label, value) {
    window.vnda(vndaTrackerName + '.send', 'event', category, action, label, value);
};

HappyEnding.prototype.trackObject = function (category, action, object) {
    window.vnda(vndaTrackerName + '.send', 'event', category, action, object);
};

HappyEnding.prototype.error = function (url, method, xhr, action, spec, data) {
    var props = {
        spec: spec,
        method: method,
        url: url,
        httpStatus: xhr ? xhr.status : null,
        response: xhr ? xhr.responseJSON ? xhr.responseJSON : null : null
    };

    if (data !== null) {
        props['body'] = data;
    }

    window.vnda(vndaTrackerName + '.send', 'event', 'error', action, props, null);
};