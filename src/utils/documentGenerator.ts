# Build and Deployment Instructions for Heroku

Follow these steps to build and deploy the Incident Management SaaS application on Heroku:

## 1. Heroku Setup

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
2. Login to Heroku:
   ```
   heroku login
   ```
3. Create a new Heroku app:
   ```
   heroku create your-app-name
   ```

## 2. Environment Setup

1. Set the environment variables on Heroku:
   ```
   heroku config:set VITE_API_URL=https://your-production-api-url.com/api
   ```

## 3. Prepare for Deployment

1. Ensure you have committed all changes to your Git repository.
2. Add the Heroku remote to your Git repository:
   ```
   heroku git:remote -a your-app-name
   ```

## 4. Deploy to Heroku

1. Push your code to Heroku:
   ```
   git push heroku main
   ```
2. Heroku will automatically detect the Node.js buildpack and run the build process.

## 5. Verify Deployment

1. Open your application:
   ```
   heroku open
   ```
2. Check the logs if there are any issues:
   ```
   heroku logs --tail
   ```

## 6. Scaling (Optional)

If needed, you can scale your application:
```
heroku ps:scale web=1
```

## 7. Continuous Deployment

To set up continuous deployment:

1. Connect your GitHub repository to your Heroku app in the Heroku Dashboard.
2. Enable automatic deploys for your desired branch.

## 8. Maintenance

1. Monitor your application using Heroku's built-in metrics and logging.
2. Set up Heroku add-ons for additional features like advanced logging, performance monitoring, etc.

Remember to keep your dependencies updated and regularly check for any security advisories.