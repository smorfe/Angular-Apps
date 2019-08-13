import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewsItemsInfo } from '../NewsItemsInfo';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {
  _http:HttpClient;

  // variable 
  // getting the route param
  id:string;
  slug:string;

  // variable content
  title: string;
  img: string;
  content: string;
  publishedDate: string;
  sourceName: string;
  author: string;
  url: string;

  constructor(private http: HttpClient, private route: ActivatedRoute){
    this._http = http;
  }

  ionViewWillEnter(){
    // assigned the var with the route param
    this.id = this.route.snapshot.paramMap.get('id');   
    this.slug = this.route.snapshot.paramMap.get('slug');  
    
    // initialize the get news function
    this.getNews();
  }


  getNews() {
    let url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ded4711f22354f7380ad4ef64b194050';

    this.http.get<any>(url)
    .subscribe(result => {
      // get article based on the id of the param
      var article = result.articles[this.id];
      
      // assigned var with article info
      this.author = article.author;
      this.title = article.title;
      this.img = article.urlToImage;
      this.content = article.content; 
      this.publishedDate = article.publishedAt;
      this.sourceName = article.source.name;
      this.url = article.url;
    }, 
    
    error => {
      console.log(error.message);
    });
  }

}
