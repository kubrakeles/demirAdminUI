
export class AlertService {
  constructor() {
  this.cardBody=document.querySelector(".card-body");
  }

  displayMessages(message,type)
  {
  const div=document.createElement("div");
  div.className=`alert alert-${type}`;
  div.textContent=message;
  this.cardBody.appendChild(div);
  setTimeout(function() {
    div.remove();
  },2500)
  }
  
}
