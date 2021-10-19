
let numRows = 0;
let numCols = 0;
let colorSelected="white"; 
//Add a row
function addR() {
    if(numCols==0){
    	numCols++;
    }
    numRows++;
    let grid = document.getElementById("grid");
    let tr = document.createElement("tr");
    tr.id = `row ${numRows}`;
    console.log(tr.id)
    grid.appendChild(tr);	
}

//Add a column
function addC() {
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
