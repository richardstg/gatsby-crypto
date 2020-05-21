import React from "react"

const HeaderLogoSVG = () => {
  return (
    <svg
      id="headerLogoSVG"
      enable-background="new 0 0 512 512"
      //height="512"
      viewBox="0 0 512 512"
      //width="512"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <linearGradient
        id="headerLogoSVGGrad"
        gradientUnits="userSpaceOnUse"
        x1="63.155"
        x2="450.135"
        y1="579.855"
        y2="80.38"
      >
        {/* <stop offset="0" stop-color="#003f8a" />
        <stop offset=".518" stop-color="#00d7df" />
        <stop offset="1" stop-color="#006df0" /> */}
        <stop offset="0" stop-color="#00f0ff" />
        <stop offset=".518" stop-color="#00c0ff" />
        <stop offset="1" stop-color="#00adff" />
      </linearGradient>
      <path
        d="m504 275.09c0-3.366-2.106-6.371-5.27-7.52l-114.73-41.72v-133.62h-.31c1.161-4.025-1.013-8.258-4.96-9.66l-120-43.63c-1.762-.65-3.698-.65-5.46 0l-120 43.63c-2.56.941-4.466 3.118-5.06 5.78h-.21v137.5l-114.73 41.72c-2.56.941-4.466 3.118-5.06 5.78h-.21v141.82h.2c-.881 3.923 1.29 7.889 5.07 9.26l120 43.63c1.761.653 3.699.653 5.46 0l117.27-42.64 117.27 42.64c1.761.653 3.699.653 5.46 0l120-43.63c2.43-.883 4.282-2.888 4.97-5.38h.3v-141.82s-.006-1.416 0-2.14zm-376 174.03-104-37.81v-124.8l104 37.82zm8-138.91-96.59-35.12 95.96-34.9 96.6 35.13zm112 101.1-104 37.81v-124.79l104-37.82zm0-147.64-104-37.82v-124.34l104 37.82zm-88.59-173.58 96.59-35.12 96.59 35.12-96.59 35.12zm208.59 11.42v124.34l-104 37.82v-124.34zm0 347.61-104-37.81v-124.8l104 37.82zm8-138.91-95.97-34.89 96.6-35.13 95.96 34.9zm112 101.1-104 37.81v-124.79l104-37.82z"
        fill="url(#headerLogoSVGGrad)"
      />
    </svg>
  )
}

export default HeaderLogoSVG
