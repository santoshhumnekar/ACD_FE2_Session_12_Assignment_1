import { Component } from '@angular/core';
import { KeyFilterPipe } from './key-filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public listData = [
    {name: 'Ralph', age : '21' , type:'private'},
    {name: 'Daniel',  age : '22' , type:'private'},
    {name: 'Karl',  age : '18' , type:'public'},
    {name: 'Kenny',  age : '34' , type:'private'},
    {name: 'Teressa',  age : '26' , type:'public'},
    {name: 'Lilly',  age : '22' , type:'private'}
  ];

}
