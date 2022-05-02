import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})

export class FullLayoutComponent implements OnInit {
  scrollTopBtnShow: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  scrollToTop(): void {
    document.querySelector('.page').scrollTop = 0;
  }

  onHandleScroll() : void {
    this.scrollTopBtnShow = document.querySelector('.page').scrollTop > 200
  }
}
