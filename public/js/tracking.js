var idSite = 2;
var matomoTrackingApiUrl = 'https://matomo.courtlistener.com/matomo.php';

var _paq = window._paq = window._paq || [];
_paq.push(['setTrackerUrl', matomoTrackingApiUrl]);
_paq.push(['setSiteId', idSite]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);