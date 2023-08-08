import { H1Hero } from './headings';
import Link from 'next/link';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import { MainFullBleedColumn } from './layout';

export default function HeroImage() {
  return (
    <MainFullBleedColumn bgClasses="bg-imgScotus bg-cover">
      <div className="flex" id="hero-photo">
        <div className="text-gray-200 bg-black bg-opacity-75 p-5 sm:p-12 my-5 sm:m-10 md:m-12 lg:m-20 w-full ">
          <H1Hero>
            Free Law Project is the leading nonprofit using technology, data, and advocacy to make
            the legal ecosystem more equitable and&nbsp;competitive.
          </H1Hero>
          <p className="mt-5">
            <Link href="/about/">
              <a className="underline font-display font-light">
                Learn about our work{' '}
                <ArrowCircleRightIcon className="inline text-gray-300 h-4 w-4" aria-hidden="true" />
              </a>
            </Link>
          </p>
        </div>
      </div>
    </MainFullBleedColumn>
  );
}
