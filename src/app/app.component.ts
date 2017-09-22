import { Component, OnInit } from '@angular/core';

import { WebLoaderService } from './web-loader.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'LRXJS-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'LRXJS';

    theSubject: Subject<any>;

    private speciesCount = {};
    private sumDone = 0;
    private totalExpected = 0;

    constructor(private _webLoader:WebLoaderService){}

    ngOnInit(){

        //this.loadAsyncData();
        //this.loadObservableData();
        //this.loadDataList();
        //this.loadQuizData();
        this.getSomeRandomness();

        this.theSubject = new Subject();

    }

    async loadAsyncData(){
        let data = await this._webLoader.loadData();
        //console.log(data.text());
    }

    loadObservableData(){
        let subsciption = this._webLoader.loadsteamData()
        //.map(value => value = value.url)
        .skip(1)
        .subscribe(
            (next) => {
                 console.log("NY DATA--");
                 console.log(next);
            }
        );

        let subsciption2 = this._webLoader.loadsteamData()
        //.map(value => value = value.url)
        .subscribe(
            (next) => {
                 console.log("NY DATA--");
                 console.log(next);
            }
        );
    }

    loadDataList(){

        let dataList = [
            'https://cors-anywhere.herokuapp.com/http://sau.no/',
            'https://cors-anywhere.herokuapp.com/http://ulv.no/',
            'https://cors-anywhere.herokuapp.com/http://elg.no/',
        ];

        this._webLoader.loadDataList(dataList).subscribe(
            (next) => {
                 console.log(next);
            }
        );




    }

    loadQuizData(){
        let url = 'https://hembstudios.no/birdid/IDprogram/getQuestionsData.php?JSON=1&sessionID=&numberQuestions=80&numRepeatingSpecies=2&difficulty=1&areaID=0&mediaType=1&competitionGroupID=-1&accessCodeCompetitionGroup=&langID=2&siteID=1';

        this.totalExpected = 5;

        let dataList = [];
        for(let i = 0; i < this.totalExpected; i ++){
            dataList.push(url);
        }

        this._webLoader.loadDataList(dataList)
        .skip(3)
            .map(current => {
                let returnList = []
                current.mediaArray.forEach(current => {
                    returnList.push({
                        specie_id: current.specie_id,
                        name: current.name
                    });
                });
                return returnList;
            })
            .subscribe(
            (next) => {

                this.addOnePayload(next);
                console.log(next)
            }
        );


    }

    private addOnePayload(data){

        data.forEach(current => {
            if(this.speciesCount[current.specie_id]){
                this.speciesCount[current.specie_id].count++;
            }else{
                this.speciesCount[current.specie_id] = {
                    id: current.specie_id,
                    count: 1,
                    name: current.name
                };
            }

        });

        this.sumDone ++;
        if(this.sumDone == this.totalExpected){
            console.log(this.speciesCount);
        }

    }


    getSomeRandomness(){

        this._webLoader.getRandNumbers()
        .throttleTime(1000)
        //.take(5)
        .subscribe(
            (next) => {
                 console.log(next);
            }
        );

    }



}
