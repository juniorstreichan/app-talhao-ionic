import { Talhao } from "./../models/talhao";
import { API_KEYS } from "./../config/api.config";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TalhaoService {
  constructor(private http: HttpClient) {}

  getTalhoes(size = 20, page = 1): Observable<any> {
    return this.http.get<Talhao[]>(
      `${API_KEYS.baseUrl}talhao/?page=${page}&size=${size}`
    );
  }

  gravarTalhao(talhao: Talhao): Observable<Talhao> {
    return this.http.post<Talhao>(`${API_KEYS.baseUrl}talhao/`, talhao);
  }

  alterarTalhao(id,talhao: Talhao): Observable<Talhao> {
    return this.http.put<Talhao>(`${API_KEYS.baseUrl}talhao/${id}`, talhao);
  }

  deletarTalhao(id):Observable<any> {
    return this.http.delete(`${API_KEYS.baseUrl}talhao/${id}`);
  }
}
