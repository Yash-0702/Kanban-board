import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Dot from "../icons/dot.svg";
import Plus from "../icons/plus.svg";
import Card from "./Card";
import { status, GroupingPriority, OrderingPriority } from "../data.js";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  overflow: auto;

  @media only screen and (min-width: 1700px) {
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  background-color: #e0e0e0;
`;

const Info = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 500;
  margin: 10px;
  border-radius: 10px;
  padding: 5px;
  position: relative;
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
  margin: 0px 4px;
  border-radius: 50%;
`;

const SpanIcon = styled.span`
  width: 22px;
  height: 22px;
  margin: 0px 4px;
  border-radius: 50%;
`;

const LastIcons = styled.div`
  position: absolute;
  right: 0;
`;

const Text = styled.span`
  margin: 0px 10px;
`;

const Main = ({ type }) => {
  const ApiUrl = "https://api.quicksell.co/v1/internal/frontend-assignment";

  //save view state

  const [Data, setData] = useState([]);
  const [Type, setType] = useState({
    Grouping:
      JSON.parse(localStorage.getItem("kanbanViewState"))?.Grouping || "status",
    Ordering:
      JSON.parse(localStorage.getItem("kanbanViewState"))?.Ordering ||
      "priority",
  });

  //api call

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(ApiUrl);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  // display data by local storage and re rendering

  useEffect(() => {
    const restoreViewState = () => {
      const savedViewState = localStorage.getItem("kanbanViewState") || null;

      if (savedViewState != null) {
        setType({
          Grouping: JSON.parse(savedViewState).Grouping,
          Ordering: JSON.parse(savedViewState).Ordering,
        });
      } else {
        setType({
          Grouping: "status",
          Ordering: "priority",
        });
      }
    };

    restoreViewState();
  });

  // sorting logic

  if (Type.Ordering === "title") {
    Data?.tickets?.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  } else {
    Data?.tickets?.sort((a, b) => {
      return b.priority - a.priority;
    });
  }

  // grouping logic user

  if (Type.Grouping === "user") {
    return (
      <Container>
        {Data?.users?.map((data) => (
          <Wrapper>
            <Info>
              <Icon src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />{" "}
              <Text>
                {data.name} (
                {
                  Data?.tickets?.filter((ticket) => ticket.userId === data.id)
                    .length
                }
                )
              </Text>
              <LastIcons>
                <Icon src={Plus} />
                <Icon src={Dot} />
              </LastIcons>
            </Info>

            {Data?.tickets
              ?.filter((ticket) => ticket.userId === data.id)

              .map((card) => (
                <Card card={card} />
              ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
  // grouping logic status
  else if (Type.Grouping === "status") {
    return (
      <Container>
        {status?.map((data) => (
          <Wrapper>
            <Info>
              <SpanIcon>{data.Icon}</SpanIcon>
              <Text>
                {data.Name} (
                {
                  Data?.tickets?.filter((ticket) => ticket.status === data.Name)
                    .length
                }
                )
              </Text>
              <LastIcons>
                <Icon src={Plus} />
                <Icon src={Dot} />
              </LastIcons>
            </Info>

            {Data?.tickets
              ?.filter((ticket) => ticket.status === data.Name)
              .map((card) => (
                <Card card={card} />
              ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
  // grouping logic priority and ordering logic priority
  else if (Type.Grouping === "priority" && Type.Ordering === "priority") {
    return (
      <Container>
        {OrderingPriority?.map((data) => (
          <Wrapper>
            <Info>
              <SpanIcon>{data.Icon}</SpanIcon>
              <Text>
                {data.Name} (
                {
                  Data?.tickets?.filter(
                    (ticket) => ticket.priority === data.Number
                  ).length
                }
                )
              </Text>
              <LastIcons>
                <Icon src={Plus} />
                <Icon src={Dot} />
              </LastIcons>
            </Info>

            {Data?.tickets
              ?.filter((ticket) => ticket.priority === data.Number)
              .map((card) => (
                <Card card={card} />
              ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
  // grouping logic priority and ordering logic title
  else if (Type.Grouping === "priority") {
    return (
      <Container>
        {GroupingPriority?.map((data) => (
          <Wrapper>
            <Info>
              <SpanIcon>{data.Icon}</SpanIcon>
              <Text>
                {data.Name} (
                {
                  Data?.tickets?.filter(
                    (ticket) => ticket.priority === data.Number
                  ).length
                }
                )
              </Text>
              <LastIcons>
                <Icon src={Plus} />
                <Icon src={Dot} />
              </LastIcons>
            </Info>

            {Data?.tickets
              ?.filter((ticket) => ticket.priority === data.Number)
              .map((card) => (
                <Card card={card} />
              ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
};

export default Main;
