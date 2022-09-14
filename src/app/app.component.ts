import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Work-shop practical';

  totalCount:number = 1;

  setTotalCount(totalCount: number) {
      this.totalCount = totalCount;
  }
}
