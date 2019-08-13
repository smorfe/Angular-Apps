import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(http) {
        this.http = http;
        this.newsItems = [];
        this._http = http;
        this.getNews();
    }
    Tab2Page.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    Tab2Page.prototype.getNews = function () {
        var _this = this;
        var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ded4711f22354f7380ad4ef64b194050';
        this.http.get(url)
            .subscribe(function (result) {
            var newResults = result.articles;
            console.log(newResults);
            for (var i = 0; i < newResults.length; i++) {
                var makeSlug = newResults[i].title;
                var slug = makeSlug.replace(/\s+/g, '-').toLowerCase();
                _this.newsItems.push({
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
        }, function (error) {
        });
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map