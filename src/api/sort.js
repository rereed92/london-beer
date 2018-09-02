const options = [
  {
    value: 'beer-asc',
    option: 'Beer A - Z'
  },
  {
    value: 'beer-desc',
    option: 'Beer Z - A'
  },
  {
    value: 'quantity_in_stock-desc',
    option: 'Availability High - Low'
  },
  {
    value: 'quantity_in_stock-asc',
    option: 'Availability Low - High'
  },
  {
    value: 'price-desc',
    option: 'Price High - Low'
  },
  {
    value: 'price-asc',
    option: 'Price Low - High'
  },
  {
    value: 'average_review_rating_0_to_5-desc',
    option: 'Ratings'
  }
];

const delay = 200;

export default class sortApi {

  static getSortOptions() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], options));
      }, delay);
    });
  }
}