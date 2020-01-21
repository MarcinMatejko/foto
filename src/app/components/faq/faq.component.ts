import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { Question } from '../../models/Question';
import { fadeDown, fadeRight, fadeLeft, fadeDown2 } from 'src/app/animations';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  animations: [ fadeDown, fadeDown2, fadeRight, fadeLeft ]
})
export class FaqComponent implements OnInit {

  questions: Question[];

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {

    this.questions = this.questionsService.getQustions();
  }

}
