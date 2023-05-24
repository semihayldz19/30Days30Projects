function control() {
  let sifre = document.querySelector("#exampleInputPassword1").value;
  let pass = 6;
  if (sifre.length < pass || sifre.length > pass) {
    unsuccessful();
  } else if (sifre.length == pass) {
    successful();
  } else {
    alert("tekrar deneyin");
  }
}

function successful() {
  alert("Oturum açma işleminiz başarılı");
}

function unsuccessful() {
  alert("lütfen 6 haneden oluşan bir şifre girin!");
}
