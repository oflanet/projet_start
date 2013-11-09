//http://en.wikipedia.org/w/api.php

//one request

var wikis="";
function searchWiki(keyword) {
    var url = "http://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch="+keyword+"&srprop=timestamp";
    $.ajax( {
	   dataType :'jsonp',
	   jsonp :'callback',
	   url : url,
	   success : function(json) {
	          if(json) {
                        wikis = json;
                        progressbar("20");
	          }
	   }
    });
}

function searchWikisNumber() {
    if(wikis!="") {return wikis.query.searchinfo.totalhits;}
    else return "0";
}
