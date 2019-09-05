import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ServerService {
  url = 'https://angular-course-http-bcc9d.firebaseio.com/data.json';
  constructor(private http: HttpClient) {}

  storeServers(servers: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(this.url, servers, { headers });
  }

  getServers() {
    return this.http.get(this.url)
      .pipe(
        map((data: any[]) => {
          console.log('new:', data);
          // for (const server of data) {
          //   server.name = 'han solo: ' + server.name;
          // }

          // return data;

          return data.map(server => {
            server.name = 'han solo: ' + server.name;
            return server;
          });
        } ),
        catchError(
          (error: Response) => {
            return throwError('something went wrong');
          }
        )
      );
  }

  getAppName() {
    return this.http.get('https://angular-course-http-bcc9d.firebaseio.com/appName.json');
  }
}
