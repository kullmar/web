import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';

export default function IntervalTimer({
    milliseconds,
    onComplete,
}: {
    milliseconds: number[];
    onComplete?: () => void;
}) {
    const [index, setIndex] = useState(0);
    const [autoStart, setAutoStart] = useState(false);

    return (
        <CountdownTimer
            key={index}
            autoStart={autoStart}
            milliseconds={milliseconds[index]}
            onComplete={() => {
                if (index + 1 < milliseconds.length) {
                    setIndex(index + 1);
                    setAutoStart(true);
                } else {
                    if (onComplete) {
                        onComplete();
                    }
                    console.log('Interval timer finished');
                    setAutoStart(false);
                }
            }}
        />
    );
}
