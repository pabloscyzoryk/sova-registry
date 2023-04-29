// imports
import axios from 'axios';
import { type ReviewProps } from './Review';

const getReviews = async () => {
    const { data } = await axios.get<ReviewProps[]>('/data/reviews.json');
    return data;
}

export { getReviews };