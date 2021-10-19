let numRows = 0;   //Number of rows
let numCols = 0;   //Number of columns
let colorSelected="white";  //default color is white

//Add a row
function addR() {
    //If there are no rows, then number of cols must also be increased when adding fisrt row
	if(numCols==0){
    	numCols++;
    }
    numRows++;  //increment number of rows
	let grid = document.getElementById("grid");  
	let tr = document.createElement("tr");   //Create row element
    tr.id = `row ${numRows}`;   //label each row with number starting from 1 going up to numRows
    grid.appendChild(tr);   //Add row to grid
    //Loop through the row adding td elements and setting color
    for(let i=0; i<numCols; i++ ){
		let td = document.createElement("td");
        td.style.backgroundColor=colorSelected;   //Set square to color selected
        td.setAttribute("onclick", "style.backgroundColor = colorSelected");   //Enable color change on click
    	tr.appendChild(td);
    }
}

//Add a column
function addC() {
    //If number of cols is 0 must also add first row and incremet numRows
	if(numRows==0){
    	numRows++;  //increment numRows
        let grid = document.getElementById("grid");
		let tr = document.createElement("tr");   //Create and add 1st row
        tr.id = "row 1";   //This is 1st row being added so will always be row 1
        grid.appendChild(tr);
    }
    numCols++;   //increment numCols
    //Loop through each row to add 1 square at end. This means adding 1 td element to each
    for(let i=1; i<=numRows; i++ ){   //Loop starts at 1 because row numbers start at 1
    	let row = document.getElementById(`row ${i}`);   //Find each row by number
    	let td = document.createElement("td");   //create and add td element to each
        td.style.backgroundColor=colorSelected;   //Set color
        td.setAttribute("onclick", "style.backgroundColor = colorSelected");
    	row.appendChild(td);
    }
}

//Remove a row
function removeR() {
    //If grid is empty do nothing
	if(numRows==0){
    	return;
    }
	let lastRow = document.getElementById(`row ${numRows}`); //Find last row
    //Remove all td elements from row
    for(let i=0; i<numCols; i++ ){
		lastRow.removeChild(lastRow.lastElementChild);
    }
    lastRow.remove();  //trmove tr element
    //If this is the only row left also set numCols to 0. Grid now empty
    if(numRows===1){
        numCols=0;
    }
    numRows--;   //decrement numRows
}

//Remove a column
function removeC() {
    //If grid is empty do nothing
    if(numCols===0){
        return;
    }   
    //If this is the last col, must empty grid
    if(numCols===1){
        //Loop through all rows to remove td elements
        for(let i=1; i<=numRows; i++ ){
            let row = document.getElementById(`row ${i}`);  //find each row
            row.removeChild(row.lastElementChild);  //Remove each
            }  
        //Loop through all rows to remove tr elements
        for(let i=1; i<=numRows; i++ ){
            let tr = document.getElementById(`row ${i}`);
            tr.remove();
            }
        numRows=0;  //Set everything to 0
        numCols=0;
        return;
        }
    //If >1 col left
    else{
        //Loop through each rows to remove last td elements
        for(let i=1; i<=numRows; i++ ){
            let row = document.getElementById(`row ${i}`);  //find each by number
            row.removeChild(row.lastElementChild);  //remove last td
            }
        numCols--;  //decrement numCOls
        }  
    }

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    if(colorSelected[0]===true){  //Set color to white
      	colorSelected="white";
      }
    else if(colorSelected[1]===true){   //Set color to red
      	colorSelected="red";
      }
    else if(colorSelected[2]===true){   //Set color to blue
      	colorSelected="blue";
      }
    else if(colorSelected[3]===true){   //Set color to green
      	colorSelected="green";
      }
    else if(colorSelected[4]===true){   //Set color to yellow
      	colorSelected="yellow";
      }
    
}

//Fills all squares with selected color
function fill(){
    let grid = document.getElementById("grid");
    let td = grid.getElementsByTagName("td");   //Create array of td elements
    //Loop through each element and set color to selected one
    for (let i = 0; i < td.length; i++) {
        td[i].style.backgroundColor = colorSelected;
    }
}

//Deletes all rows and cols. Make grid empty
function clearAll(){
    //Loop through all rows removing each
   while(numRows>0 ){
   		removeR();  //removeR also removes cols in each row so this is enough
        numCols--;
   }
    numCols=0;   //Set numCols to 0
}

//Fills all uncolored squares with selected color
function fillU(){
    let grid = document.getElementById("grid");
    let td = grid.getElementsByTagName("td");  //reate array of td el
    //Loop through array
    for (let i = 0; i < td.length; i++) {
        //Check if square white and fill with selected color if white
    	if( td[i].style.backgroundColor === "white"){
    	    td[i].style.backgroundColor = colorSelected;
          }
    }
}

//Resets all squares to white
function resetColor(){
    let grid = document.getElementById("grid");
    let td = grid.getElementsByTagName("td"); //reate array of td el
    //Loop through array and set all to white
    for (let i = 0; i < td.length; i++) {
        td[i].style.backgroundColor = "white";    
    }
}

