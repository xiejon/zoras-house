import React, { useEffect } from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import Groups from "./Groups";
import RecommendedGroups from "./RecommendedGroups";
import "./Dashboard.css";
import CalendarComponent from "./CalendarComponent";
import Announcements from "./Announcements";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  getAllUsers,
  getUsersError,
  getUsersStatus,
  getCurrUserStatus,
  getCurrUser,
} from "../redux/usersSlice";
import RecommendedInput from "./RecommendedInput";

const Dashboard = (props) => {
  const currUser = useSelector(getCurrUser);
  const currUserStatus = useSelector(getCurrUserStatus);

  let now;
  if (currUserStatus === "succeeded") {
    now = currUser.user_info[7];
  }
  return (
    <Container className="dashboard-container">
      <Row>
        <Col className="mt-3 mb-3 dashboard-col d-flex flex-column h-100  gap-2">
          <Row>
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="mt-2">Upcoming Events</Card.Title>
              <CalendarComponent />
            </Card>
          </Row>
          <Row>
            <Card className="w-100 d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="mt-2">Zora Tokens</Card.Title>
              <Card.Body>
                <p>You are {20 - now} visits away from a free prize!</p>
                <ProgressBar
                  className="w-100 mb-2"
                  now={now}
                  label={`${now} visits`}
                  max="20"
                />
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <RecommendedInput />
          </Row>
        </Col>

        <Col className=" mt-3 mb-3 d-flex h-100vh justify-content-center gap-2">
          <RecommendedGroups />
        </Col>

        <Col className=" mt-3 mb-3 d-flex flex-column gap-2">
          <Row>
            <Groups />
          </Row>
          <Row>
            <Announcements />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
