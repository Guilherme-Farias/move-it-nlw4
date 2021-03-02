import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
	const { 
		minutes, 
		seconds, 
		hasFinished, 
		isActive, 
		resetCountdown, 
		startCountdown 
	} = useContext(CountdownContext)
	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

	return (
		<>
			<div className={styles.container}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			{ hasFinished ? (
				<button
					disabled
					className={styles.button}
				>
					Ciclo encerrado
				</button>
			) : (
					<>
						{ isActive ? (
							<button
								type="button"
								className={`${styles.button} ${styles.buttonActive}`}
								onClick={resetCountdown}
							>
								Abandonar ciclo
							</button>
						) : (
								<button
									type="button"
									className={styles.button}
									onClick={startCountdown}
								>
									Iniciar um ciclo
								</button>
							)}
					</>
				)}
		</>
	)
}