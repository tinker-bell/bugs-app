import React from 'react';
import {white} from 'material-ui/styles/colors';


const iconStyles = {
  height: 24,
  width: 24,
  viewBox: "0 0 32 32"
};

const GitHubIcon = (props) => (
  <svg height={props.style.height} width={props.style.width} viewBox={props.style.viewBox} fill={props.color}>
    <path d="M16 0C7.2 0 0 7.2 0 16c0 7.1 4.6 13.1 10.9 15.2 0.8 0.1 1.1-0.3 1.1-0.8 0-0.4 0-1.4 0-2.8 -4.4 1-5.4-2.1-5.4-2.1 -0.7-1.8-1.8-2.3-1.8-2.3 -1.5-1 0.1-1 0.1-1 1.6 0.1 2.5 1.6 2.5 1.6 1.4 2.4 3.7 1.7 4.7 1.3 0.1-1 0.6-1.7 1-2.1 -3.6-0.4-7.3-1.8-7.3-7.9 0-1.7 0.6-3.2 1.6-4.3C7.3 10.5 6.7 8.8 7.6 6.6c0 0 1.3-0.4 4.4 1.6 1.3-0.4 2.6-0.5 4-0.5 1.4 0 2.7 0.2 4 0.5 3.1-2.1 4.4-1.6 4.4-1.6 0.9 2.2 0.3 3.8 0.2 4.2 1 1.1 1.6 2.5 1.6 4.3 0 6.1-3.7 7.5-7.3 7.9C19.5 23.5 20 24.5 20 26c0 2 0 3.9 0 4.4 0 0.4 0.3 0.9 1.1 0.7C27.4 29.1 32 23.1 32 16 32 7.2 24.8 0 16 0z" />
  </svg>
);



const GitHubSvgIcon = () => (
  <div>
  <GitHubIcon style={iconStyles} color={white} />
  </div>
);

export default GitHubSvgIcon;