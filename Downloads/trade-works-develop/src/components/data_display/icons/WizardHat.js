import React from 'react';

const SvgWizardHat = props => (
  <svg width={50} height={50} {...props}>
    <defs>
      <path id="wizard_hat_svg__a" d="M0 .114h49.58v49.529H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(0 .243)">
        <mask id="wizard_hat_svg__b" fill="#fff">
          <use xlinkHref="#wizard_hat_svg__a" />
        </mask>
        <path
          d="M12.221 42.519a3.28 3.28 0 01-.165-.607C10.87 34.205 9.708 26.494 8.51 18.791c-.16-1.027-.453-2.01-.965-2.95C5.315 11.75 3.171 7.606.998 3.483L0 1.594C.128.49.797.308 1.45.114c1.771.772 3.49 1.56 5.242 2.28 3.091 1.274 6.213 2.48 9.297 3.765 2.172.905 4.273 1.957 6.468 2.808.658.255 1.107.671 1.567 1.089 1.988 1.809 3.922 3.675 5.887 5.508 3.839 3.58 7.685 7.153 11.532 10.731 4.379-1.467 7.415-1.799 8.026-.64 1.189 2.253-7.259 9.295-18.868 15.727-11.61 6.43-21.985 9.817-23.174 7.563-.603-1.144 1.279-3.523 4.794-6.426"
          fill="#542871"
          mask="url(#wizard_hat_svg__b)"
        />
      </g>
      <path
        d="M26.93 31.94c-.508-.902-1.405-1.156-1.975-1.814l.03-2.716-2.21 1.518c-.845-.067-1.561-.679-2.548-.661.265.843.502 1.597.75 2.396-.49.705-.983 1.41-1.533 2.197.948.314 1.818.056 2.666.25.487.626.787 1.427 1.487 1.97.583-.72.514-1.645.949-2.381l2.383-.76M25.386 13.03c-.282-.228-.563-.46-.847-.687-.112-.087-.235-.163-.353-.245l-.547.727c-.627.093-1.28.05-1.981.254.34.668.89 1.078 1.316 1.63l-.413 1.976c.47.21.696-.212 1.027-.286.342-.076.665-.239.995-.363.556.334 1.101.659 1.711 1.023.165-.788-.14-1.476-.08-2.17.141-.15.28-.302.419-.451-.121-.163-.228-.34-.363-.487-.287-.314-.588-.615-.884-.92M6.75 14.068c.166.213.33.424.498.636l.818-.737c.525.085 1.094.178 1.725.279-.08-.67-.506-1.102-.678-1.741.238-.438.51-.937.81-1.494-.636-.217-1.168.066-1.783.07-.367-.379-.77-.8-1.207-1.25-.313.369-.286.792-.331 1.165-.052.421-.207.71-.579.879.021.659.38 1.198.607 1.785.051.131.081.27.12.408"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgWizardHat;