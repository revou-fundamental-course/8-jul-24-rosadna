// Ini javascript
document.addEventListener('DOMContentLoaded', () => {
console.log()
const bmiForm = document.getElementById('bmiForm')
const resultSection = document.getElementById('result')
const tinggiBadan = document.getElementById('input-tinggi-badan');
const usia = document.getElementById('input-usia');
const beratBadan = document.getElementById('input-berat-badan');
const hasilBmi = document.querySelector('.hasil-bmi');
const kategoriBmi = document.querySelector('.kategori-bmi');

// Hasil BMI
function klasifikasiBmi(bmi) {
    if(bmi < 18.5) {
        return "Kekurangan Berat Badan" ;
    } else if (bmi >= 18 && bmi <=24.9) {
        return "Normal (Ideal)";
    } else if (bmi >= 25 && bmi <=29.9) {
        return "Kelebihan Berat Badan";
    } else if (bmi > 30) {
        return "Kegemukan (Obesitas)"
    }
}

// Perhitungan BMI
function hitungBmi(event) {
    event.preventDefault();
    const tbad = parseFloat(tinggiBadan.value) / 100;
    const bbad = parseFloat(beratBadan.value);
    const bmi = bbad / (tbad * tbad);
    const usi = parseFloat(usia.value);
    let kategori = '';
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked')

    if (isNaN(tbad) || isNaN(bbad) || isNaN(usi) || tbad > 3 || bbad > 200 || jenisKelamin) {
        alert('Pastikan semua terisi dengan benar');
        return;
    } 
     
    hasilBmi.textContent = bmi.toFixed(1);
    kategoriBmi.textContent = `${klasifikasiBmi(parseFloat(bmi))}`;
}

// Reset Button
function resetForm() {
    document.getElementById('bmi-form').reset();
    hasilBmi.textContent = '0.0';
    kategoriBmi.textContent = '';
    dataUserElement.textContent = '';
    jenisKelaminOutputElement.textContent = '';
}

// Event Sumbit dan Reset
document.getElementById('bmi-form').addEventListener('submit', hitungBmi);
document.getElementById('reset-button').addEventListener('click', resetForm);
});