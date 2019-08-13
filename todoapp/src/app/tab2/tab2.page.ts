import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsItemsInfo } from './NewsItemsInfo';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page {
  _http:HttpClient;

  // assign var with newsiteminfo class
  public newsItems: Array<NewsItemsInfo> = [];

  constructor(private http: HttpClient) {
    this._http = http;

    this.getNews();
  }

  // when you refresh the page
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }


  getNews() {
    let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ded4711f22354f7380ad4ef64b194050';

    this.http.get<any>(url)
    .subscribe(result => {
      // get all result articles
      let newResults = result.articles;

      // get all articles
      for(let i = 0; i < newResults.length; i++) {
        // push all articles to new array
        // you can use this 
        // to display it on HTML
        this.newsItems.push({
          author: newResults[i].author,
          title: newResults[i].title,
          url: newResults[i].url,
          img: newResults[i].urlToImage,
          content: newResults[i].content, 
          description: newResults[i].description,
          publishedDate: newResults[i].publishedAt,
          sourceName: newResults[i].source.name,
        });
      }
    }, 
    
    error => {

    });
  }

}
