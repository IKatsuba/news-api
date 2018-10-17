# @katsuba/newsapi
A unofficial modern browser interface for NewsAPI.

Get breaking news headlines, and search for articles from over 30,000 news sources and blogs with news API. Powered by NewsAPI.org.

## Install
```
npm i @katsuba/newsapi
```
## Test
Comming soon...

## Example
```typescript
import { 
    NewsApi, 
    Countries, 
    ArticleResponse 
} from '@katsuba/newsapi';

const api = new NewsAPi('apiKey');

api.topHeadlines({country: Countries.US})
    .then((res: ArticleResponse) => console.log(res))
```

## Example for Angular 6

[Live demo](https://frontend-notes.firebaseapp.com/)

[Repo](https://github.com/IKatsuba/frontend-notes)

```typescript
// app.module.ts
import { NewsApi } from '@katsuba/newsapi';

@NgModule({
  providers: [
    {provide: NewsApi, useFactory: () => new NewsApi(environment.news.apiKey)}
  ]
})
export class AppModule {
}

//news-api.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ArticleResponse, EverythingPayload, NewsApi } from '@katsuba/newsapi';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  constructor(private newsApi: NewsApi) {
  }

  public everything(payload: EverythingPayload): Observable<ArticleResponse> {
    return Observable.create((subscriber: Subscriber<ArticleResponse>) => {
      this.newsApi.everything(payload).then(
        res => {
          subscriber.next(res);
          subscriber.complete();
        },
        error => subscriber.error(error)
      );
    });
  }
}
```