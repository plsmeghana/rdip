function getNumber(num) {
    var input = document.getElementById("result");
    switch (num) {
        case 1:
            input.value += 1;
            break;
        case 2:
            input.value += 2;
            break;
        case 3:
            input.value += 3;
            break;
        case 4:
            input.value += 4;
            break;
        case 5:
            input.value += 5;
            break;
        case 6:
            input.value += 6;
            break;
        case 7:
            input.value += 7;
            break;
        case 8:
            input.value += 8;
            break;
        case 9:
            input.value += 9;
            break;
        case 0:
            input.value += 0;
            break;
    }
    return num;
}

function getOperand(operand) {
    var input = document.getElementById("result");
    switch (operand) {
        case '+':
            input.value += '+';
            break;
        case '-':
            input.value += '-';
            break;
        case '/':
            input.value += '/';
            break;
        case '*':
            input.value += '*';
            break;
        case '.':
            input.value += '.';
            break;
            /*case '%':
                input.value += '%';
                break;*/
    }
    return operand;
}

function clear1() {

    document.getElementById("result").value = " ";
}

function sol() {
    var input = document.getElementById("result");
    ans = Math.floor(+eval(input.value));
    document.getElementById("result").value = ans;
    return ans;
}

function calcPer() {
    //input.value += '%';
    var input = document.getElementById("result");
    input.value += '%';
    per = ((a / 100) * b);
    document.getElementById("result").value = per;
}

function calcsqrt() {
    var input = document.getElementById("result");
    ans = Math.sqrt(input.value);
    document.getElementById("result").value = ans;
    return ans;
}

function calcabs() {
    var input = document.getElementById("result");
    ans = Math.abs(input.value);
    document.getElementById("result").value = ans;
    return ans;
}
function validation() {
    var name = document.forms["form"]["name"];
    var l = /^[^0-9][A-Za-z]+$/;
    var patt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var p = /^\d{10}$/;
    if ((document.getElementById('phone').value).match(p)) {
        return true;
    } else {
        alert("enter valid mobile number");
       
    }
    if ((name.value).match(l)) {
        return true;
    } else {
        alert("enter valid name");
    }
    if ((document.getElementById('email').value).match(patt)) {
        return true;
    } else {
        alert("enter valid email");
    }
}
function palindrome() {
    var str = document.getElementById("n").value;
    var s = "";
    for (i = str.length - 1; i >= 0; i--) {
        s = s + str[i];
    }
    if (str == s) {
        document.write(str + " " + " is a palindrome");
        return str + "palindrome";
    } else {
        document.write(str + " " + " is not a palindrome");
        return str + "not palindome";
    }
}
function anagram() {
    var str1 = document.getElementById("m").value;
    var str2 = document.getElementById("s").value;
    if (str1.length !== str2.length) {
        return false;
    }
    var str1Char = str1.split('').sort();
    var str2Char = str2.split('').sort();
    str1Char.forEach(function(_curChar, index) {
        if (str2Char[index] !== _curChar) {
            document.write("not anagram");
            return false;
        }
    })
    document.write("anagram");
    return true;
}
function random() {
    num1 = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("p").value = num1;
    alert(num1);
    num2 = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("r").value = num2;
    alert(num2);
    mod1 = num1 % 10;
    mod2 = num2 % 10;
    alert("mod1 is" + mod1);
    alert("mod2 is" + mod2);
    if (mod1 == '1') {
        object1 = "1";
        alert("object1 is" + object1);
    } else if (mod1 == '2') {
        object1 = "1";
        alert("object1 is" + object1);
    } else if (mod1 == '3') {
        object1 = "1";
        alert("object1 is" + object1);
    } else if (mod1 == '4') {
        object1 = "2";
        alert("object1 is" + object1);
    } else if (mod1 == '5') {
        object1 = "2";
        alert("object1 is" + object1);
    } else if (mod1 == '6') {
        object1 = "2";
        alert("object1 is" + object1);
    } else if (mod1 == '7') {
        object1 = "3";
        alert("object1 is" + object1);
    } else if (mod1 == '8') {
        object1 = "3";
        alert("object1 is" + object1);
    } else if (mod1 == '9') {
        object1 = "3";
        alert("object1 is " + object1);
    } else {
        object1 = "3";
        alert("object1 is " + object1);
    }
    if (mod2 == '1') {
        object2 = "1";
        alert("object2 is " + object2);
    } else if (mod2 == '2') {
        object2 = "1";
        alert("object2 is " + object2);
    } else if (mod2 == '3') {
        object2 = "1";
        alert("object2 is " + object2);
    } else if (mod2 == '4') {
        object2 = "2";
        alert("object2 is " + object2);
    } else if (mod2 == '5') {
        object2 = "2";
        alert("object2 is " + object2);
    } else if (mod2 == '6') {
        object2 = "2";
        alert("object2 is " + object2);
    } else if (mod2 == '7') {
        object2 = "3";
        alert("object2 is " + object2);
    } else if (mod2 == '8') {
        object2 = "3";
        alert("object2 is " + object2);
    } else if (mod2 == '9') {
        object2 = "3";
        alert("object2 is " + object2);
    } else {
        object2 = "3";
        alert("object2 is " + object2);
    }
    switch (object1) {
        case '1':
            object1 = "human";
            alert("human");
            break;
        case '2':
            object1 = "cockroch";
            alert("cockroch");
            break;
        case '3':
            object1 = "nuclear bomb";
            alert("nuclear bomb");
            break;
    }
    switch (object2) {
        case '1':
            object2 = "human";
            alert("human");
            break;
        case '2':
            object2 = "cockroch";
            alert("cockroch");
            break;
        case '3':
            object2 = "nuclear bomb";
            alert("nuclear bomb");
            break;
    }
    if (object1 == "human" && object2 == "cockroch") {
        document.write("human survives");
        return "human survives";
    } else if (object1 == "cockroch" && object2 == "human") {
        document.write("human survives");
        return "human survives";
    } else if (object1 == "cockroch" && object2 == "nuclear bomb") {
        document.write("cockroch survives");
        return "cockroch survives";
    } else if (object1 == "nuclearbomb" && object2 == "cockroch") {
        document.write("cockroch survives");
        return "cockroch survives";
    } else if (object1 == "human" && object2 == "nuclear bomb") {
        document.write("human dies");
        return "human dies";
    } else if (object1 == "nuclear bomb" && object2 == "human") {
        document.write("human dies");
        return "human dies";
    } else {
        document.write("tie");
        return "tie";
    }
} 