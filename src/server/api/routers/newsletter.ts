// imports
import { z } from 'zod';

// trpc
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const newsletterRouter = createTRPCRouter({
  post: publicProcedure
    .input(z.string().email('Please, provide a valid email.'))
    .mutation(async ({ ctx, input }) => {
      const exists = await ctx.prisma.newsletter.findFirst({
        where: { email: input },
      });

      if (exists) {
        return 'Already subscribed!';
      }

      await ctx.prisma.newsletter.create({
        data: { email: input },
      });

      console.log(ctx.session)
      return 'Addded to newsletter!';
    }),
});
