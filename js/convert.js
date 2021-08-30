const showArray = document.getElementById("showArray");
var file = document.getElementById("source");

function convertArray() {

  data = file.value;

  var arrayOfArrays = [];

  const splitData = data.split("," + " ");

  arrayOfArrays.push(_.chunk(splitData, 25))

  for (let index = 0; index < arrayOfArrays.length; index++) {

    let element = arrayOfArrays[index];

    for (let index = 0; index < element.length; index++) {

      const element2 = element[index];
      if (element2 === []) {
        console.log(empty)
      }else{
        showArray.innerHTML += `<div>[${element2}],</div>`;
      }
    }
  }
}