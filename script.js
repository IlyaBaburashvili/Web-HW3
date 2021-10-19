
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
    for(let i=0; i<numCols; i++ ){
		let td = document.createElement("td");
        td.style.backgroundColor=colorSelected;
        td.setAttribute("onclick", "style.backgroundColor = colorSelected");
    	tr.appendChild(td);
    }
}

//Add a column
function addC() {
    if(numRows==0){
	numRows++;
        let grid = document.getElementById("grid");
	let tr = document.createElement("tr");
        tr.id = "row 1";
        grid.appendChild(tr);
    }
    numCols++;
    for(let i=1; i<=numRows; i++ ){
    	let row = document.getElementById(`row ${i}`);
        console.log(`row ${i}`);
    	let td = document.createElement("td");
        td.style.backgroundColor=colorSelected;
        td.setAttribute("onclick", "style.backgroundColor = colorSelected");
    	row.appendChild(td);
    }
}


//Remove a row
function removeR() {
    if(numRows==0){
    	return;
    }
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
