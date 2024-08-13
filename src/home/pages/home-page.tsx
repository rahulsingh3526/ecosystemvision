import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@nextui-org/react';

import { FeatureSwiper } from '@/home/components/feature-swiper';
import { TestimonialSwiper } from '@/home/components/testimonial-swiper';

export const HomePage = () => {
  return (
    <div className="pt-[70px] font-inter-tight lg:pt-0">
      <main className="relative max-w-[1340px] px-5 pt-12 text-white md:px-10 lg:px-7 lg:pt-20">
        <Image
          src={'/header-image.png'}
          alt={'Ecosystem.vision'}
          className="absolute right-0 top-0 z-0 w-[730px]  md:-translate-y-1/3 md:translate-x-1/3"
          width={728}
          height={686}
          priority
        />
        <section className="relative z-10">
          <div>
            <h1 className="w-full font-grotesk text-32 font-medium leading-9 tracking-tighter antialiased md:w-11/12 md:text-48 md:leading-[57px] lg:w-1/2 lg:text-64 lg:leading-[76px]">
              Unlock Earnings and Influence in Web3: Become a Verified
              Professional
            </h1>
            <div className="my-10 h-px bg-custom-mobile lg:bg-custom"></div>
            <h2 className="w-full pb-12 text-base font-normal leading-5	lg:w-2/3 lg:text-xl">
              Join our exclusive network to connect with industry leaders, earn
              money by being contacted as a verified representative, and stay
              ahead in the Web3 ecosystem. Dynamic contact fees ensure fair
              compensation based on demand.
            </h2>
          </div>
          <Button
            href={''}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto h-auto w-full max-w-[280px] bg-gradient-to-r from-white to-white/50 py-3 font-medium text-black"
          >
            <span className="text-base font-medium">
              Join Now and Start Earning
            </span>
          </Button>
        </section>
        <section className="relative z-10 -ml-24 flex rotate-[-4deg] whitespace-nowrap py-12 text-2xl uppercase tracking-tight text-white/10 md:text-4xl lg:text-5xl">
          ecosystem.vision • ecosystem.vision • ecosystem.vision •
          ecosystem.vision • ecosystem.vision • ecosystem.vision •
          ecosystem.vision • ecosystem.vision • ecosystem.vision •
          ecosystem.vision • Lev Kormych • Lev Kormych • Lev Kormych •
        </section>

        <FeatureSwiper />

        <section className="pt-20 md:pt-40">
          <div className="flex flex-wrap lg:items-center">
            <div className="md:w-2/5 lg:w-2/5 lg:pr-24">
              <h2 className="pb-6 font-grotesk text-32 font-medium leading-10 tracking-tighter antialiased  md:text-40 md:leading-tight">
                Connect, Earn, and Grow with Verified Web3 Professionals
              </h2>
              <p className="text-base leading-5">
                Accelerate your projects and earn money by connecting with
                verified professionals in top Web3 companies. Dynamic pricing
                ensures fair compensation, while rigorous verification through
                GitHub activity or professional email guarantees a secure and
                scam-free environment.
              </p>
            </div>
            <div className="lg:w-3/5">
              <div className="aspect-h-1 aspect-w-1 relative mt-16 lg:mt-0">
                <Image
                  src={'/placeholder.png'}
                  alt={'placeholder'}
                  width={65}
                  height={65}
                  className="absolute inset-0 size-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="my-10 h-px bg-custom-mobile lg:my-20 lg:bg-custom"></div>

          <TestimonialSwiper />

          <Button
            as={Link}
            href={''}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-6 h-auto w-full max-w-[280px] bg-gradient-to-r from-white to-white/50 py-3 font-semibold text-black"
          >
            <span className="text-base font-medium">
              Join Now and Start Earning
            </span>
          </Button>
          <div className="mt-20 h-px bg-custom-mobile lg:bg-custom"></div>
        </section>
        <section className="relative pt-20 md:pt-40">
          <div className="relative z-10">
            <h2 className="pb-6 font-grotesk text-32 font-medium leading-10 tracking-tighter antialiased md:w-2/3 md:text-40 md:leading-tight">
              Grant Impact Analysis: A Collaboration with Ecosystem Vision and
              the Cartographer Syndicates
            </h2>
            <p className="pb-12 text-base leading-5 md:w-2/3">
              Gain deep insights into the effectiveness of grant programs with
              our detailed metrics and analyses. Our collaboration with
              ThankArb, Ecosystem Vision, and the Cartographer Syndicate
              showcases how funding is driving real progress in the Web3 space.
            </p>
            <Button
              as={Link}
              href={''}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto h-auto w-full max-w-[280px] bg-gradient-to-r from-white to-white/50 py-3 font-medium text-black"
            >
              <span className="text-base font-medium">
                Explore Grant Impact
              </span>
            </Button>
          </div>
          <div className="aspect-h-7 aspect-w-5 bottom-0 mt-12 md:-mt-32 ">
            <Image
              src={'/bg-image.jpg'}
              alt={'placeholder'}
              width={728}
              height={686}
              className="absolute inset-0 object-cover object-bottom	"
            />
          </div>
        </section>
        <section className="relative z-10 pt-20 md:pt-40">
          <div className="flex flex-wrap">
            <div className="md:w-1/2">
              <h2 className="pb-6 font-grotesk text-32 font-medium leading-10 tracking-tighter antialiased md:text-40 md:leading-tight">
                Real Success Stories from Web3 Professionals
              </h2>
              <p className="pb-12 text-base leading-5">
                Read success stories of how our platform has helped users
                connect with verified professionals, access valuable data, and
                drive their projects forward.
              </p>
              <Button
                as={Link}
                href={''}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto h-auto w-full max-w-[280px] bg-gradient-to-r from-white to-white/50 py-3 font-medium text-black"
              >
                <span className="text-base font-medium">
                  Discover More Success Stories
                </span>
              </Button>
            </div>
            <div className="md:flex md:w-1/2 md:items-center md:justify-center">
              <div className="ml-5 mt-16 w-[230px] rotate-12 rounded-xl border-t border-white bg-innovate p-5 md:mt-0">
                <h2 className="pb-6 text-base leading-tight">
                  RuHow CryptoInnovate Connected with Top Talent
                </h2>
                <p className="text-xs text-white/75">
                  CryptoInnovate used our platform to find and connect with
                  verified developers and industry experts, resulting in a 30%
                  increase in project efficiency and faster time-to-market.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <h2 className="pb-6 font-grotesk text-32 font-medium leading-10 tracking-tighter antialiased md:w-2/3 md:text-40 md:leading-tight">
            Discover Leading Organizations in Web3
          </h2>
          <p className="pb-12 text-base leading-5 md:w-2/3">
            Gain access to detailed profiles of over 6,500 leading Web3
            organizations. Our data includes comprehensive company summaries,
            URLs, social media handles, documentation, grant information, and
            venture capital investments. Sort by recent funding, industry, and
            more to discover the perfect partners and opportunities.
          </p>
          <Button
            as={Link}
            href={''}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto h-auto w-full max-w-[280px] bg-gradient-to-r from-white to-white/50 py-3 font-medium text-black"
          >
            <span className="text-base font-medium">Explore Organizations</span>
          </Button>
          <div className="aspect-h-5 aspect-w-4 relative mt-14 md:aspect-h-9 md:aspect-w-16">
            <Image
              src={'/space.jpg'}
              alt={'placeholder'}
              width={728}
              height={686}
              className="absolute inset-0 object-cover object-center"
            />
          </div>
        </section>
        <section>
          <h2 className="pb-6  font-grotesk text-32 font-medium leading-10 tracking-tighter antialiased md:text-48 md:leading-[57px]">
            Explore Top Grant Programs
          </h2>
          <p className="pb-12 text-base leading-5 md:w-2/3">
            Access detailed data on over 4,000 top Web3 projects, including
            insights into total value locked (TVL), financial metrics, network
            deployments, and ecosystem details. Utilize advanced sorting and
            filtering to identify high-impact projects and understand their
            significance within the Web3 landscape@/home
          </p>
          <Button
            as={Link}
            href={''}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto h-auto w-full max-w-[280px] bg-gradient-to-r from-white to-white/50 py-3 font-medium text-black"
          >
            <span className="text-base font-medium">Discover Programs</span>
          </Button>
        </section>
        <section className="py-20">
          <h2 className="pb-6  font-grotesk text-32 font-medium leading-10 tracking-tighter antialiased md:text-48 md:leading-[57px]">
            Join Now and Start Earning
          </h2>
          <Button
            as={Link}
            href={''}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto h-auto w-full max-w-[280px] bg-gradient-to-r from-white to-white/50 py-3 font-medium text-black"
          >
            <span className="text-base font-medium ">
              Join Now and Start Earning
            </span>
          </Button>
        </section>
      </main>
    </div>
  );
};
