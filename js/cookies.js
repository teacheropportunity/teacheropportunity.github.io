var checkPage = function(){
	var thisPage = window.location.href;
	if(thisPage.indexOf('edmodo') > -1) {
		return 'edmodo';
	} else if(thisPage.indexOf('khan') > -1) {
		return 'khan';
	} else if(thisPage.indexOf('classroom') > -1) {
		return 'classroom';
	} else {
		return 'home';
	}
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function redirectUrl(whichPage) {
	if (whichPage != "home") {
		newUrl = "http://www.teacheropportunityprogram.com/" + whichPage + "opportunity.html"
	} else {
		newUrl = "http://www.teacheropportunityprogram.com/"
	}
    window.location.href = newUrl;
}

function checkCookie() {
    var whichPage = getCookie("topLand");
    if (whichPage != "") {
    	// If cookie doesn't match current page, redirect to where user originally landed
        if (whichPage != checkPage()) {
        	redirectUrl(whichPage);
        }
    } else {
        whichPage = checkPage();
        if (whichPage != "" && whichPage != null) {
            setCookie("topLand", whichPage, 180);
        }
    }
}

checkCookie();