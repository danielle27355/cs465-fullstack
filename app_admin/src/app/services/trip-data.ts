import { Service, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Trip} from '../models/trip';

// @Service()
// export class TripData {

// }

@Injectable({
    providedIn: 'root'
})

export class TripData{

    private readonly url = 'http://localhost:3000/api/trips';

    constructor(private http: HttpClient){}

    getTrips() : Observable<Trip[]>{
        let url = 'http://localhost:3000/api/trips';

        return this.http.get<Trip[]>(url);
    }

    addTrip(formData:Trip):Observable<Trip>{
        let url = 'http://localhost:3000/api/trips';
        return this.http.post<Trip>(url, formData);
    }

    getTrip(tripCode: string) : Observable<Trip[]>{
        // console.log('Inside TripData::getTrips');
        return this.http.get<Trip[]>(this.url + '/' + tripCode);
    }

    updateTrip(formData: Trip):Observable<Trip>{
        //console.log('Inside TripData::addTrips');
        return this.http.put<Trip>(this.url + '/' + formData.code, formData);
    }
} 