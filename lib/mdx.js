// Any custom components you want rendered from markdown files go here.
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertBox,
  CaptionedImage,
  GridImage,
  RightImage,
  RightInfoBox,
  SimpleDisclosure,
  Tag,
} from '../components/widgets';
import {ClientPics, PicGrid} from '../components/layout';
import Button, {
  PurpleButton,
  RedButton,
  WhiteButton,
  WideButton,
  WideWhiteButton,
} from '../components/button';
import {CheckIcon, DownloadIcon, HeartIcon} from '@heroicons/react/outline';

export const mdxComponents = {
  // NextJS Stuff
  Image,
  Link,

  // Blog/page widgets
  AlertBox,
  CaptionedImage,
  ClientPics,
  GridImage,
  PicGrid,
  RightImage,
  RightInfoBox,
  SimpleDisclosure,
  Tag,

  // Buttons
  Button,
  RedButton,
  PurpleButton,
  WhiteButton,
  WideWhiteButton,
  WideButton,

  // Icons
  CheckIcon,
  DownloadIcon,
  HeartIcon,
};
