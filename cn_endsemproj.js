inp = prompt("What is your reg No:")


var some = [123004278,
    123,
    124004056,
    124004124,
    124160035,
    124004185,
    124004269];

var a = 0;
check_me(inp, some);

function check_me(inp, some) {


    for (let i = 0; i < some.length; i++) {
        if (inp == some[i]) {
            alert("YES,you are my classmate.You can continue")
            a = 1;
        }

    }


}


while (a == 0) {
    wrong();
}

function wrong() {
    if (a != 1) {
        alert("Wrong numbe!!So you may be not from Amirtharajan's class or you are not ruthvik's class mate..")

        inp1 = prompt("Please enter correct number:")
        check_me(inp1, some);
    }


}


