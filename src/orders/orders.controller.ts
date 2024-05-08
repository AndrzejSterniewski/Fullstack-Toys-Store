import { 
    Controller,
    Get,
    Delete,
    Post,
    Put,
    Param,
    Body,
    ParseUUIDPipe,
    NotFoundException,
 } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { UpdateOrderDTO } from './dtos/update-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

    @Get('/')
    getAll(): any {
        return this.ordersService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: string) {
        const order = await this.ordersService.getById(id);
        if (!order) throw new NotFoundException('Order not found')
        return order;
    }

    @Delete('/:id')
    async deleteById(
        @Param('id', new ParseUUIDPipe()) id: string) {
        if(!this.ordersService.getById(id))
        throw new NotFoundException('Order nor found');

        await this.ordersService.deleteById(id);
        return { success: true };
    }

    @Post('/')
    create(@Body() orderData: CreateOrderDTO) {
        return this.ordersService.create(orderData);
    }

    // @Put('/:id')
    // async update(
    //     @Param('id', new ParseUUIDPipe()) id: string,
    //     @Body() orderData: UpdateOrderDTO,
    // ) {
    //     if(!(await this.ordersService.getById(id)))
    //     throw new NotFoundException('Order not found');

    //     await this.ordersService.updateById(id, orderData)
    //     return  { success: true };
    // }

}