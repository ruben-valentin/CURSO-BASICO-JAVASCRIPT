import { setDataValue } from "./setDataValue.js";


export function validateInputLength(inputElement, minimumLength = 6){

    let inputLength = inputElement?.value.trim().length ?? 0;
    let inputName = inputElement.dataset.text;
    let parentLabel = inputElement.closest(".form__label");

    if(inputLength >= minimumLength){

        setDataValue(parentLabel, "message");
        setDataValue(parentLabel, "status", "success");
        return true;
       
    }else{
        let messageUser = `El ${inputName} necesita mínimo ${minimumLength} carácteres para ser validado.`;

        setDataValue(parentLabel, "message", messageUser);
        setDataValue(parentLabel, "status", "error");

        return false;
    }

}