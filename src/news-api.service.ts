import { API_URL } from './constants';
import { ArticleResponse, EverythingPayload, SourcesPayload, SourcesResponse, TopHeadlinesPayload } from './types';

export class NewsApi {
  constructor(private readonly apiKey?: string) {
  }

  private _fetch<T>(url: string, {body}: { body: any }): Promise<T> {
    const u = new URL(url);
    Object.keys(body).forEach((key) => {
      u.searchParams.append(key, body[key].toString());
    });

    const headers = new Headers();
    if (this.apiKey) {
      headers.append('X-Api-Key', this.apiKey);
    }

    return fetch(u.toString(), {method: 'GET', headers})
      .then(res => res.json()) as Promise<T>;
  }

  public topHeadlines(body: TopHeadlinesPayload): Promise<ArticleResponse> {
    return this._fetch<ArticleResponse>(API_URL + 'top-headlines', {body});
  }

  public everything(body: EverythingPayload): Promise<ArticleResponse> {
    return this._fetch<ArticleResponse>(API_URL + 'everything', {body});
  }

  public sources(body: SourcesPayload): Promise<SourcesResponse> {
    return this._fetch<SourcesResponse>(API_URL + 'sources', {body});
  }
}
