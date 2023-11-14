import styled from "styled-components";
import Circle from "../icons/Circle.svg";
import ThreeDot from "../icons/threeDot.svg";
import greenCircle from "../icons/greenCircle.svg";

const Container = styled.div`
  width: 320px;
  height: 140px;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  position: relative;
  @media only screen and (max-width: 413px) {
    width: 290px;
    height: 150px;
  }
`;

const ProfileImg = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
`;
const Active = styled.img`
  position: absolute;
  right: 10px;
  top: 28px;
  width: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const Info = styled.div`
  padding: 5px;
`;

const Span = styled.span`
  color: #c0c0c0;
`;

const LastIcons = styled.div`
  display: flex;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 4px;
  margin: 4px;
  border-radius: 5px;
  border: 1px solid #c0c0c0;
`;

const SpanIcon = styled.span`
  height: 20px;
  padding: 4px;
  margin: 4px;
  border-radius: 5px;
  border: 1px solid #c0c0c0;
  text-align: center;
`;

const Card = ({ card }) => {
  return (
    <Container>
      <ProfileImg
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="profile"
      />
      <Active src={greenCircle}></Active>

      <Wrapper>
        <Span>{card.id}</Span>

        <Info>
          {card.title.substring(0, 70)} {card.title.length > 70 && "..."}
        </Info>

        <LastIcons>
          <Icon src={ThreeDot} />
          <SpanIcon>
            <img src={Circle} /> <Span> {card.tag}</Span>
          </SpanIcon>
        </LastIcons>
      </Wrapper>
    </Container>
  );
};

export default Card;
