import React, { useState } from 'react';

import TimerForm from './timer-form/TimerForm';
import Content from '../common/ui/Content/Content';
import { TimerData } from './timer-form/TimerForm';
import IntervalTimer from '../common/countdown/IntervalTimer';
import styled from 'styled-components';

const CenteredDiv = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function HangboardTimer() {
    const [showForm, setShowForm] = useState(true);
    const [timerData, setTimerData] = useState({
        hangTimeMs: 0,
        restTimeMs: 0,
        repsCount: 1,
        setsCount: 1,
    });

    const intervals = getIntervals(timerData);

    return (
        <Content>
            <CenteredDiv>
                {showForm && (
                    <TimerForm
                        onSubmit={(data: TimerData) => {
                            setTimerData(data);
                            setShowForm(false);
                        }}
                    />
                )}
                {!showForm && <IntervalTimer milliseconds={intervals} />}
            </CenteredDiv>
        </Content>
    );
}

function getIntervals(data: TimerData) {
    let intervals: number[] = [];
    for (let i = 0; i < data.setsCount; ++i) {
        for (let j = 0; j < data.repsCount; ++j) {
            intervals = [...intervals, data.hangTimeMs, data.restTimeMs];
        }
    }
    return intervals;
}
