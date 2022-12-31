/*
 Draw table with given rows and cols.
*/
function makeGrid(){

    let addRow=document.getElementById("inputHeight").value;
    let addColumn=document.getElementById("inputWidth").value;
    const table=document.getElementById("pixelCanvas");

    for ( let r=0; r<addRow; r++ ){

        let row = document.createElement("tr");

        table.appendChild(row);

        for( let c=0; c < addColumn; c++ ){

            let cell = document.createElement("td");

            row.appendChild(cell);

            cell.addEventListener('click',function setColor(){
                let colorPicker = document.getElementById("colorPicker").value;
                this.style.backgroundColor = colorPicker;
            });

        }
    }

}
/*
 The drawn rows and cols will be deleted (pixelCanvas) on submit click.
 The selected color will reset to black.
*/
function clearGrid(){
    let table = document.getElementById("pixelCanvas");
    let rows = table.firstElementChild;
    document.getElementById("colorPicker").value = "#000000";
    while(rows){
        rows.remove();
        rows = table.firstElementChild;
    }

}

/*
 submit button listener to reset the form default behavior
 Clear the drawn table
 Draw table with currently selected input values.
*/
document.addEventListener( 'submit', (event)=> {

    event.preventDefault();

    clearGrid();

    makeGrid();

});
