let students =[
    {name:"Alex johnson",id:"5035",status:"Present"},
    {name:"Alex ",id:"5036",status:"Present"},
    {name:"johnson",id:"5037",status:"Present"},
    {name:"john",id:"5038",status:"Present"},
    {name:"jebin",id:"5039",status:"Present"},
    {name:"nirmal",id:"5040",status:"Present"}
];
let currentPage=1;
let rowsPerPage=5;

const table =document.getElementById("studentList");

const presentE1=document.getElementById("present");  
const absentE1=document.getElementById("absent");
const lateE1=document.getElementById("late");

const dateInput=document.getElementById("dateInput");

const markAllBtn=document.getElementById("markAllPresent");
const saveBtn=document.getElementById("saveBtn");

if(localStorage.getItem("attendanceData")){
    students=JSON.parse(localStorage.getItem("attendanceData"));
}

function loadStudent(){
    table.innerHTML="";
    let start=(currentPage-1)*rowsPerPage;
    let end=start+rowsPerPage;
    let pageStudents=students.slice(start,end);

    pageStudents.forEach((s,i)=>{
        let index=start+i;
        let row=document.createElement("tr");
        row.className="border-b";

        row.innerHTML=`
        <td class="p-3 font-medium">${s.name}</td>
        <td class="p-3 font-medium">${s.id}</td>
        <td class="p-3 space=x-4">
        <button onclick=setStatus(${index},"Present") class="bg-green-500 text-white px-3 py-1 rounded">Present</button>
        <button onclick=setStatus(${index},"Absent") class="bg-red-500 text-white px-3 py-1 rounded">Absent</button>
        <button onclick=setStatus(${index},"Late") class="bg-yellow-500 text-white px-3 py-1 rounded">Late</button>
        </td>
        `;
        table.appendChild(row);
});
    updatestats();
}
loadStudent();
function setStatus(index,status){
    students[index].status=status;
    updatestats();
}
function updatestats(){
let present=0;
let absent=0;
let late=0;
students.forEach(s=>{
    if(s.status==="Present") present++;
    if(s.status==="Absent") absent++;
    if(s.status==="Late") late++;
});
presentE1.textContent=present;
absentE1.textContent=absent;
lateE1.textContent=late;
}
markAllBtn.addEventListener("click",()=>{
    students.forEach(s=>
        {s.status="Present"});
    loadStudent();
});
dateInput.addEventListener("change",()=>{
    let date=new Date(dateInput.value);
    selectedDDate.textContent=date.toDateString();
});
saveBtn.addEventListener("click",()=>{
    localStorage.setItem("attendanceData",JSON.stringify(students));
    alert("Attendance saved!");
});
