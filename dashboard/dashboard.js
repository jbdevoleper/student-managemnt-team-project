const popupBtn = document.getElementById("popupBtn");
const popup = document.getElementById("hiddenPopup");
const cancelbtn = document.getElementById("cancelBtn");
const addBtn = document.getElementById("addBtn");

popupBtn.addEventListener("click",()=>{
    popup.classList.remove("hidden");
});

cancelbtn.addEventListener("click",()=>{
    popup.classList.add("hidden");
});

function getStudents(){
    return JSON.parse(localStorage.getItem("students"))||[];
}

function saveStudent() {
    let students = JSON.parse(localStorage.getItem("students"));

    if (!Array.isArray(students)){
        students = [];
    }

    const nameInput = document.getElementById("name");
    const rollInput = document.getElementById("rollNo");

    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();

    if (name === "" || roll === "") {
        alert("Enter name and roll number");
        return;
    }

    const student = {
        id: Date.now(),
        name,
        rollNo: roll
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    nameInput.value = "";
    rollInput.value = "";

    alert("Student successfully added");
}

addBtn.addEventListener("click",()=>{
    saveStudent();
    updateDashboard();
    popup.classList.add("hidden");
});

function updateDashboard(){
    const students = JSON.parse(localStorage.getItem("students"))||[];
    const total = students.length;

    const totalCount =document.getElementById("totalCount");
    totalCount.innerHTML=total;
}

updateDashboard();

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.forEach(l=>{
            l.classList.remove("active")
        });
        link.classList.add("active");
    });
    // link.addEventListener("click",(e)=>{
    //     e.preventDefault();
    // })
})