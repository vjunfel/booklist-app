// Deleting List Value (Option 1)
// var btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     })
// })

// Deleting List Value (Option 2 "This is BETTER")
const list = document.querySelector("#book-list ul");

list.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//add book-list
const addForm = document.forms["add-book"];

addForm.addEventListener("submit", function (e) {
  if (addForm.querySelector('input[type="text"]').value.length === 0) {
    alert("Pls add book title");
    e.preventDefault();
  } else {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    // add content
    deleteBtn.textContent = "delete";
    bookName.textContent = value;

    // add classes
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
});

// hide-show books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function (e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// filter books
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach(function (book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) !== -1) {
      book.style.display = "flex";
    } else {
      book.style.display = "none";
    }
  });
});
