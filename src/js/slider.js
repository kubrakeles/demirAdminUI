import { run } from "../app/app-slider";
import { SliderComponentService } from "../app/services/slider-component.service";
const sliderComponentService = new SliderComponentService ();
//document.getElementById("UpdateBtn").style.display="none";
run(sliderComponentService);
document.getElementById('slider-foto-upload').addEventListener("change",uploadImage);
function uploadImage(){
    var uploadimage=document.getElementById('slider-foto-upload').files[0];
    console.log(uploadImage);

}
//base 64 olarak alıp jsonla database e foroyu atmamız gerek


const reader = new FileReader();
const fileInput = document.getElementById("slider-foto-upload");
fileInput.addEventListener('change', e => {
  const f = e.target.files[0];
  console.log(e.target.files[0]);
  reader.readAsDataURL(f);

})


