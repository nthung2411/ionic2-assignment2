import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taps: number = 0;
  presses: number = 0;
  constructor(public navCtrl: NavController) {

  }

  onTapped(){
    this.taps++;
  }

  onPressed(){
    this.presses++;
  }

  onDidReset(resetType: string){
    console.log(resetType);
    switch(resetType){
      case 'tap':
        this.taps = 0;
        break;
      case 'press':
        this.presses=0;
        break;
      default:
        this.taps = 0;
        this.presses =0;
    }
  }

  didWin(){
    return this.taps === 2 && this.presses === 4;
  }
}
