/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Heading,
  Text,
  Label,
  Image,
  Button,
} from 'theme-ui';
import Input from 'components/input';
import banner from 'assets/images/banner.png';
import paypal from 'assets/images/paypal.png';
import google from 'assets/images/google.png';
import dropbox from 'assets/images/dropbox.png';
import { rgba } from 'polished';
import SliderHero from '../components/Homepage/SliderHero'
const Banner = () => {
  return (
    <div>
       <SliderHero/>
    </div>
  );
};

export default Banner;

