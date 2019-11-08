//London
//Cuisine
// The restaurant name XX
// * The average cost for a dinner there XX
// * The address of the restaurant XX
// * An image (you choose which image you'd like to display from the response)
// * Either the `aggregate_rating` or the `rating_text` for that restaurant

const apiKey = "ea43edc7f1e9f80698633ebd64a5f192";
const cityId = 61; //London
const cuisineId = 60; //Japanese
const cards = document.getElementById('cards')



const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&cuisines=${cuisineId}`

// &sort=cost&order=desc

fetch(url, {
  headers: {
    "user-key": apiKey
  }
})
  .then(res => res.json())
  .then(json => {
    console.log(json);
    json.restaurants.forEach(resto => {
      cards.innerHTML += `
      <div class="card">
          <img class ="photo" src=${resto.restaurant.photos[0].photo.thumb_url}>
          <div class="nameRate">
            <p>${resto.restaurant.name} </p> <p> ${resto.restaurant.user_rating.aggregate_rating}</p>
          </div>
          <p class="address">Address: ${resto.restaurant.location.address} </p>
          <p class="average"> Average price: ${resto.restaurant.average_cost_for_two / 2} £</p>

      </div>
      `
    });
  });



// const priceDescending = () => {
//   averagePrice.sort()
// }