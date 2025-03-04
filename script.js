//your JS code here. If required.
document.getElementById("submit").addEventListener("click",function(event){
	event.preventDefault()
	 let title=document.getElementById("title").value;
	 let author=document.getElementById("author").value;
	 let isbn=document.getElementById("isbn").value;
	let table=document.getElementById("book-list");
	// let row=table.insertRow(0);
	// let cell1=row.insertCell(0);
	// let cell2=row.insertCell(1);
	// let cell3=row.insertCell(2);
	// let cell4=row.insertCell(3

	let row=document.createElement("tr");
	let cell1=document.createElement("td");
	let cell2=document.createElement("td");
	let cell3=document.createElement("td");
	let cell4=document.createElement("td");
	 let removebutton=document.createElement("button");
    removebutton.classList.add("removebutton");
	removebutton.innerHTML="X"


	   removebutton.addEventListener("click",function(){
        row.remove();
    });

	

	cell1.innerHTML=title;
	cell2.innerHTML=author;
	cell3.innerHTML=isbn;

	

	//row.append(cell1,cell2,cell3)
	//table.append(row)
	cell4.appendChild(removebutton)
	row.appendChild(cell1)
	row.appendChild(cell2)
	row.appendChild(cell3)
	row.appendChild(cell4)
	table.appendChild(row)

	document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";

	
})