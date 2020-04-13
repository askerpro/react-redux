import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) =>
  axios
    .get('https://ok-crm.ru/api/site/reviews.php')
    .then((response) => {
      res.end(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
