
var all = document.getElementsByTagName("*");
//All objs returneed by this are nodeType == ELEMENT_NODE
// but some of its children may be nodeType == TEXT_NODE

for (var i=0, max=all.length; i < max; i++) {

  //If at least one of its child elements has text    
  if (!(all[i].textContent === null) && all[i].textContent.length > 0){

    //Find the child element text
    var children = all[i].childNodes
    for (var c=0, maxChildren=children.length; c < maxChildren; c++){

      if(children[c].nodeType === Node.TEXT_NODE){

        console.log("DEBUG " + children[c] + " has textContent of length " + children[c].textContent.length + " : " + children[c].textContent)

        children[c].textContent = "GRENADE"
      }
    }
  }
}


// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  article.textContent = "GRENADE";

  // const text = article.textContent = "GRENADE";
  // article.textContent.repalce("the", "GRENADE")


}