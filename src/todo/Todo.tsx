import { TodoItem } from './models';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
`

export function Todo({todo}: {todo: TodoItem}) {
    return(
        <Box>
            <input 
                type="checkbox"
            />
            <h3>{todo.text}</h3>
        </Box>
    );
}