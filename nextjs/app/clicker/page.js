"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [bgcolor, setColor] = useState('rgb(84, 84, 84)');
  const [energy, setEnergy] = useState(0);

  const handleClick = () => {
    if (energy > 0) {
      setCount(count + 1);
      setColor('rgb(105, 105, 105)');
      setEnergy(energy - 1);

      // Возвращаем цвет обратно через 0.15 секунды
      setTimeout(() => {
        setColor('rgb(84, 84, 84)');
      }, 150);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy(prevEnergy => Math.min(prevEnergy + 1, 1000000));
    }, 1);

    return () => clearInterval(interval);
  }, []);

  const formatCount = (count) => {
    return count.toString().padStart(8, '0');
  };

  return (
    <div style={styles.container}>
      <div style={styles.counter}>{formatCount(count)}</div>
      <button style={{ ...styles.button, backgroundColor: bgcolor }} onClick={handleClick}>
        Нажми меня
      </button>
      <div style={styles.energy}>Энергия: {energy}</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: '"Lilita One", cursive', // Используем новый шрифт
  },
  counter: {
    color: 'black',
    fontSize: '48px',
    marginBottom: '20px',
    fontFamily: '"Lilita One", cursive', // Используем новый шрифт
  },
  button: {
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    border: '10px solid rgba(84, 84, 84, 0.8)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    fontSize: '16px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.15s', // Установим переход 0.15 секунд
    marginBottom: '20px',
    fontFamily: '"Lilita One", cursive', // Используем новый шрифт
  },
  energy: {
    color: 'black',
    fontSize: '24px',
    marginTop: '20px',
    fontFamily: '"Lilita One", cursive', // Используем новый шрифт
  },
};
