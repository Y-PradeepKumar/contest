
function validate(isSubmitted = false) {
    let fullname = document.getElementById('full-name').value
    let gender= document.getElementById('Gender').value
    let Swim = document.getElementById('Swimming').checked
    let reading = document.getElementById('readingnovels').checked
    let Danc = document.getElementById('Dancing').checked
    let Sing = document.getElementById('Singing').checked

    /*  console.log(fullname, gender,flexCheckChecked)*/
    if (fullname.length >= 5 && fullname.includes(' ')) {
        /*console.log("correct first name")*/
        document.getElementById('full-name-valid').style.display = 'block'
        document.getElementById('full-name-invalid').style.display = 'none'
    }
    else {
        /*        console.log("incorrect first name")*/
        document.getElementById('full-name-invalid').style.display = 'block'
        document.getElementById('full-name-valid').style.display = 'none'
    }

    if (gender !=' ') {
        document.getElementById('gender-valid').style.display = 'block'
        document.getElementById('gender-invalid').style.display = 'none'
    } else {
        document.getElementById('gender-invalid').style.display = 'block'
        document.getElementById('gender-valid').style.display = 'none'
    }

    if ( Swim|| reading|| Danc || Sing) {
        document.getElementById('hobbies-valid').style.display = 'block'
        document.getElementById('hobbies-invalid').style.display = 'none'
    } else {
        document.getElementById('hobbies-invalid').style.display = 'block'
        document.getElementById('hobbies-valid').style.display = 'none'
    }
let message ="Hobbies of "+fullname+" ("+gender+") are "
if(Swim)
{
    message=message+" Swimming and ";
}
if(reading)
{
    message=message+" Reading Novels and ";
}
if(Danc)
{message=message+"Dancing and ";
}
if(Sing){
    message=message+"Singing";
}
  //  alert ("Hobbies of "+fullname+" ("+gender+") are "+  message);
  if (isSubmitted) {
    alert(message)
    document.getElementById("registration-form").reset();
   document.getElementsByClassName("valid-feedback").reset();
    document.getElementsByClassName("invalid-feedback").reset();
 }

}