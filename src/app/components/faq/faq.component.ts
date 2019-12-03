import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  questions: Question[];

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {



    this.questions = this.questionsService.getQustions();
  }

}
