
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


// ---------------------------
// STORY DATA
// ---------------------------

// Kids Edition: mini adventure, linear but friendly
const kidsQuestions = [
  {
    id: 1,
    title: "Act 1 – They’re Back on Bay Hill Drive!",
    text:
      "Psst! Kevin needs backup. Someone saw a blue vehicle creeping around Bay Hill Drive. What should we check first?",
    isFinal: false,
    answers: [
      {
        key: "van",
        label: "The big blue Wet Bandits van",
        correct: true,
        correctMsg:
          "Nice! That’s their van. If it’s here, Harry and Marv can’t be far away.",
      },
      {
        key: "pizza",
        label: "The Little Nero’s pizza delivery car",
        correct: false,
        wrongMsg:
          "Good thought, but the pizza guy just wants his money. Try something sneakier.",
      },
      {
        key: "jockey",
        label: "The horse jockey statue",
        correct: false,
        wrongMsg:
          "The jockey mostly gets run over. Let’s look for something bigger and bluer.",
      },
    ],
  },
  {
    id: 2,
    title: "Act 2 – Who Screamed?",
    text:
      "A neighbor said they heard a loud, high-pitched scream. Not scary… more like aftershave. Which prop shows that moment?",
    isFinal: false,
    answers: [
      {
        key: "ahhh",
        label: "Kevin with the “AHHHH!” face-in-hole cutout",
        correct: true,
        correctMsg:
          "Exactly. Classic aftershave scream. You’re really good at this.",
      },
      {
        key: "fuller",
        label: "Fuller with his Pepsi in the window",
        correct: false,
        wrongMsg:
          "Fuller causes other problems, but this scream belongs to Kevin.",
      },
      {
        key: "buzz",
        label: "Buzz’s girlfriend picture (WOOF)",
        correct: false,
        wrongMsg:
          "That’s a different kind of horror. The scream was someone else.",
      },
    ],
  },
  {
    id: 3,
    title: "Act 2 – Footprints by the Side Door",
    text:
      "Uh-oh. There are footprints by the side “friends” entrance. Who usually watches that door with a shovel ready?",
    isFinal: false,
    answers: [
      {
        key: "marley",
        label: "Old Man Marley with his shovel and trashcan",
        correct: true,
        correctMsg:
          "Correct. Marley knows exactly what to do if the Wet Bandits show up.",
      },
      {
        key: "recliner",
        label: "Kevin relaxing in the recliner",
        correct: false,
        wrongMsg:
          "If Kevin’s in the recliner, he’s watching Angels With Filthy Souls, not guarding doors.",
      },
      {
        key: "jockey",
        label: "The horse jockey statue",
        correct: false,
        wrongMsg:
          "The jockey is mostly there to get bumped by cars.",
      },
    ],
  },
  {
    id: 4,
    title: "Act 2 – Something Spilled (Again)",
    text:
      "Someone knocked something over in the landscaping near the entrance. What do you see down there?",
    isFinal: false,
    answers: [
      {
        key: "milk",
        label: "Milk and American Airlines tickets in the bushes",
        correct: true,
        correctMsg:
          "Yep. That spill almost ruined the whole trip. Good eye, kid.",
      },
      {
        key: "spider",
        label: "The spider on the column",
        correct: false,
        wrongMsg:
          "The spider scares Marv later. This clue is about a big messy spill.",
      },
      {
        key: "paint",
        label: "Paint cans hanging above the stairs",
        correct: false,
        wrongMsg:
          "Those are for the grand finale. We’ll use them soon.",
      },
    ],
  },
  {
    id: 5,
    title: "Act 2 – Who Wasn’t Helping?",
    text:
      "Kevin asked everyone to help defend the house… but someone was relaxing instead. Who was it?",
    isFinal: false,
    answers: [
      {
        key: "recliner",
        label: "Kevin in the recliner with snacks and Pepsi",
        correct: true,
        correctMsg:
          "Caught him! To be fair, he did set a lot of traps already.",
      },
      {
        key: "fuller",
        label: "Fuller with his Pepsi in the window",
        correct: false,
        wrongMsg:
          "Fuller’s job is mostly to avoid bunk beds after soda. Not this clue.",
      },
      {
        key: "buzz",
        label: "Buzz’s girlfriend picture",
        correct: false,
        wrongMsg:
          "That picture doesn’t help or hurt. It just… exists.",
      },
    ],
  },
  {
    id: 6,
    title: "Act 3 – They’re On the Stairs!",
    text:
      "Harry and Marv are charging up the front steps. Kevin has one move left. What should he do?",
    isFinal: true,
    answers: [
      {
        key: "paint",
        label: "Drop the paint cans from the upstairs railing",
        correct: true,
        endingType: "kids_kevin_win",
        correctMsg:
          "Bullseye! That’ll leave a mark. Nice work, you saved Bay Hill Drive!",
      },
      {
        key: "marley",
        label: "Call Old Man Marley for backup",
        correct: true,
        endingType: "kids_marley_win",
        correctMsg:
          "Smart move. When Marley shows up with the shovel, the Bandits always run.",
      },
      {
        key: "jockey",
        label: "Hide behind the horse jockey statue",
        correct: true,
        endingType: "kids_marley_win",
        correctMsg:
          "Bold strategy. Luckily, Marley heard the noise and came to finish the job!",
      },
    ],
  },
];

