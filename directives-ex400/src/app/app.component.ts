import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedAnimal = 'cat';
  animals=['cat','dog','zebra','giraffe'];
  onAnimalClicked(event:Event) {
    const clickedAnimal = event.srcElement.innerHTML.trim();
    this.selectedAnimal = clickedAnimal;
  }
  

}
