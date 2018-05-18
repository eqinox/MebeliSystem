import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: String = 'http://localhost:1338';

  constructor(private httpService: HttpClient) { }

  post(url, data, httpOptions: { headers: HttpHeaders } = { headers: new HttpHeaders()}) {
    return this.httpService.post(this.baseUrl + url, data, httpOptions);
  }

  get(url, queryString: string = null, httpOptions: { headers: HttpHeaders }) {
    let parsedQueryString = '';
    if (queryString) {
    parsedQueryString += queryString['neighborhood'] !== undefined ? `neighborhood=${queryString['neighborhood']}&` : '';
    parsedQueryString += queryString['city'] !== undefined ? `city=${queryString['city']}&` : '';
    parsedQueryString += queryString['name'] !== undefined ? `name=${queryString['name']}&` : '';
    }

    return this.httpService.get(this.baseUrl + url + `?${parsedQueryString}`, httpOptions);
  }

  put(url, updatedItem, httpOptions: { headers: HttpHeaders }) {
    return this.httpService.put(this.baseUrl + url, updatedItem, httpOptions);
  }
}
