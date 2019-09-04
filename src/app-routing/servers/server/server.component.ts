import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data, } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data.selectedServer;
        }
      );
    // this.server = this.serversService
    //   .getServer(parseInt(this.route.snapshot.params.id, 10));
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService
    //       .getServer(parseInt(params.id, 10));
    //   }
    // );
  }

  onEditServer() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}