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
  InstallRECAPButtons,
  PurpleButton,
  RedButton,
  WhiteButton,
  WideButton,
  WideWhiteButton,
} from '../components/button';
import {H3ForNavigation} from '../components/headings';
import DoubleTheDonationPlugin from "../components/doubleTheDonationPlugin.js";
import {CheckIcon, DownloadIcon, HeartIcon, QuestionMarkCircleIcon} from '@heroicons/react/outline';

export const mdxComponents = {
  // NextJS Stuff
  Image,
  Link,

  // Headings
  H3ForNavigation,

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
  InstallRECAPButtons,
  RedButton,
  PurpleButton,
  WhiteButton,
  WideWhiteButton,
  WideButton,

  // Icons
  CheckIcon,
  DownloadIcon,
  HeartIcon,
  QuestionMarkCircleIcon,

  DoubleTheDonationPlugin,
};
