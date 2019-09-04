import { Component } from '@angular/core';

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

}
