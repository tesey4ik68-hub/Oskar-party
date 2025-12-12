export interface CountDownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export enum SpeechMood {
  FUNNY = 'Смешная',
  EMOTIONAL = 'Трогательная',
  EPIC = 'Эпичная',
  SHORT = 'Краткая'
}

export interface SpeechRequest {
  name: string;
  role: string;
  mood: SpeechMood;
}
