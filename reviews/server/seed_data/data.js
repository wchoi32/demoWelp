const names = [`Oleg's`, `Nick's`, `John's`,   `Melvin's`, `Andrea's`, `Toby's`];
const food = ['Burger', 'Pizza', 'Hot Dog', 'Sandwich', 'Sushi', 'Curry'];
const suffix = ['Palace', 'Fusion', 'Saloon', 'Reactor', 'Emporium', 'Shack', 'Buffet'];

const title = ['Count', 'Duke', 'King', 'Empress', 'Princess', 'Esquire'];
const firstName = ['Melvin', 'Fred', 'Ivy', 'Sue'];
const suffixUser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mockupData = {businesses: [], users: []};
let count = 200;
for (let i = 0; i < names.length; i++) {
  for (let j = 0; j < food.length; j++) {
    for (let k = 0; k < suffix.length; k++) {
      let businessName = names[i] + ' ' + food[j] + ' ' + suffix[k];
      mockupData.businesses.push({id: count, name: businessName});
      count++;
    }
  }
}
mockupData.businesses = mockupData.businesses.slice(0, 200);

let userCount = 0;
for (let i = 0; i < title.length; i++) {
    for (let j = 0; j < firstName.length; j++) {
        for (let k = 0; k < suffixUser.length; k++) {
            let userName = title[i] + firstName[j] + suffixUser[k];
            mockupData.users.push({ id: userCount, name: userName});
            userCount++;
        }
    }
}
mockupData.users = mockupData.users.slice(0, 200);

module.exports.businesses = mockupData.businesses;
module.exports.users = mockupData.users;

 