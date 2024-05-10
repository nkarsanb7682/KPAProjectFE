import { Component, EventEmitter, Output } from '@angular/core';
import {  FileSendEvent, FileUploadErrorEvent, FileUploadEvent, FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { Message, MessageService } from 'primeng/api';
import { AirportStatsService } from '../airport-stats.service';
import { AirportVM } from '../models/AirportVM';



@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [FileUploadModule, ToastModule],
  providers: [MessageService],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  @Output() savedData = new EventEmitter<AirportVM[]>()

  constructor(private messageService: MessageService, private airportStatsService: AirportStatsService) {}

  onSend($event: FileSendEvent)
  {
    this.messageService.add({severity: 'info', summary: 'File sent', detail: 'The json file has been sent'} as Message)
  }

  onUpload($event: FileUploadEvent) {
    let data: AirportVM[];
    this.messageService.add({severity: 'success', summary: 'File uploaded successfully', detail: 'Json file parsed and saved successfully'} as Message)
    this.airportStatsService.getData().subscribe( res => {
      data = res;
      this.savedData.emit(data);
    })
  }

  onError($event: FileUploadErrorEvent)
  {
    this.messageService.add({severity: 'error', summary: 'File save failed', detail: 'Json file was not saved'} as Message)
  }

}
