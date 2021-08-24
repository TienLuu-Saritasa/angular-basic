import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public number: number;
  constructor(private common: CommonService) { 
    this.number = common.number;
  }

  ngOnInit(): void {
  }
  increaseNumber() {
    this.common.number++;
    this.number = this.common.number;
  }
}
