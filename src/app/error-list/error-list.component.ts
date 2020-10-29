import {Component, Input, OnInit} from '@angular/core';
import { Error} from '../models/error.model';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.scss']
})
export class ErrorListComponent implements OnInit {

  @Input() errorMapTranslated: Error[] = [];
  // Error list must just render data not ask for service
  errorList: Error [];
  constructor() { }

  ngOnInit(): void {
    this.errorList = this.errorMapTranslated.map((err: Error) => new Error(err[0], err[1]));
  }


}
