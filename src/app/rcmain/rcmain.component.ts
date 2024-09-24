import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-rcmain',
  templateUrl: './rcmain.component.html',
  styleUrls: ['./rcmain.component.css']
})
export class RcmainComponent implements OnInit{

  data: any;
  materialForm: FormGroup;
  selectedFile: File | null = null;
  
  constructor(private fb: FormBuilder , private http: HttpClient,private service:ServiceService) {

   
    
    this.materialForm = this.fb.group({
      partCode: ['', Validators.required],
      description: ['', Validators.required],
      umo: ['', Validators.required],
      activity: ['', Validators.required],
      Componentusage: ['', Validators.required],
      types: ['', Validators.required],
      rohsStatus: ['', Validators.required],
      leadTime: ['', Validators.required],
      msdStatus: ['', Validators.required],
      bg: ['', Validators.required],
      productGroup: ['', Validators.required],
      productFamily: ['', Validators.required],
      thLimit: ['', Validators.required],
      productName: ['', Validators.required],
      location: ['', Validators.required],
      compatibility: ['', Validators.required],
      unitPrice: ['', Validators.required]
    });
  }

 ngOnInit(): void {
      this.service.getData().subscribe(
        (response) => {
          this.data = response;
          console.log(this.data);
        },
        (error) => {
          console.error('Error fetching data', error);
        }
      );
    }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSave() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('/api/product/uploadFile', formData).subscribe(
        response => {
          console.log('File upload successful:', response);
          this.selectedFile = null; // Clear the file after upload
        },
        error => {
          console.error('File upload error:', error);
        }
      );
    } else {
      console.log('No file selected.');
    }
  }

  onSubmit() {
    if (this.materialForm.valid) {
      this.http.post('/api/product/uploadData', this.materialForm.value).subscribe(
        response => {
          console.log('Form data submitted successfully:', response);
          this.materialForm.reset(); // Reset the form after submission
        },
        error => {
          console.error('Form submission error:', error);
        }
      );
    } else {
      console.log('Form is invalid.');
    }
  }

  clearform() {
    this.materialForm.reset();
    this.selectedFile = null; // Clear the file selection
  }

  onClear() {
    // Implement any additional clear logic if needed
  }
}
