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

  onResetTaps(){
    this.taps = 0;
  }

  onResetPresses(){
    this.presses=0;
  }
  
  onResetAll(){
    this.onResetPresses();
    this.onResetTaps();
  }
}
