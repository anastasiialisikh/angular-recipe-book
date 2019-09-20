import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataStorageService]
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private dataStorageService: DataStorageService) { }
  subscription: Subscription;
  ngOnInit() {
  }

  onSaveData() {
    this.subscription = this.dataStorageService.storeRecipes()
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
