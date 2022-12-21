import { createContext, useContext } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const initialValue = {
  speak: () => {},
  cancel: () => {},
  isSpeaking: false,
};

const SpeechContext = createContext(initialValue);

export const SpeechProvider = ({ children }) => {
  const {
    speak: speakFunc,
    cancel,
    speaking: isSpeaking,
  } = useSpeechSynthesis();

  const speak = (text) => {
    speakFunc({ text, rate: 0.7 });
  };

  return (
    <SpeechContext.Provider value={{ speak, cancel, isSpeaking }}>
      {children}
    </SpeechContext.Provider>
  );
};

export const useSpeech = () => useContext(SpeechContext);
