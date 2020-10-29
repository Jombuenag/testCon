import { Component, OnInit } from '@angular/core';
import { Error } from '../models/error.model';

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.scss']
})
export class ErrorListComponent implements OnInit {

  errorList: Error[] = [
    new Error('File not found', ['file.jpg', 'file_2.jpg', 'file_large.jpg']),
    new Error('File exists', [
      'file3.jpg',
      'file_test.jpg',
      'file_large.jpg',
      'file_.jpg',
    ])
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
