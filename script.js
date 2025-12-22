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

    alert(
        "Resume Uploaded Successfully!\n\n" +
        "Match Score: " + score + "%\n" +
        (score >= 70 ? "Status: Shortlisted ✅" : "Status: Not Shortlisted ❌")
    );
});
