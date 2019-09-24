import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm : FormGroup;

  message: string;
  error: boolean;

  image: any;
  defaultPhotoUrl: string = ""
  fileIsUploading: boolean = false;
  fileUploaded: boolean = false;
  fileURL: string;
  oldPhotoURL: string = null;
  

  constructor(private camera: Camera, private fileChooser: FileChooser, private router: Router,
    public formBuilder: FormBuilder, private authService: AuthService,
    private toastService: ToastService) { }

    ngOnInit() {
      this.initForm();
    }
  
    initForm(){
      this.registerForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      });
    }

    onRegister(formValue){
      this.authService.register(formValue.email, formValue.password)
        .then( data => {
          this.error = false; 
          console.log(data); 
          this.addNewProfile(formValue.name, formValue.email);
          //this.router.navigate(['']);
          //this.toastService.showMessage("Bienvenue dans Douala Event !");
        })
        .catch( error => {
          this.error = true;
           this.message = error.message;
        })
    }

    addNewProfile(name: string, email: string){
      console.log("Enregistrement d un nouveau profile");
      this.authService.addNewProfile(name, email)
      .then( res => this.authService.loadProfile())
      .catch( error => {this.error = true; this.message = error.message; });
    }

    openCam(){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options)
      .then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
       //alert(imageData)
       this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
      }, 
      (err) => {
       // Handle error
       alert("error "+JSON.stringify(err))
      });
    }

    openFileChooser(){
      this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e));
    }
}

