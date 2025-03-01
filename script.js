//your JS code here. If required.
document.getElementById("submit").addEventListener("click",function(){
	 let title=document.getElementById("title").value;
	 let author=document.getElementById("author").value;
	 let isbn=document.getElementById("isbn").value;
	let table=document.querySelector(".table tbody");
	let row=table.insertRow(0);
	let cell1=row.insertCell(0);
	let cell2=row.insertCell(1);
	let cell3=row.insertCell(2);

	cell1.innerHTML=title;
	cell2.innerHTML=author;
	cell3.innerHTML=isbn;

	//row.append(cell1,cell2,cell3)
	//table.append(row)

	document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";

	
})