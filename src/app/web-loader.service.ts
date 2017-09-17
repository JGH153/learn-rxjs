import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import 'rxjs/Rx';
// import Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebLoaderService {

    constructor(
        private _http: Http,
    ) { }

    async loadData(){
        return await this._http.get("https://cors-anywhere.herokuapp.com/http://ulv.no/").toPromise();
    }

    // loadsteamData(): Observable<any>{
    //
    //     return this._http.get("https://cors-anywhere.herokuapp.com/http://ulv.no/");
    //     return this._http.get("https://cors-anywhere.herokuapp.com/http://sau.no/")
    //
    // }

}