// Challenge Edition: same engine, more story flavor & different endings
const challengeQuestions = [
  {
    id: 1,
    title: "Act 1 – A Suspicious Van on Bay Hill Drive",
    text:
      "It’s late on Bay Hill Drive when a blue van crawls past the house and stops nearby. If it’s Harry and Marv, where are they most likely hiding?",
    isFinal: false,
    answers: [
      {
        key: "van",
        label: "Inside the blue Wet Bandits van",
        correct: true,
        correctMsg:
          "Exactly. They always circle the block before making a move.",
      },
      {
        key: "pizza",
        label: "In the Little Nero’s pizza car",
        correct: false,
        wrongMsg:
          "Tempting theory, but the pizza guy just wants to drop the pies and leave.",
      },
      {
        key: "recliner",
        label: "Behind Kevin’s recliner outside",
        correct: false,
        wrongMsg:
          "If they’re that close to the recliner, it’s already too late.",
      },
    ],
  },
  {
    id: 2,
    title: "Act 1 – Echoes of a Scream",
    text:
      "A neighbor mentions hearing a scream earlier—high-pitched, dramatic, and a little over the top. Which prop replays that moment perfectly?",
    isFinal: false,
    answers: [
      {
        key: "ahhh",
        label: "Kevin with the “AHHHH!” face-in-hole cutout",
        correct: true,
        correctMsg:
          "Correct. If that scream is back, trouble’s not far behind.",
      },
      {
        key: "fuller",
        label: "Fuller staring out with his Pepsi",
        correct: false,
        wrongMsg:
          "Fuller’s dangerous with a 2-liter, but that scream belongs to Kevin.",
      },
      {
        key: "buzz",
        label: "Buzz’s girlfriend picture (WOOF)",
        correct: false,
        wrongMsg:
          "That’s a different kind of crisis entirely.",
      },
    ],
  },
  {
    id: 3,
    title: "Act 2 – The Side Entrance Problem",
    text:
      "Fresh footprints lead past the main door toward the “friends” entrance. If the Bandits test that door, who’s your best silent ally?",
    isFinal: false,
    answers: [
      {
        key: "marley",
        label: "Old Man Marley with his shovel and trashcan",
        correct: true,
        correctMsg:
          "Right call. Marley plus a shovel equals instant attitude adjustment.",
      },
      {
        key: "jockey",
        label: "The horse jockey statue by the drive",
        correct: false,
        wrongMsg:
          "It slows cars, not criminals. You’ll need someone who can actually swing a shovel.",
      },
      {
        key: "recliner",
        label: "Kevin, posted up in the recliner",
        correct: false,
        wrongMsg:
          "If Kevin’s in the recliner, he’s running the movie, not door security.",
      },
    ],
  },
  {
    id: 4,
    title: "Act 2 – Evidence in the Bushes",
    text:
      "Down in the landscaping near the entrance, you spot something knocked over—again. Which prop proves the McCallisters were in a hurry?",
    isFinal: false,
    answers: [
      {
        key: "milk",
        label: "Spilled milk and scattered American Airlines tickets",
        correct: true,
        correctMsg:
          "Exactly. Nothing says “we left in a rush” like soggy plane tickets.",
      },
      {
        key: "spider",
        label: "The spider perched on the column",
        correct: false,
        wrongMsg:
          "The spider’s for psychological warfare later.",
      },
      {
        key: "paint",
        label: "The paint cans hung over the staircase",
        correct: false,
        wrongMsg:
          "Those are still locked and loaded for the grand finale.",
      },
    ],
  },
  {
    id: 5,
    title: "Act 2 – Patterns in the Windows",
    text:
      "Lights flicker in the right-side windows: silhouettes dancing, Fuller’s Pepsi glinting in the glass. What’s the most likely distraction in that part of the house?",
    isFinal: false,
    answers: [
      {
        key: "silhouettes",
        label: "The dancing silhouette party in the windows",
        correct: true,
        correctMsg:
          "Correct. The Bandits think the house is full. That buys you time.",
      },
      {
        key: "fuller",
        label: "Just Fuller sipping Pepsi and watching TV",
        correct: false,
        wrongMsg:
          "Fuller’s there, but the silhouettes sell the illusion of a full house.",
      },
      {
        key: "tv",
        label: "Only the TV showing Angels With Filthy Souls",
        correct: false,
        wrongMsg:
          "The TV’s part of it, but the silhouettes really seal the deal.",
      },
    ],
  },
  {
    id: 6,
    title: "Act 2 – Somebody Took a Break",
    text:
      "While traps are set all over the yard, someone decided to take a breather instead of standing guard. Who was caught lounging?",
    isFinal: false,
    answers: [
      {
        key: "recliner",
        label: "Kevin in the recliner with snacks and Pepsi",
        correct: true,
        correctMsg:
          "Correct. He earned it—but the timing could be better.",
      },
      {
        key: "marley",
        label: "Old Man Marley on watch duty",
        correct: false,
        wrongMsg:
          "If Marley’s on duty, nobody’s slacking.",
      },
      {
        key: "fuller",
        label: "Fuller in the window clutching a Pepsi",
        correct: false,
        wrongMsg:
          "Fuller’s dangerous around bunk beds, not Bandits.",
      },
    ],
  },
  {
    id: 7,
    title: "Act 3 – Fear Factor",
    text:
      "One thing rattled Marv more than paint cans, ice, and irons combined. Something small, silent, and eight-legged. What was it?",
    isFinal: false,
    answers: [
      {
        key: "spider",
        label: "The spider crawling on the column",
        correct: true,
        correctMsg:
          "Right. You can almost hear the scream from here.",
      },
      {
        key: "jail",
        label: "The Wet Bandits jail photo cutout",
        correct: false,
        wrongMsg:
          "That’s the endgame, not the scare tactic.",
      },
      {
        key: "paint",
        label: "The paint cans waiting on the railing",
        correct: false,
        wrongMsg:
          "Those hurt more than they scare. The spider does both.",
      },
    ],
  },
  {
    id: 8,
    title: "Final Act – One Shot to Stop Them",
    text:
      "Harry and Marv are on the front steps of the Bay Hill house. You’ve traced their path, checked the evidence, and you have one move left. What’s your play?",
    isFinal: true,
    answers: [
      {
        key: "paint",
        label: "Drop the paint cans from the upstairs railing",
        correct: true,
        endingType: "challenge_kevin_win",
        correctMsg:
          "Direct hit. That’s a highlight reel moment for home security.",
      },
      {
        key: "marley",
        label: "Signal Old Man Marley to move in",
        correct: true,
        endingType: "challenge_marley_win",
        correctMsg:
          "Smart. When Marley joins the play, the Bandits don’t stay standing for long.",
      },
      {
        key: "hide",
        label: "Dive behind the horse jockey and hope for the best",
        correct: true,
        endingType: "challenge_bandits_escape",
        correctMsg:
          "Bold… and maybe not your best tactical decision. Let’s see how that plays out.",
      },
    ],
  },
];

