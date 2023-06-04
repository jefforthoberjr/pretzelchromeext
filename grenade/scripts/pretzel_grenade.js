const article = document.querySelector("article");

if (article != null) {
  console.log("DEBUG: " + "found an article " + article)
  // if (article.hasAttribute('id')) {
    console.log("  DEBUG: " + "has an id " + article.getAttribute("id"))
    console.log("  DEBUG: " + "has an id " + article.id)
  // }

  // if (article.hasAttribute('nodeName')){
    console.log("  DEBUG: " + "nodeName " + article.getAttribute("nodeName"))
    console.log("  DEBUG: " + "nodeName " + article.nodeName)
  // }

  // if (article.hasAttribute('tagName')){
    console.log("  DEBUG: " + "tagName " + article.getAttribute("tagName"))
    console.log("  DEBUG: " + "tagName " + article.tagName)
  // }

  // if (article.hasAttribute('nodeType')){
    console.log("  DEBUG: " + "nodeType " + article.getAttribute("nodeType"))
    console.log("  DEBUG: " + "nodeType " + article.nodeType)
  // }

  // for (let attr of article.attributes) {
  //   console.log("  DEBUG: " + attr.name + " = " + attr.value)
  // }

    //NOTE: The name of the variable needs to be quoted
    //NOTE: Object appears to be a singleton obj
    //NOTE: This only shows objects directly defined on the class 
    //      (i.e. the leaf class). It does not show the inherited
    //      properties.
    var propArray = Object.getOwnPropertyNames("article")
    console.log("  DEBUG: " + "leaf props: " + propArray)
    propArray.forEach((val, idx, array) => {
      console.log(`${val} -> ${propArray[val]}`);
    });

    var parentObj = Object.getPrototypeOf(article);
    propArray = Object.getOwnPropertyNames(parentObj)
    console.log("  DEBUG: " + "parent props: " + propArray)
    propArray.forEach((val, idx, array) => {
      console.log(`${val} -> ${propArray[val]}`);
    });

    var grandparentObj = Object.getPrototypeOf(parentObj);
    propArray = Object.getOwnPropertyNames(grandparentObj)
    console.log("  DEBUG: " + "grand parent props: " + propArray)
    propArray.forEach((val, idx, array) => {
      console.log(`${val} -> ${propArray[val]}`);
    });

    var greatgrandparentObj = Object.getPrototypeOf(grandparentObj);
    propArray = Object.getOwnPropertyNames(greatgrandparentObj)
    console.log("  DEBUG: " + "great grand parent props: " + propArray)
    propArray.forEach((val, idx, array) => {
      console.log(`${val} -> ${propArray[val]}`);
    });

    var greatgreatgrandparentObj = Object.getPrototypeOf(greatgrandparentObj);
    propArray = Object.getOwnPropertyNames(greatgreatgrandparentObj)
    console.log("  DEBUG: " + "great grand parent props: " + propArray)
    propArray.forEach((val, idx, array) => {
      console.log(`${val} -> ${propArray[val]}`);
    });

    var greatgreatgreatgrandparentObj = Object.getPrototypeOf(greatgreatgrandparentObj);
    propArray = Object.getOwnPropertyNames(greatgreatgreatgrandparentObj)
    console.log("  DEBUG: " + "great great grand parent props: " + propArray)
    propArray.forEach((val, idx, array) => {
      console.log(`${val} -> ${propArray[val]}`);
    });


}


// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  article.textContent = "GRENADE";

  // const text = article.textContent = "GRENADE";
  // article.textContent.repalce("the", "GRENADE")


}