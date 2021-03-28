import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Dashboard';
  checkValue: Boolean = true;
  RiskRoles = [
    {
      Id:1,
      Name:'Low',
      Checked:true
    },
    {
      Id:2,
      Name:'Medium',
      Checked:false
    },
    {
      Id:3,
      Name:'High',
      Checked:false
    }
  ];

  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;

  getSelecteditem(){
    this.radioSel = this.RiskRoles.find(Item => Item.Name === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }

  constructor() {
    this.radioSelected = "Low";
    this.getSelecteditem();
   }

  onItemChange(item){
    this.getSelecteditem();
  }
 
}
