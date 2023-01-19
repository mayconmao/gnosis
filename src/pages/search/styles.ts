import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid ${(props) => props.theme.BORDER};
  /* background-color: tomato; */

  button {
    display: flex;
    width: 200px;
    height: 50px;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    border: 0;
    background: #f8f9fa;
    border: 1px solid #f8f9fa;
    color: ${(props) => props.theme.TEXT};
    font-weight: bold;
    border-radius: 28px;

    &:hover {
      background: transparent;
      border: 1px solid ${(props) => props.theme.BORDER};
      transition: background-color 0.2s, border-color 0.2s;
    }

    @media (min-width: 736px) {
    }
  }
`
export const Wrap = styled.div`
  flex: 1;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-left: 22%;

  img {
    display: flex;
    justify-content: center;
  }
`
