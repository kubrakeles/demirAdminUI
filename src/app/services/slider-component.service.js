export class SliderComponentService {
    constructor() {
      this.addSliderFrom = document.getElementById("AddSliderFrom");
      this.fotoUpload = document.getElementById("slider-foto-upload");
      this.addSliderBtn = document.getElementById("AddSliderBtn");
      this.SlidertoTable = document.getElementById("SliderTable");
      this.UpdateBtn=document.getElementById("UpdateSliderBtn"); //news tablosunu alıyoruz
      //this.resultDiv = document.getElementById("result");
        }
    getInputs() 
    {

    }
    setResultToTable(str) { //gelen inputu burada tabloya gömüyoruz.
        // NewsTable
        document.getElementById("UpdateBtn").style.display="none";
        this.ReferenceText.value="";
        this.SlidertoTable.innerHTML="";
        //this.addSliderBtn.style.display="inline-block";
      //this.resultDiv.innerText = str;
      //haberleri arayüze eklemek için yapılacak.
      for(let i=0;i<=str.length;i++){
         
        this.SlidertoTable.innerHTML +=`
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
    
      this.addSliderBtn.addEventListener("click", cb);
    }
    onClickDeleteOrUpdate(cb){
      this.addSliderBtn.style.display="inline-block";
      this.SlidertoTable.addEventListener("click",cb);   
    }
    onTargetId(str){
      const value=str.target.parentElement.previousElementSibling.previousElementSibling.textContent;
      return value;
    }
    onClickUpdate(cb){
      //this.addSliderBtn.style.display="none";
      //this.UpdateBtn.style.display="inline-block";
      this.UpdateBtn.addEventListener("click",cb);
    }
    setResultToNextTextForUpdate(str)
    {
      this.ReferenceText.value=str;
    }
  }