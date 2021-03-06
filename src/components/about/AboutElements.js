import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media screen and (max-width: 852px) {
    flex-direction: column;
   
  }
  &.about {
    @media screen and (max-width: 852px) {
      flex-direction: column-reverse;
      padding:1.5rem 0;
    }
  }
`;
export const Title = styled.h2`
  font-size: 3.5rem;
  margin: 3rem 1rem 0 0;
  color: #fff;
  @media screen and (max-width: 1270px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 852px) {
    font-size: 3rem;
    margin: 3rem 0 0 0;
    text-align: center;
  }
`;
export const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 0.5rem 0 0;
  color: #fff;
  @media screen and (max-width: 1270px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 852px) {
    font-size: 1.8rem;
    margin: 0.5rem 0 0 0;
    text-align: center;
  }
`;
export const Ilustation = styled.img`
  width: 26.5rem;
  margin: 3rem 0 0;
  @media screen and (max-width: 1270px) {
    width: 40%;
  }
  @media screen and (max-width: 852px) {
    width: 100%;
  }
  @media screen and (max-width: 560px) {
    width: 20rem !important;
  }
  @media screen and (max-width: 319px) {
    width: 15rem !important;
  }
`;

export const Paragraph = styled.p`
padding: 0.5rem 0;
font-size:1.2rem;
color: #000;
@media screen and (max-width: 852px) {
  padding: 0.5rem 2rem 0.5rem;
  font-size: 1.1rem!important;
  text-align:center;
  margin: 0;
@media screen and (max-width: 319px) {
  padding: 0.5rem 1rem 0.5rem ;
  font-size: 1rem!important;
  text-align:center;
  margin: 0;
}
`;
