import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
var DetailPage = /** @class */ (function () {
    function DetailPage(http, route) {
        this.http = http;
        this.route = route;
        this._http = http;
    }
    DetailPage.prototype.ionViewWillEnter = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.slug = this.route.snapshot.paramMap.get('slug');
        this.getNews();
    };
    DetailPage.prototype.getNews = function () {
        var _this = this;
        var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ded4711f22354f7380ad4ef64b194050';
        this.http.get(url)
            .subscribe(function (result) {
            var article = result.articles[_this.id];
            console.log(article);
            _this.author = article.author;
            _this.title = article.title;
            _this.img = article.urlToImage;
            _this.content = article.content;
            _this.publishedDate = article.publishedAt;
            _this.sourceName = article.source.name;
            _this.url = article.url;
        }, function (error) {
            console.log(error.message);
        });
    };
    DetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-detail',
            templateUrl: './detail.page.html',
            styleUrls: ['./detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, ActivatedRoute])
    ], DetailPage);
    return DetailPage;
}());
export { DetailPage };
//# sourceMappingURL=detail.page.js.map