import { setDataValue } from "./setDataValue.js";

export function validateEmail(inputEmail){
    const regex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let emailText = inputEmail.value.toLowerCase();
    let parentLabel = inputEmail.closest(".form__label");

    if( regex.test(emailText) ){

        setDataValue(parentLabel, "message");
        setDataValue(parentLabel, "status", "success");

        return true;
    }else{

        let messageUser = "El correo ingresado NO ES VALIDO";

        setDataValue(parentLabel, "message", messageUser);
        setDataValue(parentLabel, "status", "error");

        return false;
    }

}