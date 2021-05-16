//ui daki alert kısmını alert service ile yapıyoruz.
import {MainStorage} from "./utils/main-storage";
import {getServices} from "./services/reference-get.service";
import {AlertService} from "./services/alert.service";
export const run = (ReferenceComponentService) => {
    const storage=new MainStorage();
    const storageToken=storage.getTokenFromStorage();
    const getservices =new getServices(storageToken);
    const alert=new AlertService();
    console.log("qkwjd");
   //Get işlemi için new-get serviceden fonk. çağırıyoruz.
   getservices.getTakeDataFromApi()
   .then(references=>ReferenceComponentService.setResultToTable(references))
   .catch(err=>console.log(err));


        //POST= butona tıklandıktan sonra datayı alarak POST işlemi gerçekleştiriliyor
      ReferenceComponentService.onClick(() => {
      const input = ReferenceComponentService.getInputs();
      const req=fetch('https://service.demiralpelektronik.com/api/Home/AddReference', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer '+storage.getTokenFromStorage()
            ,'Content-Type': 'application/json' },
        body: JSON.stringify({
            referenceName:input
        })
    })
    .then(function (data) {
        getservices.getTakeDataFromApi()
      .then(references=>ReferenceComponentService.setResultToTable(references), alert.displayMessages("Ekleme işlemi başarılı","success"))
      .catch(err=>console.log(err));
    })
        .catch(err => console.log(err));
       });
        //Silme İşlemleri
        ReferenceComponentService.onClickDeleteOrUpdate((e)=>{
          
          if(e.target.id==="delete")//silme
          {
          const id=e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
          var deleteNewsObj={id:id,news:""};
          const req=fetch('https://service.demiralpelektronik.com/api/Home/DeleteReference',{
            method:'POST',
            headers: { 'Authorization': 'Bearer '+storage.getTokenFromStorage()
            ,'Content-Type': 'application/json' },
            body:JSON.stringify({
              id:id
          })
          })
          .then(function (data) {
            services.getTakeDataFromApi()
            .then(references=>ReferenceComponentService.setResultToTable(references), alert.displayMessages("Silme işlemi başarılı","danger"))
            .catch(err=>console.log(err));
          })
          .catch(err => console.log(err));
          }
         else if(e.target.id==="update")//Güncelleme
          { 
          document.getElementById("UpdateBtn").style.display="inline-block";
            const targetId=ReferenceComponentService.onTargetId(e);
            //Güncelleme  
            console.log(targetId);
            sessionStorage.setItem("updateID",targetId);
                       
            getservices.getTakeByIdFromApi(targetId)
            .then(references=>ReferenceComponentService.setResultToNextTextForUpdate(references.referenceName))
            .catch(err=>console.log(err));

           //Güncelleme işlemleri
          }
        });
        ReferenceComponentService.onClickUpdate((e)=>{
          const input = ReferenceComponentService.getInputs();
            const req=fetch('https://service.demiralpelektronik.com/api/Home/UpdateReference',{
              method:'POST',
              headers: { 'Authorization':'Bearer '+storage.getTokenFromStorage()
              ,'Content-Type': 'application/json' },
              body:JSON.stringify({
                id:sessionStorage.getItem("updateID"),
               referenceName:input
            })
            })
            .then(function (data) {
              getservices.getTakeDataFromApi()
              .then(references=>ReferenceComponentService.setResultToTable(references), alert.displayMessages("Güncelleme işlemi başarılı","info"))
              .then(references=>references.id="")
              .catch(err=>console.log(err));
            })
            .catch(err => console.log(err));
    });
  };