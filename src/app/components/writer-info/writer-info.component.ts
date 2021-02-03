import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Writer } from 'src/app/models/writer.model';
import { WriterService } from 'src/app/services/writer.service';

@Component({
  selector: 'app-writer-info',
  templateUrl: './writer-info.component.html',
  styleUrls: ['./writer-info.component.sass']
})
export class WriterInfoComponent implements OnInit {

  writer?: Writer;

  constructor(private activatedRoute: ActivatedRoute, private writerService: WriterService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      try {
        this.writer = await this.writerService.getWriterById(parseInt(params.id))
      } catch (e: any) { console.log(e); };
    });
  }
}
