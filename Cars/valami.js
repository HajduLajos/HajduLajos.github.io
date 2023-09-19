



fetch("https://raw.githubusercontent.com/vega/vega/main/docs/data/cars.json")
.then(x => x.json())
.then(y => myDisplay(y));




function myDisplay(y){
    sz = ""
    sz2 = ""
        y.forEach(elem => {
            //console.log(elem)

           sz +=`
                <tr>
                <td class="betum">${elem.Name}</td>
                <td>${elem.Miles_per_Gallon}</td>
                <td>${elem.Horsepower}</td>
                <td>${elem.Year}</td>
                <td>${elem.Origin}</td>
                <td><button class="rounded-circle" data-bs-toggle="modal" data-bs-target="#myModal"><img src="bruh.png" alt="" height="50px" width="50px" ></button></td>
                </tr>
           ` 
           document.getElementById("body").innerHTML = sz

           sz2 +=`
           <div class="modal" id="myModal">
           <div class="modal-dialog">
           <div class="modal-content">
       
               <!-- Modal Header -->
               <div class="modal-header">
               <h4 class="modal-title">In-Depth Information</h4>
               <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
               </div>
       
               <!-- Modal body -->
               <div class="modal-body" id="mbody">
                   <label>Name: ${elem.Name}</label>
                   </p>
                   <label>Miles per Gallon: ${elem.Miles_per_Gallon}</label>
                   </p>
                   <label>Cylinders: ${elem.Cylinders}</label>
                   </p>
                   </p>
                   <label>Displacement: ${elem.Displacement}</label>
                   </p>
                   <label>Horsepower: ${elem.Horsepower}</label>
                   </p>
                   <label>Weight in lbs: ${elem.Weight_in_lbs}</label>
                   </p>
                   <label>Accelaration: ${elem.Accelaration}</label>
                   </p>
                   <label>Year: ${elem.Year}</label>
                   </p>
                   <label>Origin: ${elem.Origin}</label>
                   </p>
               </div>
       
               <!-- Modal footer -->
               <div class="modal-footer">
               <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
               </div>
       
           </div>
           </div>
       </div>
           
           ` 
           document.getElementById("modal").innerHTML = sz2

        });






}
