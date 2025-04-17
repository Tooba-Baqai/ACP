
use('t');

db.getCollection('t').insertMany([
  { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
  { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
  { 'item': 'tt', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
  { 'item': 'tt', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
]);
db.getCollection('t').insertOne(
  {
    'name':'tooba','price':29
  }
);

const salesOnApril4th = db.getCollection('t').find({
  name: 'tooba',
}).toArray();
const upd = db.getCollection('t').updateOne({
  name: 'Tooba'
},{$set:{name:'alina'}});
const updm = db.getCollection('t').updateMany({
  quantity: 1
},{$set:{quantity: 100}});
const del = db.getCollection('t').deleteMany({
  quantity: 100
});
const fnd = db.getCollection('t').find({
  price:7.5
});
console.log(JSON.stringify (salesOnApril4th));
console.log(upd);
console.log(updm);
console.log(del);
console.log (fnd.count());
