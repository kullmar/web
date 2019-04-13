import React, { useState } from 'react';
import styled from 'styled-components';

export interface TimerData {
    setsCount: number,
    repsCount: number,
    hangTimeMs: number,
    restTimeMs: number
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export default function TimerForm({onSubmit}: {onSubmit?: (data: TimerData) => void}) {
    const [setsCount, setSetsCount] = useState(1);
    const [repsCount, setRepsCount] = useState(6);
    const [hangTimeMs, setHangTimeMs] = useState(10000);
    const [restTimeMs, setRestTimeMs] = useState(2 * 60 * 1000);

    return(
        <Form onSubmit={e => {
            e.preventDefault();
            onSubmit && onSubmit({
                setsCount,
                repsCount,
                hangTimeMs,
                restTimeMs
            });
        }}>
            <label>
                Number of sets<br></br>
                <input
                    value={setsCount}
                    onChange={e => setSetsCount(parseInt(e.target.value))}
                    type="number"
                />
            </label>
            <label>
                Number of reps<br></br>
                <input
                    value={repsCount}
                    onChange={e => setRepsCount(parseInt(e.target.value))}
                    type="number"
                />
            </label>
            <label>
                Hang time<br></br>
                <input
                    value={hangTimeMs}
                    onChange={e => setHangTimeMs(parseInt(e.target.value))}
                    type="number"
                />
            </label>
            <label>
                Rest time<br></br>
                <input
                    value={restTimeMs}
                    onChange={e => setRestTimeMs(parseInt(e.target.value))}
                    type="number"
                />
            </label>
            <button type="submit">OK</button>
        </Form>
    )
}