// imports
import { createTRPCRouter } from "~/server/api/trpc";
import { contactRouter } from "./routers/contact";
import { newsletterRouter } from "./routers/newsletter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  contact: contactRouter,
  newsletter: newsletterRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
