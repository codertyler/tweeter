//When clicked on the tweet something text the focus is moved to the textarea without interferring with the scroll of the page

$(document).ready(() => {
  $("#compose").click(() => {
    document.querySelector("#tweet-text").focus();
  });
});
