$(document).ready(function() {
  var businessName;
  $("#submitBtn").click(function(event) {
    
    businessName = $("#businessName").val();
    $(".businessName").text(businessName);
    var mainHeader = $("#mainHeader").val();
    var companyDescription = $("#companyDescription").val();
    var uniqueMessage = $("#uniqueMessage").val();
    var pitchDescription = $("#pitchDescription").val();
    var servicesItem1 = $("#servicesItem1").val();
    var servicesItem2 = $("#servicesItem2").val();
    var servicesItem3 = $("#servicesItem3").val();
    var servicesItem3 = $("#servicesItem3").val();
    var servicesItem4 = $("#servicesItem4").val();
    var fullName = $("#fullName").val();
    var phoneNumber = $("#phoneNumber").val();
    var email = $("#email").val();
    var address = $("#address").val();
    var facebook = $("#facebook").val();
    var instagram = $("#instagram").val();
    var linkedIn = $("#linkedIn").val();
    var twitter = $("#twitter").val();
    
    
    event.preventDefault();
    
    window.location.href='summary.html';
    
    // on window load, load in text fields..?
    
//    var idArray = ["buisnessName"];
//    idArray.forEach(function(id) {
//      var value = $("#" + id).val();
//      $("." + id).text(value);
//    });
  });
  
  var currentWindow = window.location.href;
  if(currentWindow.includes("summary.html")) {
    console.log("On summary page");
    $(".businessName").text(businessName);
  } else if (currentWindow.includes("index.html")) {
    console.log("On index page");
  }
});