// imports
import { z } from 'zod';

// trpc
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '~/server/api/trpc';

export const contactRouter = createTRPCRouter({
  post: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, 'Name field must not be empty.'),
        email: z.string().email('Email field must be a valid email.'),
        message: z
          .string()
          .min(10, 'Message field must be at least 10 characters long.'),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.contact.create({
        data: input
      });

      return "Message sent successfully!";
    }),
});
