import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid black;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 50px;

    & + & {
        border-top: none;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
`;

const HeaderTitle = styled.div`
    flex: 1;
    display: flex;
    font-weight: bold;
`;

const HeaderDescription = styled.div`
    flex: 1;
`;

const ExpansionBody = styled.div<{ expanded: boolean }>`
    overflow: ${props => props.expanded? 'visible' : 'hidden' };
    height: ${props => props.expanded? 'auto' : 0};
    max-height: ${props => props.expanded? '1000px' : 0};
    transition: max-height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export default function ExpansionPanel({ label, description, children }: { label: string, description?: string, children?: any }) {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <Container>
            <Header onClick={() => setExpanded(!isExpanded)}>
                <HeaderTitle>{label}</HeaderTitle>
                <HeaderDescription>{description}</HeaderDescription>
            </Header>

            <ExpansionBody expanded={isExpanded}>
                {children}
             </ExpansionBody>
        </Container>
    )
}