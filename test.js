let bar = 100;

setInterval(main, 5000);

function main(){
    console.log("iyak")
    bar -= 1
    console.log(bar)
}

function operateBar(currentBar,op,num){
    switch(op){
        case "add":
            currentBar += num
            break;
        case "sub":
            currentBar -= num
            break;
    }
    return currentBar;
}

bar = operateBar(bar,"add",100)