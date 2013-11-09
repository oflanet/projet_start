$(document).bind("mobileinit", function() {
  
   querySearchConceptDetails("nytd_per","Timberlake, Justin");
   querySearchPhoto('William of Ockham');
   
   if( screen.width > 1024 ) {
      var w=window.open('chlab.html','', 'width=100,height=100');
      w.resizeTo(400,600);
   }

   if( screen.width <= 1024 ) {
      location.href = 'chlab.html';
   } 
       
});
