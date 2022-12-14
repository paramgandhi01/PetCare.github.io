       //slideshow with controls
       // Section 1 -  Declare an array of elements -----------------
       let myImagesArray = [
        'imagesparam/dog1.jpg',
        'imagesparam/dog2.jpg',
        'imagesparam/dog3.jpg',
      ];
      
      // -----------------------------------------------------------
      // Section 2 -  Build the slide of images --------------------
      let lowerLimit = 0;
      let upperLimit = myImagesArray.length - 1;
      
      //setInterval('changeImage(-1)',1000)
      function changeImage(direction) {
        lowerLimit = lowerLimit + direction;
        if (lowerLimit > upperLimit) {
          lowerLimit = 0;
        }
        if (lowerLimit < 0) {
          lowerLimit = upperLimit;
        }
        document.getElementById('slideshow').src = myImagesArray[lowerLimit];
      }
      
      //javascript for quiz
      const quizData = [
        {
            question: "what is the ideal weather for huskies",
            a: "-65 celcius",
            b: "0 celcius",
            c: "-18 celsius",
            d: "20 celcius",
            correct: "c",
        },
        {
            question: "What's the smallest dog in size among these breeds below",
            a: "pitbull",
            b: "huskies",
            c: "labrador",
            d: "shih tzu",
            correct: "d",
        },
        {
            question: "What is the famous pet food company's name",
            a: "pedigree",
            b: "pedegree",
            c: "pidigree",
            d: "pidegree",
            correct: "a",
        },
        {
            question: "What is the correct spelling for a dog's breed",
            a: "rotweler",
            b: "rottweiler",
            c: "rotveller",
            d: "none of the above",
            correct: "b",
        },
    ];
    
    const quiz= document.getElementById('quiz')
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.getElementById('question')
    const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
    const c_text = document.getElementById('c_text')
    const d_text = document.getElementById('d_text')
    const submitBtn = document.getElementById('submit')
    let currentQuiz = 0
    let score = 0
    loadQuiz()
    function loadQuiz() {
        deselectAnswers()
        const currentQuizData = quizData[currentQuiz]
        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
    }
    
    function deselectAnswers() {
        answerEls.forEach(answerEl => answerEl.checked = false)
    }
    function getSelected() {
        let answer
        answerEls.forEach(answerEl => {
            if(answerEl.checked) {
                answer = answerEl.id
            }
        })
        return answer
    }
    submitBtn.addEventListener('click', () => {
        const answer = getSelected()
        if(answer) {
           if(answer === quizData[currentQuiz].correct) {
               score++
           }
           currentQuiz++
           if(currentQuiz < quizData.length) {
               loadQuiz()
            } else {
                quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button id="submit" onclick="location.reload()">Reload</button>
                `
            }
         }
     })

     //Section 1 ------------  declare an array of images
let automatic= [
"imagesparam/bg1.jpg",
"imagesparam/bg2.jpg",
"imagesparam/dog1.jpg",
];

// Section 2 -------------------------------------------------
//make an automatic slide to display the images
let ImageNumber = 0;
let difference = automatic.length - 1;

let delay = 2000; //milliseconds    1sec=1000milliseconds

setInterval('ChangeImages(1)', delay);
//-1 to show the slide backwards
//1 to show the slide forwards

function ChangeImages(direction) {
//begin function

ImageNumber = ImageNumber + direction;

if (ImageNumber > difference) {
  //begin inner first if
  ImageNumber = 0;
} //end inner first if

if (ImageNumber < 0) {
  //begin inner second if
  ImageNumber = difference;
} //end inner second if
//document.slideshow.src = myImagesArray[ImageNumber];
// document.getElementById('slideshow').src = myImagesArray[ImageNumber];
document.getElementById("automatic").style.background =`linear-gradient(to right,rgb(0 0 0/0),rgb(0 0 0/0.8)),url(${automatic[ImageNumber]})fixed no-repeat 100%`;
document.getElementById("automatic").style.backgroundSize="cover";
document.getElementById("automatic").style.backgroundAttachment="fixed";
} //end function


// the event handler for the click event of each h2 element
const toggle = (evt) => {
//console.log(evt.currentTarget);
const h2Element = evt.currentTarget; // get the clicked h2 element
const divElement = h2Element.nextElementSibling; // get h2's sibling div

h2Element.classList.toggle('minus');
divElement.classList.toggle('open');

evt.preventDefault(); // cancel default action of h2 tag's <a> tag
};

document.addEventListener('DOMContentLoaded', () => {
// get the h2 tags
console.log(faqs);
const h2Elements = document.querySelectorAll('#faqs h2');

// attach event handler for each h2 tag
for (let h2Element of h2Elements) {
h2Element.addEventListener('click', toggle);
}
// set focus on first h2 tag's <a> tag
h2Elements[0].firstChild.focus();
});

