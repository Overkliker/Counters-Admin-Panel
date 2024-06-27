import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Data{
  aplus: number,
  rplus: number
}

export interface Ping {
  uuid: String,
  data: Data[]
}

export interface CountersResponse{
  energyCounters: Ping[]
}


@Injectable()
export class GetService {

  constructor(private _httpClient: HttpClient) { }


  getPingForCounter(busId: String, counterId: String, counterNumb: String, password: String, model: String): Observable<CountersResponse>{

    let pingUrl: string = `http://localhost:8080/ping/${busId}?counterId=${counterId}&number=${counterNumb}&password=${password}&model=${model}`
    
    return this._httpClient.get<CountersResponse>(pingUrl)
  }
}
