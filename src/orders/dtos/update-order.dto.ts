import { 
    IsNotEmpty, 
    IsString, 
    IsInt,
    Min,
    IsUUID
} from "class-validator";

export class UpdateOrderDTO {
    @IsNotEmpty()
    @IsString()
    user_name: string;

    @IsNotEmpty()
    @IsString()
    user_email: string;

    @IsNotEmpty()
    @IsString()
    user_address: string;

    @IsString()
    comment: string;

    @IsNotEmpty()
    @IsUUID()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    delivery: string;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    price_products: number;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    price_total: number;
}