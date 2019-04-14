import React from 'react';
import styled from "styled-components";

import { TodoItem } from './models';
import { Todo } from "./Todo";

const List = styled.ul``;
const ListItem = styled.li``;

export function TodosList({todos}: {todos: TodoItem[]}) {
    const todosJsx = todos.map(todo => (
        <Todo todo={todo} />
    ));

    return (
        <List>
            <ListItem>
                { todosJsx }
            </ListItem>
        </List>
    )
}