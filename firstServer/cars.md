# Car storage API

## **getAllModels()**

return the names of all models in storage as an array of strings.
The name is added to the array only once

## **getCar(key, value)**
get all cars that matches the given key-value pair.
-   return car objects in an array
-   if there is no match, an empty array is returned

### Example
```js
getCar('model', 'Fast GT');
getCar('license', 'ABC-1');
```

## **getAllCars()**
return all car objects in an array or empty array