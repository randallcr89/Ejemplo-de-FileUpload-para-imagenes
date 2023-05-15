import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'file-upload-advanced-demo',
  templateUrl: './file-upload-advanced-demo.html',
  providers: [MessageService],
})
export class FileUploadAdvancedDemo {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }
}
