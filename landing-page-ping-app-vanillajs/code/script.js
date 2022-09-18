function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Your email can't be left blank!");
      return false;
  } else {
      alert("Thank you very much! We will keep you posted");
      console.log("email validated!")
      return true;
  }
}