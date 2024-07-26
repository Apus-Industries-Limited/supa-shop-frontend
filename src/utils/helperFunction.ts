import { Ratings } from "../types/Types";

export const averageRating = (ratings : Ratings[] ) => {
    if (ratings.length === 0) return 0;
    const value = ratings.map(item=> item.rating)
    const sum = value.reduce((acc, val) => acc + val, 0);
    const mean = sum / value.length;
    return mean
}
