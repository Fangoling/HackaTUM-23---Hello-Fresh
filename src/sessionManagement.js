const sessionMap = {}; 
/*
Description: maps the sessionID to the Information for the User, if there is no entry, a user is created 
Parameter: the session ID of the User
Return: userData{filters[], preferences {}}
*/
function mapUser(sessionID){
  if (sessionID == null){
    console.error("No session ID provided, please provide a valid session ID");
  }
  if (sessionMap[sessionID]){
    return sessionMap[sessionID]; 
  } else {
    sessionMap[sessionID] = {
      filters: [], 
      preferences: {}
    }; 
    return sessionMap[sessionID];
  }
}

/*
Description: sets provided filters for SessionID 
Parameter: SessionID, filter: a filter that should be set for the session with SessionID
*/
function toggleFilter(sessionID, filter) {
  if (sessionID === null) {
    console.error("Couldn't set filters, no session ID provided");
    return;
  }
  const session = mapUser(sessionID);
  if (!session) {
    console.error("Session not found for ID: " + sessionID);
    return;
  }
  if (session.filters.includes(filter)) {
    sessionMap[sessionID].filters = session.filters.filter(f => f !== filter)
  } else {
    let arr = [...(session.filters), filter];
    sessionMap[sessionID].filters = arr;
  }
}

/*
Description: updates the passed parameters for the session 
Parameter: SessionID, parameters[] 
*/

function updatePreferences(sessionID, parameters) {

  parameters.forEach((current_obj) => {
    let k = Object.keys(current_obj)[0];
    let v = current_obj[k];

    if (sessionMap[sessionID].preferences[k]) {
      sessionMap[sessionID].preferences[k] += v
    } else {
      sessionMap[sessionID].preferences[k] = v;
    }
  })
}


export { mapUser, toggleFilter, updatePreferences };
