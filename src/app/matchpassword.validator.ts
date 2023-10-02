import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const matchpassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let signUpPassword = control.get('signUpPassword');
  let repeatedPassword = control.get('repeatedPassword');
  if (
    signUpPassword &&
    repeatedPassword &&
    signUpPassword?.value != repeatedPassword?.value
  ) {
    return {
      passwordMatchError: true,
    };
  }

  return null;
};
