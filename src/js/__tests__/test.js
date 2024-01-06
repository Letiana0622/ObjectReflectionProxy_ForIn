import orderByProps, {order} from '../app';

test('test function orderByProps', () => {
  const obj  = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const array = ["name", "level"]
  const actualResult = orderByProps(obj,array);
  const targetResult = { name: 'мечник', level: 2, attack: 80, defence: 40, health: 10 };
  expect(targetResult).toEqual(actualResult);
});


test('test condition in function order', () => {
  const obj  = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const array = ["key"]
  expect(order(obj,array)).toEqual({});
});