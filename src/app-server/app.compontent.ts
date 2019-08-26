import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	serverElements = [{type: 'server', name: 'Test', content: 'Just a test!'}];

	onServerAdded(serverData: {serverName: string, serverContent: string}) {
		this.serverElements.push({
			name: serverData.serverName,
			content: serverData.serverContent,
			type: 'server'
		})
	}

	onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
		this.serverElements.push({
			name: serverData.serverName,
			content: serverData.serverContent,
			type: 'blueprint'
		})
	}
	
}
