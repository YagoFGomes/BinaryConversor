function Calc(){
    const binaryInput = window.document.getElementById('binaryInput').value
    
    if (binaryInput === '') {
       alert('Please, enter a binary number')  
    } else {
        binaryInput.split("").map((char) => {
            if(char != 0 && char != 1) {
                alert('Please, enter a binary number')
            } 
        })
    }
   
        const decimal = parseInt(binaryInput, 2)
        document.getElementById('decimal-output').value = decimal
       
}