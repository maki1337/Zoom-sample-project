import { Component, OnInit } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css'],
})
export class ZoomComponent {
  public meetConfig: any;
  public signature: any;
  constructor() {
    document.getElementById('zmmtg-root')!.style.display = 'block';
    this.setConf(76374867161);
  }

  setConf(val: any) {
    this.meetConfig = {
      apiKey: 'XttY_6krQDiYComupgJPsg',
      apiSecret: 'eUoCTMVd9yFio5WQkESpouS2UCmFVhtbfalH',
      meetingNumber: val,
      userName: 'User',
      passWord: '8qt5KZ',
      leaveUrl:
        'https://media.tenor.com/images/90b8c32169602035d0bf932ce66094ae/raw',
      role: 0,
    };

    this.signature = ZoomMtg.generateSignature({
      meetingNumber: this.meetConfig.meetingNumber,
      apiKey: this.meetConfig.apiKey,
      apiSecret: this.meetConfig.apiSecret,
      role: this.meetConfig.role,
      success: (res: any) => {
        console.log(res.result);
      },
    });

    ZoomMtg.init({
      debug: true, //optional
      showMeetingHeader: false, //option
      disableInvite: false, //optional
      disableCallOut: false, //optional
      disableRecord: false, //optional
      disableJoinAudio: false, //optional
      audioPanelAlwaysOpen: true, //optional
      showPureSharingContent: false, //optional
      isSupportAV: true, //optional,
      isSupportChat: true, //optional,
      isSupportQA: true, //optional,
      isSupportPolling: true, //optional
      isSupportBreakout: true, //optional
      isSupportCC: true, //optional,
      screenShare: true, //optional,
      rwcBackup: '', //optional,
      videoDrag: true, //optional,
      sharingMode: 'both', //optional,
      videoHeader: true, //optional,
      isLockBottom: true, // optional,
      isSupportNonverbal: true, // optional,
      isShowJoiningErrorDialog: true, // optional,
      disablePreview: false, // optional
      disableCORP: true, // optional
      inviteUrlFormat: '', // optional,
      meetingInfo: [
        // optional
        'topic',
        'host',
        'mn',
        'pwd',
        'telPwd',
        'invite',
        'participant',
        'dc',
        'enctype',
        'report',
      ],
      disableVoIP: false, // optional
      disableReport: false, // optional
      leaveUrl:
        'https://media.tenor.com/images/90b8c32169602035d0bf932ce66094ae/raw',
      success: (res: any) => {
        ZoomMtg.join({
          meetingNumber: this.meetConfig.meetingNumber,
          userName: this.meetConfig.userName,
          signature: this.signature,
          apiKey: this.meetConfig.apiKey,
          userEmail: 'rommak2012@gmail.com',
          passWord: this.meetConfig.passWord,
          success: (res: any) => {
            console.log('join meeting success');
          },
          error: (res: any) => {
            console.log(res);
          },
        });
      },
      error: (res: any) => {
        console.log(res);
      },
    });
  }
}