// ---------------------------
// AUDIO HANDLING
// ---------------------------

const soundEnabledState = { enabled: true };

const sounds = {
  correct: new Audio("sounds/correct.wav"),
  wrong: new Audio("sounds/wrong.wav"),
  endWin: new Audio("sounds/end_win.wav"),
};

function playSound(name) {
  if (!soundEnabledState.enabled) return;
  const snd = sounds[name];
  if (!snd) return;
  try {
    snd.currentTime = 0;
    snd.play();
  } catch (e) {
    // ignore autoplay errors
  }
}

// ---------------------------
// GAME STATE & ELEMENTS
// ---------------------------

let currentMode = null; // "kids" or "challenge"
let currentIndex = 0;
let currentEndingType = null;

const screens = {
  mode: document.getElementById("mode-screen"),
  story: document.getElementById("story-screen"),
  ending: document.getElementById("ending-screen"),
};

const modeLabel = document.getElementById("mode-label");
const progressText = document.getElementById("progress-text");
const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const endingTitle = document.getElementById("ending-title");
const endingText = document.getElementById("ending-text");

const kidsModeBtn = document.getElementById("kids-mode-btn");
const challengeModeBtn = document.getElementById("challenge-mode-btn");
const backToModeBtn = document.getElementById("back-to-mode-btn");
const backToModeBtn2 = document.getElementById("back-to-mode-btn-2");
const playAgainSameBtn = document.getElementById("play-again-same-btn");
const soundToggleBtn = document.getElementById("sound-toggle");

function showScreen(name) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screens[name].classList.add("active");
}

function getQuestionsForMode() {
  return currentMode === "kids" ? kidsQuestions : challengeQuestions;
}

function getModeLabel() {
  return currentMode === "kids"
    ? "Kids Edition"
    : "Challenge Edition";
}

