import clsx from "clsx";
import styles from "./styles.module.scss";
import { useSpeech } from "../../contexts/SpeechContext";
import { HiOutlineVolumeUp, HiVolumeOff } from "react-icons/hi";

export const SpeechButtons = ({ text }) => {
  const { speak, cancel, isSpeaking } = useSpeech();
  const handleSpeak = () => {
    cancel();
    speak(text);
  };
  const handleMute = () => {
    cancel();
  };
  return (
    <button
      className={clsx(styles.btn, isSpeaking)}
      type="button"
      onClick={isSpeaking ? handleMute : handleSpeak}
    >
      <span className={styles.iconWrap}>
        {isSpeaking ? (
          <HiVolumeOff className={styles.icon} />
        ) : (
          <HiOutlineVolumeUp className={styles.icon} />
        )}
      </span>
    </button>
  );
};
