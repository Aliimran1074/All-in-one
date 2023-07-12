function addToCart() {
    const cart = document.getElementsByClassName("cart")[0].innerText;
    const updatedCart = Number(cart) + 1;
    document.getElementsByClassName("cart")[0].innerText = updatedCart;
    alert("Article added to cart");
  }
  
  const user = {};
  
  function checkInput() {
    let errors = [];
  
    const inputFields = document.getElementsByClassName("input");
    for (let i = 0; i < inputFields.length; i++) {
      if (inputFields[i].value === "") {
        let errorTxt = `${inputFields[i].name} is required`;
        errors.push(errorTxt);
      } else {
        user[inputFields[i].name] = inputFields[i].value;
      }
    }
    if (errors.length > 0) {
      // alert(errors.join(","))
      return false;
    }
  
    localStorage.setItem("user", JSON.stringify(user));
  
    return false;
  }
  
  function addEmail() {
    const existingEmail = document.getElementById("email").value;
    // function will stop if @ found
    if (existingEmail.includes("@")) {
      return;
    }
    let myDomain = "@bq.com";
    const domainizedEmail = `${existingEmail}${myDomain}`;
    document.getElementById("email").value = domainizedEmail;
  }
  
  let expanded = false;
  
  function toggleMore(addition) {
    const paragraph = document.querySelector("#see-more-text").innerHTML;
    const updatedParagraph = `${paragraph} ${addition}`;
    if (!expanded) {
      document.querySelector("#see-more-text").innerHTML = updatedParagraph;
      expanded = true;
    } else {
      document.querySelector("#see-more-text").innerHTML = "updatedParagraph";
      expanded = false;
    }
  }
  
  function swapImage(image) {
    const pic = document.querySelector(".swappable");
    pic.src = image;
  }
  
  const errorMessages = ["Email not entered", "Password not entered"];
  const submitButton = document.querySelector("button");
  
  const showErrors = () => {
    const messageWrapper = document.querySelector("#messages");
    for (let errorMessage of errorMessages) {
      // text node creation
      let errorText = document.createTextNode(errorMessage);
  
      // element create
      let errorElement = document.createElement("p");
  
      // error text appended to element
      errorElement.appendChild(errorText);
  
      messageWrapper.appendChild(errorElement);
    }
  };
  
  submitButton.addEventListener("click", function () {
    const image = document.querySelector("#welcome_image");
    if (image.hasAttribute("style")) {
      image.style.display = "inline";
    }
    showErrors();
  });
  
  const myObj = {
    name: "value",
    setAttendance: function () {
      console.log(this.name);
    },
  };
  
  let loading = false;
  const loginButton = document.querySelector("#login");
  const loginHandler = () => {
    try {
      loading = true;
      const userData = JSON.parse(localStorage.getItem("user"));
      console.log(userData);
    } catch (err) {
      alert(err);
    } finally {
      loading = false;
    }
  };
  
  // loginButton.addEventListener("click", loginHandler);
  
//   const showError = () => {
//     try {
//       throw new Error("Error Occurred");
//       alert("function try");
//     } catch (err) {
//       alert(err);
//     } finally {
//       alert("function completed");
//     }
//   };
//   alert("Readyy");
//   showError();
  
  const myProducts = [
    { productId: 1, title: "XYZ", description: "XYz", image: "//link", isFeatured: true }
  ];
  const featureDiv = document.getElementById("featureDiv");
  const productDiv = document.getElementById("productDiv");
  for (let product of myProducts) {
    let mainDiv = document.createElement("div");
    // heading created
    let headingText = document.createTextNode(product.title);
    let heading = document.createElement("h2");
    heading.appendChild(headingText);
    mainDiv.appendChild(heading);
  
    // description
    let descriptionText = document.createTextNode(product.description);
    let description = document.createElement("p");
    description.appendChild(descriptionText);
    mainDiv.appendChild(description);
  
    // button
    let buttonText = document.createTextNode("See More");
    let button = document.createElement("button");
    button.appendChild(buttonText);
    button.addEventListener("click", seeMore);
    mainDiv.appendChild(button);
  
    // add in feature and product div
    if (product.isFeatured) {
      featureDiv.appendChild(mainDiv);
    } else {
      productDiv.appendChild(mainDiv);
    }
  }
  
  // Slider
  document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;
    showSlides(slideIndex);
  });
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  