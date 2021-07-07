import styled from "@emotion/styled";

export const Button = styled.button`
  width: auto;
  margin: 15px;
  background-color: ${(props) => props.theme.colors.blue};
  font-size: large;
  color: ${(props) => props.theme.colors.white};
  border: 4mm ridge rgba(170, 50, 220, 0.6);
  border-radius: 10px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(11, 11, 11, 0.34);
  -moz-box-shadow: 0px 5px 10px 2px rgba(11, 11, 11, 0.34);
  box-shadow: 0px 5px 10px 2px rgba(11, 11, 11, 0.34);
  padding: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.red};
  }
`;
