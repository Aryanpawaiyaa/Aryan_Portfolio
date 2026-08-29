import { useState, useEffect } from "react";

interface TypedTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorColor?: string;
}

export default function TypedText({
  words,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseTime = 2200,
  className = "",
  cursorColor = "currentColor",
}: TypedTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentFullWord = words[wordIndex % words.length];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentFullWord.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (text.length < currentFullWord.length) {
        timer = setTimeout(() => {
          setText(currentFullWord.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{text}</span>
      <span
        className="inline-block ml-1 w-0.5 h-[1.1em] align-middle animate-pulse font-mono font-bold rounded-full"
        style={{ backgroundColor: cursorColor }}
      />
    </span>
  );
}
