import strawshort from "./stsh.jpg";
import apricot from "./ap.jpg";
import huck from "./huck.jpg";
import lemon from "./lemon.jpg";
import purppie from "./purppie.jpg";
import sour from "./sour.jpg";
import rainbow from "./rb.jpg";
import indigo from "./indigo.jpg";
import redbut from "./redbut.jpg";
import murky from "./murky.jpg";
import lurky from "./lurky.jpg";
import starlite from "./starlite.jpg";
import braveheart from "./braveheart.jpg";
import funshine from "./funshine.jpg";
import goodluck from "./goodluck.jpg";
import grouchy from "./grouchy.jpg";
import lotsaheart from "./lotsaheart.jpg";
import wish from "./wish.jpg";
import minty from "./minty.jpg";
import cottoncandy from "./cottoncandy.jpg";
import butterscotch from "./butterscotch.jpg";
import malibu from "./malibu.jpg";
import ken from "./ken.jpg";
import skipper from "./skipper.jpg";
import rockers from "./rockers.jpg";
import corv from "./corv.jpg";

export interface QuizQuestion {
  answerNum: number;
  question: string;
  answers: string[];
  image: any;
}

export const QuizQuestions: QuizQuestion[] = [
  { answerNum: 0, question: "Who is this?",
    answers: ["Strawberry Shortcake","Miss Berry Hat","Fruit Princess","Strawberry Shortbread"],
    image: strawshort},
  { answerNum: 0, question: "Who is this?",
    answers: ["Apricot","Peach","Berry Baby","Plum"],
    image: apricot},
  { answerNum: 0, question: "Who is this?",
    answers: ["Huckleberry Pie","Blueberry Pie","Boysenberry Boy","Plum Pudding"],
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
    image: rainbow},
  { answerNum: 0, question: "Who is this?",
    answers: ["Indigo","Ieesha","Azure","Sapphire"],
    image: indigo},
  { answerNum: 0, question: "Who is this?",
    answers: ["Red Butler","Crimson Prince","Red Rider","Red Randy"],
    image: redbut},
  { answerNum: 0, question: "Who is this?",
    answers: ["Murky","Lurky","Blerg","Color Bandit"],
    image: murky},
  { answerNum: 0, question: "Who is this?",
    answers: ["Lurky","Murky","Pronk","Grog"],
    image: lurky},
  { answerNum: 0, question: "Who is this?",
    answers: ["Starlite","Starbright","Star Dancer","Star Soar"],
    image: starlite},

  { answerNum: 0, question: "Who is this?",
    answers: ["Funshine Bear","Sunshine Bear","Fun Bear","Sun Bear"],
    image: funshine},
  { answerNum: 0, question: "Who is this?",
    answers: ["Good Luck Bear","Charm Bear","Shamrock Bear","Clover Bear"],
    image: goodluck},
  { answerNum: 0, question: "Who is this?",
    answers: ["Grouchy Bear","Grumpy Bear","Foul Bear","Bad Attitude Bear"],
    image: grouchy},
  { answerNum: 0, question: "Who is this?",
    answers: ["Wish Bear","Rainbow Bear","Sunshine Bear","Hope Bear"],
    image: wish},
  { answerNum: 0, question: "Who is this?",
    answers: ["Brave Heart Lion","Brave Bold Lion","Strong Heart Lion","Bold Heart Lion"],
    image: braveheart},
  { answerNum: 0, question: "Who is this?",
    answers: ["Lotsa Heart Elephant","Big Heart Elephant","Strong Heart Elephant","Gentle Heart Elephant"],
    image: lotsaheart},

  { answerNum: 0, question: "Who is this?",
    answers: ["Minty","Clover","Green Gallop","Meadow"],
    image: minty},
  { answerNum: 0, question: "Who is this?",
    answers: ["Cotton Candy","Tender","Passion","Guava"],
    image: cottoncandy},
  { answerNum: 0, question: "Who is this?",
    answers: ["Butterscotch","Butterfly","Vanilla","Pudding"],
    image: butterscotch},

  { answerNum: 0, question: "Who is this?",
    answers: ["Malibu Barbie","Summer Barbie","California Barbie","LA Barbie"],
    image: malibu},
  { answerNum: 0, question: "Who is this?",
    answers: ["Ken","Young Donald Trump","Kurt","Kip"],
    image: ken},
  { answerNum: 0, question: "Who is this?",
    answers: ["Skipper","Maggie","Midge","Sandy"],
    image: skipper},
  { answerNum: 0, question: "Who are these ladies?",
    answers: ["Barbie and the Rockers","Barbie and the Glam","The Sex Pistols","The Go Gos"],
    image: rockers},
  { answerNum: 0, question: "What is this?",
    answers: ["Barbie Corvette","Barbie Race Car","Barbie Sweet 16","Barbiemobile "],
    image: corv},

];

// lady lovely, glow worms, x 6
// she-ra
// jem