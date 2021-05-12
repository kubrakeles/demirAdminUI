import { run } from "../app/app-news";
import { NewsComponentService } from "../app/services/new-component.service";
const newsComponentService = new NewsComponentService();

run(newsComponentService);