let sifre = document.querySelector("#exampleInputPassword1").value;
function control() {
  if ((sifre.length = 6)) {
    successful();
  } else {
    unsuccessful();
  }
}

function successful() {
  alert("Oturum açma işleminiz başarılı");
}

function unsuccessful() {
  alert("lütfen 6 basamaklı bir şifre girin!");
}
