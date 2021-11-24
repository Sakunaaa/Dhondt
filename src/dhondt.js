function compareDivisions(nextElement, previousElement) {
    if (previousElement[0] < nextElement[0]) {
      return -1;
    }
  
    if (previousElement[0] > nextElement[0]) {
      return 1;
    }
  
    return 0;
  }
  
  export function dhondtMethod(votes, tickets) {
    const DIVISION_COUNT = 5;
    const divisions = [votes];
    let divider = 2;
  
    while (divider <= DIVISION_COUNT) {
      const dividedVotes = [];
      for (const vote of votes) {
        dividedVotes.push(vote / divider);
      }
      divisions.push(dividedVotes);
      divider += 1;
    }
  
    const joinedDivisions = [];
  
    for (const row of divisions) {
      for (const index in row) {
        const value = row[index];
  
        joinedDivisions.push([value, index]);
      }
    }
  
    const sortedDivisions = joinedDivisions.sort(compareDivisions);
  
    const splitDivisions = sortedDivisions.slice(0, tickets);
    const ticketDistribution = [0, 0, 0];
  
    for (const pair of splitDivisions) {
      const party = pair[1];
      ticketDistribution[party] += 1;
    }
  
    return ticketDistribution;
  }