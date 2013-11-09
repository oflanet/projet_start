(function(window, $, PhotoSwipe){
$(document).ready(function () { 

////////////////////////////////////////////////////
//Home page
                //Home page
                                //Home page
////////////////////////////////////////////////////

$("#go").on("click", function(e) {
               $("#progress").attr("style","visibility : visible");
               $('#progress progress').attr('value','0').text('0'); 
               $('#progress strong').html('0');
               var keyword = $("#search-mini").val();
               if (keyword) {  
                   searchPhoto(keyword,1);
                   searchVideos(keyword);
                   searchNews("nytd_geo", keyword);
                   searchTweets(keyword);
                   searchWiki(keyword);
               }//if
           });//$(#go)

$("#search-mini").suggest({"key":"AIzaSyA25ISk8gdpn4md-gCNR2p_GH7z3KzgqKA"});

//$("#myinput").suggest({filter:'(all type:/film/director)'});
   
$('div.home-page')

     .live('pagebeforeshow',function(event, ui){

             
      })

     .live('pageshow', function(e){

           	      
      }) //pageshow
					
     .live('pagehide', function(e){
						
	      				
      });//pagehide

////////////////////////////////////////////////////
//Result page
                //Result page
                                //Result page
////////////////////////////////////////////////////
   
$('div.result-page')

     .live('pagebeforeshow',function(event, ui){
          gallery_page=1;

          $("#num_photos span").html(displayPhotosNumber());
          $("#num_videos span").html(searchVideosNumber());
          $("#num_tweets span").html(searchTweetsNumber());
          $("#num_news span").html(searchNewsNumber());
          $("#num_wikis span").html(searchWikisNumber());  
           
      })

     .live('pageshow', function(e){

           	      
      }) //pageshow
					
     .live('pagehide', function(e){	
					
	      				
      });//pagehide
				

////////////////////////////////////////////////////
//gallery page
                //gallery page
                                //gallery page
////////////////////////////////////////////////////

// http://flaviusmatis.github.io/simplePagination.js/

var gallery_page=1;

$('div.gallery-page')

     .live('pagebeforeshow',function(event, ui){
          var start= (gallery_page-1)*10;
          var end= start+ 9;

          $('.gallery').html(renderImageListview(start, end));
          
          return true;          
      })

     .live('pageshow', function(e){
      
          $('.paging').pagination({
              items: 100,
              currentPage: gallery_page,
              displayedPages: 7,
              //edges: 1,
              itemsOnPage: 10,
              cssStyle: 'light-theme',
              onPageClick: function(pageNumber){
                                 gallery_page = pageNumber;
                                 reloadpage();
                           },

              onInit: function(){ 
                                 var currentPage = $(e.target),
	                         options = {},
	                         photoSwipeInstance = $("ul.gallery a", e.target).photoSwipe(options, currentPage.attr('id'));      
                           }
          });
          return true;		              					
      })
					
      .live('pagehide', function(e){						
	      var currentPage = $(e.target),
	      photoSwipeInstance = PhotoSwipe.getInstance(currentPage.attr('id'));

	      if (typeof photoSwipeInstance != "undefined" && photoSwipeInstance != null) {
			PhotoSwipe.detatch(photoSwipeInstance);
	      }					
	      return true;
						
       });
				
});//$(document).ready(function ()

}(window, window.jQuery, window.Code.PhotoSwipe));


//-------  functions -----------

function progressbar(prog){ 
     var val = $('#progress progress').attr('value'); 
     var newVal = val*1+Number(prog); 
     var txt = Math.floor(newVal)+'%'; 
     $('#progress progress').attr('value',newVal).text(txt); 
     $('#progress strong').html(txt);
     completebar(newVal);  
}

function completebar(val) {
     if (val==100)  {
        $.mobile.changePage("result.html");
        $('#progress progress').attr('value','0').text('0'); 
        $('#progress strong').html('0'); 
        $("#progress").attr("style","visibility : hidden");
     }
}

function reloadpage() {
     $.mobile.changePage(
        window.location.href,
            {
               allowSamePageTransition : true,
               transition              : 'none',
               showLoadMsg             : false,
               reloadPage              : true
            }
     );
}
