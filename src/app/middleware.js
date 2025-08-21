export function middleware(request) {
  // Check if the request is for the /apis/user route
  if (request.nextUrl.pathname.startsWith('/apis/user')) {
    // Log the request method and URL
    console.log(`Request Method: ${request.method}`);
    console.log(`Request URL: ${request.url}`);
    
    // You can add more logic here, like authentication or validation
  }

  // Continue to the next middleware or route handler
  return NextResponse.next();
}