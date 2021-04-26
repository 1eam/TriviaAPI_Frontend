
const text = document.getElementById('#question');
let fetchApi = 'http://localhost:8080/questions';

fetch(fetchApi)
  .then(function(response) {
      return response.json();
  })
  .then(function(data){
      console.log(data)
      
      if(data.length > 0){

          let html = "";
          data.forEach((trivia)=>{
              html =+ "<form>";
              html =+ "<p>" + trivia.results + "</p>";
          })

          document.getElementById("container").innerHTML = html;
      }
  })
  .catch(function(error) {
    console.log("Error:" + error);
});


function displayData(data){
    document.getElementById("#question").innerHTML = "<p></p>";
}


//   post
let submittedAnswer = {
    question: "thishtml.getQuestion: What was the first James Bond film?",
    submitted_answer: "radioOption.get: False"
}

function submitAnswer(submittedAnswer){
    fetch('http://localhost:8080/checkanswer', {
        method: 'post',
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify(submittedAnswer)
        })
        .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log('postrequest', data);
    });
    return data.body;
}

//   fetch('http://localhost:8080/checkanswer', {
//     method: 'post',
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify(submittedAnswer)
//   })
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (data) {
//     console.log('postrequest', data);
//   });