import React, { useEffect, useRef } from 'react';
import './Animation.css'; 

function Animation() {
  const finitaniRef = useRef(null);

  const sentence1 = "₣ 1 ₦ 1 ₮";
  const sentence2 = "F i N I T";

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  async function animateWordsIn(sentence) {
    const finitani = finitaniRef.current;
    const words = sentence.split(' ');
    finitani.innerHTML = '';
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'word';
      span.style.animationDelay = `${index * 0.2}s`;
      span.textContent = word;
      finitani.appendChild(span);
    });
    await wait(words.length * 200 + 1000);
  }

  async function animateWordsOut() {
    const finitani = finitaniRef.current;
    const words = finitani.querySelectorAll('.word');
    words.forEach((word, index) => {
      setTimeout(() => {
        word.classList.add('fadeOut');
      }, index * 100);
    });
    await wait(words.length * 100 + 800);
    finitani.innerHTML = '';
  }

  async function animateLettersIn(sentence) {
    const finitani = finitaniRef.current;
    finitani.innerHTML = '';
    [...sentence].forEach((letter, i) => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.style.animationDelay = `${i * 0.1}s`;
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      finitani.appendChild(span);
    });
  }

  useEffect(() => {
    let isCancelled = false;
  
    async function runLoop() {
      while (!isCancelled) {
        await animateWordsIn(sentence1);
        await animateWordsOut();
        await animateLettersIn(sentence2);
        await wait(2000); // pause before restarting
        await animateWordsOut();
      }
    }
  
    runLoop();
  
    // Cleanup in case the component unmounts
    return () => {
      isCancelled = true;
    };
  }, []);
  

  return (
    <div className="finitani" ref={finitaniRef}></div>
  );
}

export default Animation;
