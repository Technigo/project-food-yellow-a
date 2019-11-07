//London
//Cuisine
// The restaurant name XX
// * The average cost for a dinner there XX
// * The address of the restaurant
// * An image (you choose which image you'd like to display from the response)
// * Either the `aggregate_rating` or the `rating_text` for that restaurant

const apiKey = "b787e9052c508e6c2069f519f753dbff";
const cityId = 61; //London
const cuisineId = 60; //Japanese

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`

fetch(url, { headers: { "user-key": apiKey } })
  .then(res => res.json())
  .then(json => {
    console.log(json);
    json.restaurants.forEach(resto => {
      document.getElementById("restaurants").innerHTML += `<li>${resto.restaurant.name}</li>`
      document.getElementById("restaurants").innerHTML += `<li>${resto.restaurant.average_cost_for_two}</li>`
      document.getElementById("restaurants").innerHTML += `<li>${resto.restaurant.average_cost_for_two}</li>`

    });
  })
