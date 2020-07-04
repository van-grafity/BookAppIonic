import { Component, OnInit } from '@angular/core';
import { ExtensionService } from '../../utils/extension/extension.service'

@Component({
  selector: 'app-testing-view',
  templateUrl: './testing-view.page.html',
  styleUrls: ['./testing-view.page.scss'],
})
export class TestingViewPage implements OnInit {

  constructor(public extesion: ExtensionService) { }

  ngOnInit() {
    
  }

  showMyClicked() {
    this.extesion.showToast('Hello My name is Ivan Suhendra')
  }
}
