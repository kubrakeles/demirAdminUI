//ui daki alert kısmını alert service ile yapıyoruz.
import {MainStorage} from "./utils/main-storage";
import {getNewsServices} from "./services/new-get.service";
import {AlertService} from "./services/alert.service";
export const run = (NewsComponentService) => {
    const storage=new MainStorage();
    const storageToken=storage.getTokenFromStorage();
    const news=new getNewsServices(storageToken);
    const alert=new AlertService();

   //Get işlemi için new-get serviceden fonk. çağırıyoruz.
   news.getTakeNewsDataFromApi()
   .then(news=>NewsComponentService.setResultNewsToTable(news))
   .catch(err=>console.log(err));


        //POST= butona tıklandıktan sonra datayı alarak POST işlemi gerçekleştiriliyor
      NewsComponentService.onClick(() => {
      const inputNews = NewsComponentService.getInputs();
      const req=fetch('https://localhost:44344/api/Home/AddNews', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer '+storage.getTokenFromStorage()
            ,'Content-Type': 'application/json' },
        body: JSON.stringify({
            news:inputNews
        })
    })
    .then(function (data) {
      news.getTakeNewsDataFromApi()
      .then(news=>NewsComponentService.setResultNewsToTable(news), alert.displayMessages("Ekleme işlemi başarılı","success"))
      .catch(err=>console.log(err));
    })
        .catch(err => console.log(err));
       });
        //Silme İşlemleri
        NewsComponentService.onClickDeleteOrUpdate((e)=>{
          
          if(e.target.id==="delete-news")//silme
          {
          const id=e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
          var deleteNewsObj={id:id,news:""};
          const req=fetch('https://localhost:44344/api/Home/DeleteNews',{
            method:'POST',
            headers: { 'Authorization': 'Bearer '+storage.getTokenFromStorage()
            ,'Content-Type': 'application/json' },
            body:JSON.stringify({
              id:id
          })
          })
          .then(function (data) {
            news.getTakeNewsDataFromApi()
            .then(news=>NewsComponentService.setResultNewsToTable(news), alert.displayMessages("Silme işlemi başarılı","danger"))
            .catch(err=>console.log(err));
          })
          .catch(err => console.log(err));
          }
         else if(e.target.id==="update-news")//Güncelleme
          { 
            const targetId=NewsComponentService.onTargetId(e);
            //Güncelleme  
            document.getElementById("UpdateBtn").style.display="inline-block";

            sessionStorage.setItem("updateID",targetId);
                       
            news.getTakeNewsByIdFromApi(targetId)
            .then(news=>NewsComponentService.setResultNewsToNexsTextForUpdate(news.news))
            .catch(err=>console.log(err));

           //Güncelleme işlemleri
          }
        });
        NewsComponentService.onClickUpdate((e)=>{
          const inputNews = NewsComponentService.getInputs();
            const req=fetch('https://localhost:44344/api/Home/UpdateNews',{
              method:'POST',
              headers: { 'Authorization':'Bearer '+storage.getTokenFromStorage()
              ,'Content-Type': 'application/json' },
              body:JSON.stringify({
                id:sessionStorage.getItem("updateID"),
                news:inputNews
            })
            })
            .then(function (data) {
              news.getTakeNewsDataFromApi()
              .then(news=>NewsComponentService.setResultNewsToTable(news), alert.displayMessages("Güncelleme işlemi başarılı","info"))
              .then(news=>news.id="")
              .catch(err=>console.log(err));
            })
            .catch(err => console.log(err));
    });
  };

      //GET islemi
    // fetch('https://localhost:44344/api/Home/News', {
    //     method: 'GET',
    //     headers: { 'Authorization': 'Bearer '+storage.getTokenFromStorage()
    //         ,'Content-Type': 'application/json' }

    //          })
    //     .then(response => response.json())
    //     .then(data=>{console.log(data);})
    //     .catch(err => console.log(err));
    //     console.log(getvalue);

    //NewsComponentService.setResultNewsToTable(getvalue);