export class Product {
    id!: string;
    name!: string;
    price!: number;
    tags?: string[];
    favorite!: boolean;
    discountPrice!: number;
    stars!: number;
    imageUrl!: string;
    origins!: string[];
    deliveryDay!: string;
    is_in_inventory!: boolean;
}
