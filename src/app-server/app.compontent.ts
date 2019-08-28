import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	serverElements = [{type: 'server', name: 'Test', content: 'Just a test!'}];
	value: number = 10;

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

	onChangeFirstElement() {
		this.serverElements[0].name = 'Changed!';
	}

	onDestroyFirstElement() {
		this.serverElements.splice(0, 1);
	}
	
}
