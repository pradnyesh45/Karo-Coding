import React from "react";
import { Table, Container } from "react-bootstrap";
import STL from "../problemComponents/STL";

var STLList = [
  {
    id: 1,
    problemStatement: "STL In C++ | An Introduction",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=LyGlTmaWEPs",
  },
  {
    id: 2,
    problemStatement: "std::array C++ | STL C++ | C++11 Feature",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=OnnRobBeaLc",
  },
  {
    id: 3,
    problemStatement: "Vector In C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=bADtYBxrM8I",
  },
  {
    id: 4,
    problemStatement: "Optimized Way To Use Vector In C++ | STL C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=loBmNtiTXd0",
  },
  {
    id: 5,
    problemStatement: "std::set In C++ | STL C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=1YpxRmsDuls",
  },
  {
    id: 6,
    problemStatement: "Container Inside Container In C++ | STL C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=2QR34zwjWUA",
  },
  {
    id: 7,
    problemStatement: "Multiset In C++ | STL C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=xxA2QjKj73w",
  },
  {
    id: 8,
    problemStatement: "Map In C++ | STL C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=nPSDR5nZzHA",
  },
  {
    id: 9,
    problemStatement: "Multimap In C++ | STL C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=jOJSdEwldwk",
  },
  {
    id: 10,
    problemStatement: "Emplace In STL C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=fHyjZAbZxh0",
  },
  {
    id: 11,
    problemStatement: "forward list In C++ STL",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=g38FEPWBcTA",
  },
  {
    id: 12,
    problemStatement: "list In C++ STL",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=DMqlCXrFY0k",
  },
  {
    id: 13,
    problemStatement: "std::pair In C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Puaw04YmtrI",
  },
  {
    id: 14,
    problemStatement: "std::deque In C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=uGWeixb7HMo",
  },
  {
    id: 15,
    problemStatement: "std::queue In C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=aLkvrRRa1TE",
  },
  {
    id: 16,
    problemStatement: "std::stack In C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Y4yEOJgxISc",
  },
  {
    id: 17,
    problemStatement: "std::priority_queue In C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=JSqznrzWGvc",
  },
  {
    id: 18,
    problemStatement: "std::unordered_set In C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=Yevgn0yu5mI",
  },
  {
    id: 19,
    problemStatement: "std::unordered_multiset In C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=hmc6ck5IsRQ",
  },
  {
    id: 20,
    problemStatement: "std::unordered_map In C++ | STL C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=r01r8mEs9I4",
  },
  {
    id: 21,
    problemStatement: "std::unordered_multimap | STL C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=YHpvqWWo7c0",
  },
  {
    id: 22,
    problemStatement: "C++ STL Algorithm Introduction",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=gPH9mlDFbYw",
  },
  {
    id: 23,
    problemStatement: "std::sort | STL ALGORITHM C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=1j0GqsX2S1I",
  },
  {
    id: 24,
    problemStatement: "std::is_sort | STL ALGORITHM C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=fxyfXCegC-E",
  },
  {
    id: 25,
    problemStatement: "std::partial_sort | STL ALGORITHM C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=duMcuzGBtFA",
  },
  {
    id: 26,
    problemStatement: "std::nth_element | STL ALGORITHM C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=S3mZYay-v3M",
  },
  {
    id: 27,
    problemStatement: "std::is_sorted_until | STL ALGORITHM C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=i4No0Bntghg",
  },
  {
    id: 28,
    problemStatement: "std::iota | STL ALGORITHM C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=_RXnkHGUI6I",
  },
  {
    id: 29,
    problemStatement: "std::copy And std::copy_if | STL ALGORITHM C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=LnIJX_SVdd8",
  },
  {
    id: 30,
    problemStatement: "std::copy_n and std::copy_backward | STL ALGORITHM C++",
    problemLink: "No Link",
    tutorialLink: "https://www.youtube.com/watch?v=2lfxb-vhOKw",
  },
];

function ProblemSTL() {
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
            {STLList.map((listItem) => {
              return <STL STLList={listItem} key={listItem.id} />;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default ProblemSTL;
