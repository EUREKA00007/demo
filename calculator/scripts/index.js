window.onload = function(){
    var c = document.getElementsByClassName('button-clear');
    var text = document.getElementsByClassName('console');
    var buttonNum = document.getElementsByClassName('button-num');
    var buttonCalculator = document.getElementsByClassName('button-calculator');
    var num1 = '', num2 = '', num1Flag = true, num2Flag = true, resultNum = 0, operator = '';

    c[0].onclick = function(){
        num1 = '';
        num2 = '';
        num1Flag = true;
        num2Flag = true;
        resultNum = 0;
        operator = '';
        text[0].innerText = "0";
    }
   
    for(var i = 0;i < buttonNum.length;i++){
        (function(i){
            buttonNum[i].onclick = function(){
                if(operator === "" && num1Flag){
                    if(buttonNum[i].innerText !== '.'){
                        num1 += buttonNum[i].innerText;
                        console.log('分支1：'+ num1)
                        text[0].innerText = parseFloat(num1);
                    } else if(text[0].innerText === '0'){
                        num1 += '0' + buttonNum[i].innerText;
                        console.log('分支2：'+num1)
                        text[0].innerText = parseFloat(num1);
                    } else{
                        num1 += buttonNum[i].innerText;
                        text[0].innerText = parseFloat(num1);
                        console.log('分支3：'+ num1)
                    }
                }
                if(operator !== "" && num2Flag){
                    text[0].innerText = '';
                    num2 += buttonNum[i].innerText;
                    text[0].innerText = parseFloat(num2);
                }
                // }else if(text[0].innerText != '/'){
                //     text[0].innerText += buttonNum[i].innerText;
                //     num1 = parseInt(text[0].innerText);
                // }
                // if(text[0].innerText == '/'){
                //     text[0].innerText = buttonNum[i].innerText;
                //     num2 = parseInt(text[0].innerText); 
                // }  
            }
        })(i);
    }
    
    for(var i = 0;i < buttonCalculator.length;i++){
        (function(i){
            buttonCalculator[i].onclick = function(){
                if(buttonCalculator[i].innerText !== "="){
                    num1Flag = false;
                    text[0].innerText = buttonCalculator[i].innerText;
                    operator =  buttonCalculator[i].innerText;                
                }
                if(buttonCalculator[i].innerText === "="){
                    // text[0].innerText = num1/num2;
                    switch(operator){
                        case '/':{
                            resultNum = num1 / num2;
                            text[0].innerHTML = resultNum;
                            num1 = resultNum;
                            num2 = '';
                            operator = '';
                        }
                        break;
                        case '*':{
                            resultNum = num1 * num2;
                            text[0].innerHTML = resultNum;
                            num1 = resultNum;
                            num2 = '';
                            operator = '';
                        }
                        break;
                        case '-':{
                            resultNum = num1 - num2;
                            text[0].innerHTML = resultNum;
                            num1 = resultNum;
                            num2 = '';
                            operator = '';
                        }
                        break;
                        case '+':{
                            resultNum = num1 + num2;
                            text[0].innerHTML = resultNum;
                            num1 = resultNum;
                            num2 = '';
                            operator = '';
                        }
                        break;
                    }
                }
                                    
            }
        })(i);
    }
}
