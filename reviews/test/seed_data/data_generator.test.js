const mockData = require('../../server/seed_data/data_generator.js');
const groupData = require('../../server/seed_data/data.js');

const fakeUsers = mockData.userData;
const fakeReviews = mockData.reviews;
const fakeBusinesses = mockData.businessData;

const users = groupData.users;
const businesses = groupData.businesses;

describe('test mock data generator', () => {
  test('should generate 200 fake users', () => {
    expect(fakeUsers.length).toBe(users.length);
  });

  test('should generate 200 fake reviews per business', () => {
    expect(fakeReviews.length).toBe(users.length * businesses.length);
  });

  test('data types should be consistent with DB schema', () => {
    expect(typeof fakeUsers[0].userId).toBe('number');
    expect(typeof fakeUsers[0].username).toBe('string');
    expect(typeof fakeUsers[0].image).toBe('string');
    expect(typeof fakeUsers[0].friends).toBe('number');
    expect(typeof fakeUsers[0].reviews).toBe('number');
    expect(typeof fakeUsers[0].photos).toBe('number');

    expect(typeof fakeReviews[0].businessId).toBe('number');
    expect(typeof fakeReviews[0].user.userId).toBe('number');
    expect(typeof fakeReviews[0].businessRating).toBe('number');
    expect(typeof fakeReviews[0].dateCreated).toBe('object');
    expect(typeof fakeReviews[0].text).toBe('string');
    expect(Array.isArray(fakeReviews[0].images)).toBe(true);
    expect(typeof fakeReviews[0].reviewRating.useful).toBe('number');
    expect(typeof fakeReviews[0].reviewRating.funny).toBe('number');
    expect(typeof fakeReviews[0].reviewRating.cool).toBe('number');

    expect(typeof fakeBusinesses[0].businessId).toBe('number');
    expect(typeof fakeBusinesses[0].businessName).toBe('string');
  });
});

