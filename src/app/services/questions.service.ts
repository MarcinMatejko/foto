import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
import { asapScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
   questions: Question[];

  constructor() {
    this.questions = [
      {
        question: 'Co to są sesje lifesylowe?',
        answer: 'Sesje lifestylowe to sesje pokazujące Wasze codzienne życie, bez zbędnego pozowania i upiększania rzeczywistości na siłę. Taką sesję możemy wykonać zarówno w waszym domu, jak i w ładnym miejscu w plenerze, w otoczeniu natury.',
        id: 1
      },
      {
        question: 'Jak się przygotować do lifestylowej sesji w domu?',
        answer: 'Zależy mi, żeby sesje rodzinne w domu były jak najbardziej naturalne. Swobodniej czujemy się w swoim codziennym otoczeniu i właśnie to chcę uwiecznić na zdjęciach.  Zamiast zwykłego siedzenia na kanapie i pozowania, chciałabym pokazać Wasze codzienne czynności – może coś wspólnie ugotujecie, może poczytacie książki, albo pogracie na gitarze, jeśli właśnie tak mijają Wam dni? Będziemy się śmiać, łaskotać, bawić i przytulać. W przypadku noworodków, skupimy się na codziennych czynnościach: przewijaniu, karmieniu, a może i nawet kąpieli? Tak, byście oglądając te zdjęcia za kilka lat przypomnieli sobie swoją codzienność, która nie zawsze jest instagramowa, ale jest Wasza. Sesje rodzinne w domu wykonuję zazwyczaj w godzinach poranno-dopołudniowych, gdy do mieszkania wpada najwięcej naturalnego światła.',
        id: 2
      },
      {
        question: 'W co się ubrać na sesję w domu?',
        answer: 'Nie ma co ukrywać, ale ubiór na zdjęciach jest bardzo ważnym czynnikiem, by zdjęcie wyglądało dobrze. Będę Was zatem prosić o ubranie się raczej w stonowane kolory, unikając dużych napisów na koszulkach, intensywnych barw, czy ogromnych wzorów, bądź postaci z bajek. Postawcie proszę na naturalność: biel, beż, jasny róż, szarość, delikatna zieleń. Dobre będą również jeansy i czerń, w zależności od ogólnie panującej kolorystyki. Na rodzinnych sesjach w domu, poproszę Was o ściągnięcie skarpetek – nadaje to zdjęciom delikatności i naturalności.',
        id: 3
      },
      {
        question: 'Jak wyglądają sesje lifestylowe w plenerze?',
        answer: 'Fajnie, sesje wyglądają fajnie.',
        id: 4
      },
    ]
   }

  getQustions(): Question[] {
    return this.questions;
  }
}
