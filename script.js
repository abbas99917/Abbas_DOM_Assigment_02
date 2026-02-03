

    // <!-- Task 1: Select Element by ID -->
let changText = document.getElementById("idSelector");
changText.innerText = "DOM Element Selected by ID";



// <!-- Task 2: Select Elements by Tag Name -->
// accessing first  paragraph by index;
let para = document.getElementsByTagName("p");
para[0].innerText = "First Paragraph Updated"


//  <!-- Task 3: Select Elements by Class Name -->
let button = document.getElementsByClassName("btn");
button[1].innerText = "Click Me";


//   <!-- Task 4: Use querySelector -->
let textColor = document.querySelector("h1")
textColor.style.color = "blue";



//    <!-- Task 5: Use querySelectorAll -->
let listColor = document.querySelectorAll("li");
for( let i = 0; i < listColor.length; i++){
    listColor[i].style.color = "green";
};


    // <!-- Task 6: Change Style Using Selected Element -->
let font = document.getElementsByClassName("text");
font[0].style.fontSize = "30px";
font[0].style.color = "white";
font[0].style.backgroundColor = "green";