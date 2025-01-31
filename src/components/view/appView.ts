import { SourcesResponse, NewsResponse } from './../controller/controller';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News
    sources: Sources
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesResponse) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
