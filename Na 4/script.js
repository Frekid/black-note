function walidacja() { //funkcja sprawdzająca poprawność formularza
    // pobierania elementów po ID
    const roza = document.getElementById('roza');
    const lilak = document.getElementById('lilak');
    const chryzantema = document.getElementById('chryzantema');
    const iloscRoza = document.getElementById('ilosc-roza');
    const iloscLilak = document.getElementById('ilosc-lilak');
    const iloscChryzantema = document.getElementById('ilosc-chryzantema');
    const imie = document.getElementById('imie');
    const nazwisko = document.getElementById('nazwisko');
    const telefon = document.getElementById('telefon');
    const email = document.getElementById('email');
    // resetowania błedów
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    let isValid = true;

    // sprawdzenie czy wybrano przynajmniej jeden bukiet
    if (!roza.checked && !lilak.checked && !chryzantema.checked) {
        document.getElementById('error-bukiet').textContent = 'Wybierz przynajmniej jeden bukiet';
        isValid = false;
    } else {
        if (roza.checked && iloscRoza.value < 1) {
            document.getElementById('error-bukiet').textContent = 'Podaj ilość róż';
            isValid = false;
        }
        if (lilak.checked && iloscLilak.value < 1) {
            document.getElementById('error-bukiet').textContent = 'Podaj ilość lilaków';
            isValid = false;
        }
        if (chryzantema.checked && iloscChryzantema.value < 1) {
            document.getElementById('error-bukiet').textContent = 'Podaj ilość chryzantem';
            isValid = false;
        }
    }
    // walidacja nie moze być pusta

    if (!imie.value.trim()) {
        document.getElementById('error-imie').textContent = 'Podaj imię';
        isValid = false;
    }
    if (!nazwisko.value.trim()) {
        document.getElementById('error-nazwisko').textContent = 'Podaj nazwisko';
        isValid = false;
    }
    if (!telefon.value.trim()) {
        document.getElementById('error-telefon').textContent = 'Podaj telefon';
        isValid = false;

        // walidacja telefona tylko cyfry min 9 znaków
    } else if (!/^[0-9]{9,}$/.test(telefon.value)) {
        document.getElementById('error-telefon').textContent = 'Nieprawidłowy numer';
        isValid = false;
    }
        // walidacja e-maila muszi miec '@'
    if (!email.value.trim() || !email.value.includes('@')) {
        document.getElementById('error-email').textContent = 'Podaj poprawny email';
        isValid = false;
    }

    obliczSume(); // pokaza sume przed alertem
    //jeszli wsztystko dobrze to reset formularza i komunikat
    if (isValid) {
        alert('Zamówienie złożone! Dziękujemy :)');
        document.getElementById('zamowienie').reset();
        document.getElementById('suma').textContent = '0zł';
    }
}
// funkcja do obliczania calkowitej kwoty 
function obliczSume() {
    let suma = 0;
    //jeszli zaznaczone  dodaje ceny bukietów 
    if (document.getElementById('roza').checked)
        suma += 30.99 * parseInt(document.getElementById('ilosc-roza').value);
    if (document.getElementById('lilak').checked)
        suma += 49.99 * parseInt(document.getElementById('ilosc-lilak').value);
    if (document.getElementById('chryzantema').checked)
        suma += 59.99 * parseInt(document.getElementById('ilosc-chryzantema').value);
    //dodawanie cen uslug dodatkowych
    if (document.getElementById('dostawa').checked) suma += 15;
    if (document.getElementById('dekoracja').checked) suma += 20;
    if (document.getElementById('karteczka').checked) suma += 5;

    document.getElementById('suma').textContent = suma.toFixed(2) + 'zł';
}
//aktywuje pola ilości tylko jezeli bukiet został zaznaczony
document.querySelectorAll('input[name="bukiet"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () { 
        let iloscId = 'ilosc-' + this.id; // tworzymy ID pola ilości
        let iloscInput = document.getElementById(iloscId);
        iloscInput.disabled = !this.checked; //aktywacja pola
        if (!this.checked) iloscInput.value = 1; //reset wartosz do 1
    });
});
