import { Component, OnInit } from '@angular/core';
import {ErrorServiceService} from '../services/error-service.service';
import {Error} from '../models/error.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  errorMapTranslated: Error[] = [];

  constructor(private errService: ErrorServiceService) { }

  ngOnInit(): void {
    this.errService.getErrorList().subscribe(errorList => {
      this.errService.getErrorNames().subscribe(names => {
        this.errorMapTranslated = errorList.map(errorTypeList => {
          const errorTag = errorTypeList[0];
          const errorName = names.find(x => x[0] === errorTag)[1];
          return [errorName, errorTypeList[1]];
        });
      });
    });
  }
}
