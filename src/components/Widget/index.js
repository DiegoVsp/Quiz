import styled from 'styled-components';
import db from '../../../db.json';

const Widget = styled.div`
margin-top:24px;
margin-bottom:24px;
/* border:1px solid ${({ theme }) => theme.colors.primary}; */
background-color:${({ theme }) => theme.colors.primary};
border-radius:4px;
overflow:hidden;

h1,h2,h3{
  font-size: 16px;
  font-weight:700;
  line-height:1;
  margin-bottom:0;
}
p {
  font-size:14px;
  font-weight:400;
  line-height:1;
}
`;
Widget.Header = styled.header`
display:flex;
justify-content:flex-start;
align-items:center;
padding:18px 32px;
background-color: ${({ theme }) => theme.colors.secondary};

*{
  margin:0;
}
`;
Widget.Content = styled.div`
background-color: ${({ theme }) => theme.colors.primary};
padding:24px 32px 32px 32px;
p span {
  font-size:2rem;
}

.res{
  font-size:2rem;
  text-align:center;
}
&>*:first-child{
  margin-top:0;
}
&>*:last-child{
  margin-bottom:0;
}
ul {
  list-style:none;
  padding:0;
}
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background: ${(props) => props.bg || `${db.theme.colors.primary}70`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => `${theme.colors.extraColor}60`};
  }
`;

export default Widget;
