/**
 * @author      dangtung
 * @since       9/7/18
 * @category    vndid-frontend-app
 */

var USERNAME_COOKIES = "username";
var TOKEN_ID_COOKIES = "token-id";

var COOKIES_OPTIONS = {
    path: '/',
    domain: window.location.hostname.indexOf('vndirect.com.vn') >= 0 ? '.vndirect.com.vn' : '',
    secure: window.location.protocol === 'https:'
};

function CookiesUtils() {
    return this;
}

CookiesUtils.prototype.setCookie = function(key, value, option) {
    Cookies.set(key, value, option);
};

CookiesUtils.prototype.getCookie = function(key) {
    Cookies.get(key);
};

CookiesUtils.prototype.removeCookie = function(key, option) {
    Cookies.remove(key, option);
};