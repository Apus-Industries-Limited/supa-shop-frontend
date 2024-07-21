export interface Crop {
      x: number;
      y: number;
      width: number;
      height: number;
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
      ratings: number[];
      isFeatured: boolean;

}


