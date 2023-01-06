import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-olvido-password',
  templateUrl: './olvido-password.page.html',
  styleUrls: ['./olvido-password.page.scss'],
})
export class OlvidoPasswordPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async mensaje() {
    const alert = await this.alertController.create({
      header: 'Si los datos coinciden recibirás tu correo',
      buttons: ['Ok!'],
    });

    await alert.present();
  }

}
