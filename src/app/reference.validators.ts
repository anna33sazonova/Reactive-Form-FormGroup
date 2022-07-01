import { AbstractControl, ValidationErrors } from '@angular/forms';

export function referenceValidator(control: AbstractControl): ValidationErrors | null {
    const referenceRegex = RegExp('^[0-9]#[0-9A-Z]+$');
    const valid = referenceRegex.test(control.value);


    const errors = {
        validation: { 
            rules: "Le format de la reference n'est pas correcte"
        }
    };
return !valid?errors: null;
}