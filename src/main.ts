import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Amplify } from 'aws-amplify';

import { Predictions, AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

import awsconfig from './aws-exports';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());
