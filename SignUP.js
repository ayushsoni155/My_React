function check() {
   let name = document.getElementById("name").value.trim();
   let Fullnameexp = /^[a-z]+ [a-z]+$/i;
   let Halfnameexp = /^[a-z]+$/i;
   if (Fullnameexp.test(name) || Halfnameexp.test(name)) {
      console.log("name is correct");
      let mobile = document.getElementById("mobile").value.trim();
      let mobileexp = /^[6789]\d{9}$/i;
      if (mobileexp.test(mobile)) {
         console.log("mobile is correct");
         let mail = document.getElementById("mail").value.trim();
         let mailexp = /^[a-z0-9]+@gmail\.com$/i;
         if (mailexp.test(mail)) {
            console.log("mail is correct");
            let username = document.getElementById("username").value.trim();
            let usernameexp = /^[a-z0-9._]+$/i;
            if (usernameexp.test(username)) {
               console.log("username is correct");
               let pass=document.getElementById("password").value.trim();
               let passexp=/^[A-Za-z0-9\W]{8,16}$/;
               if(passexp.test(pass))
               {
                  console.log("password is correct");
                  return true;
               }
               else
               {
                  alert("Enter valid Password !!!");
                  return false;
               }

            
            }

            else {
               alert("Enter valid Username !!!");
               return false;
            }
         }
         else {
            alert("Enter valid G-mail !!!");
            return false;
         }



      }
      else {
         alert("Enter valid Mobile Number !!!");
         return false;
      }
   }
   else {
      alert("Enter valid name !!!");
      return false;
   }




}