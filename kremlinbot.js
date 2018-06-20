//$( document ).ready(function() {
  console.log( "ready!" );
//Зачем как нормальный человек json в отдельный файл выносить?!

  var lexicon = {
    "comment": {
        "alltext": [
            "",
            "loltest",
            ""
        ],
        "wear": [
            "s"
        ]
    },
    "sentences_bad": {
        "who": [
            "Иностранные агенты",
            "Диверсанты",
            "Террористы",
            "ИГИЛ",
            "Либералы",
            "Эхо москвы",
            "Оппозиция",
            "Сторонники Нэвэльного"
        ],
        "what": [
            "устроили погром",
            "устроили диверсию",
            "организовали провокацию",
            "требуют "
        ],
        "where": [
            "на митинге",
            "в соцсетях",
            "в центре Москвы",
            "на "
        ],
        "goal": [
            "насадить чужие ценности",
            "задурманить Россию.",
            "ослабить власть."
        ]
    },
    "sentences_good":{
        "who":[
            "test",
            "test1",
            "test2",
            "test3"
        ]
    }
  }

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

"use strict";
function Bot(name) {
    this.name = name;
    this.lexicon = lexicon;

    this.comment = function() {
        console.log(lexicon.comment.alltext[randomInteger(0,2)]);
    };
    
    this.news = function(argument){
        if(argument == "bad"){
            console.log(lexicon.sentences_bad.who[randomInteger(0,4)]+" "+lexicon.sentences_bad.what[randomInteger(0,2)]+" "+lexicon.sentences_bad.where[randomInteger(0,2)]+" что бы "+lexicon.sentences_bad.goal[randomInteger(0,2)]);
        } else if(argument == "good"){
            console.log(lexicon.sentences_good.who[randomInteger(0,3)]);
        }
    }
};