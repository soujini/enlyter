import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { color } from '../../../utilities/themes';

const useStyles = makeStyles(theme => ({
  root: {
    '& :hover': {},
  },
}));

function ChequeredFlag_Icon(props) {
  const classes = useStyles(props);
  function styledIcon(props) {
    return (
      <span className={classes.root}>
        <SvgIcon {...props} viewBox="0 0 48 54">
          <g fill={color.primary_palette.black} fillRule="evenodd">
            <path d="M40.694 14.872a13.823 13.823 0 005.282-.722l1.073-4.888c-1.843.62-3.595.82-5.282.722l-1.073 4.888M31.154 11.647c1.528.817 3.07 1.574 4.651 2.151L36.88 8.91c-1.581-.577-3.123-1.334-4.652-2.15l-1.074 4.887M21.93 6.986c1.581.577 3.123 1.334 4.651 2.151l1.075-4.888c-1.53-.817-3.07-1.574-4.653-2.151L21.93 6.986M11.76 6.633c1.844-.62 3.595-.82 5.283-.722l1.073-4.887a13.84 13.84 0 00-5.282.721l-1.075 4.888M34.731 18.687c1.582.577 3.202.975 4.89 1.074.356-1.63.714-3.26 1.073-4.888-1.687-.1-3.308-.497-4.889-1.074l-1.074 4.888M25.508 14.025c1.529.817 3.044 1.693 4.572 2.51.359-1.629.717-3.259 1.074-4.888-1.529-.817-3.044-1.693-4.573-2.51l-1.073 4.888" />
            <path d="M15.968 10.8c1.686.099 3.307.497 4.888 1.074l1.074-4.888c-1.58-.578-3.202-.976-4.888-1.074L15.968 10.8M38.546 24.649a13.847 13.847 0 005.283-.722l1.073-4.888c-1.843.62-3.595.82-5.282.722l-1.074 4.888M29.006 21.424c1.529.817 3.07 1.573 4.651 2.15l1.075-4.888c-1.581-.576-3.122-1.334-4.652-2.15l-1.073 4.887M19.782 16.762c1.581.578 3.123 1.334 4.652 2.15l1.073-4.887c-1.528-.817-3.07-1.574-4.65-2.151l-1.075 4.888zM9.612 16.41c1.844-.62 3.596-.82 5.283-.722l1.073-4.888a13.842 13.842 0 00-5.282.722L9.612 16.41zM32.584 28.462c1.58.579 3.202.977 4.889 1.075l1.073-4.889c-1.687-.099-3.307-.497-4.888-1.073l-1.074 4.887M23.36 23.8c1.528.818 3.044 1.695 4.572 2.512l1.074-4.888c-1.528-.817-3.043-1.694-4.572-2.511L23.36 23.8M13.82 20.576c1.688.1 3.308.496 4.889 1.074l1.073-4.888c-1.58-.578-3.201-.976-4.887-1.074l-1.075 4.888" />
            <path d="M36.398 34.425a13.84 13.84 0 005.282-.722c.36-1.63.716-3.26 1.074-4.888-1.843.619-3.596.82-5.282.72l-1.074 4.89M26.86 31.2c1.527.816 3.07 1.573 4.65 2.15l1.074-4.888c-1.58-.577-3.122-1.334-4.652-2.15l-1.073 4.887M17.635 26.538c1.58.577 3.123 1.334 4.652 2.151l1.073-4.888c-1.528-.817-3.07-1.574-4.651-2.15l-1.074 4.887zM7.465 26.186c1.844-.62 3.595-.82 5.281-.722l1.074-4.887a13.819 13.819 0 00-5.281.72l-1.074 4.889" />
            <rect transform="rotate(103 6.936 26.046)" x={-19.564} y={25.046} width={53} height={2} rx={1} />
          </g>
        </SvgIcon>
      </span>
    );
  }

  /**
   * Custom styling the colors
   */
  const Custom_ChequeredFlag_Icon = withStyles({
    root: {
      '& > svg': {},
      '& :hover': {},
    },
  })(styledIcon);
  return (
    <>
      <Custom_ChequeredFlag_Icon {...props} />
    </>
  );
}

export default ChequeredFlag_Icon;