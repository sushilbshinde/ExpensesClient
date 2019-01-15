import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Type } from '../Interfaces/Type';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {

  form:FormGroup;
  id:number;
  constructor(private fb:FormBuilder,
              private dialogRef: MatDialogRef<UpdateEntryComponent>,
              @Inject(MAT_DIALOG_DATA) {Description, IsExpense, Value, Id}) { 
                this.id = Id;
                
                this.form = fb.group({
                  description: [Description, Validators.required],
                  isExpense: [IsExpense, Validators.required],
                  value: [Value, Validators.required],
                });
  }

  types: Type[] = [
    {value:true, display: 'Expense'},
    {value:false, display: 'Income'},
  ]

  close(){
    console.log("close clicked");
  }

  save() {
    console.log("save clicked");
  }

  ngOnInit() {
  }

}
