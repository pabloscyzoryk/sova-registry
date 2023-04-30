// imports
import { z } from 'zod';

// trpc
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const userRouter = createTRPCRouter({
  getUserName: publicProcedure
    .query(async ({ ctx }) => {
      if(!ctx.session) {
        return null;
      }

      const user = await ctx.prisma.user.findFirst({
        where: { id: ctx.session.user.id }
      })

      
    }),
});
