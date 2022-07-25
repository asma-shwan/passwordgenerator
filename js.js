let inpEl = document.getElementById("INP");
let subitEl = document.getElementById("Submit");
let checkel = document.getElementsByName("check");
let checkel1 = document.getElementById("check1");
let checkel2 = document.getElementById("check2");
let checkel3 = document.getElementById("check3");
let checkel4 = document.getElementById("check4");
let div3el = document.getElementById("div3");

subitEl.addEventListener("click", function (ARR) {
  if (
    !checkel1.checked &&
    !checkel2.checked &&
    !checkel3.checked &&
    !checkel4.checked
  ) {
    div3el.textContent = "pleace select one of the options";
  } else {
    div3el.textContent = "";
    let arr = [];
    if (inpEl.value > 0) {
      for (let i = 0; i < inpEl.value; i++) {
        if (checkel1.checked) {
          let y = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          arr.push(y);
        }
        if (checkel2.checked) {
          let x = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
          arr.push(x);
        }
        if (checkel3.checked) {
          let z = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          arr.push(z);
        }
        if (checkel4.checked) {
          let a = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
          arr.push(a);
        }
      }
    }
    for (let i = 0; i < inpEl.value; i++) {
      div3el.textContent += arr[i];
    }
  }
});
