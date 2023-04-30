function generatePassword() {
    var length = document.getElementById("length").value;
    var numSpecial = document.getElementById("numSpecial").value;

    if (length > 15) {
        alert("Error: Password length cannot be greater than 15!");
        return;
    }

    if (numSpecial > length) {
        alert("Error: Number of special symbols cannot be greater than password length!");
        return;
    }

    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var specials = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var charCount = 0;
    var specialCount = 0;


    for (var i = 0; i < length; i++) {
        if (specialCount < numSpecial && Math.random() < 0.5) {
            result += specials.charAt(Math.floor(Math.random() * specials.length));
            specialCount++;
        } else {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            charCount++;
        }
    }
    document.getElementById("password").value = result;
}