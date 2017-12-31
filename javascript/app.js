$(document).ready(function (){
    


    $(document).on("click", "#searchBook", function() {
    var personID = $("#bookName").val();
    console.log(personID);

  // Grabbing the text in the input field and storing in bookName Variable
            
  var queryURL = "https://community.jivesoftware.com/api/core/v3/people/@me";

  $.ajax({
    url: queryURL,
    beforeSend: function(xhr) { 
      xhr.setRequestHeader("Authorization ", "Basic " + btoa("theycallmeflowz " + ": " + "kpmgwgci1A")); 
    },
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    data: '{"foo":"bar"}',
    success: function (response) {
      console.log(response);
    },
    error: function(error){
      console.log(error)
    }
});

    });
});

