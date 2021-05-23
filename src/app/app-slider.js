//ui daki alert kısmını alert service ile yapıyoruz.
import {MainStorage} from "./utils/main-storage";
import {getServices} from "./services/slider-get.service";
import {AlertService} from "./services/alert.service";
export const run = (SliderComponentService) => {
    const storage=new MainStorage();
    const storageToken=storage.getTokenFromStorage();
    const getservices =new getServices(storageToken);
    const alert=new AlertService();
    if(storageToken===null){
      location.replace("/login.html");
    }else{

   //Get işlemi için new-get serviceden fonk. çağırıyoruz.
   getservices.getTakeDataFromApi()
   .then(references=>SliderComponentService.setResultToTable(references))
   .catch(err=>console.log(err));

   //Filename i alıyoruz.

        //POST= butona tıklandıktan sonra datayı alarak POST işlemi gerçekleştiriliyor
     SliderComponentService.onClick(() => {

      const inpFile = document.getElementById('slider-foto-upload');
      const formData=new FormData();
      
      formData.append(inpFile,inpFile.files[0]);
     console.log(inpFile.files);

      const req=fetch('https://service.demiralpelektronik.com/api/Home/AddSliderImage', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer '+storage.getTokenFromStorage()
            ,'Content-Type': 'application/json' },
        body: formData
    })
    .then(function (data) {
      console.log(data);
        getservices.getTakeDataFromApi()
      .then(references=>SliderComponentService.setResultToTable(references), alert.displayMessages("Ekleme işlemi başarılı","success"))
      .catch(err=>console.log(err));
    })
        .catch(err => console.log(err));
       });
        //Silme İşlemleri
        SliderComponentService.onClickDeleteOrUpdate((e)=>{
          
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
            .then(references=>SliderComponentService.setResultToTable(references), alert.displayMessages("Silme işlemi başarılı","danger"))
            .catch(err=>console.log(err));
          })
          .catch(err => console.log(err));
          }
         else if(e.target.id==="update")//Güncelleme
          { 
          document.getElementById("UpdateBtn").style.display="inline-block";
            const targetId=SliderComponentService.onTargetId(e);
            //Güncelleme  
            console.log(targetId);
            sessionStorage.setItem("updateID",targetId);   
            getservices.getTakeByIdFromApi(targetId)
            .then(references=>SliderComponentService.setResultToNextTextForUpdate(references.referenceName))
            .catch(err=>console.log(err));
           //Güncelleme işlemleri
          }
        });
        SliderComponentService.onClickUpdate((e)=>{
          const input = SliderComponentService.getInputs();
            const req=fetch('https://service.demiralpelektronik.com/api/Home/UpdateSlider',{
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
              .then(references=>SliderComponentService.setResultToTable(references), alert.displayMessages("Güncelleme işlemi başarılı","info"))
              .then(references=>references.id="")
              .catch(err=>console.log(err));
            })
            .catch(err => console.log(err));
    });
}};

