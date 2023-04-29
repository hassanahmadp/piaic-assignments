// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.

type stringTupel = [string, any];

function createCar(
  manufacturer: string,
  model_name: string,
  ...keywordArgs: stringTupel[]
): Record<string, any> {
  let options = {};
  keywordArgs.forEach(([k, v]: stringTupel): void => {
    options[k] = v;
  });
  let args = { manufacturer, model_name, options };

  return args;
}
