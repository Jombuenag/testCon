import { Injectable } from '@angular/core';
import {interval, Observable, of} from 'rxjs';
import { Error } from '../models/error.model';
import {map, switchAll, take} from 'rxjs/operators';


const ERROR_FILES: Array<[error: string, files: string[]]> = [
  ['NOT_FOUND', ['file_1.jpg', 'file_2', 'file_3']],
  ['EXISTS', ['file_4', 'file_5']],
];

const ERROR_NAMES: Array<[name: string, description: string]> = [
  ['NOT_FOUND', 'File not found'],
  ['EXISTS', 'File exists'],
  ['DUPLICATE', 'Duplicate file'],
];

const ERROR_NAMES$ = of(ERROR_NAMES);
const ERROR_FILES$ = of(ERROR_FILES);

@Injectable({
  providedIn: 'root'
})

export class ErrorServiceService {
  combined: any [];
  constructor() { }

  getErrorNames(): Observable<any> {
    return ERROR_NAMES$;
  }

  getErrorList(): Observable<any> {
    return ERROR_FILES$;
  }

}
