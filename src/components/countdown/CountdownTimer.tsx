import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

    export type TIMER_FORMAT =
        | 'mm:ss:SS'
        | 'mm:ss:S'
        | 'mm:ss'
        | 'm:ss:SS'
        | 'm:ss:S'
        | 'm:ss';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    width: 100px;
    height: 50px;
`;

const TimerText = styled.span`
    font-size: 64px;
`;

export default function CountdownTimer({
    milliseconds,
    onComplete,
    autoStart = false,
}: {
    milliseconds: number;
    onComplete?: () => void;
    autoStart?: boolean;
}) {
    const [msRemaining, setMsRemaining] = useState(milliseconds);
    const [isRunning, setIsRunning] = useState(autoStart);

    useEffect(() => {
        setMsRemaining(milliseconds);
    }, [milliseconds]);

    useEffect(() => {
        setIsRunning(autoStart);
    }, [autoStart]);

    let previousTime = Date.now();
    useInterval(
        () => {
            const currentTime = Date.now();
            const timeDelta = currentTime - previousTime;
            if (msRemaining - timeDelta <= 0) {
                setMsRemaining(0);
                setIsRunning(false);

                if (onComplete) {
                    console.log('Timer complete');
                    onComplete();
                }

                return;
            }
            setMsRemaining(msRemaining - timeDelta);
            previousTime = currentTime;
        },
        isRunning ? 10 : null
    );

    return (
        <Container>
            <TimerText>{millisToMinutesAndSeconds(msRemaining)}</TimerText>
            <Button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Pause' : 'Start'}
            </Button>
        </Container>
    );
}

export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef<any>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

function millisToMinutesAndSeconds(millis: number) {
    const minutes = Math.floor(millis / 60000);
    const seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
    return seconds === 60
        ? minutes + 1 + ':00'
        : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
