# groupBy

Create a function that takes an array of objects and a string which should match a key of the objects in the array

```js
const northcoders = [
  { name: 'douglas', location: 'manchester' },
  { name: 'liam', location: 'york' },
  { name: 'jim', location: 'leeds' },
  { name: 'haz', location: 'manchester' },
  { name: 'dave', location: 'leeds' },
];

groupBy(northcoders, 'location');
```

The function returns an object where the keys represent the matching values and each matching object is in an array.

```js
// result
{
  manchester: [
    { name: 'douglas', location: 'manchester' },
    { name: 'haz', location: 'manchester' },
  ],
  york: [
    { name: 'liam', location: 'york' },
  ],
  leeds: [
    { name: 'jim', location: 'leeds' },
    { name: 'dave', location: 'leeds' },
  ]
}
```

---

Extra challenge

Allow the second argument to be a function that determines how to group the arrays

```js
const northcoders = [
  { name: 'douglas', hackthonScore: 20 },
  { name: 'liam', hackthonScore: 100 },
  { name: 'jim', hackthonScore: 85 },
  { name: 'haz', hackthonScore: 90 },
  { name: 'dave', hackthonScore: 40 },
];

const results = groupBy(northcoders, (northcoder) => {
  if (northcoder.hackathonScore > 50) {
    return 'winners';
  } else {
    return 'runnersUp';
  }
});

console.log(results);
/*
{
  winners: [
    { name: 'liam', hackthonScore: 100 },
    { name: 'jim', hackthonScore: 85 },
    { name: 'haz', hackthonScore: 90 },
  ],
  runnersUp: [
    { name: 'douglas', hackthonScore: 20 },
    { name: 'dave', hackthonScore: 40 },
  ],
};
*/
```
