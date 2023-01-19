import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh; /* Note a medida */
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 5%;
  }
`

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    width: 100%;

    gap: 0.5rem;
    margin-bottom: 5%;
    padding: 0.7rem;

    border: 0;
    border-radius: 35px;
    border: 1px solid ${(props) => props.theme.BORDER};

    &:hover {
      background: #f8f9fa;
      border: 1px solid #f8f9fa;
      transition: background-color 0.2s, border-color 0.2s;
    }

    &:focus-within {
      background: #f8f9fa;
      border: 1px solid #f8f9fa;
    }
  }

  input {
    background: transparent;
    height: 100%;
    flex: 1;
    border: 0;
    outline: none;
    color: ${(props) => props.theme.TEXT};
  }

  button {
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;

    border: 0;
    padding: 1rem;
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
  }
`

export const Input = styled.input``

export const Button = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 28px;
  border: 1px solid ${(props) => props.theme.BORDER};
  margin-top: 5%;
`
