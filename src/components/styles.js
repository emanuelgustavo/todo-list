import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageHeader = styled.header`
  width: 80vw;
  max-width: 640px;
  height: 20vh;
  display: flex;
  justify-content: center;
  margin: 3rem;
`;

export const PageFooter = styled.footer`
  width: 80vw;
  max-width: 640px;
  height: 15vh;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: var(--primary-light);
    width: 4.5rem;
    height: 4.5rem;
  }
`;

export const MainContainer = styled.main`
  width: 90vw;
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const TaskContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 1rem auto;
  padding: 0.25rem;
  display: flex;
  justify-content: space-between;
  border: solid 1px var(--primary-light);
  border-radius: 4px;
  box-sizing: border-box;

  &::after {
    content: "";
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(143, 188, 187, 1) 0%,
      rgba(140, 190, 147, 1) 100%
    );
    position: absolute;
    left: 0px;
    bottom: 0;
    z-index: 1;
    border: solid 2px var(--primary-dark);
    border-radius: 4px;
  }

  p {
    font-size: 2rem;
    padding: 0.25rem;
    color: var(--primary-dark);
    font-family: Lemonada;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    z-index: 2;
  }

  div {
    display: flex;
    justify-content: space-between;
    z-index: 2;

    div {
      svg {
        width: 30px;
        height: 30px;
        margin: 0.25rem;
        fill: var(--primary-light);
      }
    }
  }
`;

export const InputContainer = styled.div`
  width: 90%;
  border-radius: 4px;
  border: 1px solid var(--primary-dark);
  display: block;
  margin: auto;
  padding: 0.25rem;
  background: var(--primary-light);
  font-size: 24px;
  line-height: 28px;
  position: relative;
  box-sizing: border-box;

  input {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid var(--primary-dark);
    font-size: 24px;
    line-height: 28px;
    padding: 0.25rem;
    background: var(--primary-light);

    ::placeholder {
      color: var(--primary-dark);
    }

    :focus {
      background: var(--primary-light);
      outline: none;
    }
  }

  svg {
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 0.25rem;
    right: 2px;
    fill: var(--primary-dark);
  }
`;
