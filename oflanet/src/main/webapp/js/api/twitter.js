var twitter_key="if5x4CYFuFeea2QUeU5mtw";
var twitter_key_secret="kJAhLPHRtMHjifNI7rxZpOnGlQaXDrgXTNmfZ4G2k";

var twitter_token="349079967-W68kHtlbTxZOUCxtoDnYHhKPV33tqLGCC7BQGj8V";
var twitter_token_secret="FhwFuERYKm1IEsY9Ch6PwLGJGDTSSTJXDUGrmYrgUKI";

//https://github.com/jublonet/codebird-js
//javascript compressor http://yui.github.io/yuicompressor/

var tweets="";

function searchTweets(keyword) {
    
    var cb = new Codebird;
    cb.setConsumerKey(twitter_key, twitter_key_secret); 
    cb.setToken(twitter_token, twitter_token_secret);

    cb.__call(
       "oauth2_token",
       {},
       function (reply) {
           var bearer_token = reply.access_token;
       }
    );

    cb.__call(
       "search_tweets",
       {
          q : keyword,
          count : 100
       },

       function (data) 
          {
            tweets = data;
            progressbar("20");
          },
       true // this parameter required
    );

}

function searchTweetsNumber() {
    if(tweets!="") {return tweets.search_metadata.count;}
    else return "0";
}
