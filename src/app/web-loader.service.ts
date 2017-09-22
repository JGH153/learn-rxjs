import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import 'rxjs/Rx';
// import Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebLoaderService {

    private myFirstObservable;

    constructor(
        private _http: HttpClient,
    ) { }

    async loadData(){
        return await this._http.get("https://cors-anywhere.herokuapp.com/http://ulv.no/").toPromise();
    }

    loadsteamData(): Observable<any>{

        if(this.myFirstObservable){
            return this.myFirstObservable;
        }

        this.myFirstObservable = Observable.create((observer) => {

            let obsNext = (data) => {
                data = data.url;
                observer.next(data);
            };

            this._http.get("https://cors-anywhere.herokuapp.com/http://sau.no/").toPromise().then(obsNext)
            this._http.get("https://cors-anywhere.herokuapp.com/http://ulv.no/").subscribe(obsNext);

        });

        return this.myFirstObservable;

        // return this._http.get("https://cors-anywhere.herokuapp.com/http://ulv.no/");
        // return this._http.get("https://cors-anywhere.herokuapp.com/http://sau.no/")

    }

    loadDataList(list): Observable<any>{
        return Observable.create((observer) => {

            let obsNext = (data) => {
                observer.next(data);
            };

            list.forEach(current => {
                this._http.get(current).toPromise().then(obsNext)
            });

        });
    }


    getRandNumbers(): Observable<any>{
        return Observable.create((observer) => {
            setInterval(() => {
                observer.next(Math.random());
            }, 100)
        });
    }


}
