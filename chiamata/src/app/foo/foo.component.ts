import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foo',
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css'
})
export class FooComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  data!: Object;
  loading!: boolean;
  o! :Observable<Object>;
}
