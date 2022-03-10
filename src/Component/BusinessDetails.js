import { Button } from "@material-ui/core";
import React from "react";
import { BUSINESS_LIST_ROUTE } from "../Constant";
import { useNavigate } from "react-router";
import { useStore } from "react-redux";
import { AppContainer, FlexContainerRow } from "../Styles/globalStyles";
import styled from "styled-components";

export default function BusinessDetails() {

  const TimeContainer = styled.div`
    color: gray;
  `;

  const TimeSlots = styled.strong`
    min-width: 30px;
    padding: 10px;
    color: black;
  `;

  const TimeKeys = styled.li`
    color: gray;
    padding: 5px;
  `;

  const DataContainer = styled.div`
    padding-bottom: 10px;
    color: black;
  `;

  const AvatarContainer = styled.div`
    margin-right: 80px;
    margin-top: 60px;
    border: solid 4px black;
    height: 300px;
  `;

  const DataRightContainer = styled.div`
    margin-top: 60px;
    font-size: 14px;
  `;

  const navigate = useNavigate();
  const store = useStore();
  const data = store.getState().appReducer.selectedBusiness;
  const getDataValues = (key, value) => {
    return (
      <DataContainer>
        <strong>{key}</strong>: {value}
      </DataContainer>
    );
  };

  const getTimeValues = (key1, value1, key2, value2, key3, value3) => {
    return (
      <TimeContainer>
        <TimeSlots>{key1}</TimeSlots>{value1}
        <TimeSlots>{key2}</TimeSlots>{value2}
        <TimeSlots>{key3}</TimeSlots>{value3}
      </TimeContainer>
    );
  };

  const getHours = () => {
    return (
      <ul>
        {data.hours.map((time, i) => {
          return (
            <TimeKeys key={i}>
              {getTimeValues(
                time.day,
                ':',
                null,
                time.open,
                "-",
                time.close
              )}
            </TimeKeys>
          );
        })}
      </ul>
    );
  };
  return data ? (
    <AppContainer>
      <FlexContainerRow>
        <AvatarContainer>
          <img
            alt="avatar"
            src={data.image}
            style={{
              width: "300px",
            }}
          ></img>
        </AvatarContainer>
        <DataRightContainer>
            {getDataValues("Business Name", data.company_name)}
            {getDataValues("Address", data.address)}
            {getDataValues("Website", data.website)}
            {getDataValues("Time-Solts", getHours())}
        </DataRightContainer>
      </FlexContainerRow>
      <Button
        variant="contained"
        color="primary"
        style={{margin: "20px 0 20px 30px" }}
        onClick={() => {
          navigate(BUSINESS_LIST_ROUTE);
        }}
      >
        Go Back To Listing
      </Button>
    </AppContainer>
  ) : (
    <AppContainer>
      <DataContainer>No Business Selected</DataContainer>
      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px", marginLeft: "30px" }}
        onClick={() => {
          navigate(BUSINESS_LIST_ROUTE);
        }}
      >
        Go Back To Listing
      </Button>
    </AppContainer>
  );
}