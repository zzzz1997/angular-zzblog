import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./../../../node_modules/quill/dist/quill.snow.css', './write.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WriteComponent implements OnInit {

  // quill配置
  config = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image']                         // link and image, video
    ]
  };

  html = '';

  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

  log($event) {
    this.html = $event.html;
    console.log($event);
  }

  saveArticle() {
    console.log(this.html);
  }

  upload() {
    /*this.fileService.upload()
      .subscribe(data => {
        console.log(data);
      }, (error) => {
        console.error(error);
      });*/
  }

  /*GetHtmlImageUrlList(sHtmlText): string[] {
    const regex = "<img[^>]*src=[\"']*([^>\"']+)[\"']*\\s*/
    /*MatchCollection matches = regImg.Matches(sHtmlText);
    int i = 0;
    string[] sUrlList = new string[matches.Count];
    foreach (Match match in matches){
      sUrlList[i++] = match.Groups["imgUrl"].Value;
    }
    return sUrlList;
  }*/
}
