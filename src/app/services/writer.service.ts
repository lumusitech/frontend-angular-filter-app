import { Injectable } from '@angular/core';
import { Writer } from '../models/writer.model';
import { ESCRITORES } from '../db/escritores.db';


@Injectable({
  providedIn: 'root'
})
export class WriterService {
  constructor() {
  }

  getAll(): Promise<Writer[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getWriterById(id: number): Promise<Writer> {
    return new Promise((resolve, reject) => {
      const escritor: any = ESCRITORES.find(escritor => escritor.id === id);
      resolve(escritor);
    });
  }

  getByCountry(country: string): Promise<Writer[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES.filter(writer => writer.pais === country));
    });
  }
}
