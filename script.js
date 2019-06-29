/*
Napraviti JavaScript program za kreiranje 2 HTML tabele koje prikazuju podatke iz
niza "data", (file data.js). 
Kolone HTML tabela treba da prate red koji je zadan u JSON objektu. 
Prva HTML tabela treba da bude sortirana abecedno, po "last_name" property-iju, rastuce.
Druga tabela treba da bude sortirana po property-iju "age", opadajuce.
Niz sortirati programski - dakle, i za druge JSON podatke, program treba ispravno da 
sortira po zadatim parametrima (ne koristiti "rucno" sortiranje!)
*/



const button = document.querySelector('button').addEventListener('click', function () {
    sortTable1();
    sortTable2();
});

function sortTable1(){
    const table = document.getElementById('alphabetSort');
    let table1 = [];
    let arr1 = data.sort(function(a,b){return a.last_name < b.last_name ? -1 : 1});
    
    arr1.forEach((obj, id) => {
     table1 += `
        <tr>
        <td scope="col">${id+1}</td>
        <td scope="col">${obj.first_name}</td>
        <td scope="col">${obj.last_name}</td>
        <td scope="col">${obj.email}</td>
        <td scope="col">${obj.gender}</td>
        <td scope="col">${obj.age}</td>
      </tr>`;  
    });
      table.insertAdjacentHTML('afterbegin', table1);
    
}

function sortTable2(){
    const tableAge = document.getElementById('ageSortDesc');
    let table2 = [];
    let arr2 = data.sort(function (a, b) {
        return b.age - a.age;
    });
   
    arr2.forEach((obj, id) => {
     table2 += `
        <tr>
        <td scope="col">${id+1}</td>
        <td scope="col">${obj.first_name}</td>
        <td scope="col">${obj.last_name}</td>
        <td scope="col">${obj.email}</td>
        <td scope="col">${obj.gender}</td>
        <td scope="col">${obj.age}</td>
      </tr>`;  
    });
      tableAge.insertAdjacentHTML('afterbegin', table2);
}

