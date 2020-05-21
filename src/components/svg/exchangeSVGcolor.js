import React from "react"

const ExchangeSVG = () => {
  return (
    // <svg
    //   //max-width="300pt"
    //   viewBox="-11 0 432 432.85845"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="m198.402344 108.507812c0 52.78125-42.789063 95.570313-95.574219 95.570313-52.78125 0-95.570313-42.789063-95.570313-95.570313 0-52.785156 42.789063-95.574218 95.570313-95.574218 52.785156 0 95.574219 42.789062 95.574219 95.574218zm0 0"
    //     fill="#ea3457"
    //   />
    //   <path
    //     d="m102.828125 210.90625c-56.460937 0-102.398437-45.933594-102.398437-102.398438 0-56.46875 45.9375-102.402343 102.398437-102.402343 56.464844 0 102.402344 45.933593 102.402344 102.402343 0 56.464844-45.9375 102.398438-102.402344 102.398438zm0-191.144531c-48.9375 0-88.746094 39.8125-88.746094 88.746093 0 48.933594 39.808594 88.746094 88.746094 88.746094s88.746094-39.8125 88.746094-88.746094c0-48.933593-39.808594-88.746093-88.746094-88.746093zm0 0"
    //     fill="#ea3457"
    //   />
    //   <path
    //     d="m171.097656 108.507812c0 37.703126-30.566406 68.265626-68.269531 68.265626s-68.265625-30.5625-68.265625-68.265626c0-37.703124 30.5625-68.269531 68.265625-68.269531s68.269531 30.566407 68.269531 68.269531zm0 0"
    //     fill="#ffe600"
    //     fill-rule="evenodd"
    //   />
    //   <g fill="#602f75">
    //     <path d="m102.828125 183.601562c-41.40625 0-75.09375-33.6875-75.09375-75.09375 0-41.410156 33.6875-75.09375 75.09375-75.09375 41.410156 0 75.09375 33.683594 75.09375 75.09375 0 41.40625-33.683594 75.09375-75.09375 75.09375zm0-136.535156c-33.875 0-61.4375 27.558594-61.4375 61.441406 0 33.878907 27.5625 61.4375 61.4375 61.4375 33.878906 0 61.441406-27.558593 61.441406-61.4375 0-33.882812-27.5625-61.441406-61.441406-61.441406zm0 0" />
    //     <path d="m83.144531 76.664062c0-.566406.375-.9375.9375-.9375h23.746094c13.515625 0 19.898437 6.75 19.898437 16.984376 0 7.226562-3.378906 11.351562-7.414062 13.515624v.183594c3.941406 1.507813 8.539062 6.574219 8.539062 14.359375 0 12.675781-7.976562 18.773438-21.960937 18.773438h-22.808594c-.5625 0-.9375-.371094-.9375-.9375zm24.402344 25.621094c5.632813 0 9.101563-3.378906 9.101563-8.355468 0-5.066407-3.46875-8.445313-9.101563-8.445313h-12.765625c-.375 0-.5625.1875-.5625.5625v15.679687c0 .375.1875.558594.5625.558594zm-12.765625 27.5h13.328125c6.195313 0 9.667969-3.566406 9.667969-8.921875 0-5.253906-3.472656-8.820312-9.667969-8.820312h-13.328125c-.375 0-.5625.1875-.5625.566406v16.609375c0 .378906.1875.566406.5625.566406zm0 0" />
    //     <path d="m99.414062 81.199219c-1.882812 0-3.410156-1.527344-3.410156-3.414063v-6.824218c0-1.886719 1.527344-3.414063 3.410156-3.414063 1.886719 0 3.414063 1.527344 3.414063 3.414063v6.824218c0 1.886719-1.527344 3.414063-3.414063 3.414063zm0 0" />
    //     <path d="m99.414062 149.464844c-1.882812 0-3.410156-1.527344-3.410156-3.410156v-6.828126c0-1.886718 1.527344-3.414062 3.410156-3.414062 1.886719 0 3.414063 1.527344 3.414063 3.414062v6.828126c0 1.882812-1.527344 3.410156-3.414063 3.410156zm0 0" />
    //     <path d="m96.003906 40.238281h13.652344v13.65625h-13.652344zm0 0" />
    //     <path d="m96.003906 163.121094h13.652344v13.652344h-13.652344zm0 0" />
    //     <path d="m150.617188 101.679688h20.480468v13.652343h-20.480468zm0 0" />
    //     <path d="m34.5625 101.679688h20.480469v13.652343h-20.480469zm0 0" />
    //   </g>
    //   <path
    //     d="m403.203125 306.480469c0 52.78125-42.789063 95.574219-95.574219 95.574219s-95.574218-42.792969-95.574218-95.574219c0-52.785157 42.789062-95.574219 95.574218-95.574219s95.574219 42.789062 95.574219 95.574219zm0 0"
    //     fill="#ea3457"
    //   />
    //   <path
    //     d="m307.628906 408.878906c-56.464844 0-102.398437-45.933594-102.398437-102.398437 0-56.46875 45.933593-102.402344 102.398437-102.402344s102.398438 45.933594 102.398438 102.402344c0 56.464843-45.933594 102.398437-102.398438 102.398437zm0-191.144531c-48.9375 0-88.746094 39.8125-88.746094 88.746094 0 48.933593 39.808594 88.746093 88.746094 88.746093s88.746094-39.8125 88.746094-88.746093c0-48.933594-39.808594-88.746094-88.746094-88.746094zm0 0"
    //     fill="#ea3457"
    //   />
    //   <path
    //     d="m375.894531 306.480469c0 37.703125-30.5625 68.265625-68.265625 68.265625s-68.265625-30.5625-68.265625-68.265625 30.5625-68.265625 68.265625-68.265625 68.265625 30.5625 68.265625 68.265625zm0 0"
    //     fill="#ffe600"
    //     fill-rule="evenodd"
    //   />
    //   <path
    //     d="m307.628906 381.574219c-41.40625 0-75.09375-33.6875-75.09375-75.09375s33.6875-75.09375 75.09375-75.09375 75.09375 33.6875 75.09375 75.09375-33.6875 75.09375-75.09375 75.09375zm0-136.535157c-33.878906 0-61.441406 27.558594-61.441406 61.441407 0 33.878906 27.5625 61.4375 61.441406 61.4375s61.441406-27.558594 61.441406-61.4375c0-33.882813-27.5625-61.441407-61.441406-61.441407zm0 0"
    //     fill="#602f75"
    //   />
    //   <path
    //     d="m300.800781 238.214844h13.65625v13.652344h-13.65625zm0 0"
    //     fill="#602f75"
    //   />
    //   <path
    //     d="m300.800781 361.09375h13.65625v13.652344h-13.65625zm0 0"
    //     fill="#602f75"
    //   />
    //   <path
    //     d="m355.414062 299.652344h20.480469v13.652344h-20.480469zm0 0"
    //     fill="#602f75"
    //   />
    //   <path
    //     d="m239.363281 299.652344h20.480469v13.652344h-20.480469zm0 0"
    //     fill="#602f75"
    //   />
    //   <path
    //     d="m304.011719 349.417969v-10.339844c-5.9375-.105469-12.082031-1.945313-15.667969-4.507813l2.457031-6.859374c3.6875 2.453124 9.011719 4.398437 14.746094 4.398437 7.269531 0 12.1875-4.199219 12.1875-10.03125 0-5.636719-3.996094-9.113281-11.570313-12.1875-10.449218-4.09375-16.898437-8.808594-16.898437-17.714844 0-8.5 6.042969-14.945312 15.464844-16.484375v-10.34375h6.347656v9.933594c6.144531.199219 10.34375 1.839844 13.3125 3.582031l-2.558594 6.757813c-2.148437-1.226563-6.351562-3.476563-12.902343-3.476563-7.886719 0-10.855469 4.707031-10.855469 8.804688 0 5.320312 3.792969 7.988281 12.695312 11.671875 10.550781 4.300781 15.875 9.621094 15.875 18.734375 0 8.09375-5.632812 15.667969-16.179687 17.414062v10.648438zm0 0"
    //     fill="#602f75"
    //   />
    //   <path
    //     d="m389.550781 210.90625h-13.65625c0-90.6875-67.871093-166.53125-157.878906-176.417969l1.492187-13.574219c96.9375 10.652344 170.042969 92.332032 170.042969 189.992188zm0 0"
    //     fill="#00e7ff"
    //   />
    //   <path
    //     d="m198.402344 402.054688c-105.398438 0-191.144532-85.746094-191.144532-191.148438h13.652344c0 97.875 79.621094 177.492188 177.492188 177.492188zm0 0"
    //     fill="#00e7ff"
    //   />
    //   <path
    //     d="m233.683594 71.332031-31.597656-47.394531 47.875-23.9375 6.109374 12.214844-34.042968 17.015625 23.015625 34.527343zm0 0"
    //     fill="#00e7ff"
    //   />
    //   <path
    //     d="m180.164062 432.859375-10.542968-8.667969 26.34375-32.058594-32.175782-20.332031 7.292969-11.550781 45.25 28.601562zm0 0"
    //     fill="#00e7ff"
    //   />
    // </svg>

    // <svg
    //   //height="432pt"
    //   viewBox="-11 0 432 432.85845"
    //   //width="432pt"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="m102.828125 210.90625c-56.460937 0-102.398437-45.933594-102.398437-102.398438 0-56.46875 45.9375-102.402343 102.398437-102.402343 56.464844 0 102.402344 45.933593 102.402344 102.402343 0 56.464844-45.9375 102.398438-102.402344 102.398438zm0-191.144531c-48.9375 0-88.746094 39.8125-88.746094 88.746093 0 48.933594 39.808594 88.746094 88.746094 88.746094s88.746094-39.8125 88.746094-88.746094c0-48.933593-39.808594-88.746093-88.746094-88.746093zm0 0" />
    //   <path d="m102.828125 183.601562c-41.40625 0-75.09375-33.6875-75.09375-75.09375 0-41.410156 33.6875-75.09375 75.09375-75.09375 41.410156 0 75.09375 33.683594 75.09375 75.09375 0 41.40625-33.683594 75.09375-75.09375 75.09375zm0-136.535156c-33.875 0-61.4375 27.558594-61.4375 61.441406 0 33.878907 27.5625 61.4375 61.4375 61.4375 33.878906 0 61.441406-27.558593 61.441406-61.4375 0-33.882812-27.5625-61.441406-61.441406-61.441406zm0 0" />
    //   <path d="m83.144531 76.664062c0-.566406.375-.9375.9375-.9375h23.746094c13.515625 0 19.898437 6.75 19.898437 16.984376 0 7.226562-3.378906 11.351562-7.414062 13.515624v.183594c3.941406 1.507813 8.539062 6.574219 8.539062 14.359375 0 12.675781-7.976562 18.773438-21.960937 18.773438h-22.808594c-.5625 0-.9375-.371094-.9375-.9375zm24.402344 25.621094c5.632813 0 9.101563-3.378906 9.101563-8.355468 0-5.066407-3.46875-8.445313-9.101563-8.445313h-12.765625c-.375 0-.5625.1875-.5625.5625v15.679687c0 .375.1875.558594.5625.558594zm-12.765625 27.5h13.328125c6.195313 0 9.667969-3.566406 9.667969-8.921875 0-5.253906-3.472656-8.820312-9.667969-8.820312h-13.328125c-.375 0-.5625.1875-.5625.566406v16.609375c0 .378906.1875.566406.5625.566406zm0 0" />
    //   <path d="m99.414062 81.199219c-1.882812 0-3.410156-1.527344-3.410156-3.414063v-6.824218c0-1.886719 1.527344-3.414063 3.410156-3.414063 1.886719 0 3.414063 1.527344 3.414063 3.414063v6.824218c0 1.886719-1.527344 3.414063-3.414063 3.414063zm0 0" />
    //   <path d="m99.414062 149.464844c-1.882812 0-3.410156-1.527344-3.410156-3.410156v-6.828126c0-1.886718 1.527344-3.414062 3.410156-3.414062 1.886719 0 3.414063 1.527344 3.414063 3.414062v6.828126c0 1.882812-1.527344 3.410156-3.414063 3.410156zm0 0" />
    //   <path d="m96.003906 40.238281h13.652344v13.65625h-13.652344zm0 0" />
    //   <path d="m96.003906 163.121094h13.652344v13.652344h-13.652344zm0 0" />
    //   <path d="m150.617188 101.679688h20.480468v13.652343h-20.480468zm0 0" />
    //   <path d="m34.5625 101.679688h20.480469v13.652343h-20.480469zm0 0" />
    //   <path d="m307.628906 408.878906c-56.464844 0-102.398437-45.933594-102.398437-102.398437 0-56.46875 45.933593-102.402344 102.398437-102.402344s102.398438 45.933594 102.398438 102.402344c0 56.464843-45.933594 102.398437-102.398438 102.398437zm0-191.144531c-48.9375 0-88.746094 39.8125-88.746094 88.746094 0 48.933593 39.808594 88.746093 88.746094 88.746093s88.746094-39.8125 88.746094-88.746093c0-48.933594-39.808594-88.746094-88.746094-88.746094zm0 0" />
    //   <path d="m307.628906 381.574219c-41.40625 0-75.09375-33.6875-75.09375-75.09375s33.6875-75.09375 75.09375-75.09375 75.09375 33.6875 75.09375 75.09375-33.6875 75.09375-75.09375 75.09375zm0-136.535157c-33.878906 0-61.441406 27.558594-61.441406 61.441407 0 33.878906 27.5625 61.4375 61.441406 61.4375s61.441406-27.558594 61.441406-61.4375c0-33.882813-27.5625-61.441407-61.441406-61.441407zm0 0" />
    //   <path d="m300.800781 238.214844h13.65625v13.652344h-13.65625zm0 0" />
    //   <path d="m300.800781 361.09375h13.65625v13.652344h-13.65625zm0 0" />
    //   <path d="m355.414062 299.652344h20.480469v13.652344h-20.480469zm0 0" />
    //   <path d="m239.363281 299.652344h20.480469v13.652344h-20.480469zm0 0" />
    //   <path d="m304.011719 349.417969v-10.339844c-5.9375-.105469-12.082031-1.945313-15.667969-4.507813l2.457031-6.859374c3.6875 2.453124 9.011719 4.398437 14.746094 4.398437 7.269531 0 12.1875-4.199219 12.1875-10.03125 0-5.636719-3.996094-9.113281-11.570313-12.1875-10.449218-4.09375-16.898437-8.808594-16.898437-17.714844 0-8.5 6.042969-14.945312 15.464844-16.484375v-10.34375h6.347656v9.933594c6.144531.199219 10.34375 1.839844 13.3125 3.582031l-2.558594 6.757813c-2.148437-1.226563-6.351562-3.476563-12.902343-3.476563-7.886719 0-10.855469 4.707031-10.855469 8.804688 0 5.320312 3.792969 7.988281 12.695312 11.671875 10.550781 4.300781 15.875 9.621094 15.875 18.734375 0 8.09375-5.632812 15.667969-16.179687 17.414062v10.648438zm0 0" />
    //   <path d="m389.550781 210.90625h-13.65625c0-90.6875-67.871093-166.53125-157.878906-176.417969l1.492187-13.574219c96.9375 10.652344 170.042969 92.332032 170.042969 189.992188zm0 0" />
    //   <path d="m198.402344 402.054688c-105.398438 0-191.144532-85.746094-191.144532-191.148438h13.652344c0 97.875 79.621094 177.492188 177.492188 177.492188zm0 0" />
    //   <path d="m233.683594 71.332031-31.597656-47.394531 47.875-23.9375 6.109374 12.214844-34.042968 17.015625 23.015625 34.527343zm0 0" />
    //   <path d="m180.164062 432.859375-10.542968-8.667969 26.34375-32.058594-32.175782-20.332031 7.292969-11.550781 45.25 28.601562zm0 0" />
    // </svg>

    // <svg
    //   //height="496pt"
    //   viewBox="0 0 496 496"
    //   //width="496pt"
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    // >
    //   <linearGradient
    //     id="a"
    //     gradientUnits="userSpaceOnUse"
    //     x1="248"
    //     x2="248"
    //     y1="496"
    //     y2="0"
    //   >
    //     <stop offset="0" stop-color="#9f2fff" />
    //     <stop offset="1" stop-color="#0bb1d3" />
    //   </linearGradient>
    //   <path
    //     d="m240 288v16h-24v112h24v16h16v-16c17.648438 0 32-14.351562 32-32 0-9.542969-4.199219-18.136719-10.855469-24 6.65625-5.863281 10.855469-14.457031 10.855469-24 0-17.648438-14.351562-32-32-32v-16zm16 112h-24v-32h24c8.824219 0 16 7.175781 16 16s-7.175781 16-16 16zm16-64c0 8.824219-7.175781 16-16 16h-24v-32h24c8.824219 0 16 7.175781 16 16zm96-256c-16.976562 0-33.160156 3.390625-48 9.425781v-25.425781h-16v33.320312c-5.609375 3.253907-10.96875 6.878907-16 10.917969v-60.238281h-16v75.625c-6.089844 6.917969-11.503906 14.429688-16 22.550781v-146.175781h-16v146.167969c-4.496094-8.121094-9.910156-15.632813-16-22.550781v-75.617188h-16v60.238281c-5.03125-4.039062-10.390625-7.664062-16-10.917969v-33.320312h-16v25.425781c-14.839844-6.035156-31.023438-9.425781-48-9.425781-70.574219 0-128 57.425781-128 128 0 27.726562 8.960938 53.351562 24 74.335938v109.664062h16v-91.289062c4.992188 4.738281 10.296875 9.144531 16 13.042968v110.246094h16v-101.078125c5.160156 2.527344 10.480469 4.765625 16 6.589844v134.488281h16v-130.335938c5.984375 1.144532 12.136719 1.777344 18.375 2.046876-1.519531 7.875-2.375 15.976562-2.375 24.289062 0 70.574219 57.425781 128 128 128s128-57.425781 128-128c0-8.3125-.855469-16.414062-2.375-24.289062 6.246094-.269532 12.390625-.910157 18.375-2.046876v130.335938h16v-134.488281c5.519531-1.824219 10.839844-4.0625 16-6.582031v101.070312h16v-110.257812c5.703125-3.894532 11.007812-8.292969 16-13.039063v91.296875h16v-109.664062c15.039062-20.984376 24-46.609376 24-74.335938 0-70.574219-57.425781-128-128-128zm-240 16c56.3125 0 102.921875 41.816406 110.71875 96h-67.664062l-10.496094 21-24.816406-57.894531-29.980469 74.957031-23.242188-92.984375-31.464843 62.921875h-34.648438c4.128906-58.023438 52.539062-104 111.59375-104zm-111.59375 120h44.546875l16.535156-33.078125 24.757813 99.015625 34.019531-85.042969 23.183594 54.105469 21.496093-43h59.054688c0 8.289062-.960938 16.519531-2.753906 24.542969-51.839844 4.34375-94.941406 39.65625-110.726563 87.386719-58.382812-.777344-106.015625-46.402344-110.113281-103.929688zm231.59375 256c-61.761719 0-112-50.238281-112-112s50.238281-112 112-112 112 50.238281 112 112-50.238281 112-112 112zm121.480469-152.070312c-15.785157-47.722657-58.886719-83.042969-110.726563-87.378907-1.792968-8.023437-2.753906-16.246093-2.753906-24.550781 0-61.761719 50.238281-112 112-112s112 50.238281 112 112c0 61.257812-49.449219 111.121094-110.519531 111.929688zm-25.480469 40.070312c0 22.40625-7.894531 44.214844-22.246094 61.425781l-12.28125-10.25c11.941406-14.335937 18.527344-32.511719 18.527344-51.175781 0-44.113281-35.886719-80-80-80-18.664062 0-36.832031 6.585938-51.167969 18.527344l-10.246093-12.289063c17.207031-14.34375 39.015624-22.238281 61.414062-22.238281 52.9375 0 96 43.0625 96 96zm-44.832031 61.472656 10.246093 12.289063c-17.207031 14.34375-39.015624 22.238281-61.414062 22.238281-52.9375 0-96-43.0625-96-96 0-22.40625 7.894531-44.214844 22.246094-61.425781l12.28125 10.25c-11.941406 14.335937-18.527344 32.511719-18.527344 51.175781 0 44.113281 35.886719 80 80 80 18.664062 0 36.832031-6.585938 51.167969-18.527344zm11.214843-213.472656 57.617188 86.425781 57.617188-86.425781-57.617188-86.425781zm49.617188 4.894531-27.527344-9.175781 27.527344-41.292969zm0 16.875v23.804688l-20.40625-30.613281zm16 0 20.40625-6.800781-20.40625 30.605469zm0-16.875v-50.480469l27.527344 41.296876zm-352 195.105469h16v16h-16zm32 32h16v16h-16zm32 40h16v16h-16zm384-56h-16v-16h16zm-32 32h-16v-16h16zm-32 24v16h-16v-16zm-200-448v-16h16v16zm64 0v-16h16v16zm0 0"
    //     fill="url(#a)"
    //   />
    // </svg>

    <svg
      //height="512pt"
      viewBox="0 0 512 512"
      //width="512pt"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="0"
        x2="512"
        y1="256"
        y2="256"
      >
        <stop offset="0" stop-color="#00f1ff" />
        <stop offset=".231" stop-color="#00d8ff" />
        <stop offset=".5138" stop-color="#00c0ff" />
        <stop offset=".7773" stop-color="#00b2ff" />
        <stop offset="1" stop-color="#00adff" />
      </linearGradient>
      <path
        d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0"
        fill="url(#a)"
      />
      <g fill="#fff">
        <path d="m152.28125 310.175781h-25.652344c-7.132812 0-13.15625-6.382812-13.15625-13.9375v-7.765625c0-7.488281 5.777344-13.355468 13.15625-13.355468h24.878906c4.703126 0 8.675782 3.765624 8.675782 8.222656 0 8.285156 6.714844 15 15 15 8.28125 0 15-6.714844 15-15 0-20.742188-16.808594-37.664063-37.671875-38.195313v-9.753906c0-8.285156-6.714844-15-15-15-8.285157 0-15 6.714844-15 15v9.929687c-21.871094 2.085938-39.039063 20.640626-39.039063 43.148438v7.769531c0 24.226563 19.359375 43.9375 43.15625 43.9375h25.652344c7.503906 0 13.378906 5.609375 13.378906 12.769531v13.058594c0 7.363282-6 13.355469-13.378906 13.355469h-34.59375c-4.433594 0-8.324219-4.109375-8.324219-8.792969 0-8.28125-6.714843-15-15-15-8.285156 0-15 6.71875-15 15 0 21.390625 17.191407 38.792969 38.324219 38.792969h4.824219v8.277344c0 8.28125 6.714843 15 15 15 8.285156 0 15-6.71875 15-15v-8.285157c23.8125-.125 43.148437-19.519531 43.148437-43.347656v-13.058594c0-11.628906-4.570312-22.46875-12.863281-30.519531-8.136719-7.898437-18.972656-12.25-30.515625-12.25zm0 0" />
        <path d="m217.644531 236.753906h27.394531c8.285157 0 15-6.714844 15-15 0-8.28125-6.714843-15-15-15h-18.578124l44.253906-44.25c5.859375-5.859375 5.859375-15.355468 0-21.214844-5.855469-5.859374-15.355469-5.859374-21.210938 0l-44.257812 44.253907v-18.578125c0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15v27.394531c.003906 23.375 19.023437 42.394531 42.398437 42.394531zm0 0" />
        <path d="m273.121094 280.726562h-27.394532c-8.285156 0-15 6.714844-15 15 0 8.28125 6.714844 15 15 15h18.578126l-44.253907 44.25c-5.855469 5.859376-5.855469 15.355469 0 21.214844 2.929688 2.929688 6.769531 4.394532 10.605469 4.394532 3.839844 0 7.679688-1.464844 10.609375-4.394532l44.253906-44.253906v18.578125c0 8.285156 6.714844 15 15 15 8.28125 0 15-6.714844 15-15v-27.394531c0-23.378906-19.019531-42.394532-42.398437-42.394532zm0 0" />
        <path d="m414.007812 169.574219c.898438-1.707031 1.695313-3.484375 2.363282-5.335938 1.664062-4.617187 2.511718-9.460937 2.511718-14.398437 0-19.582032-13.359374-36.097656-31.449218-40.945313v-14.53125c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v13.082031h-14.519532v-13.082031c0-8.285156-6.714843-15-15-15-8.28125 0-15 6.714844-15 15v13.082031h-10.339843c-8.285157 0-15 6.714844-15 15 0 8.28125 6.714843 15 15 15h10.339843v79.582032h-11.710937c-8.28125 0-15 6.714844-15 15s6.71875 15 15 15h11.710937v12.398437c0 8.28125 6.71875 15 15 15 8.285157 0 15-6.71875 15-15v-12.398437h14.519532v12.398437c0 8.28125 6.714844 15 15 15s15-6.71875 15-15v-12.398437h2.675781c23.394531 0 42.4375-18.984375 42.527344-42.355469 0-.03125 0-.066406 0-.101563 0-.007812 0-.019531 0-.03125 0-.011718 0-.023437 0-.035156 0-.007812 0-.015625 0-.023437 0-.027344 0-.050781 0-.078125-.058594-14.460938-7.4375-27.230469-18.628907-34.828125zm-23.902343 47.453125h-47.191407v-79.582032h33.527344c6.859375 0 12.441406 5.558594 12.441406 12.394532 0 1.453125-.246093 2.871094-.730468 4.210937-1.769532 4.894531-6.472656 8.183594-11.710938 8.183594h-2.640625c-8.285156 0-15 6.71875-15 15 0 8.285156 6.714844 15 15 15h16.304688c6.898437 0 12.511719 5.515625 12.53125 12.304687-.019531 6.890626-5.632813 12.488282-12.53125 12.488282zm0 0" />
      </g>
    </svg>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   // width="512"
    //   // height="512"
    //   viewBox="0 0 512 512"
    // >
    //   <defs>
    //     <linearGradient
    //       id="a"
    //       data-name="New Gradient Swatch 1"
    //       x1="46.956"
    //       y1="465.044"
    //       x2="518.948"
    //       y2="-6.948"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop offset="0" stop-color="#003f8a" />
    //       <stop offset="0.518" stop-color="#00d7df" />
    //       <stop offset="1" stop-color="#006df0" />
    //     </linearGradient>
    //     <linearGradient
    //       id="b"
    //       x1="-29.044"
    //       y1="389.044"
    //       x2="442.948"
    //       y2="-82.948"
    //       xlinkHref="#a"
    //     />
    //     <linearGradient
    //       id="c"
    //       x1="-31.393"
    //       y1="386.696"
    //       x2="440.6"
    //       y2="-85.296"
    //       xlinkHref="#a"
    //     />
    //     <linearGradient
    //       id="d"
    //       x1="124.857"
    //       y1="542.946"
    //       x2="596.85"
    //       y2="70.954"
    //       xlinkHref="#a"
    //     />
    //     <linearGradient
    //       id="e"
    //       x1="18.956"
    //       y1="437.044"
    //       x2="490.948"
    //       y2="-34.948"
    //       xlinkHref="#a"
    //     />
    //     <linearGradient
    //       id="f"
    //       x1="86.956"
    //       y1="505.044"
    //       x2="558.948"
    //       y2="33.052"
    //       xlinkHref="#a"
    //     />
    //   </defs>
    //   <g>
    //     <path
    //       d="M352,160a151.522,151.522,0,0,0-43.75,6.4C292.92,98.7,232.27,48,160,48,76.19,48,8,116.19,8,200S76.19,352,160,352a151.458,151.458,0,0,0,43.73-6.42A152.033,152.033,0,0,0,352,464c83.81,0,152-68.19,152-152S435.81,160,352,160ZM160,336C85.01,336,24,274.99,24,200S85.01,64,160,64s136,61.01,136,136S234.99,336,160,336ZM311.12,216.35A102.908,102.908,0,0,1,352,208,104,104,0,1,1,248.63,323.41,152.067,152.067,0,0,0,311.12,216.35ZM352,448A136.034,136.034,0,0,1,218.91,340.12a151.152,151.152,0,0,0,14.91-7.29C243.75,389.37,293.38,432,352,432a120,120,0,1,0-40.01-233.16,152.642,152.642,0,0,0-1.03-16.53A135.469,135.469,0,0,1,352,176c74.99,0,136,61.01,136,136S426.99,448,352,448Z"
    //       fill="url(#a)"
    //     />
    //     <path
    //       d="M160,80A120,120,0,1,0,280,200,120.134,120.134,0,0,0,160,80Zm0,224A104,104,0,1,1,264,200,104.112,104.112,0,0,1,160,304Z"
    //       fill="url(#b)"
    //     />
    //     <path
    //       d="M188.9,195.78a23.974,23.974,0,0,0-12.9-34.4V161a8,8,0,0,0-15.93-1H152v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16v48a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,16,0,23.988,23.988,0,0,0,12.9-44.22ZM144,176h24a8,8,0,0,1,0,16H144Zm32,48H144V208h32a8,8,0,0,1,0,16Z"
    //       fill="url(#c)"
    //     />
    //     <path
    //       d="M384,328a24.032,24.032,0,0,1-24,24,8,8,0,0,1-16,0h-8a8,8,0,0,1,0-16h24a8,8,0,1,0,0-16h-8a24,24,0,0,1-8-46.62V273a8,8,0,0,1,15.93-1H368a8,8,0,0,1,0,16H352a8,8,0,1,0,0,16h8a23.968,23.968,0,0,1,24,24Z"
    //       fill="url(#d)"
    //     />
    //     <path
    //       d="M304,112h48v32a8,8,0,0,0,16,0V104a8,8,0,0,0-8-8H304a8,8,0,0,0,0,16Z"
    //       fill="url(#e)"
    //     />
    //     <path
    //       d="M216,416H168V384a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16Z"
    //       fill="url(#f)"
    //     />
    //   </g>
    // </svg>
  )
}

export default ExchangeSVG
