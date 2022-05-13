let loginUser = () =>{
    try {
        
        let Email = document.querySelector(".Email").value;
        let Password = document.querySelector(".Password").value;

        let  UserData = localStorage.getItem('user-object');
        let ParsedData = JSON.parse(UserData);

        console.log(Password)
        ParsedData.forEach(Objects =>{
            console.log(Objects)
            if(Objects.Email === Email && Objects.Password  === Password){

                console.log(Email, Password)
                window.open('index.html', "_self");
                return
            }
            if(Objects.Email !== Email && Objects.Password !== Password){
                // console.log(Email);
                console.log(' Not a Member! please sign Up first')
                return
            } 
        })
    } catch (error) {
        console.log(error.message)
    }
}