function renderQuestion() {
  const questions = getQuestionsForMode();
  const q = questions[currentIndex];

  modeLabel.textContent = getModeLabel();
  progressText.textContent = `Step ${currentIndex + 1} of ${questions.length}`;
  questionTitle.textContent = q.title;
  questionText.textContent = q.text;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.disabled = true;

  answersContainer.innerHTML = "";
  shuffle(q.answers);
        q.answers.forEach((ans) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = ans.label;
    btn.dataset.key = ans.key;
    btn.addEventListener("click", () => handleAnswerClick(ans, btn, q));
    answersContainer.appendChild(btn);
  });
}

function handleAnswerClick(answer, clickedBtn, question) {
  const buttons = answersContainer.querySelectorAll(".answer-btn");

  // disable all by default
  buttons.forEach((btn) => {
    btn.classList.add("disabled");
  });

  // For both modes, all answers in the final step are "accepted"
  // but may lead to different endings.
  const isFinal = !!question.isFinal;

  if (answer.correct || isFinal) {
    clickedBtn.classList.add("correct");
    const msg =
      answer.correctMsg ||
      (currentMode === "kids"
        ? "Nice choice!"
        : "Good call.");
    feedback.textContent = msg;
    feedback.classList.add("correct");
    nextBtn.disabled = false;
    playSound("correct");

    if (isFinal && answer.endingType) {
      currentEndingType = answer.endingType;
    }
  } else {
    clickedBtn.classList.add("incorrect");
    const fallback =
      answer.wrongMsg ||
      (currentMode === "kids"
        ? "Not quite. Try a different answer."
        : "That move won’t stop the Bandits. Try another.");
    feedback.textContent = fallback;
    feedback.classList.add("incorrect");
    playSound("wrong");

    // Re-enable other buttons so they can try again
    buttons.forEach((btn) => {
      if (btn !== clickedBtn) {
        btn.classList.remove("disabled");
      }
    });
  }
}

function showEnding() {
  showScreen("ending");
  modeLabel.textContent = "";

  let title = "";
  let text = "";

  if (currentEndingType === "kids_kevin_win") {
    title = "You Saved Bay Hill Drive!";
    text =
      "Bullseye! The paint cans sent Harry and Marv flying. Kevin can finally relax with his mac-n-cheese and a Pepsi. Nice work, kid.";
  } else if (currentEndingType === "kids_marley_win") {
    title = "Marley Saved the Day!";
    text =
      "Your choices kept the Bandits busy long enough for Old Man Marley to step in with his shovel. Bay Hill Drive is safe again.";
  } else if (currentEndingType === "challenge_kevin_win") {
    title = "Advanced Tactics: Kevin’s Victory";
    text =
      "Perfect timing, perfect angle. The paint cans did their job, and the Wet Bandits won’t forget Bay Hill Drive anytime soon.";
  } else if (currentEndingType === "challenge_marley_win") {
    title = "Marley: The Quiet Closer";
    text =
      "You played it smart and called in the closer. Marley stepped out of the shadows and the Bandits didn’t stand a chance.";
  } else if (currentEndingType === "challenge_bandits_escape") {
    title = "The Bandits Got Away (This Time)";
    text =
      "Diving behind the horse jockey bought you a story, not a win. The Bandits limped off Bay Hill Drive… but you’ll be ready next time.";
  } else {
    // Fallback generic win
    title = "You Foiled the Wet Bandits!";
    text =
      "Your choices kept Bay Hill Drive safe. The Bandits are gone—for now.";
  }

  endingTitle.textContent = title;
  endingText.textContent = text;
  playSound("endWin");
}

function startMode(mode) {
  currentMode = mode;
  currentIndex = 0;
  currentEndingType = null;
  showScreen("story");
  renderQuestion();
}

// ---------------------------
// EVENT LISTENERS
// ---------------------------

kidsModeBtn.addEventListener("click", () => startMode("kids"));
challengeModeBtn.addEventListener("click", () => startMode("challenge"));

nextBtn.addEventListener("click", () => {
  const questions = getQuestionsForMode();
  const q = questions[currentIndex];

  if (q.isFinal) {
    showEnding();
  } else {
    if (currentIndex < questions.length - 1) {
      currentIndex += 1;
      renderQuestion();
    } else {
      // safety: if last non-final somehow reached
      showEnding();
    }
  }
});

backToModeBtn.addEventListener("click", () => {
  showScreen("mode");
});

backToModeBtn2.addEventListener("click", () => {
  showScreen("mode");
});

playAgainSameBtn.addEventListener("click", () => {
  if (!currentMode) {
    showScreen("mode");
  } else {
    startMode(currentMode);
  }
});

soundToggleBtn.addEventListener("click", () => {
  soundEnabledState.enabled = !soundEnabledState.enabled;
  soundToggleBtn.textContent = soundEnabledState.enabled ? "🔊" : "🔈";
});

// init
showScreen("mode");
