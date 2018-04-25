import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	private _version = new BehaviorSubject<string>('1.0');
	version = this._version.asObservable();

	private _numberOfClicks = new BehaviorSubject<number>(0);
	numberOfClicks = this._numberOfClicks.asObservable();

  	constructor() { }

  	updateClick(numberOfClicks) {
  		this._numberOfClicks.next(numberOfClicks);
  	}

}
