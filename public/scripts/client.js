/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  const tweetData = {
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
  };

  const createTweetElement = (obj) => {
    return `<article> 
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
     </article>`;
  };

  const $tweet = createTweetElement(tweetData);

  console.log($tweet);

  $(".tweet").append($tweet);
});
