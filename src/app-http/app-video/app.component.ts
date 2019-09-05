import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  servers = [
    {
      name: 'TestServer',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'LiveServer',
      capacity: 100,
      id: this.generateId()
    }
  ];
  appName = this.serverService.getAppName();

  constructor(private serverService: ServerService) {

  }

  generateId() {
    return Math.round(Math.random() * 1000);
  }

  onAddServer(name: string) {
    this.servers.push({
      name,
      capacity: 10,
      id: this.generateId()
    });
  }

  onSaveServer() {
    this.serverService.storeServers(this.servers)
      .subscribe(
          (response) => {console.log(response);},
          (err) => {console.error(err);}
        );
  }

  onGetServer() {
    this.serverService.getServers()
    .subscribe(
        (servers: any[]) => { this.servers = servers; },
        (err) => { console.error(err); }
      );
  }

}
