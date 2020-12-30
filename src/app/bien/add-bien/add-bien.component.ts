import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-bien',
  templateUrl: './add-bien.component.html',
  styleUrls: ['./add-bien.component.scss']
})
export class AddBienComponent implements OnInit {
bienForm : FormGroup | any;
options = ["location","vente"];
  constructor() { }

  ngOnInit(): void {
    // creaating du form >
    this.bienForm = new FormGroup(
      {
        'title': new FormControl('sama titre',
          [Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ]),
        'price': new FormControl(null,[Validators.required,Validators.min(100)]),
        'description': new FormControl(null,Validators.required),
        'category': new FormControl(null,Validators.required),
        'image': new FormControl(null,Validators.required),
        'sale': new FormControl('vente',Validators.required),
        'imageSec': new FormControl([])
      }
    );
  }

  onAddSecondaryImage(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.bienForm.get('imageSec')).push(control);
  }
  onSubmit() {
    console.log(this.bienForm);
  }
}
