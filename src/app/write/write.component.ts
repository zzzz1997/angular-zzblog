import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./../../../node_modules/quill/dist/quill.snow.css', './write.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
