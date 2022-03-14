var firstNum, secNum, select, result;
var operation;

function case1(){
    select = 1
    setNumber();
}

function case2(){
    select = 2
    setNumber();
}

function case3(){
    select = 3
    setNumber();
}

function case4(){
    select = 4
    setNumber();
}

function case5(){
    select = 5
    setNumber();
}

function case6(){
    select = 6
    setNumber();
}

function case7(){
    select = 7
    setNumber();
}

function case8(){
    select = 8
    setNumber();
}

function case9(){
    select = 9
    setNumber();
}

function case0(){
    select = 0
    setNumber();
}

function casePlus(){
    operation = 0
}

function caseLess(){
    operation = 1
}

function caseDiv(){
    operation = 2
}

function caseTimes(){
    operation = 3
}

function casePwr(){
    operation = 4
}

function setNumber(){
    if(firstNum == null)
    {
        firstNum = select;
    }
    else if(secNum == null)
    {
        secNum = select;
    }
    else
    {
        reset();
    }
}

function calculate(){
    if(firstNum == null || secNum == null || operation == null)
    {
        alert("Enter all values before calculating.");
        reset();
    }
    else if(operation == 0)
    {
        plus();
    }
    else if(operation == 1)
    {
        less();
    }
    else if(operation == 2)
    {
        div();
    }
    else if(operation == 3)
    {
        times();
    }
    else
    {
        power();
    }
}

function plus(){
    result = firstNum + secNum;
    document.getElementById("content").innerHTML = result;
}

function less(){
    result = firstNum - secNum;
    document.getElementById("content").innerHTML = result;
}

function div(){
    result = firstNum / secNum;
    result = result.toFixed(7);
    document.getElementById("content").innerHTML = result;
}

function times(){
    result = firstNum * secNum;
    document.getElementById("content").innerHTML = result;
}

function power(){
    result = Math.pow(firstNum, secNum);
    document.getElementById("content").innerHTML = result;
}

function reset(){
    firstNum = null
    secNum = null
    operation = null
    document.getElementById("content").innerHTML = "RESET"
    setTimeout(() => {  document.getElementById("content").innerHTML = "000"; }, 1000);
}