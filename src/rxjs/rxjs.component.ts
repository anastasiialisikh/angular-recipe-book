import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const subject = new Subject();
   
    subject
      .subscribe(
      v => console.log(v)
    );

    subject.next(1);
    subject.next(2);

  }

}
