import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { SearchModel } from 'src/app/models/search_model';
import { SingleMovieModel } from 'src/app/models/single_movie_model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  suggestions: SearchModel[] = [];
  search: string;
  isLoading: boolean = false;
  isError: boolean = false;
  showModal: boolean = false;

  singleItem: SingleMovieModel;
  isLoadingSingle: boolean = false;
  isSingleError: boolean = false;

  constructor(private _service: MoviesService) {}

  ngOnInit(): void {}

  onChange() {
    this.isLoading = true;
    const value = this.search;
    this._service.searchMovies(value ? value : '@@@@@@@').subscribe(
      (data: any) => {
        this.suggestions = data.results.map(
          (item) =>
            <SearchModel>{
              movieId: item.id,
              title: item.title,
              rating: item.vote_average,
            }
        );
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        this.isError = true;
        console.log(err);
      }
    );
  }

  // showing movie info for this guy...
  showMovieDetails(item: SearchModel) {
    this.isLoadingSingle = true;
    this._service.getSingleMovie(item.movieId).subscribe(
      (data: SingleMovieModel) => {
        this.singleItem = data;
        this.isLoadingSingle = false;
      },
      (err) => {
        this.isLoadingSingle = false;
        this.isSingleError = true;
        console.log(err);
      }
    );
    this.openModal();
    this.clearInput();
  }

  clearInput() {
    this.search = null;
    this.suggestions = [];
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
