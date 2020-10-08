//This file takes care of client tweets and renders to the main page

//This function renders creted tweets from a fucntion createTweetElement
const renderTweets = function (tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    let myTweet = createTweetElement(tweet);
    $(".tweet").append(myTweet);
  }

  // takes return value and appends it to the tweets container
};

//This function takes an obj element from JSON and creates the tweet in template with relevant data
const createTweetElement = (obj) => {
  let $tweet = `<article> 
    <header>
    <label for="img"><img src="${obj.user.avatars}" alt="avatar">
    Newton</label>
    <h3 id="at_name">${obj.user.handle}</h3>
    </header>
    <h4>
    ${obj.content.text}
    </h4>
    
    <hr>
    <footer>
    <p>${Date(obj.created_at).toString()}</p>
    <p>logos</p>
    </footer>
    </article>
    </article><br>`;
  return $tweet;
};

//This will load tweets from the /tweets
const loadTweets = () => {
  $.ajax("/tweets", { method: "GET" }).then((data) => {
    renderTweets(data);
  });
};

//Loading the recent tweet
const loadRecentTweet = () => {
  $.ajax('/tweets', {method: 'GET'})
    .then((data) => {
      const newTweet = createTweetElement(data[data - 1]);
    $('#tweets').append(newTweet)
    })
};

//The first line below ensures that script loads only after other hmtl is loaded on the page

$(document).ready(() => {
  //When the html is loaded the tweets from db is loaded
  loadTweets();

  $("#submit_post").submit((event) => {
    event.preventDefault();

    const theTweet = $("#submit_post").serialize();
    const maxLength = 140;
    const theText = $("#tweet-text").val();

    //Tweet validation functions
    if (theText.length === 0) {
      const errorMsg = `<p>Empty tweet is not accepted!</p>`;
      $("#errorMsg").addClass("errorMsg");
      $("#errorMsg").html(errorMsg).slideDown();
    } else if (theText.length > maxLength) {
      const errorMsg = `<p>Exceeds the limit of per tweet!</p>`;
      $("#errorMsg").addClass("errorMsg");
      $("#errorMsg").html(errorMsg).slideDown();
    } else {
//Handling the submitted text and posting it to the server
      $.ajax({
        url: "/tweets",
        method: "POST",
//Handling the risk of CORS
        data: { text: escape(theText) },
      }).then(() => {
        loadRecentTweet();
        $(".counter").text(140);
      });

      //Removing error message after entering valid tweet

      $('#tweet-text').val("");
      $('#errorMsg').removeClass('errorMsg')
      $('#errorMsg').text("");

    }
  });
});
