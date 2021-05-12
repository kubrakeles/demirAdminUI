import { run } from "../app/app-reference";
import { ReferenceComponentService } from "../app/services/reference-component.service";
const referenceComponentService = new ReferenceComponentService();
document.getElementById("UpdateBtn").style.display="none";

run(referenceComponentService);