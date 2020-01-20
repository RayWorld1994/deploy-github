import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    return throwError(`An error occurred: ${error.error.message}`);
  } else {
    return throwError(error.error.error);
  }
}
