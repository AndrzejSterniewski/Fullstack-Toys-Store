import { 
    Injectable,
    BadRequestException,
 } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
    constructor (private prismaService: PrismaService) {}

   public getAll(): Promise<Order[]> {
        return this.prismaService.order.findMany({
          include: { products: true },
        });
    }
    
    public getById(id: Order['id']): Promise<Order | null> {
        return this.prismaService.order.findUnique({
            where: { id },
            include: { products: true },
        })
    }

    public async deleteById(id: Order['id']): Promise<Order> {
        return this.prismaService.order.delete({
            where: { id },
        })
    }

    public async create(
        orderData: CreateOrderDTO): Promise<Order> {
        const { productIds, ...otherData } = orderData;
        try {
          return await this.prismaService.order.create({
            data: {
              ...otherData,
              products: {
                connect: productIds.map((id) => ({ id })),
              },
            },
          });
        } catch (error) {
          if (error.code === 'P2025')
            throw new BadRequestException("Product doesn't exist");
          throw error;
        }
      }

    // public updateById(
    //     id: Order['id'], 
    //     orderData: Omit<Order,'id' | 'createdAt' | 'updatedAt'>): Promise<Order> {
    //     return this.prismaService.order.update({
    //         where: { id },
    //         data: orderData,
    //     });
    // }
}