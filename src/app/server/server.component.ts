import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[`
    .online{
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serveStatus: string =  'offline';

  constructor(){
    this.serveStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serveStatus;
  }

  getColor(){
    return this.serveStatus === 'online' ? 'green' : 'red';
  }


}

