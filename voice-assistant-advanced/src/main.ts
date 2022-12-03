import "./style.scss";

const talk = (val: string) => {
  const uttarance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(val);
  window.speechSynthesis.speak(uttarance)
};

talk("hello")