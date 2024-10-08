import { styled } from '@mui/material/styles';

import { ExpandMoreProps } from './expandMore.types';
import { IconButton } from '@mui/material';
import { constants } from '../../../constants';

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return (
    <IconButton {...other}>
      <span>
        <svg
          height="16px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 32 32"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
            fill={constants.colors.secondary}
          />
        </svg>
      </span>
    </IconButton>
  );
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));
