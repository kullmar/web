import React, { useEffect } from 'react';
import styled from "styled-components";
import { TodosList } from "./TodosList";
import { State } from "../rootReducer";
import { connect } from "react-redux";
import * as todoActions from './actions';
import { getAllTodos } from './selectors';
import { TodoItem } from './models';

const Container = styled.div``;
const Input = styled.input``;

interface ContainerState {
    todos: TodoItem[];
}

function TodoContainer({todos, loadTodos}: { todos: TodoItem[], loadTodos: () => void}) {
    useEffect(() => {
        loadTodos()
    }, []);
    
    return(
        <Container>
            <Input
                type="text"
            />
            <TodosList todos={todos}></TodosList>
        </Container>
    );
}

function mapStateToProps(state: State): ContainerState {
    return {
        todos: getAllTodos(state)
    };
}

export default connect(
    mapStateToProps,
    {
        loadTodos: todoActions.loadTodos
    }
)(TodoContainer);