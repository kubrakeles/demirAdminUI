
import{cleanText} from "../utils/text-clean";
export class ReferenceComponentService {
    constructor() {
      //this.addNewsFrom = document.getElementById("AddNewsFrom");
      this.ReferenceText = document.getElementById("ReferenceText");
      this.addReferenceBtn = document.getElementById("AddBtn");
      this.ReferencetoTable = document.getElementById("ReferenceTable");
      this.UpdateBtn=document.getElementById("UpdateBtn"); //news tablosunu alıyoruz
      //this.resultDiv = document.getElementById("result");
        }
    getInputs() {
      return this.ReferenceText.value;
    }
    setResultToTable(str) { //gelen inputu burada tabloya gömüyoruz.
        // NewsTable
        document.getElementById("UpdateBtn").style.display="none";
        this.ReferenceText.value="";
        this.ReferencetoTable.innerHTML="";
        this.addReferenceBtn.style.display="inline-block";
      //this.resultDiv.innerText = str;
      //haberleri arayüze eklemek için yapılacak.
      for(let i=0;i<=str.length;i++){
         
        this.ReferencetoTable.innerHTML +=`
        <tr role="row" class="odd">
        <td class="dt-left dtr-control" tabindex="0">
            <label class="checkbox checkbox-single">
                <input type="checkbox" id="" class="checkable">
                <span></span>
            </label>
        </td>
        <td style="display:none;" >${str[i].id}</td>
        <td>${str[i].referenceName}</td>
        <td nowrap="nowrap">
        <button type="button" id="update" class="btn btn-primary">Güncelle</button>
                    <button id="delete" type="button" class="btn btn-danger">Sil</button>
        </td>
     </tr>`
      }
    }
    onClick(cb) {
      this.addReferenceBtn.addEventListener("click", cb);
    }
    onClickDeleteOrUpdate(cb){
      this.addReferenceBtn.style.display="inline-block";
      this.ReferencetoTable.addEventListener("click",cb);   
    }
    onTargetId(str){
      const value=str.target.parentElement.previousElementSibling.previousElementSibling.textContent;
      return value;
    }
    onClickUpdate(cb){
      this.addReferenceBtn.style.display="none";
      //this.UpdateBtn.style.display="inline-block";
      this.UpdateBtn.addEventListener("click",cb);
    }
    setResultToNextTextForUpdate(str)
    {
      this.ReferenceText.value=str;
    }
  }
