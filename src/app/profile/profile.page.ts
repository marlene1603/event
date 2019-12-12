import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileForm;

  constructor(private route : ActivatedRoute,private router: Router, public formBuilder: FormBuilder) { 
    this.profileForm= this.formBuilder.group({
      name: '',
      lastmane: '',
      email:'',
    });
  }
  ngOnInit() {
    
}

}
