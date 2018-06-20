import { Component, ElementRef, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
  outputs: ['verification']
})
export class VerificationComponent implements OnInit {

  CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789';

  @ViewChild('canvas')
  canvas: ElementRef;

  verification = '';

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.changeVerification();
  }

  randVerification() {
    this.verification = '';
    let rand = 0;
    for (let i = 0; i < 4; i++) {
      rand = Math.floor(Math.random() * 36);
      this.verification += this.CHARS.charAt(rand);
    }
  }

  changeVerification() {
    this.randVerification();
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    const cxt = canvasEl.getContext('2d');
    cxt.fillStyle = '#000';
    cxt.fillRect(0, 0, 90, 40);
    /*生成干扰线20条*/
    for (let j = 0; j < 20; j++) {
      cxt.strokeStyle = '#fff';      // 若省略beginPath，则每点击一次验证码会累积干扰线的条数
      cxt.beginPath();
      cxt.moveTo(this.lineX(), this.lineY());
      cxt.lineTo(this.lineX(), this.lineY());
      cxt.lineWidth = 0.5;
      cxt.closePath();
      cxt.stroke();
    }
    cxt.fillStyle = 'red';
    cxt.font = 'bold 20px Arial';
    cxt.fillText(this.verification, 25, 25);
    this.notify.emit(this.verification);
  }

  /*干扰线的随机x坐标值*/
  private lineX() {
    return Math.floor(Math.random() * 90);
  }

  /*干扰线的随机y坐标值*/
  private lineY() {
    return Math.floor(Math.random() * 40);
  }
}
