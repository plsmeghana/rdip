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