import React from "react";
import { Table, Container } from "react-bootstrap";

var cpp = [
  ["problemStatement1", "problemLink1", "tutorialLink1"],
  ["problemStatement2", "problemLink2", "tutorialLink2"],
];

var Cpp = [
  {
    problemStatement: 0,
    problemLink: 0,
    tutorialLink: 0,
  },
  {
    problemStatement: 1,
    problemLink: 1,
    tutorialLink: 1,
  },
];

function Problem() {
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
            <tr>
              {/* {var listItems = cpp.map((number) => {<td>{cpp}</td>})} */}
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            {}
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Problem;
