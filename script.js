document.getElementById("resumeForm").addEventListener("submit", function (e) {
    e.preventDefault(); // page reload roko

    let jobDesc = document.querySelector("textarea").value;
    let file = document.querySelector("input[type='file']").files[0];

    if (!jobDesc || !file) {
        alert("Please enter job description and upload resume");
        return;
    }

    // Fake result logic (demo)
    let score = Math.floor(Math.random() * 40) + 60;

   let table = document.getElementById("resultTable");
let row = table.insertRow();

row.insertCell(0).innerText = score + "%";

let statusCell = row.insertCell(1);
if (score >= 70) {
  statusCell.innerText = "Selected";
  statusCell.classList.add("selected");
} else {
  statusCell.innerText = "Rejected";
  statusCell.classList.add("rejected");
}

