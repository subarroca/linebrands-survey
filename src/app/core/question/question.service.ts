import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';
import { QuestionTree } from './question-tree';
import { Question } from './question';

@Injectable()
export class QuestionService {
  orders: string[];
  questions: QuestionTree;
  currentRound: number;

  answers: any[];

  isLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLoaded$: Observable<boolean> = this.isLoadedSubject.asObservable();

  constructor(
    private http: Http
  ) {
    this.isLoadedSubject.next(false);

    this.http
      .get(environment.questionsUrl)
      .first()
      .subscribe(resp => {
        const json = resp.json();
        this.orders = json.structures;
        this.questions = json.questions;

        this.isLoadedSubject.next(true);
      });

    this.startRound();
  }

  startRound() {
    this.currentRound = 0;
    this.answers = [];
  }

  get nextQuestion(): Question {
    if (this.currentRound !== this.orders.length) {
      this.currentRound++;
      const wordQuestions = this.questions[this.orders[this.currentRound - 1]];
      const selectedQuestion = wordQuestions[Math.floor(Math.random() * wordQuestions.length)];
      return selectedQuestion;
    }
  }

}