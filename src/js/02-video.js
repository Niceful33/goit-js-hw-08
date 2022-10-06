import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_TIME = 'videoplayer-current-time';

const onPlay = function (data) {
  const currentTime = localStorage.setItem(LOCAL_TIME, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(LOCAL_TIME) || 0);
