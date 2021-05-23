//login işlemleri componenetler çekilerek gerçekleştirilecek.
//Component servisten alınarak.
import {MainStorage} from "./utils/main-storage";

export const run = (componentService) => {
    const mainStorage=new MainStorage();
    componentService.onClick(() => {
      const inputs = componentService.getInputs()
      var token;
      const [mail, password] = inputs;
      console.log(mail);
      fetch('https://service.demiralpelektronik.com/api/auth/login',{
    method:'POST',
    headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'http://localhost:8080','Access-Control-Allow-Credentials':'true'},
    body:JSON.stringify({
        email:mail,
        password:password
    })
    
    })
    .then(response =>response.json())
    .then(data=>
        {token=data.token;
            if(token!==null){
                mainStorage.addTokenToStorage(token);
                //console.log(mainStorage.getTokenFromStorage());
               location.replace("/index.html");
            }
            else
            {
                location.replace("/login.html");
            }
        })
    .catch(err=>console.log(err));
    });
  };
 