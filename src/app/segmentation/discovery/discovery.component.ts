import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';
import { FlowControlService } from '../../core/flow-control/flow-control.service';

@Component({
  selector: 'lb-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent extends ScreenComponent implements OnInit {
  answers = [
    {
      label: 'discovery.lastYear',
      id: 'lastYear'
    }, {
      label: 'discovery.throughFriend',
      id: 'throughFriend'
    }, {
      label: 'discovery.socialNetwork',
      id: 'socialNetwork'
    }, {
      label: 'discovery.passingBy',
      id: 'passingBy'
    }, {
      label: 'discovery.imFan',
      id: 'imFan'
    }];

  constructor(
    protected flowControlService: FlowControlService,
    protected questionService: QuestionService,
    protected router: Router
  ) {
    super(flowControlService, questionService, router);
  }

  select(id: string) {
    this.gotoNext();
  }
}
