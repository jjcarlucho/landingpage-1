import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

// --- Helper Function to format seconds into HH:MM:SS ---
const formatTime = (totalSeconds: number): string => {
  if (totalSeconds < 0) totalSeconds = 0; // Prevent negative time display

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Pad with leading zeros if needed
  const hoursStr = String(hours).padStart(2, '0');
  const minutesStr = String(minutes).padStart(2, '0');
  const secondsStr = String(seconds).padStart(2, '0');

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
};
// -------------------------------------------------------

const Header: React.FC = () => {
  // --- Countdown Logic ---
  const initialDurationInSeconds = 2 * 60 * 60; // 2 hours
  const [remainingSeconds, setRemainingSeconds] = useState(
    initialDurationInSeconds
  );

  useEffect(() => {
    // Exit early if timer reaches zero
    if (remainingSeconds <= 0) {
      return;
    }

    // Set up the interval to decrease time every second
    const intervalId = setInterval(() => {
      setRemainingSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000); // 1000 milliseconds = 1 second

    // Cleanup function: Clear interval when component unmounts or timer reaches zero
    return () => {
      clearInterval(intervalId);
    };
  }, [remainingSeconds]); // Rerun effect if remainingSeconds changes (to stop interval at 0)
  // ----------------------

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center py-2">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full px-6 py-2">
            <div className="flex items-center text-white space-x-3">
              <Clock className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-medium">
                Special Offer Ends In:
              </span>
              {/* --- Display the formatted time --- */}
              <span className="font-mono font-bold tracking-wider">
                {formatTime(remainingSeconds)}
              </span>
              {/* ---------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
