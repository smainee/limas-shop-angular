import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '@services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  public crudForm!: FormGroup;
  constructor(private fb: FormBuilder, private crudServices: CrudService ) {}
  
  ngOnInit(): void {
    this.crudForm = this.fb.group({
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
      address: ["", [Validators.required]],
    })
  }

  public createRecord(){
    if(this.crudForm.valid){
      this.crudServices.createUser(this.crudForm.value)
    }

  }

}
