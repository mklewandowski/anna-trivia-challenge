import strawShort from "./stsh.jpg";
import apricot from "./ap.jpg";
import huck from "./huck.jpg";
import lemon from "./lemon.jpg";
import purppie from "./purppie.jpg";
import sour from "./sour.jpg";
import rainbowBrite from "./rb.jpg";

export interface QuizQuestion {
  answerNum: number;
  question: string;
  answers: string[];
  image: any;
}

export const QuizQuestions: QuizQuestion[] = [
  { answerNum: 0, question: "Who is this?",
    answers: ["Strawberry Shortcake","Miss Berry Hat","Fruit Princess","Strawberry Shortbread"],
    image: strawShort},
  { answerNum: 0, question: "Who is this?",
    answers: ["Apricot","Peach","Berry Baby","Fig"],
    image: apricot},
  { answerNum: 0, question: "Who is this?",
    answers: ["Huckleberry Pie","Blueberry Pie","Finn","Huck Pudding"],
    image: huck},
  { answerNum: 0, question: "Who is this?",
    answers: ["Lemon Meringue","Lucy Lemon","Lemon Cake","Lemon & Lime"],
    image: lemon},
  { answerNum: 0, question: "Who is this?",
    answers: ["Purple Pieman","Berry Baker","Lavendar Len","Pie Crook"],
    image: purppie},
  { answerNum: 0, question: "Who is this?",
    answers: ["Sour Grapes","Sour Queen","Grape Sorceress","Bitter Queen"],
    image: sour},


  { answerNum: 0, question: "Who is this?",
    answers: ["Rainbow Brite","Rainbow Jenny","Color Witch","Rainbow Strong"],
    image: rainbowBrite}
];

// my little pony x 6
// barbie x 6
// carebears x 6
// lady lovely, glow worms, x 6