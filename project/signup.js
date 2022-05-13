const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document);

let UserObject = {
    Email: String,
    Password: String
};

let SubmitUserDetails = () => {
    try {

        let EmptyArray = [];
        let Email = $('.Email').value;
        let Password = $('.Password').value;

        UserObject.Email = Email;
        UserObject.Password = Password;

        let GetData = JSON.parse(localStorage.getItem('user-object'));
        if (GetData === null){

            EmptyArray.push(UserObject);
            localStorage.setItem('user-object', JSON.stringify(EmptyArray));

        }else{

            EmptyArray.push(UserObject);

            let Data = GetData.forEach((Object) => {

                console.log(Object);
                EmptyArray.push(Object);

            });

            localStorage.setItem('user-object', JSON.stringify(EmptyArray));
        }

        window.open('index.html', "_self");


    } catch (error) {
        console.log(error);
    }
}