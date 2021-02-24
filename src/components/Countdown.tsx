import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countDownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLef, minutetRight] = String(minutes).padStart(2, '0').split('');
  const [secondLef, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countDownTimeout);
    setIsActive(false); 
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLef}</span>
          <span>{minutetRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLef}</span>
          <span>{secondRight}</span>
        </div>
      </div>

    { hasFinished ? (
      <button
        disabled
        className={styles.countdownButton}
       >
         Ciclo encerrado
      </button>
    ) : (
      <>
        {isActive ? (
         <button 
            type="button"
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
          >
            Abandonar o ciclo
          </button>
        ) : (
              <button 
                type="button"
                className={styles.countdownButton}
                onClick={startCountDown}
              >
                Iniciar um ciclo
              </button>
        )}
      </>
    )}

    
      
    </div>
  );
}