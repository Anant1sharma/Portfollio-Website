import { useEffect, useState } from 'react';

const roles = ["Software Developer", "MERN Stack Developer", "React Js Developer", "Full Stack Developer"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2000);
    return () => clearInterval(interval);
  }, []);

  return <span className="text-red-400">{roles[index]}</span>;
}