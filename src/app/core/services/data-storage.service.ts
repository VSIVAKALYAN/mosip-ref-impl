import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as appConstants from '../../app.constants';

@Injectable()
export class DataStorageService {

  BASE_URL = '';

  constructor(private http: HttpClient) {}

  getLanguageSpecificLabels(langCode: string): Observable<any> {
    return this.http.get(`./assets/i18n/${langCode}.json`);
  }

  getCenterSpecificLabelsAndActions(): Observable<any> {
    return this.http.get('./assets/entity spec/center-entity-spec.json');
  }

  getCentersData(): Observable<any> {
    return this.http.get('./assets/data/centers-data.json');
  }

  getImmediateChildren(locationCode: string, langCode: string): Observable<any>  {
    return this.http.get(appConstants.MASTERDATA_BASE_URL + 'locations/immediatechildren/' + locationCode + '/' + langCode);
  }

  getStubbedDataForDropdowns(): Observable<any> {
    return this.http.get('./assets/data/centers-stub-data.json');
  }
}
