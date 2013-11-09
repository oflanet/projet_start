var nytimes_url= 'http://api.nytimes.com/svc/semantic/v2/concept/name/';
var nytimes_key= '230b96ed1ac846a66d546ceac241b0b9:10:68160366';

var news="";
function searchNews(concept_type, specific_concept) {
    var url = nytimes_url + concept_type +'/'+specific_concept+'.jsonp?fields=all&api-key='+nytimes_key;
    $.ajax( {
	   dataType :'jsonp',
	   jsonp :'callback',
	   url : url,
	   success : function(json) {
	          if(json) {
	                news = json;
                        console.log(json);
                        progressbar("20");
	          }
	   }
    });
}

function searchNewsNumber() {
    if(news.num_results!=0) {return news.results[0].article_list.total;}
    else return "0";
}

