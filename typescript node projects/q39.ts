// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
const city_country = (city: string, country: string) => {
  console.log(city + ", " + country);
};
city_country("Lahore", "Pakistan");

// Call your function with at least three city-country pairs, and print the value that’s returned.
city_country("Mumbai", "India");
city_country("Tehran", "Iran");
city_country("Beijing", "China");

export {};
