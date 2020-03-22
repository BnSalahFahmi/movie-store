import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './ui/material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ModalComponent } from './components/modal/modal.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faPlayCircle,
  faRocket,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faTachometerAlt,
  faMusic,
  faVideo,
  faTv,
  faTheaterMasks,
  faFilm,
  faGlobeEurope,
  faSubscript,
  faCommentAlt,
  faEye,
  faAddressCard,
  faInfoCircle,
  faThumbsUp,
  faTimesCircle,
  faMinusCircle,
  faCompress,
  faPlusCircle,
  faArrowsAlt,
  faCompressArrowsAlt,
  faClock,
  faLaptop,
  faDesktop,
  faInfo,
  faQuestionCircle,
  faShoppingCart,
  faCartPlus,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { CategoriesService } from './services/categories.service';
import { SuccessNotifToast } from './components/success-notif/success-notif.component';
import { ErrorNotifToast } from './components/error-notif/error-notif.component';
library.add(
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faTachometerAlt,
  faMusic,
  faVideo,
  faTv,
  faTheaterMasks,
  faFilm,
  faGlobeEurope,
  faCommentAlt,
  faSubscript,
  faEye,
  faAddressCard,
  faInfoCircle,
  faThumbsUp,
  faPlayCircle,
  faTimesCircle,
  faMinusCircle,
  faPlusCircle,
  faCompress,
  faArrowsAlt,
  faCompressArrowsAlt,
  faClock,
  faLaptop,
  faDesktop,
  faInfo,
  faQuestionCircle,
  faShoppingCart,
  faCartPlus,
  faSpinner
);

@NgModule({
    declarations: [PageNotFoundComponent, ModalComponent, FilterPipe, SuccessNotifToast, ErrorNotifToast],
      imports: [
        AngularMaterialModule,
        FontAwesomeModule
      ],
      exports: [
        AngularMaterialModule,
        FontAwesomeModule,
        FilterPipe
      ],
      providers: [
        CategoriesService
      ]
})                 
export class SharedModule {

}