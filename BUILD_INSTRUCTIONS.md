# Build and Deployment Instructions for Vercel

Follow these steps to build and deploy the Incident Management SaaS application on Vercel:

## 1. Vercel Setup

1. Sign up for a Vercel account at https://vercel.com if you haven't already.
2. Install the Vercel CLI:
   ```
   npm i -g vercel
   ```
3. Login to Vercel:
   ```
   vercel login
   ```

## 2. Environment Setup

1. Create a `.env` file in your project root (if not already present) and add your environment variables:
   ```
   VITE_API_URL=https://your-production-api-url.com/api
   ```
2. Make sure to add these environment variables in your Vercel project settings as well.

## 3. Deploy to Vercel

1. Run the following command in your project directory:
   ```
   vercel
   ```
2. Follow the prompts to link your project to Vercel and deploy it.

## 4. Verify Deployment

1. Once the deployment is complete, Vercel will provide you with a URL to your deployed application.
2. Open the URL in your browser to verify that the application is working correctly.

## 5. Continuous Deployment

Vercel automatically sets up continuous deployment from your connected Git repository. Any push to the main branch will trigger a new deployment.

## 6. Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your project settings in the Vercel dashboard.
2. Navigate to the "Domains" section.
3. Add your custom domain and follow the instructions to set up DNS.

## 7. Maintenance

1. Monitor your application using Vercel's built-in analytics and logs.
2. Keep your dependencies updated regularly.
3. Use Vercel's preview deployments feature to test changes before merging to the main branch.

Remember to keep your API endpoint (`VITE_API_URL`) updated in both your local `.env` file and Vercel's environment variables if it changes.