var flickr_url= 'http://api.flickr.com/services/rest/?method=';
var flickr_key= '88d30455b41ff5aab043a29dc3bbd53c';
//flickr_secret= 0b4f276202e7253b

//http://www.flickr.com/services/api/flickr.photos.search.html
//http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg -->

var photos="";

function searchPhoto(keyword, page) {
     var method = 'flickr.photos.search';
     $.ajax({
         url: flickr_url + method + '&format=json'+ '&api_key=' + flickr_key,
         dataType: 'jsonp',
         data: {
                'text': keyword,
                'sort':'relevance',
                'page': page,
               },
         type: 'GET',
         jsonpCallback: 'jsonFlickrApi',
         success: function(json){
                  if (json.photos) {
                     photos = json.photos;
                     progressbar("20");
                     console.log(json);                
                 }       
         }
    });
 
}


function displayPhotosNumber() {
    if(photos!="") {return photos.total;}
    else return "0";
}

function displayPagesNumber() {
    if(photos!="") {return photos.pages;}
    else return "0";
}

function displayPhoto(i) {
    var photo = photos.photo[i];
    console.log(photo);
    var url = "http://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_z.jpg";
    console.log(url);
    return url;
}

function displayThumbnail(i) {
    var photo = photos.photo[i];
    var url = "http://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_t.jpg";
    console.log(url);
    return url;
}

function displayTitle(i) {
    var photo = photos.photo[i];
    return photo.title;
}

function renderImageListview(start,end) {
      var html="";
      for(var i=start; i<=end; i++) {               
	  html+='<li><a href='+displayPhoto(i)+' rel="external">'+'<img src='+displayThumbnail(i)+' alt='+displayTitle(i)+'/></a>'+'</li>'
      }
      return html;
}
