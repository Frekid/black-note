document.getElementById('formularzBukiet').addEventListener('submit', function(e) {
  e.preventDefault();

  const rodzaj = document.getElementById('rodzaj').value;
  const ilosc = document.getElementById('ilosc').value.trim();
  const imie = document.getElementById('imie').value.trim();
  const nazwisko = document.getElementById('nazwisko').value.trim();
  const telefon = document.getElementById('telefon').value.trim();
  const email = document.getElementById('email').value.trim();

  if (rodzaj === "") {
    alert("Wybierz rodzaj bukietu.");
    return;
  }

  if (ilosc === "" || parseInt(ilosc) < 1) {
    alert("Wprowadź poprawną ilość bukietów.");
    return;
  }

  if (imie.length < 2) {
    alert("Imię musi mieć co najmniej 2 znaki.");
    return;
  }

  if (nazwisko.length < 2) {
    alert("Nazwisko musi mieć co najmniej 2 znaki.");
    return;
  }

  if (!/^\d{9}$/.test(telefon)) {
    alert("Wprowadź poprawny numer telefonu (9 cyfr).");
    return;
  }

  if (!email.includes("@") || email.length < 5) {
    alert("Wprowadź poprawny adres email.");
    return;
  }

  alert("Zamówienie zostało wysłane!");
});
