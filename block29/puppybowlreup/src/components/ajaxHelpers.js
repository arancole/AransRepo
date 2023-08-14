// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2302-ACC-ET-PT-B";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
async function fetchAllPlayers() {
  try {
    const response = await fetch(`${APIURL}/players`);
    const puppies = await response.json();
    return puppies.data.players;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
}
// fetchAllPlayers();

export default fetchAllPlayers;
