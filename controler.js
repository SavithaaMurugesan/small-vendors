var tempUserDb = [];

function setDb() {
    sessionStorage.setItem("db", tempUserDb);
    console.log(tempUserDb);
}
function getDb() {
    console.log(tempUserDb);
    let dbStr = sessionStorage.getItem("db");
    let dbArr = dbStr.split("/");
    console.log(dbStr + dbArr);
    for (let tempDbArr of dbArr) {
        let user = tempDbArr.split(",");
        tempUserDb.push(user);
    }
}

class RegisterUser {
    userRuserRegistration(userName, pswd, cfpswd) {
       /* let Registersucess=false;
        if(userName != "" && pswd != "" && cfpswd != ""){
            for (let user of tempUserDb) {
                console.log(user);
                if (user[0] == userName && user[1] == pswd && user[2] == cfpswd) {
                    Registersucess = true;
                    break;
                }
            }
            
        }*/
        if (pswd == cfpswd) {
            tempUserDb.push([userName, pswd + "/"]);
            setDb();
            alert("User Added Successfully!")
            window.location.href = "./login.html";
        }
        else {
            alert("Password and confirm Password does not matched!")
        }
    }
}


class Login {

    checkLogin(userName, pswd) {
        getDb();
        let isLoginSuccess = false;
        if (userName != "" && pswd != "") {
            for (let user of tempUserDb) {
                console.log(user);
                if (user[0] == userName && user[1] == pswd) {
                    isLoginSuccess = true;
                    break;
                }
            }
            if (isLoginSuccess) {
                alert("Login Success....");
                window.location.href = "./home.html";
            } else
                alert("Login Failed");

        } else {
            alert("Invalid UserName or Password");
        }
    }
}