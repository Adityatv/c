Vercel API Proxy Project

This project creates a simple API endpoint that fetches data from:

https://dillzy-movie.cricketstream745.workers.dev/hollywood/series?offset=0

and exposes it through your own Vercel deployment.

Steps to use:

1. Upload this project to a GitHub repository.
2. Import the repository into Vercel.
3. Deploy.

After deployment your API will be available at:

https://YOUR_PROJECT.vercel.app/api/series

It refreshes automatically every 24 hours because of cache headers.