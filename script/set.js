export function set(result) {
  if (result == null) return;

  let table = document.getElementById("table");
  table.innerHTML = "";

  for (let i = 0; i < result.length; i++) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML =
      result[i].name.charAt(0).toUpperCase() + result[i].name.slice(1);
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    result[i].protein_g >= 10
      ? (td2.innerHTML =
          "<span style='background-color: green'>" +
          result[i].protein_g +
          "%" +
          "</span>")
      : (td2.innerHTML = result[i].protein_g + "%");
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    result[i].carbohydrates_total_g >= 20
      ? (td3.innerHTML =
          "<span style='background-color: green'>" +
          result[i].carbohydrates_total_g +
          "%" +
          "</span>")
      : (td3.innerHTML = result[i].carbohydrates_total_g + "%");
    tr.appendChild(td3);

    table.appendChild(tr);
  }
}
