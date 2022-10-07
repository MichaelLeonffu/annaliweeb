import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ArtCard(props) {
  // const [expanded, setExpanded] = React.useState(false);
  const [moreOpen, setMoreOpen] = React.useState(false);
  const handleOpen = () => setMoreOpen(true);
  const handleClose = () => setMoreOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };

  // console.log(props);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  function generateTags() {
    return props.artwork.tags.map((tag) => {
      return (
        <MuiLink href={"/"+tag}>
          <Typography
            display="inline"
            variant="subtitle"
            color="common.black"
            fontWeight='bold'
            fontFamily='Monospace'
          >
            {"#"+tag+" "}
          </Typography>
        </MuiLink>
      )
    })
  }

  return (
    <Card
      sx={{
        borderRadius: '16px'
      }}
    >
      <Modal
        open={moreOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit this post in discord! Copy and paste the thing below
          </Typography>
          <Typography id="modal-modal-description" noWrap='true' sx={{ mt: 2, fontFamily: 'Monospace'}}>
            annali art_edit {props.artwork._id.guild} {props.artwork._id.channel} {props.artwork._id.message}
          </Typography>
          <Typography id="modal-modal-description" noWrap='true' sx={{ mt: 2, fontFamily: 'Monospace'}}>
            REPLACE-THIS-WITH-TAGS
          </Typography>
          <Typography id="modal-modal-description" noWrap='true' sx={{ mt: 2, fontFamily: 'Monospace'}}>
            REPLACE-THIS-WITH-SERIES-NUMBER
          </Typography>
          <Typography id="modal-modal-description" noWrap='true' sx={{ mt: 2, fontFamily: 'Monospace'}}>
            REPLACE-THIS-WITH-TITLE
          </Typography>
          <Typography id="modal-modal-description" noWrap='true' sx={{ mt: 2, fontFamily: 'Monospace'}}>
            REPLACE-THIS-WITH-CAPTION
          </Typography>
        </Box>
      </Modal>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: pink[300] }}
            aria-label="recipe"
          >

            {/* {props.artwork._id[0]} */}
          </Avatar>
        }
        action={
          <IconButton aria-label="more" color="secondary" onClick={handleOpen}>
            <MoreHorizIcon />
          </IconButton>
        }
        // title={props.artwork.metadata.title}
        title="Really amazing artist"
        // subheader={props.artwork.tags.map((tag) => "#"+tag).join(', ')}
      />
      <CardMedia
        component="img"
        src={props.artwork.url}
        alt="Cute artwork"
      />
      <CardContent>
        <Typography
          variant="body1"
          fontWeight='bold'
          sx={{ mt: -1 }}
        >
          {props.artwork.title}{" "}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {props.artwork.caption}
        </Typography>
        <Typography
          sx={{ mb: -2, mt: 3 }}
        >
          {generateTags()}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
    </Card>
  );
}
