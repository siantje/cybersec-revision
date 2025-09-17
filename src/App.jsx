import { useState } from 'react';

function App() {
	// Sample data with cybersecurity concepts
	const cards = [
		{
			question: 'vssadmin.exe Delete Shadows /all /quiet',
			answer: 'Ransomware — deleting backups to block recovery.',
		},
		{
			question: 'Word.exe spawns powershell.exe',
			answer: 'Trojan/Dropper — likely a malicious macro executing a script.',
		},
		{
			question: 'Multiple hosts alert within minutes with same IOC',
			answer: 'Worm — self-propagating lateral spread.',
		},
		{
			question: 'Outbound beacons every 10 minutes to one IP',
			answer: 'Botnet/RAT C2 — persistent command & control.',
		},
		{
			question: 'AV disabled, hidden driver/service present',
			answer: 'Rootkit — stealth + persistence at low level.',
		},
		{
			question: 'Night-time bulk data upload to external IP',
			answer: 'Spyware/Data exfiltration — potential credential or data theft.',
		},
		{
			question: 'Browser homepage keeps resetting; popups',
			answer: 'Adware/PUP — browser hijack for ads.',
		},
		{
			question: 'Mass file renames to .locked/.crypt',
			answer: 'Ransomware — active encryption in progress.',
		},
	];

	// State for current card index and whether showing question or answer
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFlipped, setIsFlipped] = useState(false);

	// Function to handle card flipping
	const handleFlip = () => {
		setIsFlipped(!isFlipped);
	};

	// Function to handle going to previous card
	const handlePrev = () => {
		setIsFlipped(false);
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? cards.length - 1 : prevIndex - 1
		);
	};

	// Function to handle going to next card
	const handleNext = () => {
		setIsFlipped(false);
		setCurrentIndex((prevIndex) =>
			prevIndex === cards.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="container">
			<div
				className={`card ${isFlipped ? 'flipped' : ''}`}
				onClick={handleFlip}
			>
				<div className="card-inner">
					<div className="card-front">
						<p>{cards[currentIndex].question}</p>
					</div>
					<div className="card-back">
						<p>{cards[currentIndex].answer}</p>
					</div>
				</div>
			</div>

			<div className="controls">
				<button onClick={handlePrev}>Prev</button>
				<span className="progress">
					{currentIndex + 1} / {cards.length}
				</span>
				<button onClick={handleNext}>Next</button>
			</div>

			<style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: Arial, sans-serif;
          background-color: #1e1e1e;
          color: white;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        
        .card {
          width: 350px;
          height: 200px;
          perspective: 1000px;
          cursor: pointer;
        }
        
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .flipped .card-inner {
          transform: rotateY(180deg);
        }
        
        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
          border-radius: 8px;
        }
        
        .card-front {
          background-color: #2c3e50;
        }
        
        .card-back {
          background-color: #34495e;
          transform: rotateY(180deg);
        }
        
        .controls {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        
        button {
          padding: 8px 16px;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        button:hover {
          background-color: #2980b9;
        }
        
        .progress {
          font-size: 14px;
          color: #bdc3c7;
        }
      `}</style>
		</div>
	);
}

export default App;
