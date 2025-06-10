var BookmarkName = document.getElementById('BookmarkName');//object
var BookmarkWebsite = document.getElementById('BookmarkWebsite');
var addBtn = document.getElementById('addBtn')
var productList;
var currentIndex;

if (localStorage.getItem('productList') !== null) {
  productList = JSON.parse(localStorage.getItem('productList'))
  display();
} else {
  productList = [];
}

isValidURLRegex(BookmarkWebsite);

//URL validation

function isValidURLRegex(BookmarkWebsite) {
  const urlRegex = /(www\.)[a-zA-z0-9\!-_$]+\.[a-zA-z]{3}$/
  return urlRegex.test(BookmarkWebsite);
}

isValidNameRegex(BookmarkName);

// Bookmark Name validation

function isValidNameRegex(BookmarkName) {
  const P = /[a-z]$/;   //Strings
  return P.test(BookmarkName);
}


// Add
function addProduct() {
  var product = {
    bookmarkName: BookmarkName.value,
    bookmarkWebsite: BookmarkWebsite.value,
  }

  var square = '';

  //Bookmark Website Validation
  if (isValidURLRegex(BookmarkWebsite.value)) {
    console.log('match')

    validRegexURL();

    function validRegexURL() {
      var w = document.getElementById('BookmarkWebsite');
      w.classList.add("is-valid");
    }

  }

  else {

    console.log('nomatch')
    
    bodyShadow();
    function bodyShadow() {
      var element = document.getElementById('brightness');
      element.classList.add("brightness-alert");
    }

    InputShadow();
    function InputShadow() {
      var input_element = document.getElementById('BookmarkWebsite');
      input_element.classList.add("brightness-input");
      input_element.classList.add("is-invalid");
    }

    dataShadow();
    function dataShadow() {
      var data = document.getElementById('table-data');
      data.classList.add("brightness-data");
    }

    //Alert Message 
    square = `  <div class="container bg-white alert-site">
    <div class=" m-4 pt-5 text-dark">
      <div class="row p-1 gap-2 circles position-absolute">
        <div class="circle_1"></div>
        <div class="circle_2"></div>
        <div class="circle_3"></div>
      </div>

      <div class="position-absolute close-sign">
        <button onclick= "closebtn()" class="btn-alert"><i class="fa-solid fa-xmark fa-2xl"></i></button>
      </div>
      <div>
        <h3 class="bree-serif-regular">Site Name or Url is not valid, Please follow the rules below :</h3>
        <div class="pt-sans-caption lh-lg mt-4"><i class="fa-regular fa-circle-right p-2"></i>Site name must contain at
          least 3 characters</div>
        <div class="lh-lg pt-sans-caption"><i class="fa-regular fa-circle-right p-2"></i>Site URL must be a valid one</div>
      </div>
    </div>
  </div>`


    document.getElementById('alert-msg').innerHTML = square;
    localStorage.setItem('productList', JSON.stringify(productList))
    display();
  }


  if (isValidNameRegex(BookmarkName.value)) {
    console.log("Site name is correct")

    validRegexname();

    function validRegexname() {
      var validname = document.getElementById('BookmarkName');
      validname.classList.add("is-valid");
    }
  }
  else {

    InputNameShadow();

    function InputNameShadow() {
      var input_error = document.getElementById('BookmarkName');
      input_error.classList.add("is-invalid");
    }
  }

  if (isValidNameRegex(BookmarkName.value) && isValidURLRegex(BookmarkWebsite.value)) {
    productList.push(product)
    localStorage.setItem('productList', JSON.stringify(productList))
    display();
  }
}


// close button
function closebtn() {
  var x = '';
  document.getElementById('alert-msg').innerHTML = x;

  bodyShadow();
  function bodyShadow() {
    var element = document.getElementById('brightness');
    element.classList.remove("brightness-alert");
  }

  dataShadow();

  function dataShadow() {
    var data = document.getElementById('table-data');
    data.classList.remove("brightness-data");
  }

}

// JSON.PARSE STRING  JSON
// JSON>STRINGIFY JSON - STRING

// display
function display() {
  var cartoona = '';
  for (var i = 0; i < productList.length; i++) {


    cartoona += `
    <tr>
      <td class="text-black pt-sans-caption-regular">${i + 1}</td>
      <td class="text-black text-capitalize pt-sans-caption-regular ">${productList[i].bookmarkName}</td>
      <td class="text-black"><a href="https://${productList[i].bookmarkWebsite}" target="_blank"><button onClick="Visit (${i})" class="btn btn-visit text-capitalize"><i
      class="fa-solid fa-eye me-2"></i>visit </button></a></td>
      <td class="text-black"><button onClick="deleteProduct(${i})" class="btn btn-danger text-capitalize"> <i class="fa-solid fa-trash me-2"></i> delete</td>
    </tr> `
  }
  document.getElementById('table-data').innerHTML = cartoona;
  console.log(productList)
}
// console.log('when open at first time', productList)

// Delete
function deleteProduct(index) {
  productList.splice(index, 1)
  localStorage.setItem('productList', JSON.stringify(productList))
  display()
}

// Visit
function Visit(index) {
  console.log('the website is valid')
}




