let passwordLength = document.getElementById('passwordLength');
let password = document.getElementById('password');
let savePassword = document.getElementById('savePassword');
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphaberUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "124567890";
const symbol = "`~!@#$%^&*()_-+={}[]|:;'<>,.?/"
let data = alphaberUpper + alphabetLower + number + symbol;


function generatePassword(len) {
    let generate = "";
    for (let i = 0; i < len; i++) {
        generate += data[Math.floor(Math.random() * data.length)];
    }

    return generate;
}

function getPassword() {
    const passNew = generatePassword(passwordLength.value);
    password.value = passNew;
    alert("Password has been Generated");
}

function savePass() {
    savePassword.setAttribute('href','data:text/plain;charset-utf-8,' + encodeURIComponent(`Password: ${password.value}`))
    savePassword.setAttribute('download', 'myPasswordGenerated.txt')
    alert("berhasil disimpan")
}
