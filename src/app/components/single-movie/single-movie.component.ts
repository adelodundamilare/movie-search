import { Component, OnInit, Input } from '@angular/core';
import { SingleMovieModel } from 'src/app/models/single_movie_model';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss'],
})
export class SingleMovieComponent implements OnInit {
  @Input() item: SingleMovieModel;
  @Input() loading: boolean;
  @Input() error: boolean;

  // values
  image: string;

  private _imageBaseUrl: string = 'https://image.tmdb.org/t/p/original/';

  constructor() {}

  ngOnInit(): void {}

  getYear(value: string): string {
    return value.split('-')[0];
  }

  getImage(value: string): string {
    return this._imageBaseUrl + value;
  }

  hasThumbnail(item: SingleMovieModel): boolean{
    if( item && item.videos && item.videos.results.length > 0){
      return true;
    }
    return false;
  }

  getVideoUrl(video: string):string{
    return `https://www.youtube.com/watch?v=${video}`
  }

  getYoutubeThumbnail(videoId: string):string{
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }
}
