import {
    animate,
    keyframes,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';

@Component({
    selector: 'app-error-notif',
    styles: [
        `
        @keyframes fadeinup {
            0% {
              opacity: 0;
              transform: translateY(25%);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeoutdown {
            0% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(25%);
            }
          }
          @keyframes ripple {
            0% {
              transform: scale(0) translateY(-45%) translateX(13%);
            }
            100% {
              transform: scale(1) translateY(-45%) translateX(13%);
            }
          }
          .notyf__icon--error, .notyf__icon--success {
            height: 21px;
            width: 21px;
            background: white;
            border-radius: 50%;
            display: block;
            margin: 0 auto;
            position: relative;
          }
          .notyf__icon--error:after, .notyf__icon--error:before {
            content: "";
            background: currentColor;
            display: block;
            position: absolute;
            width: 3px;
            border-radius: 3px;
            left: 9px;
            height: 12px;
            top: 5px;
          }
          .notyf__icon--error:after {
            transform: rotate(-45deg);
          }
          .notyf__icon--error:before {
            transform: rotate(45deg);
          }
          .notyf__toast--error {
            border: 1px solid rgb(240, 128, 128);
          }

          .notyf__icon--success:after, .notyf__icon--success:before {
            content: "";
            background: currentColor;
            display: block;
            position: absolute;
            width: 3px;
            border-radius: 3px;
          }
          .notyf__icon--success:after {
            height: 6px;
            transform: rotate(-45deg);
            top: 9px;
            left: 6px;
          }
          .notyf__icon--success:before {
            height: 11px;
            transform: rotate(45deg);
            top: 5px;
            left: 10px;
          }
          .notyf__toast {
            display: block;
            overflow: hidden;
            bottom: -100%;
            position: relative;
            padding: 0 13px;
            border-radius: 2px;
            margin-top: -5px;
            width: 340px;
            color: white;
            font-size: 15px;
          }
          .notyf__toast--disappear {
            transform: translateY(0);
            animation: fadeoutdown 0.3s forwards;
            animation-delay: 0.25s;
          }
          .notyf__toast--disappear .notyf__message, .notyf__toast--disappear .notyf__icon {
            animation: fadeoutdown 0.3s forwards;
            opacity: 1;
            transform: translateY(0);
          }
          .notyf__toast--disappear .notyf__message {
            animation-delay: 0.05s;
          }
          .notyf__ripple {
            height: 400px;
            width: 400px;
            position: absolute;
            transform-origin: bottom right;
            right: 0;
            top: 0;
            border-radius: 50%;
            transform: scale(0) translateY(-51%) translateX(13%);
            z-index: 5;
            animation: ripple 0.4s ease-out forwards;
          }
          .notyf__wrapper {
            display: flex;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 20px;
            padding-right: 15px;
            border-radius: 3px;
            position: relative;
            z-index: 10;
          }
          .notyf__icon {
            width: 22px;
            text-align: center;
            font-size: 1.3em;
            opacity: 0;
            animation: fadeinup 0.3s forwards;
            animation-delay: 0.3s;
            margin-right: 13px;
          }
          .notyf__message {
            vertical-align: middle;
            position: relative;
            opacity: 0;
            animation: fadeinup 0.3s forwards;
            animation-delay: 0.25s;
          }
          /* .notyf {
            position: fixed;
            bottom: 20px;
            right: 30px;
            color: white;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          } */
          /* Small screens */
          @media only screen and (max-width: 736px) {
            .notyf {
              bottom: 0;
              left: 0;
              right: 0;
              align-items: initial;
            }
            .notyf__ripple {
              height: 600px;
              width: 600px;
              animation-duration: 0.5s;
            }
            .notyf__toast {
              max-width: initial;
              border-radius: 0;
              box-shadow: 0px -2px 7px 0px rgba(0, 0, 0, 0.13);
            }
          }
        `
    ],
    template: `
      <div class="notyf__toast notyf__toast--error notyf__toast">
        <div class="notyf__wrapper">
          <div class="notyf__icon">
            <i class="notyf__icon--error" style="color: rgb(250, 128, 114);"></i>
          </div>
          <div class="notyf__message">{{ title }} {{ message }}</div>
        </div>
        <div
          class="notyf__ripple"
          style="background-color: rgb(250, 128, 114);"
        ></div>
      </div>
    `,
    animations: [
        trigger('flyInOut', [
            state('inactive', style({ opacity: 0 })),
            transition(
                'inactive => active',
                animate(
                    '300ms ease-out',
                    keyframes([
                        style({
                            opacity: 0,
                            bottom: '-15px',
                            'max-height': 0,
                            'max-width': 0,
                            'margin-top': 0,
                        }),
                        style({
                            opacity: 0.8,
                            bottom: '-3px',
                        }),
                        style({
                            opacity: 1,
                            bottom: '0',
                            'max-height': '200px',
                            'margin-top': '12px',
                            'max-width': '400px',
                        }),
                    ]),
                ),
            ),
            state(
                'active',
                style({
                    bottom: '0',
                    'max-height': '200px',
                    'margin-top': '12px',
                    'max-width': '400px',
                }),
            ),
            transition(
                'active => removed',
                animate(
                    '300ms ease-out',
                    keyframes([
                        style({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }),
                        style({
                            opacity: 0,
                            transform: 'translateY(25%)'
                        }),
                    ]),
                ),
            ),
        ]),
    ],
})
export class ErrorNotifToast extends Toast {
    constructor(
        protected toastrService: ToastrService,
        public toastPackage: ToastPackage,
    ) {
        super(toastrService, toastPackage);
    }
}