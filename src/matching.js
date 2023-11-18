export function poll(skip, take, session, db) {

  console.log("-- sorting using: ")
  console.log(session)

  let filtered_recipes = db;
  if (session.filters.length !== 0) {
    filtered_recipes = db.filter( recipe => (
      recipe.tags.some( tag_from_recipe => session.filters.includes(tag_from_recipe))
    ))
  }

  let recipes_weighted = []

  filtered_recipes.forEach( recipe => {
    let weight = 0;

    Object.keys(session.preferences).forEach( session_preference_key => {
      if (recipe.tags.includes(session_preference_key)) {
        weight += session.preferences[session_preference_key];
      }
    })

    recipes_weighted.push({ weight, recipe });
  })

  recipes_weighted.sort( (a, b) => b.weight - a.weight);

  return recipes_weighted.slice(skip, skip + take);

}

