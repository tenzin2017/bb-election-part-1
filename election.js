document.addEventListener("DOMContentLoaded", function() {

  // Imagination!
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    data: '',
    dataType: 'JSON'
  }).done(function(responseData){

    var ul = document.querySelector('#voting');
    for(var i=0; i<responseData.candidates.length; i++){
      var newLi = document.createElement('li');
      newLi.innerHTML = 'Name: '+responseData.candidates[i].name+ "   |   "+ '  Votes: '+responseData.candidates[i].votes;
      console.log(newLi);
      ul.append(newLi);
    }


  });

});
