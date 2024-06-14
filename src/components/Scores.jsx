function Score(courseName,{courseResults:{firstName, lastName, studentScore}}){
    return(
        <main className="scores-container">
        <div class="scores">
          <h1>{courseName}</h1>
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{courseResults.firstName} </td>
                <td>{courseResults.lastName} </td>
                <td>{courseResults.studentScore}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    )
}
export default Score;