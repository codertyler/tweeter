$(document).ready(() => {
  const maxNum = 140;
  const charCount = $("#char-count"); 
  charCount.text(maxNum);

  $("#tweet-text").on("keyup", function () {
    let len = $(this).val().length;
    let remainingNum = maxNum - len;
    charCount.text(remainingNum);

    if (remainingNum >= 0) {
      charCount.css("color", "");
    } else {
      charCount.css("color", "red");
    }
  });
});
