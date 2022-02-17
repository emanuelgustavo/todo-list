import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 768px;
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

export const MainContainer = styled.div`
  width: 90%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
`;

export const PageFooter = styled.footer`
  width: 80vw;
  max-width: 640px;
  height: 15vh;
  margin-top: 2rem;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: var(--primary-light);
    width: 4.5rem;
    height: 4.5rem;
  }
`;

export const TaskContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 1rem auto;
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  border: solid 1px var(--primary-light);
  border-radius: 4px;
  box-sizing: border-box;

  /*The task timer visual progress*/
  &::after {
    content: "";
    width: ${(props) => `${props.taskTimeWidth}%`};
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

  /*The rest timer visual progress*/
  &::before {
    content: "";
    width: ${(props) => `${props.restTimeWidth}%`};
    height: 0.5rem;
    background: var(--tomato);
    position: absolute;
    left: 0px;
    bottom: 0;
    z-index: 2;
    border: solid 2px var(--primary-dark);
    border-radius: 4px;
  }

  p {
    font-size: 2rem;
    padding: 0.25rem;
    color: var(--primary-dark);
    line-height: 2.5rem;
    z-index: 2;
    text-decoration: ${(props) => props.done};
    word-break: break-all;
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
  position: relative;
  box-sizing: border-box;

  input {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid var(--primary-dark);
    font-size: 2rem;
    line-height: 2.5rem;
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
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const TimerContainer = styled.div`
  position: absolute;
  width: 100px;
  right: 25px;
  top: 25px;
  color: var(--primary-light);
  border: 1px solid var(--timer-red);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    color: var(--timer-red);
    background: var(--primary-light);
  }
`;

//collapsed menu
export const MenuItemContainer = styled.div`
  width: 90%;
  border: 1px solid #ddd;
  background: rebeccapurple;
  color: white;
  padding: 15px;
  margin-bottom: 0;
`;

export const MenuOptionContainer = styled.div`
  border: 1px solid gray;
  border-top: none;
  opacity: ${(props) => (props.open ? "1" : "0")};
  max-height: ${(props) => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.open ? "15px" : "0px 15px")};
  transition: all 0.3s;

  p {
    margin: 0;
  }

  input {
    margin: 0;
  }
`;
