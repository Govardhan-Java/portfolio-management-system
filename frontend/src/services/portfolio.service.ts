import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private baseUrl = 'http://localhost:8080/api/portfolio';

  constructor(private http: HttpClient) { }

  getInvestments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/investments`);
  }

  addInvestment(investment: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, investment);
  }
}