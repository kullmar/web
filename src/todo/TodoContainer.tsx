import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TodoList } from './TodoList';
import { State } from '../rootReducer';
import { connect } from 'react-redux';
import * as todoActions from './actions';
import { getAllTodos } from './selectors';
import { TodoItem } from './models';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const Button = styled.button`
    flex: 0 0 auto;
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
`
const Input = styled.input`
    height: 40px;
    flex: 1 0 auto;
`;
const CenteredRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

interface ContainerState {
    todos: TodoItem[];
}

function TodoContainer({
    todos,
    addTodo,
    loadTodos,
}: {
    todos: TodoItem[];
    addTodo: (text: string) => void;
    loadTodos: () => void;
}) {
    const [text, setText] = useState('');
    useEffect(() => {
        loadTodos();
    }, []);

    return (
        <Container>
            <CenteredRow>
                <h2>Todos</h2>
            </CenteredRow>
            <Row>
                <Input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="What needs to be done?"
                />
                <Button onClick={() => addTodo(text)}>Add todo</Button>
            </Row>
            <TodoList todos={todos} />
        </Container>
    );
}

function mapStateToProps(state: State): ContainerState {
    return {
        todos: getAllTodos(state),
    };
}

export default connect(
    mapStateToProps,
    {
        addTodo: todoActions.addTodo,
        loadTodos: todoActions.loadTodos,
    }
)(TodoContainer);
