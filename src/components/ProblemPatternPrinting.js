import React from "react";
import { Table, Container } from "react-bootstrap";
import PatternPrinting from "../problemComponents/PatternPrinting";

var PatternPrintingList = [
  {
    id: 1,
    problemStatement: "Star Pattern 1 Program in C Language",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=6irHnysGbSI",
  },
  {
    id: 2,
    problemStatement: "Star Pattern 2",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=hje73IXa8hI",
  },
  {
    id: 3,
    problemStatement: "Star Pattern 3",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=63R1UuaFQVE",
  },
  {
    id: 4,
    problemStatement: "Star Pattern 4",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=rPPbyLq_hDo",
  },
  {
    id: 5,
    problemStatement: "Star Pattern 5",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=yGCQ9if5I-8",
  },
  {
    id: 6,
    problemStatement: "Star Pattern 6",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=JWMKN7OW_SA",
  },
  {
    id: 7,
    problemStatement: "Star Pattern 7",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=O0iAjT27nZQ",
  },
  {
    id: 8,
    problemStatement: "Star Pattern 8",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=1yUUelJsRs0",
  },
  {
    id: 9,
    problemStatement: "Star Pattern 9",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=nEvDsMud17M",
  },
  {
    id: 10,
    problemStatement: "Star Pattern 10",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=YqluI21SCeM",
  },
  {
    id: 11,
    problemStatement: "Star Pattern 11",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=rx-muNpSs_g",
  },
  {
    id: 12,
    problemStatement: "Star Pattern 12",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=BXdnMQiAqZc",
  },
  {
    id: 13,
    problemStatement: "Star Pattern 13",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=GUY5k6gok6w",
  },
  {
    id: 14,
    problemStatement: "Star Pattern 14",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=dRW_edTTZSY",
  },
  {
    id: 15,
    problemStatement: "Star Pattern 15",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=GcF2AMqlFyY",
  },
  {
    id: 16,
    problemStatement: "Star Pattern 16",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=4YriRAf25M8",
  },
  {
    id: 17,
    problemStatement: "Star Pattern 17",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=M2ofZTiLuBs",
  },
  {
    id: 18,
    problemStatement: "Star Pattern 18",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=1s7aXlvIl8Q",
  },
  {
    id: 19,
    problemStatement: "Star Pattern 19",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=GYyAKq1LkZA",
  },
  {
    id: 20,
    problemStatement: "Star Pattern 20",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=-pLTE7Vt-_s",
  },
  {
    id: 21,
    problemStatement: "Star Pattern 21",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=6LubLAnTwdc",
  },
  {
    id: 22,
    problemStatement: "Star Pattern 22",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=KEib760tcno",
  },
  {
    id: 23,
    problemStatement: "Star Pattern 23",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=zQ2X-KGIfqs",
  },
  {
    id: 24,
    problemStatement: "Star Pattern 24",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=rmmAUb9vQoc",
  },
  {
    id: 25,
    problemStatement: "Star Pattern 25",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=oWyRhlpnCU8",
  },
  {
    id: 26,
    problemStatement: "Star Pattern 26",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=eodWsoyd9g4",
  },
  {
    id: 27,
    problemStatement: "Star Pattern 27",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=cYUvaSLVGx8",
  },
  {
    id: 28,
    problemStatement: "Star Pattern 28",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=A6OrTKtyl6Q",
  },
  {
    id: 29,
    problemStatement: "Star Pattern 29",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=njtSdWlth4Q",
  },
  {
    id: 30,
    problemStatement: "Star Pattern 30",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=bCSxNOhXc14",
  },
  {
    id: 31,
    problemStatement: "Star Pattern 31",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=S78LVUajk6o",
  },
  {
    id: 32,
    problemStatement: "Star Pattern 32",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=mHnAR0MEhPM",
  },
  {
    id: 33,
    problemStatement: "Star Pattern 33",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=yMS3-TN_rcU",
  },
  {
    id: 34,
    problemStatement: "Star Pattern 34",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=yX8vhLTaOuI",
  },
  {
    id: 35,
    problemStatement: "Star Pattern 35",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=e_h1gABuA08",
  },
  {
    id: 36,
    problemStatement: "Star Pattern 36",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=_DE-iL5odmI",
  },
];

function ProblemPatternPrinting() {
  return (
    <div>
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Problem </th>
              <th>Problem Link</th>
              <th>Tutorial Link</th>
            </tr>
          </thead>
          <tbody>
            {PatternPrintingList.map((listItem) => {
              return (
                <PatternPrinting
                  PatternPrintingList={listItem}
                  key={listItem.id}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemPatternPrinting;
