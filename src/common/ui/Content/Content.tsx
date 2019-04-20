import styled from 'styled-components';

export default styled.div`
  margin: 0 20% 0 20%;

  ${props => props.theme.breakpoints.phone} {
    margin: 0;
  }
`