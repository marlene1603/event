import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {
    addEventForm;

  constructor(private route : ActivatedRoute,private router: Router, public formBuilder: FormBuilder) { 
    this.addEventForm= this.formBuilder.group({
      title: ['', Validators.required],
      lieu: ['', Validators.required],
      categorie:['', Validators.required],
      date:[''],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {

  }
  addEvent(event: Event){
    this.addEventForm.addEvent(event).then(ref =>{
      console.log(ref.key);
    })  
  }
  
}
