


let delItem = () => {
    try {
        let inpNum = document.getElementById("inp").value; 
        let NewArray = Array.from(inpNum);
        NewArray.pop();
        let Data = NewArray.join('');
        calculator.answer.value = Data;
    } catch (error) {
        console.log(error.message);
    }
}


