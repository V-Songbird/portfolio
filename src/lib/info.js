const ec = '<i class="far fa-circle"></i>';
const fc = '<i class="fas fa-circle"></i>';

const myInfo = [
  {
    title: 'BASIC INFORMATION',
    data: {
      name: 'Victor Villegas',
      age: '27 years',
      country: 'Mexico',
      nationality: 'Mexican'
    }
  },
  {
    title: 'LANGUAGES',
    data: {
      spanish: `${fc} ${fc} ${fc} ${fc} ${fc} (Native)`,
      english: `${fc} ${fc} ${fc} ${fc} ${ec} (Advanced)`,
      japanese: `${fc} ${ec} ${ec} ${ec} ${ec} (Beginner)`
    }
  },
  {
    title: 'SOFT SKILLS',
    data: {
      patience: 'Is not about how long you wait, is about how you behave while doing it',
      leadership: '2 Years of experience leading a competitive semi-profesional video game e-sport female team',
      criticalThinking: 'Developed by my experience as a team leader and gamer',
      listening: 'Open to criticism, applying feedback inmediatly searching for improvement'
    }
  }
];

module.exports = myInfo;
