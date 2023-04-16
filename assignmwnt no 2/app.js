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

// Question no 4

function addListItem(text) {
    // create a new list item element
    var listItem = document.createElement("li");
    
    // set the text content of the list item
    var listItemText = document.createTextNode(text);
    listItem.appendChild(listItemText);
    
    // add the new list item to the unordered list with ID "myList"
    var unorderedList = document.getElementById("myList");
    unorderedList.appendChild(listItem);
  }

  addListItem('test')


//   Question no 5

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }

  let div=document.getElementById('divs')
changeBackgroundColor(div,'yellow')  
  

// Question no 6

function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  const myObject = { name: "zia", age: 20 };
  saveToLocalStorage("myObject", myObject);


//   Question no 7

function getObjectFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }

//   Question no 8

function saveToLocalStorage(obj) {
    for (const prop in obj) {
      localStorage.setItem(prop, obj[prop]);
    }
    
    const newObj = {};
    for (const prop in obj) {
      newObj[prop] = localStorage.getItem(prop);
    }
    
    return newObj;
  }


  const myObj = { 
    name: 'zia', 
    age: 20, 
    city: 'Hyderabad' 
  };
  
  const savedObj = saveToLocalStorage(myObj);
  
  console.log(savedObj); 
  
  
    