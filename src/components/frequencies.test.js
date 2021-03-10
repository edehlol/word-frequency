import { getFrequency } from './App';

test('to return an array of objects with the word and frequency of the word', () => {
  expect(getFrequency(['is', 'this', 'is', 'is', 'this', 'is'])).toEqual([
    { value: 'is', frequency: 4 },
    { value: 'this', frequency: 2 },
  ]);
});

test('to order the array from highest frequency to lowest', () => {
  expect(getFrequency(['one', 'two', 'two', 'three', 'three', 'three'])).toEqual([
    { value: 'three', frequency: 3 },
    { value: 'two', frequency: 2 },
    { value: 'one', frequency: 1 },
  ]);
});

test('removes any other than letter or digit from the array items', () => {
  expect(getFrequency(['is*', 'this,..', 'is'])).toEqual([
    { value: 'is', frequency: 2 },
    { value: 'this', frequency: 1 },
  ]);
});
