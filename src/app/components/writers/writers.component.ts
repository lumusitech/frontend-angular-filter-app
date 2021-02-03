import { Component, OnInit } from '@angular/core';
import { Writer } from 'src/app/models/writer.model';
import { WriterService } from '../../services/writer.service';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.sass']
})
export class WritersComponent implements OnInit {

  writers: Writer[];

  constructor(private writerService: WriterService) {
    this.writers = [];
  }

  async ngOnInit() {
    this.writers = await this.writerService.getAll();
  }

  async onChange($event: any) {
    let country = $event.target.value;
    if (country === "todos") this.writers = await this.writerService.getAll()
    else this.writers = await this.writerService.getByCountry(country);
  }
}
