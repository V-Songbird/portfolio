const scrollOffset = '400vw';

const infoSub = document.querySelectorAll('.about-info span');

infoSub.forEach(e => {
  e.innerHTML = e.textContent.replace(/([a-z])([A-Z])/g, '$1 $2');
});

const tl = gsap.timeline();

tl.from('.header a', {
  duration: 0.75,
  opacity: 0,
  y: -50
});

tl.from('.background span', {
  duration: 0.5,
  opacity: 0
});

tl.to('.background span', {
  duration: 1.5,
  x: 'random(-50,50)'
}, -0.25);

tl.from('.main', {
  duration: 0.5,
  y: -20,
  opacity: 0
});

const initAnim = () => {
  gsap.to('.arrow', {
    scrollTrigger: {
      trigger: '.arrow',
      start: '-=300',
      end: '+=400',
      scrub: true
    },
    scale: 0,
    opacity: 0
  });

  const texts = gsap.utils.toArray('#information p');

  texts.forEach(e => {
    gsap.from(e, {
      scrollTrigger: {
        trigger: e,
        start: `-=${scrollOffset} center`,
        end: '+=0 center'
      },
      duration: 0.5,
      y: -20,
      opacity: 0
    });
  });

  gsap.from('.work-card', {
    scrollTrigger: {
      trigger: '.work .row',
      start: `-=${scrollOffset} center`,
      end: '+=0 center'
    },
    duration: 0.5,
    x: -100,
    opacity: 0,
    stagger: 0.15
  });

  const titles = gsap.utils.toArray('section .title');

  titles.forEach(e => {
    gsap.from(e, {
      scrollTrigger: {
        trigger: e,
        start: `-=${scrollOffset} center`,
        end: '+=0 center'
      },
      duration: 1,
      x: 150,
      opacity: 0
    });
  });

  const skills = gsap.utils.toArray('.skills span');

  skills.forEach(e => {
    gsap.from(e, {
      scrollTrigger: {
        trigger: e,
        start: `-=${scrollOffset} center`,
        end: '+=0 center'
      },
      duration: 0.5,
      y: -20,
      opacity: 0
    });
  });

  gsap.from('.icons *', {
    scrollTrigger: {
      trigger: '.icons',
      start: `-=${scrollOffset} center`,
      end: '+=0 center'
    },
    duration: 0.1,
    y: -20,
    opacity: 0,
    stagger: 0.05
  });

  const aboutAfter = CSSRulePlugin.getRule('.about-section::after');

  gsap.to(aboutAfter, {
    scrollTrigger: {
      trigger: '.about-section',
      start: `-=${scrollOffset} center`,
      end: '+=0 center'
    },
    duration: 1,
    cssRule: { scaleX: 1 }
  });
};

const toAbout = () => {
  if (!document.querySelector('.about')) {
    window.location.href = '/#about';
  }

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '.about', offsetY: 80 }
  });
};

const toWork = () => {
  if (!document.querySelector('.work')) {
    window.location.href = '/#work';
  }

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '.work', offsetY: 80 }
  });
};

initAnim();

const inputReset = document.querySelector('#programming');
inputReset.checked = true;

const mixer = mixitup('.skills-list', {
  load: {
    filter: '.programming'
  }
});

// barba.init({
//   transitions: [{
//     name: 'opacity-transition',
//     once () {
//       initAnim();

//       const inputReset = document.querySelector('#programming');
//       inputReset.checked = true;

//       const mixer = mixitup('.skills-list', {
//         load: {
//           filter: '.programming'
//         }
//       });
//     },
//     leave (data) {
//       return gsap.to(data.current.container, {
//         opacity: 0
//       });
//     },
//     enter (data) {
//       initAnim();

//       const inputReset = document.querySelector('#programming');
//       inputReset.checked = true;

//       const mixer = mixitup('.skills-list', {
//         load: {
//           filter: '.programming'
//         }
//       });

//       return gsap.from(data.next.container, {
//         opacity: 0
//       });
//     }
//   }]
// });
