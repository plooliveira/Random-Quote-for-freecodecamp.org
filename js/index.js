$(document).ready(function(){
  let okTweet = false
  
   $('#getquote').on('click', function(e){
     e.preventDefault()
     getQuoteApi();
   })
  
  $('#tweet').on('click', function(e){
     e.preventDefault()
     sendTweet();
  })
  getQuoteApi();
})

function getQuoteApi(){
 
  $.getJSON("https://quotesondesign.com/wp-json/posts?            filter[orderby]=rand&filter[posts_per_page]=1",                function(json){
       $('#quote-text-id').html(function(){
         let text = json[0].content;
         let title = json[0].title;
         gText = text. substring(3, text.length -5)
         
         gTitle = title;
         text = "<p>" + '<i class="fas fa-quote-left"></i>' +            text.substring(3)
         let quote = text + "<p><em>" + title + "</em></p>"
         okTweet = true;
         return quote
       })
     })
     
}

function sendTweet(){
  if (okTweet === true){
     var url = "https://twitter.com/intent/tweet";
     var tweet= "\"" + $("p:first").text() + "\" " + $("p:last").text();
    
   var hashtag = "fCC,#QuotRadom";
   window.open(url + "?text=" + tweet +              ";hashtags=" + hashtag, "width=500,heigth=300");
   } 
}