import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  category: string = "all";
  searchValue: string = ""

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  // Gestion des evenements
  onCategoryChange(){
    console.log(this.category);
  }

  onSearch(){
    console.log(this.searchValue);
  }

}
