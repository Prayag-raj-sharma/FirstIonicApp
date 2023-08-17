import { Component, ViewChild, ElementRef  } from '@angular/core';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent {
  staffName = 'Peter Quill';
   
  @ViewChild('fileInput', { static: false }) fileInputRef!: ElementRef<HTMLInputElement>;
  selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    } else {
      this.selectedFile = null;
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      // Check if the file type is CSV
      if (this.selectedFile.type === 'text/csv') {
        console.log('File uploaded successfully:', this.selectedFile.name);
        alert('File uploaded successfully!');
      } else {
        // Show an error message if the file is not a CSV
        console.error('Error: Please upload a CSV file.');
        alert('Error: Please upload a CSV file.');
      }
      // Reset the file input element after processing the selected file
      this.fileInputRef.nativeElement.value = '';
      this.selectedFile = null;
    } else {
      // Show an error message if no file is selected
      console.error('Error: Please select a file to upload.');
      alert('Error: Please select a file to upload.');
    }
  }
}
