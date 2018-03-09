const helpers = require('../../server/helpers/helpers.js');
const request = require('supertest');
const app = require('../../server/index.js');
const mongoose = require('mongoose');
const db = require('../../db/models/review.js');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/reviews');
});

afterAll( async () => {
  await mongoose.disconnect();
});

describe('test home route', () => {
  let response;

  beforeAll(async () => {
    response = await request(app).get('/biz/200');
  });

  test('it should respond when a GET request is sent to root route', async () => {
    expect(response.statusCode).toBe(200);
  });

  test('root should serve index.html', async () => {
    expect(response.text).toMatch(/Welp Reviews/);
  });

  test('it should return "business not found" when business ID is not in the DB', async () => {
    response = await request(app).get('/biz/XXX');
    expect(response.statusCode).toBe(500);
    expect(response.text).toBe('business not found');
  });
});

describe('test reviews route', () => {
  let response;

  beforeAll(async () => {
    response = await request(app).get('/biz/200/reviews?search=sequi');
  });

  test('it should return business reviews from database', async () => {
    const dbData = await db.models.reviews.find({ businessId: 200 }).exec();

    expect(JSON.parse(response.text)[0].businessId).toBe(dbData[0].businessId);
    expect(JSON.parse(response.text)[0].length).toBe(dbData[0].length);
    expect(JSON.parse(response.text)[0]).toHaveProperty('user');
    expect(JSON.parse(response.text)[0]).toHaveProperty('businessRating');
    expect(JSON.parse(response.text)[0]).toHaveProperty('dateCreated');
    expect(JSON.parse(response.text)[0]).toHaveProperty('text');
    expect(JSON.parse(response.text)[0]).toHaveProperty('images');
    expect(JSON.parse(response.text)[0]).toHaveProperty('reviewRating');
  });

  test('it should combine reviews with user data', async () => {
    expect(JSON.parse(response.text)[0].user).toHaveProperty('username');
    expect(JSON.parse(response.text)[0].user).toHaveProperty('image');
    expect(JSON.parse(response.text)[0].user).toHaveProperty('friends');
    expect(JSON.parse(response.text)[0].user).toHaveProperty('reviews');
    expect(JSON.parse(response.text)[0].user).toHaveProperty('photos');
  });

});

describe('test error handler of reviews route', async () => {
  const response = await request(app).get('/biz/xxxx/reviews');

  test('it should return a 500 status code for non-existent business id', async () => {
    expect(response.statusCode).toBe(500);
  });
});

describe('test error handlers for addUsersToReviews function', async () => {
  const testData = [{
    user: {
      userId: 'llll',
    },
  }];

  test('it should return "user not found" when given a non-existent user id', async () => {
    const response = await helpers.addUsersToReviews(testData);

    expect(response[0].user).toBe('user not found');
  });
});

describe('test "count" endpoint', () => {
  let response;
  beforeAll(async () => {
    response = await request(app).get('/biz/200/reviews/count?search=sequi');
  });

  test('it should count the number of reviews', async () => {
    expect(typeof JSON.parse(response.text).count).toBe('number');
  });

  test('it should return an status code 500 for wroong params', async () => {
    response = await request(app).get('/biz/xxx/reviews/count');
    expect(response.statusCode).toBe(500);

  });
});

describe('test "/:businessId" endpoint', () => {
  test('it should render the html of the client', async () => {
  const response = await request(app).get('/biz/200');

  expect(response.text).toMatch(/businessId = 200/);

  });
});

