import React, { useState } from 'react';

import TimerForm from '../../components/timer-form/TimerForm';
import Content from '../../ui/Content/Content';
import { TimerData } from '../../components/timer-form/TimerForm';
import IntervalTimer from '../../components/countdown/IntervalTimer';

export default function HangboardTimer() {
    const [showForm, setShowForm] = useState(true);
    const [timerData, setTimerData] = useState({
        hangTimeMs: 0,
        restTimeMs: 0,
        repsCount: 1,
        setsCount: 1
    });
    
    const intervals = getIntervals(timerData);

    return(
        <Content>
            { showForm && <TimerForm onSubmit={(data: TimerData) => {
                setTimerData(data);
                setShowForm(false);
            }} />}
            { !showForm && <IntervalTimer milliseconds={intervals}></IntervalTimer>}
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