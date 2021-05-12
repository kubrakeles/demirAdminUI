import { run } from "../app/app-reference";
import { SliderComponentService } from "../app/services/slider-component.service";
const sliderComponentService = new SliderComponentService ();
document.getElementById("UpdateBtn").style.display="none";
console.log(document.getElementById("slider-foto-upload").value);
console.log("selma");
console.log(document.getElementById('slider-foto-upload'));
document.getElementById('slider-foto-upload').addEventListener("change",uploadImage);

function uploadImage(){
console.log(document.getElementById('slider-foto-upload').files[0]);
console.log("hello");

}

run(sliderComponentService);