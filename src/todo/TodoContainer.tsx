import React, { useEffect } from 'react';
import styled from "styled-components";
import { TodosList } from "./TodosList";
import { State } from "../rootReducer";
import { connect } from "react-redux";
import * as todoActions from './actions';

const Container = styled.div``;
const Input = styled.input``;

export function TodoContainer() {
    // useEffect(() => loadTodos(), []);
    
    return(
        <Container>
            <Input
                type="text"
            />
            <TodosList todos={[]}></TodosList>
        </Container>
    );
}

function mapDispatchToProps() {
    return {
        loadTodos: todoActions.loadTodos
    };
}

function mapStateToProps(state: State) {
    return state.todo;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoContainer);