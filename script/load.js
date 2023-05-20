import { get } from "./get.js";
import { set } from "./set.js";

populate();

document.querySelector("#search").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    populate();
  }
});

function populate() {
  get().then(function (result) {
    set(result);
  });
}
