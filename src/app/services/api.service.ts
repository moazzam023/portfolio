import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public downloadResume() {
    const pdfUrl = 'resume.pdf';
    this.http.get(pdfUrl, { responseType: 'blob' }).subscribe((blob) => {
      const link = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      link.href = url;
      link.download = 'moazzam_resume.pdf';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
