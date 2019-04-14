import styled from "styled-components";
import { TodosList } from "./TodosList";

const Container = styled.div``;
const Input = styled.input``;

export function TodoContainer() {
    return(
        <Container>
            <Input
                type="text"
            />
            <TodosList></TodosList>
        </Container>
    );
}

function mapStateToProps(state) {
    return { todo }
}