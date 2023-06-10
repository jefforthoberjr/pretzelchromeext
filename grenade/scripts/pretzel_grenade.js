
function currentHumanReadableTime() {
  var nowMilliseconds = new Date(); 
  var day = (nowMilliseconds.getDate() + "").padStart(2, '0')
  var month = ((nowMilliseconds.getMonth()+1) + "").padStart(2, '0')
  var year = (nowMilliseconds.getFullYear() + "").padStart(4, '0')
  var hour = (nowMilliseconds.getHours() + "").padStart(2, '0')
  var min = (nowMilliseconds.getMinutes() + "").padStart(2, '0')
  var sec = (nowMilliseconds.getSeconds() + "").padStart(2, '0')

  var nowHumanReadable = day + "/" + month + "/" + year + " @ " + 
                        hour + ":" + min + ":" + sec

  return nowHumanReadable
}

setTimeout(() => main(), 7000)

function main(){
  replaceAllTextWithGrenade()
}

function replaceAllTextWithGrenade(){
  var all = document.getElementsByTagName("*");
  //All objs returned by getElements are nodeType == ELEMENT_NODE
  // but some of its children may be nodeType == TEXT_NODE
  //Iterate through all elements, and check for text nodes

  for (var i=0, max=all.length; i < max; i++) {

    //If at least one of its child elements has text    
    if (!(all[i].textContent === null) && all[i].textContent.length > 0){
    
      var styleObj = window.getComputedStyle(all[i])

      //Print out all the style information
      for (var s=0, max=styleObj.length; s < max; s++) {
        console.log("DEBUG " + "style " + styleObj.item(s) ) 
        //NOTE: this only prints out the named of the style element;
        //      but it doesn't print out the actual value of the style
      }

      //Find the child element text
      var children = all[i].childNodes
      for (var c=0, maxChildren=children.length; c < maxChildren; c++){

        if(children[c].nodeType === Node.TEXT_NODE){

          //How can I detect if a textContent is a "style" or "function"


          console.log("DEBUG " + children[c] + " has textContent of length " + children[c].textContent.length + " : " + children[c].textContent)

          children[c].textContent = "GRENADE"

          //TODO 
          //Debug why setting the textContent appears to blow away styling
        }
      }
    }

  }

  //How can I use ::before and ::after to inject text highlighing? 


}