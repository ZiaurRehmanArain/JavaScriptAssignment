// Question no 1

function addInnerValue(a){
    return function addInnerValue(b){
        return a+b;
    }
}

let outerfunction=addInnerValue(10)
let innerFuntion =outerfunction(10)
console.log(innerFuntion)


// Question no 2

function recursive_search(arr, val) {
  if (arr.length === 0) {
    return false;
  }
  
  if (arr.shift() === val) {
    return true;
  }
  
  return recursive_search(arr, val);
}


console.log(recursive_search([2,3,4],6))



// Question 3

function addParagraph(text) {
    const newParagraph = document.createElement("p"); // Create a new paragraph element
    const textNode = document.createTextNode(text); // Create a text node with the provided text
    newParagraph.appendChild(textNode); // Append the text node to the paragraph element
    document.body.appendChild(newParagraph); // Append the paragraph element to the body of the document
  }

  addParagraph("this my first experecce")

