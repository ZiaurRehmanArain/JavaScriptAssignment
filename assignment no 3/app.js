let genre = document.getElementById("genre")
let year = document.getElementById("year")
let rating = document.getElementById("rating")
let language = document.getElementById("language")
let tableid = document.getElementById("tableid")
let AllData = []
function check() {
   // console.log(select.value)

   fetch('./data.json', {
   })
      .then(response => response.json())
      .then(response => {
         console.log(response)
         // response.map((v, i) => {
         //    AllData.push(v)
         //    console.log(v)
            tableid.innerHTML += `
         <tr>
        <td style="width: 10%;">${response[0].id}</td>
        <td style="width: 30%;">     <p>   <img valign="top" width="60px" height="60px" style="margin:5px;float: left;" src=${response[1].poster_path} alt=""> <div style="display: inline-block;margin-top: 5px;">
        <b style="font-size: 1.2rem;">${response[0].title}</b> <br><br> <b style="border: 1px solid black;border-radius: 5px;">${response[0].certification}</b> ${response[0].genres      }</p>
         </div>      
      </td>
      <td style="width: 10%;"> ${response[0].release_date.toString().slice(0,4)}</td>
      </tr>
      `
      //

         // })

      })
}
// console.log(AllData)



function checkyear() {
   console.log(genre.value)
}
function checkrating() {
   console.log(rating.value)
}
function checkgenre() {
   console.log(genre.value)
}
function checklanguage() {
   console.log(language.value)
}