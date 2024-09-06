import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes using Clerk's createRouteMatcher function
const isPublicRoute = createRouteMatcher([
  '/',           // Add the main route as a public route
  '/sign-in(.*)', 
  '/sign-up(.*)',
]);

// Custom Clerk middleware function
export default clerkMiddleware((auth, req) => {
  // If the current request is not a public route, apply protection
  if (!isPublicRoute(req)) {
    auth().protect(); // Protect the route using Clerk's authentication
  }
});

// Config object to specify which routes the middleware should apply to
export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
