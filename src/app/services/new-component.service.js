
import{cleanText} from "../utils/text-clean";
export class NewsComponentService {
    constructor() {
      this.addNewsFrom = document.getElementById("AddNewsFrom");
      this.newsText = document.getElementById("NewsText");
      this.addNewsBtn = document.getElementById("AddBtn");
      this.NewstoTable = document.getElementById("NewsTable");
      this.UpdateBtn=document.getElementById("UpdateBtn"); //news tablosunu alıyoruz
      //this.resultDiv = document.getElementById("result");
        }
    getInputs() {
      return this.newsText.value;
    }
    setResultNewsToTable(str) { //gelen inputu burada tabloya gömüyoruz.
        // NewsTable
        document.getElementById("UpdateBtn").style.display="none";

        this.newsText.value="";
        this.NewstoTable.innerHTML="";
        this.addNewsBtn.style.display="inline-block";
      //this.resultDiv.innerText = str;
      //haberleri arayüze eklemek için yapılacak.
      for(let i=0;i<=str.length;i++){
         
        this.NewstoTable.innerHTML +=`
        <tr role="row" class="odd">
        <td class="dt-left dtr-control" tabindex="0">
            <label class="checkbox checkbox-single">
                <input type="checkbox" id="" class="checkable">
                <span></span>
            </label>
        </td>
        <td style="display:none;" >${str[i].id}</td>
        <td>${str[i].news}</td>
        <td nowrap="nowrap">
        <button type="button" id="update-news" class="btn btn-primary">Güncelle</button>
                    <button id="delete-news" type="button" class="btn btn-danger">Sil</button>
        </td>
     </tr>`
      }
    }
    onClick(cb) {
      this.addNewsBtn.addEventListener("click", cb);
    }
    onClickDeleteOrUpdate(cb){
      this.addNewsBtn.style.display="inline-block";
      this.NewstoTable.addEventListener("click",cb);   
    }
    onTargetId(str){
      const value=str.target.parentElement.previousElementSibling.previousElementSibling.textContent;
      return value;
    }
    onClickUpdate(cb){
      this.addNewsBtn.style.display="none";
      //this.UpdateBtn.style.display="inline-block";
      this.UpdateBtn.addEventListener("click",cb);
    }
    setResultNewsToNexsTextForUpdate(str)
    {
      this.newsText.value=str;
    }
  }
