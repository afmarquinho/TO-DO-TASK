import styled from "@emotion/styled";

const P = styled.p`
  color: #ffffff;
  font-weight: 800;
  background-color: red;
  width:100%;
  padding: 0.8rem;
`;
const Error = ({ mensaje }) => {
  return <P>{mensaje}</P>;
};

export default Error;
