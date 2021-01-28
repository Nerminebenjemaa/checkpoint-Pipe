import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {
  name ="nermine ben jemaa"
  myDate= Date.now(); 
  defaultImage: string = "assets/img.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
