import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    viewBox="0 0 375 375"
    height={500}
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M74.21 236.098h228.325v3.46H74.211Zm0 0" />
      </clipPath>
      <clipPath id="b">
        <path d="M74.21 198.621h228.325v3.461H74.211Zm0 0" />
      </clipPath>
    </defs>
    <path
      d="m32.51 171.607 15.28-41.578H33.479v-5.203h22v3.156l-16.094 43.625h16.094v5.203H32.51ZM74.156 177.389c-5.094 0-8.747-1.442-10.954-4.329-2.199-2.882-3.296-7.066-3.296-12.546V140.81c0-5.394 1.109-9.476 3.328-12.25 2.226-2.78 5.867-4.171 10.922-4.171 5.05 0 8.675 1.402 10.875 4.203 2.207 2.804 3.312 6.875 3.312 12.218v19.766c0 5.387-1.117 9.54-3.344 12.453-2.23 2.906-5.843 4.36-10.843 4.36Zm0-5.72c2.695 0 4.515-.784 5.453-2.359.937-1.582 1.406-3.984 1.406-7.203v-22.765c0-3.164-.469-5.508-1.406-7.032-.938-1.52-2.758-2.28-5.453-2.28-2.743 0-4.586.76-5.532 2.28-.937 1.524-1.406 3.868-1.406 7.032v22.765c0 3.22.469 5.621 1.406 7.203.946 1.575 2.79 2.36 5.532 2.36ZM95.458 124.826h10.453c5.258 0 9.117 1.086 11.578 3.25 2.469 2.156 3.703 5.672 3.703 10.547 0 6.68-2.14 10.727-6.422 12.14l7.375 26.047h-6.984l-6.813-24.39h-5.64v24.39h-7.25Zm10 22.406c3.125 0 5.359-.617 6.703-1.859 1.351-1.25 2.031-3.5 2.031-6.75 0-2.133-.234-3.813-.703-5.031-.469-1.219-1.305-2.114-2.5-2.688-1.2-.582-2.89-.875-5.078-.875h-3.203v17.203ZM136.96 124.826h7l11.11 51.984h-6.875l-2.375-13.093h-10.578l-2.516 13.093h-6.796Zm7.907 33.703-4.375-23.437-4.297 23.437ZM157.56 124.826h6.234l-2.516 15.922h-3.718ZM180.724 177.389c-4.367 0-7.695-1.348-9.984-4.047-2.282-2.696-3.555-6.395-3.813-11.094l6.422-1.734c.207 3.336.86 6.027 1.953 8.078 1.094 2.054 2.898 3.078 5.422 3.078 1.883 0 3.305-.52 4.266-1.563.968-1.05 1.453-2.562 1.453-4.53 0-2.134-.453-3.907-1.36-5.313-.898-1.414-2.328-2.977-4.297-4.688l-8.718-7.703c-1.762-1.54-3.04-3.195-3.828-4.969-.793-1.781-1.188-3.953-1.188-6.515 0-3.813 1.086-6.766 3.266-8.86 2.187-2.094 5.164-3.14 8.937-3.14 4.102 0 7.203 1.09 9.297 3.265 2.094 2.18 3.36 5.559 3.797 10.14l-6.172 1.673c-.21-3.04-.797-5.383-1.766-7.032-.96-1.644-2.68-2.468-5.156-2.468-1.844 0-3.262.484-4.25 1.453-.98.96-1.469 2.375-1.469 4.25 0 1.543.254 2.84.766 3.89.52 1.055 1.398 2.11 2.64 3.172l8.798 7.703c2.257 2.012 4.062 4.196 5.406 6.547 1.351 2.356 2.031 5.028 2.031 8.016 0 3.812-1.156 6.836-3.469 9.062-2.312 2.22-5.308 3.329-8.984 3.329ZM219.219 130.217h-8.782v-5.39h24.579v5.39h-8.547v46.593h-7.25ZM240.014 124.826h10.454c5.257 0 9.117 1.086 11.578 3.25 2.468 2.156 3.703 5.672 3.703 10.547 0 6.68-2.14 10.727-6.422 12.14l7.375 26.047h-6.984l-6.813-24.39h-5.64v24.39h-7.25Zm10 22.406c3.125 0 5.36-.617 6.704-1.859 1.351-1.25 2.03-3.5 2.03-6.75 0-2.133-.234-3.813-.702-5.031-.469-1.219-1.305-2.114-2.5-2.688-1.2-.582-2.89-.875-5.078-.875h-3.204v17.203ZM273.69 124.826h7.125v51.984h-7.125ZM289.227 124.826h11.937c4.696 0 8.18 1.063 10.453 3.188 2.27 2.117 3.407 5.398 3.407 9.843 0 6.637-2.485 10.293-7.454 10.97 3.082.73 5.329 2.179 6.735 4.343 1.414 2.156 2.125 5.094 2.125 8.812 0 4.668-1.106 8.309-3.313 10.922-2.199 2.606-5.543 3.906-10.03 3.906h-13.86Zm11.547 21.688c2.988 0 5.062-.649 6.218-1.954 1.157-1.3 1.735-3.535 1.735-6.703 0-2.312-.356-4.007-1.063-5.093-.699-1.094-1.758-1.79-3.172-2.094-1.406-.3-3.5-.453-6.28-.453h-1.735v16.297Zm.578 25.093c2.133 0 3.789-.328 4.968-.984 1.176-.664 2-1.68 2.47-3.047.476-1.375.718-3.238.718-5.594 0-3.332-.688-5.82-2.063-7.468-1.367-1.645-3.59-2.47-6.671-2.47h-4.297v19.563ZM322.848 124.826h20.14v5.39h-12.89v17.204h10.453v5.14h-10.453v19.047h13.03v5.203h-20.28ZM119.191 223.179h-2.11l-1.171-4.578c-.055-.164-.133-.504-.234-1.016-.106-.508-.165-.851-.172-1.031-.032.219-.094.57-.188 1.047a26.46 26.46 0 0 1-.219 1.016l-1.171 4.562h-2.11l-2.219-8.719h1.813l1.125 4.75a28.3 28.3 0 0 1 .422 2.297c.02-.226.07-.578.156-1.047.094-.476.176-.851.25-1.125l1.266-4.875h1.75l1.265 4.875c.063.219.133.559.219 1.016.082.45.145.836.188 1.156.039-.312.101-.695.187-1.156.094-.469.176-.848.25-1.14l1.11-4.75h1.812ZM132.423 223.179h-5.032v-8.719h5.032v1.516h-3.172v1.906h2.953v1.516h-2.953v2.25h3.172ZM139.123 223.179v-8.719h1.859v7.188h3.531v1.531ZM154.617 215.867c-.688 0-1.227.265-1.61.796-.386.524-.578 1.246-.578 2.172 0 1.95.727 2.922 2.188 2.922.613 0 1.359-.148 2.234-.453v1.547c-.719.305-1.523.453-2.406.453-1.274 0-2.246-.383-2.922-1.156-.668-.77-1-1.875-1-3.313 0-.906.164-1.695.5-2.375.332-.687.805-1.21 1.422-1.578.625-.363 1.347-.547 2.172-.547.851 0 1.707.203 2.562.61l-.594 1.5a11.19 11.19 0 0 0-1-.407 2.93 2.93 0 0 0-.968-.171ZM171.51 218.804c0 1.45-.36 2.563-1.079 3.344-.719.773-1.746 1.156-3.078 1.156-1.336 0-2.36-.383-3.078-1.156-.719-.781-1.078-1.899-1.078-3.36 0-1.445.359-2.55 1.078-3.312.719-.77 1.75-1.156 3.094-1.156 1.343 0 2.367.386 3.078 1.156.707.773 1.062 1.883 1.062 3.328Zm-6.36 0c0 .98.18 1.715.547 2.203.375.492.925.735 1.656.735 1.476 0 2.219-.977 2.219-2.938 0-1.969-.735-2.953-2.203-2.953-.743 0-1.297.25-1.672.75-.368.5-.547 1.234-.547 2.203ZM181.903 223.179l-2.11-6.844h-.047c.07 1.399.11 2.324.11 2.782v4.062H178.2v-8.719h2.515l2.078 6.672h.032l2.187-6.672h2.516v8.719h-1.719v-4.797c.008-.258.035-.937.078-2.031h-.047l-2.25 6.828ZM199.639 223.179h-5.032v-8.719h5.032v1.516h-3.172v1.906h2.953v1.516h-2.953v2.25h3.172ZM221.558 223.179h-1.844v-3.766h-3.453v3.766h-1.86v-8.719h1.86v3.422h3.453v-3.422h1.844ZM236.56 218.804c0 1.45-.36 2.563-1.078 3.344-.719.773-1.746 1.156-3.078 1.156-1.336 0-2.36-.383-3.078-1.156-.72-.781-1.078-1.899-1.078-3.36 0-1.445.359-2.55 1.078-3.312.718-.77 1.75-1.156 3.093-1.156 1.344 0 2.368.386 3.079 1.156.707.773 1.062 1.883 1.062 3.328Zm-6.36 0c0 .98.18 1.715.548 2.203.375.492.925.735 1.656.735 1.476 0 2.219-.977 2.219-2.938 0-1.969-.735-2.953-2.204-2.953-.742 0-1.296.25-1.671.75-.368.5-.547 1.234-.547 2.203ZM246.954 223.179l-2.11-6.844h-.047c.07 1.399.11 2.324.11 2.782v4.062h-1.656v-8.719h2.515l2.078 6.672h.032l2.187-6.672h2.516v8.719h-1.72v-4.797c.009-.258.036-.937.079-2.031h-.047l-2.25 6.828ZM264.69 223.179h-5.032v-8.719h5.032v1.516h-3.172v1.906h2.953v1.516h-2.953v2.25h3.172Zm0 0"
      fill="#DFDCDC"
    />
    <g clipPath="url(#a)">
      <path fill="#a8a8a8" d="M74.21 123.668h228.325v228.32H74.211Zm0 0" />
    </g>
    <g clipPath="url(#b)">
      <path fill="#a8a8a8" d="M74.21 86.188h228.325v228.324H74.211Zm0 0" />
    </g>
  </svg>
)

export default SvgComponent