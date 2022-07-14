import { Component, OnInit } from '@angular/core';
import { Colors, listItem } from 'src/app/models/interface';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public list: listItem[] = [{ name: 'jonh', surname: 'snow', color: 'red' }];

  public colors = Colors;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.list.push(result);
      }
    });
  }

  deleteItem(i: number) {
    this.list.splice(i, 1);
  }

  count(color): number {
    return this.list.filter((it) => it.color === color).length;
  }
}
