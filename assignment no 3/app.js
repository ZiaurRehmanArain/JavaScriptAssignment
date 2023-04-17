let genre = document.getElementById("genre")
let year = document.getElementById("year")
let rating = document.getElementById("rating")
let language = document.getElementById("language")
let tableid = document.getElementById("tableid")
let AllData = []
let genress = []
let years = []
let ratings = []
let languages = []
   // console.log(select.value)

   fetch('./data.json', {
   })
      .then(response => response.json())
      .then(response => {
         console.log(response)
         response.map((v, i) => {
            AllData.push(v)


            let flitergener=new Set()
            flitergener.add(v.geners)
            genress=Array.from(flitergener)
            // console.log(v)
      //       tableid.innerHTML += `
      //    <tr>
      //   <td style="width: 10%;">${v.id}</td>
      //   <td style="width: 30%;">     <p>   <img valign="top" width="60px" height="60px" style="margin:5px;float: left;" src="https://image.tmdb.org/t/p/w45${v.poster_path}" alt=""> <div style="display: inline-block;margin-top: 5px;">
      //   <b style="font-size: 1.2rem;">${v.title}</b> <br><br> <b style="border: 1px solid black;border-radius: 5px;">${v.certification}</b> ${response[0].genres      }</p>
      //    </div>      
      // </td>
      // <td style="width: 10%;"> ${v.release_date.toString().slice(0,4)}</td>
      // </tr>
      // `
      
      console.log(genress)

         })
         for(let a=0;a<=100;a++){
            tableid.innerHTML += `
               <tr >
              <td style="width: 10%;">${a+1}</td>
              <td style="width: 30%;">     <p>   <img valign="top" width="60px" height="60px" style="margin:5px;float: left;" src="https://image.tmdb.org/t/p/w45${AllData[a].poster_path}" alt=""> <div style="display: inline-block;margin-top: 5px;">
              <b style="font-size: 1.2rem;">${AllData[a].title}</b> <br><br> <b style="border: 1px solid black;border-radius: 5px;">${AllData[a].certification}</b> ${AllData[a].genres      }</p>
               </div>      
            </td>
            <td style="width: 10%;"> ${AllData[a].release_date.toString().slice(0,4)}</td>
            </tr>
            `
         }
         console.log(AllData)
         


function checkyear(AllData) {

   console.log(AllData)
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
// 
      })





