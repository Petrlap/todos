import styled from "styled-components";

export const AppContainer = styled.section`
  width: 600px;
  margin: 0;
  background: #fff;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;
export const Header = styled.header`
  border-bottom: 1px solid #e6e6e6;
`;
export const Title = styled.h1`
  margin: 0;
  font-size: 100px;
  font-weight: 100;
  line-height: 120px;
  color: #e9d9d9;
  text-align: center;
  text-rendering: optimizeLegibility;
`;
export const HeaderInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 58px;
  border: none;
  background: #fefefe;
  font-size: 24px;
  font-style: italic;
  box-sizing: border-box;

  &::placeholder {
    color: #e6e6e6;
  }
`;
export const Main = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`;
export const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const Footer = styled.footer`
  padding: 10px 15px;
  height: 20px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  border-top: 1px solid #e6e6e6;
`;
export const FooterCount = styled.span`
  width: 110px;
  color: #949493;
  text-align: left;
`;
export const Filters = styled.ul`
  width: 190px;
  margin: 0;
  padding: 0;
  list-style: none;
  float: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FiltersButton = styled.button`
  width: 110px;
  color: #949493;
  position: relative;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
`;
