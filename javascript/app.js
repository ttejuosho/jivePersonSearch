$(document).ready(function (){
    


    $(document).on("click", "#searchBook", function() {
    var personID = $("#bookName").val();
    console.log(personID);

  // Grabbing the text in the input field and storing in bookName Variable
            
  var queryURL = "https://gather.jiveon.com/api/core/v3/people/username/ttejuosho?fields=emails,name";

  $.ajax({
    url: queryURL,
    beforeSend: function(xhr) { 
      xhr.setRequestHeader("Authorization", "Basic " + btoa("ttejuosho:Fareedah1")); 
    },
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    success: function (data) {
      console.log(JSON.stringify(data));
    },
    error: function(){
      alert("Cannot get data");
    }
});

    });
});

