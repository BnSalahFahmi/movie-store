import { Injectable } from '@angular/core';
import { Movie } from 'src/app/catalog-movies/models/Movie.model';
import { Serie } from 'src/app/catalog-series/models/Serie.model';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import { Subject, BehaviorSubject } from 'rxjs';
import { cloneDeep } from 'lodash-es';
import { SuccessNotifToast } from 'src/app/shared/components/success-notif/success-notif.component';
import { ErrorNotifToast } from 'src/app/shared/components/error-notif/error-notif.component';

@Injectable()
export class CartService {

    public rowsEvent: Subject<(Movie | Serie)[]>;
    options: GlobalConfig;

    constructor(private toastrService: ToastrService) {
        this.options = this.toastrService.toastrConfig;
        this.rowsEvent = new BehaviorSubject([]);
    }

    getRows() {
        if (localStorage.getItem('rows')) {
            return [...JSON.parse(localStorage.getItem('rows'))];
        } else {
            return [];
        }
    }

    addMovieToCart(movie: Movie) {
        if (!localStorage.getItem('rows')) {
            localStorage.setItem('rows', JSON.stringify([movie]));
        } else {
            const savedRows = JSON.parse(localStorage.getItem('rows'));
            const filteredRows = savedRows.filter(e => e.title === movie.title);
            if (filteredRows.length > 0) {
                this.openErrorNotif('Movie already added to your cart !');
                return;
            }
            savedRows.push(movie);
            localStorage.setItem('rows', JSON.stringify(savedRows));
        }
        this.openSuccessNotif('Movie added successfully to your cart !');
    }

    addSerieToCart(serie: Serie) {
        if (!localStorage.getItem('rows')) {
            localStorage.setItem('rows', JSON.stringify([serie]));
        } else {
            const savedRows = JSON.parse(localStorage.getItem('rows'));
            const filteredRows = savedRows.filter(e => e.title === serie.title);
            if (filteredRows.length > 0) {
                this.openErrorNotif('Serie already added to your cart !');
                return;
            }
            savedRows.push(serie);
            localStorage.setItem('rows', JSON.stringify(savedRows));
        }
        this.openSuccessNotif('Serie added successfully to your cart !');
    }

    removeRow(row) {
        const savedRows = JSON.parse(localStorage.getItem('rows'));
        const filteredRows = savedRows.filter(e => e.title !== row.title);
        localStorage.setItem('rows', JSON.stringify(filteredRows));
        this.rowsEvent.next(filteredRows);
    }

    removeAllRows() {
        localStorage.setItem('rows', JSON.stringify([]));
        this.rowsEvent.next([]);
    }

    openSuccessNotif(message) {
        const opt = cloneDeep(this.options);
        opt.toastComponent = SuccessNotifToast;
        opt.toastClass = 'notyf confirm';
        const inserted = this.toastrService.show(message || 'Success', '', opt);
        return inserted;
    }

    openErrorNotif(message) {
        const opt = cloneDeep(this.options);
        opt.toastComponent = ErrorNotifToast;
        opt.toastClass = 'notyf confirm';
        const inserted = this.toastrService.show(message || 'Error', '', opt);
        return inserted;
    }
}