import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	@Output()blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

	//newServerName = '';
	//newServerContent = '';
	@ViewChild('serverContentInput') serverContent: ElementRef;
  constructor() { }

  ngOnInit() {
  }

	onAddServer(serverName: HTMLInputElement) {
		console.log(this.serverContent);
		
		console.log('server');
		this.serverCreated.emit({
			serverName: serverName.value, 
			serverContent: this.serverContent.nativeElement.value
		});
	}

	onAddBlueprint(serverName: HTMLInputElement) {
		console.log('blueprint');
		this.blueprintCreated.emit({
			serverName: serverName.value, 
			serverContent: this.serverContent.nativeElement.value
		});
	}
}
