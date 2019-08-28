import { 
	Component,
	OnInit, 
	Input, 
	OnChanges, 
	SimpleChanges, 
	DoCheck, 
	AfterContentInit, 
	AfterContentChecked, 
	AfterViewInit, 
	AfterViewChecked, 
	OnDestroy, 
	ViewChild, 
	ElementRef, 
	ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
	OnInit, 
	OnChanges,
	DoCheck, 
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy{

	@Input('srvElement') element: {
		type: string
		name: string
		content: string
	}

	@Input() name: string;
	@ViewChild('heading') heading: ElementRef;
	@ContentChild('contentParagraph') content: ElementRef; 


  constructor() { 
		console.log('constructor called!');
		
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChanges called!');
		console.log(changes);
	}

  ngOnInit() {
		console.log('ngOnInit called!');
		console.log('here', this.heading.nativeElement.textContent);
		console.log('contentChild', this.content.nativeElement.textContent);
	}
	
	ngDoCheck() {
		console.log('doCheck called!');
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit called!');
		console.log('!!!!!!!here1', this.heading.nativeElement.textContent);
		console.log('contentChild1', this.content.nativeElement.textContent);
	}

	ngAfterContentChecked() {
		console.log('ngAfterContentChecked called!');
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit called');
		console.log('!!!!!!!here2', this.heading.nativeElement.textContent);
		console.log('contentChild2', this.content.nativeElement.textContent);
	}
	

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked called');
	}

	ngOnDestroy() {
		console.log('ngOnDestroy called');
	}
}
