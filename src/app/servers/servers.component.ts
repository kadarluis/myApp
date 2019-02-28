import { Component, OnInit } from '@angular/core';
import { b } from '@angular/core/src/render3';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was creator';
  serverName = 'Testserver';
  serverCreated = false;

  constructor() {
    setTimeout(()=>{this.allowNewServer=true;}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer()  {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
  }
}
