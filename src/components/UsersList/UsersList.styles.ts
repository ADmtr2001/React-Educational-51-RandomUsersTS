import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: lightgray;
  width: 100%;
  text-align: center;
  
  button {
    width: 100px;
    height: 30px;
    margin-top: 5px;
    cursor: pointer;
  }
  
  h2 {
    margin-top: 10px;
  }
`;

export const UsersWrapper = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;