const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent = "GRENADE";
  // article.textContent.repalce("the", "GRENADE")
}