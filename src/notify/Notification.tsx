import React from 'react';
import styled from 'styled-components';

const DEFAULT_DISPLAY_DURATION_MS = 5000;

export interface NotificationItem {
    text: string;
    msRemaining: number;
}

const Container = styled.div`
    border: 1px solid black;
`;

export default function Notification({ text }: { text: string }) {
    return (
        <Container></Container>
    )
}