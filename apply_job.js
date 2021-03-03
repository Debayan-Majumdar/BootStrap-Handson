var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var cbox=document.getElementById("cbox");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var address=document.getElementById("address");
var city=document.getElementById("city");
var zip=document.getElementById("zip");
var state=document.getElementById("state");



fid.addEventListener('submit',function(e){
    e.preventDefault();
    if(fname.value==='')
    {
        alert("First Name is required");
    }
    else if(lname.value==='')
    {
        alert("Last Name is required");
    }
    else if(email.value==='')
    {
        alert("email is required");
    }
    else if(phone.value==='')
    {
        alert("phone number is required");
    }
    else if(address.value==='')
    {
        alert("address is required");
    }
    else if(city.value==='')
    {
        alert("City is required");
    }
    else if(state.value==='')
    {
        alert("state is required");
    }
    else if(zip.value==='')
    {
        alert("zip is required");
    }
    else if(zip.value.length!=6){
        alert('Zip must be 6 digit!');
    }
    else if(document.getElementById("country").selectedIndex===0)
    {
        alert("Select Country...")
    }
    else if(document.getElementById("edu_level").selectedIndex===0)
    {
        alert("Select Highest Education...")
    }
    else if(document.getElementById("edu_type").selectedIndex===0)
    {
        alert("Select Education mode...")
    }
    else if(document.getElementById("apply_job").selectedIndex===0)
    {
        alert("Select atleast one job position...")
    }
});

function myFunction(){
    if(cbox.checked==true)
    {
        document.getElementById("h1").style.display="block";
        document.getElementById("current_emp").style.display="block";
        document.getElementById("h2").style.display="block";
        document.getElementById("emp_yoe").style.display="block";
    }
    else
    {
        document.getElementById("h1").style.display="none";
        document.getElementById("current_emp").style.display="none";
        document.getElementById("h2").style.display="none";
        document.getElementById("emp_yoe").style.display="none";
    }
   


}