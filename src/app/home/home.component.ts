import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = ' tien';
  public number: number = 0;

  constructor(private common: CommonService) {
    this.number = common.number;
  }

  ngOnInit(): void {}

  increaseNumber() {
    this.common.number++;
    this.number = this.common.number;
    if (this.number % 2 === 0) {
      this.name = 'tien';
    } else {
      this.name = 'tien2';
    }
  }
}
