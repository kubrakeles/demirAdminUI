export class ComponentService {
  
    constructor() {
      this.loginEmail = document.getElementById("LoginEmail");
      this.loginPassword = document.getElementById("LoginPassword");
      this.giris = document.getElementById("Giris");
      //this.resultDiv = document.getElementById("result");
    }
  
    getInputs() {
      return [this.loginEmail.value, this.loginPassword.value];
    }

    setResult(str) {
      this.resultDiv.innerText = str;
    }
  
    onClick(cb) {
      this.giris.addEventListener("click", cb);
    }

  }

  
  