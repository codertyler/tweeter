/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 'use strict';

$(document).ready(() => {
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text:
          "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  const renderTweets = function (tweets) {
    // loops through tweets
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      let myTweet = createTweetElement(tweet);
      $(".tweet").append(myTweet);
    }

    // takes return value and appends it to the tweets container
  };

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



  renderTweets(data);
  let theTweet = ($('#tweet-text').val().serialize());

  $(function() {
    $(".tweet-btn").on('click', function () {
      console.log('Button is clicked requesting ajax POST');
      $.ajax('/tweets', { method: 'POST' , theTweet})
      .then(function (){
        console.log("sent")
      })
      .fail((err) => {
        console.log("failed with error: ", err);
      })
    })
  }) 

  $("#submit_post").submit((event)=>{
    event.preventDefault();
  });




});
