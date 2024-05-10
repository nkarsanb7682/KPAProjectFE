import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { HttpClientModule } from '@angular/common/http';
import { DataDisplayEditComponent } from './data-display-edit/data-display-edit.component';
import { AirportVM } from './models/AirportVM';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FileUploadComponent, DataDisplayEditComponent, HttpClientModule]
})
export class AppComponent {
  title = 'KPACodingProjectFE';
  data!: AirportVM[];

  onSavedData(event: AirportVM[]) {
    this.data = event;
  }
}
