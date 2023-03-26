window.onload = function() {

  checkboxmove();
  markcompletedtasks();
  
 



  

  // Select the form element
const form = document.querySelector('form');

// Select the input element
const input = document.querySelector('.addinput');

// Select the ul element
const ul = document.querySelector('ul');

const errorMessage = document.querySelector('#error-message');

// Add a submit event listener to the form element
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submission behavior

    if (input.value.trim() === '') { // check if input is empty or only contains whitespace
      event.preventDefault(); // prevent form submission
      errorMessage.style.display = 'block'; // show error message
    } else {
      errorMessage.style.display = 'none';
      // Get the value of the input element
  const inputValue = input.value.trim();

  // Create a new li element
  const li = document.createElement('li');

  // Create a new input element of type "checkbox"
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Create a new text node with the input value
  const textNode = document.createTextNode(inputValue);

  // Append the checkbox and text node to the li element
  li.appendChild(checkbox);
  li.appendChild(textNode);

  // Append the li element to the ul element
  ul.appendChild(li);

  // Clear the input element
  input.value = '';

  checkboxmove();
    }
  });

 



  
}
;



function checkboxmove() {
    
  var lists = document.querySelectorAll("ul");
  var completedList = document.getElementById("completedtask");
  var unfinishedList = document.getElementById("unfinishedtask");
  
  for (var i = 0; i < lists.length; i++) {
    var inputs = lists[i].querySelectorAll("li input");
    for (var j = 0; j < inputs.length; j++) {
      inputs[j].addEventListener("change", function() {
        var li = this.parentElement;
        if (this.checked) {
          unfinishedList.removeChild(li);
          completedList.appendChild(li);
          li.style.textDecoration = 'line-through';

        } else {
          completedList.removeChild(li);
          unfinishedList.appendChild(li);
          li.style.textDecoration = 'none';
          
        }
      });
    }
  }
  }


  function markcompletedtasks() {
    var checkboxes = document.getElementById('completedtask').getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
  
    var items = document.getElementById('completedtask').getElementsByTagName('li');
  
    for (var i = 0; i < items.length; i++) {
      items[i].style.textDecoration = 'line-through';
    }
  }  
