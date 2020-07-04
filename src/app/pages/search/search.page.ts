import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  users: Observable<any>;
  stringToInsert: string;
  blob: Blob;

  constructor(private httpClient: HttpClient) {
    this.users = this.httpClient.get('https://randomuser.me/api/?results=20')
      .pipe(map(res => res['results']))

    console.log("my", this.users)
  }

  ngOnInit() {
  }

}
