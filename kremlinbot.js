//Зачем как нормальный человек json в отдельный файл выносить?!
//The xx – VCR (Four Tet Remix)
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
            "требуют"
        ],
        "where": [
            "на митинге",
            "в соцсетях",
            "в центре Москвы",
            "на Сенатской площади"
        ],
        "pregoal": [
            "что бы",
            "с целью",
            "для того, что бы",
            "в целях"
        ],
        "goal": [
            "насадить чужие ценности.",
            "задурманить Россию.",
            "ослабить власть.",
            "провоцировать власть."
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
//Янка и Великие октябри – Берегись!
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
        return lexicon.comment.alltext[randomInteger(0,2)];
    };
    
    this.news = function(argument){
        if(argument == "bad"){
            return lexicon.sentences_bad.who[randomInteger(0,lexicon.sentences_bad.who.length-1)]+" "+lexicon.sentences_bad.what[randomInteger(0,lexicon.sentences_bad.what.length-1)]+" "+lexicon.sentences_bad.where[randomInteger(0,lexicon.sentences_bad.where.length-1)]+" "+lexicon.sentences_bad.pregoal[randomInteger(0,lexicon.sentences_bad.pregoal.length-1)]+" "+lexicon.sentences_bad.goal[randomInteger(0,lexicon.sentences_bad.goal.length-1)];
        } else if(argument == "good"){
            console.log(lexicon.sentences_good.who.length);
            return lexicon.sentences_good.who[randomInteger(0,3)];
        }
    }
};
//The Beatles – Flying
//Вообще топ