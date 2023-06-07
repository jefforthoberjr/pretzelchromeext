const article = document.querySelector("div.article-body")

if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;

  const readingTimeLimitSeconds = Math.round(wordCount * 0.3);
  const startDate = new Date();
  const deadline = new Date(startDate.getTime() + (readingTimeLimitSeconds) * 1000);
  console.log("Start Date is " + startDate);
  console.log("Deadline is " + deadline);
  
  var badge = document.createElement("p");
  //insert line about styling here
  //badge.classList.add("color-secondary-text", "type--caption");

  // Support for API reference docs
  const authorBio = article.querySelector("div.has-bio");
  // Support for article docs with date
  const authorOverlay = article.querySelector("div.author-overlay")?.parentNode;

  (authorBio ?? authorOverlay).insertAdjacentElement("afterend", badge);

  var countdown = setInterval(function() {
    var now = new Date().getTime();

    var timeLeft = deadline - now;
  
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
  
    badge.textContent = `⏱️ ${hours}:${minutes}:${seconds} to go!`
  
    // If the count down is finished, write some text
    if (timeLeft < 0) {
      clearInterval(countdown);
      const html = document.querySelector("html");
      html.remove();
    }
  }, 1000);
}