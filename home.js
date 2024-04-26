document.addEventListener('DOMContentLoaded', function(){
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function(){
        // Toggle the 'show' class to open/close the navigation
        navbarCollapse.classList.toggle('show');
    });
});


var headerImage = [
    "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg?t=st=1713990236~exp=1713993836~hmac=45693d2061b2f14c0eac72dcdb847e150b54551695eec0da2bee668f88bba0a0&w=1800",
    "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169846.jpg?t=st=1713990260~exp=1713993860~hmac=47a4c63bf3c41d4ef1bc2a253e6496cefe5a0782687cda80b5c637645d9a42ef&w=1800",
    "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169854.jpg?t=st=1713990287~exp=1713993887~hmac=515b976fb01386dcd04c42b4282d75404bc6898c1cad1122d7775fdae3fb14f0&w=1800"
];

var imageIndex = 0;

// Get the header image element
var image = document.getElementById('headerimage');

// Function to change header image
function headerCoursol(direction) {
    if(direction === 'left'){
        imageIndex = (imageIndex - 1 + headerImage.length) % headerImage.length;
    }
    else if (direction === 'right'){
        imageIndex = (imageIndex + 1 + headerImage.length) % headerImage.length;
    }
    image.src = headerImage[imageIndex];
}


    
function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }
  
      
function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }