import { Component, OnInit } from '@angular/core';

declare var FirebasePlugin;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(FirebasePlugin);
    console.log((window as any).FirebasePlugin);
  }

  changeSubscription(event: CustomEvent, subject: string) {
    if (event.detail && event.detail.checked) {
      this.subscribe(subject);
    } else {
      this.unsubscribe(subject);
    }
  }

  public subscribe(subject: string) {
    console.log('subscribe to subject : ' + subject);
    FirebasePlugin.subscribe(subject);
  }

  public unsubscribe(subject: string) {
    console.log('unsubscribe of subject : ' + subject);
    FirebasePlugin.unsubscribe(subject);
  }

}
