import cuid from 'cuid';
import { AssertionError } from 'assert';

export interface Review {
  url: string;
  region: string;
  location: string;
  date: string;
  preview: string;
}

export const createReview = (): Review => ({
  url: cuid(),
  region: '',
  location: '',
  date: '',
  preview: '',
});

const url = '/api/reviews';

export const getReviews = async (): Promise<Review[]> => {
  let reviews: Review[] = [];
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    console.log(response);
    if (Array.isArray(responseData)) {
      reviews = responseData.sort((review1, review2) => {
        const date1 = new Date(review1.date);
        const date2 = new Date(review2.date);
        return date1.getMilliseconds() >= date2.getMilliseconds() ? 1 : -1;
      });
      return new Promise((resolve) => {
        resolve(
          reviews.map((review) => ({
            ...review,
            date: new Date(review.date).toLocaleDateString(),
          })),
        );
      });
    }
  } catch (error) {
    console.error('Ошибка:', error);
  }
  return new Promise<Review[]>((resolve) => {
    resolve([]);
  });
};
