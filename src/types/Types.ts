export interface Ratings {
      userId: string
      rating: number
}

export interface Review{
      userId: string
      review: string
}

export interface Password{
      oldPassword: string;
      newPassword: string;
      confirmPassword: string;
}

export interface ShopProps {
      id: string;
      name:string;
      email:string;
      phone_number: string;
      username: string;
      address: string
      city: string
      country: string
      ratings: Ratings[]
      reviews: Review[]
      dp: string
      isVerified: boolean
      isPromoted: boolean 
      category:string
      createdAt: string
}



export interface Product {
      id: string;
      name: string;
      description: string;
      price: string;
      merchantId: string;
      category: string;
      dp: string;
      images: string[];
      quantity: string;
      isInStock: boolean;
      color: string[]
      dimension: unknown;
      ratings: Ratings[];
      reviews: Review[]
      isFeatured: boolean;
}

export interface UserSafe{
      id: string
      dp: string
      email: string
      isVerified: boolean
      name: string
      phone_number: string
      username: string
}
