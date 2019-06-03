import { Component, OnInit } from '@angular/core';
import {UNICORNS} from '../list-unicorns';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.css']
})
export class UnicornsComponent implements OnInit {
  sUnicorn;
  unicorns = UNICORNS;

  constructor() { }

  selectedUnicorn(unicorn):void{

      this.sUnicorn = unicorn;
      console.log(" selected Unicorn ", unicorn.name);


  }

  ngOnInit() {
  }

}
