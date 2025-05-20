function walidacja() { //funkcja sprawdzająca poprawność formularza
    // pobierania elementów po ID 1
    let roza = document.getElementById('roza');
    let lilak = document.getElementById('lilak');
    let chryzantema = document.getElementById('chryzantema');
    let iloscRoza = document.getElementById('ilosc-roza');
    let iloscLilak = document.getElementById('ilosc-lilak');
    let iloscChryzantema = document.getElementById('ilosc-chryzantema');
    let imie = document.getElementById('imie');
    let nazwisko = document.getElementById('nazwisko');
    let telefon = document.getElementById('telefon');
    let email = document.getElementById('email');
    
    // resetowania błedów
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    let isValid = true;
    
    // walidacja bukietów
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
    
    // walidacja danych osobistych
    if (!imie.value.trim()) {
        document.getElementById('error-imie').textContent = 'Podaj imię';
        isValid = false;
    }
    
    if (!nazwisko.value.trim()) {
        document.getElementById('error-nazwisko').textContent = 'Podaj nazwisko';
        isValid = false;
    }
    
    if (!telefon.value.trim()) {
        document.getElementById('error-telefon').textContent = 'Podaj numer telefonu';
        isValid = false;
    } else if (!/^[0-9]{9,}$/.test(telefon.value)) {
        document.getElementById('error-telefon').textContent = 'Nieprawidłowy numer telefonu';
        isValid = false;
    }
    
    if (!email.value.trim()) {
        document.getElementById('error-email').textContent = 'Podaj email';
        isValid = false;
    } else if (!email.value.includes('@')) {
        document.getElementById('error-email').textContent = 'Nieprawidłowy email';
        isValid = false;
    }
    
    if (isValid) {
        alert('Zamówienie zostało złozone;) Dzięki*v*');
        document.getElementById('zamowienie').reset();
    }
}

//aktywuje pola ilości tylko jezeli bukiet został zaznaczony
document.querySelectorAll('input[name="bukiet"]').forEach(checkbox => { 
    checkbox.addEventListener('change', function() { 
        let iloscId = 'ilosc-' + this.id; // tworzymy ID pola ilości
        let iloscInput = document.getElementById(iloscId);
        iloscInput.disabled = !this.checked; //aktywacja pola
        if (!this.checked) iloscInput.value = '1'; //reset wartosz do 1
    });
});
