import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Colors, listItem } from 'src/app/models/interface';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent implements OnInit {
  public colors = Colors;

  public formGroup: FormGroup;
  private item: listItem;

  constructor(private matDialogRef: MatDialogRef<PopUpComponent>) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required, ,]),
      surname: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
    });
  }

  public reset() {
    this.matDialogRef.close();
  }

  public add() {
    console.log(this.formGroup.get('name').value);
    this.item = {
      name: this.formGroup.get('name').value,
      surname: this.formGroup.get('surname').value,
      color: this.formGroup.get('color').value,
    };
    this.matDialogRef.close(this.item);
  }
}
