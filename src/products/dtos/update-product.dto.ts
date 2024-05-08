import { 
    IsInt, 
    IsNotEmpty, 
    IsString, 
    Length, 
    Min 
} from "class-validator";
import { Transform } from 'class-transformer';

export class UpdateProductDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    price: number;

    @IsNotEmpty()
    @IsString()
    @Length(5, 100)
    description: string;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsString()
    @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
    gallery_img: string;
  
    @IsString()
    main_img: string;
}