'use client';

import Image from 'next/image';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import clsx from 'clsx';

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-center bg-stone-200 overflow-hidden">
      <Nav />
      <Hero />
      <Experience />
      <Footer />
    </main>
  );
}

const Nav = ({}) => {
  return (
    <nav className="w-full flex justify-center fixed top-0 py-6 px-4 z-50 bg-white/10 shadow-sm ring-1 ring-black/5 backdrop-blur-md">
      <div className="container flex justify-between">
        <div>
          <a className="text-blue-700" href="#top">
            John
          </a>
        </div>
        <div className="flex gap-4 text-blue-700">
          <a href="#connect">connect</a>
          <a href="#experience">projects</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({}) => {
  return (
    <section className="h-[86vh] flex items-center justify-center relative px-4 z-30" id="top">
      <div className="container relative">
        <div className="absolute left-[14%] top-[30%] h-96 w-96 z-10">
          <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full opacity-[50%] rounded-full blur-sm animate-float"></div>
          <div className="absolute top-0 left-0 bg-gradient-conic from-rose-500 via-green-600 to-teal-300 h-[92%] w-[92%] opacity-[50%] rounded-full transform translate-x-12 translate-y-8 blur-sm animate-float-1"></div>
          <div className=" absolute top-0 left-0 bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 opacity-[50%] h-[84%] w-[84%] rounded-full transform translate-x-8 translate-y-16 blur-sm animate-float-2"></div>
          <div className=" absolute top-0 left-0 bg-gradient-radial from-amber-500 via-yellow-200 to-lime-400 opacity-[50%] h-2/3 w-2/3 rounded-full transform translate-x-8 translate-y-16 blur-sm animate-float-3"></div>
        </div>
        <div className="absolute top-[-25%] right-[11%] max-w-96">
          <svg
            width="499"
            height="502"
            viewBox="0 0 499 502"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 22.5477C97.2592 65.7221 151.839 54.3258 249.386 22.5477C344.973 -9.45688 399.655 -2.7109 497.771 22.5477"
              stroke="#6366F1"
            />
            <path
              d="M1 45.2716C97.2592 72.0557 151.839 64.9858 249.386 45.2716C344.973 25.4169 399.655 29.6019 497.771 45.2716"
              stroke="#6366F1"
            />
            <path
              d="M1 61.2397C97.2592 78.4295 151.839 73.8921 249.386 61.2397C344.973 48.4971 399.655 51.183 497.771 61.2397"
              stroke="#6366F1"
            />
            <path
              d="M1 70.3897C97.2592 85.5807 151.839 81.5709 249.386 70.3897C344.973 59.1288 399.655 61.5024 497.771 70.3897"
              stroke="#6366F1"
            />
            <path
              d="M1 81.522C97.2592 95.9135 151.839 92.1147 249.386 81.522C344.973 70.8539 399.655 73.1025 497.771 81.522"
              stroke="#6366F1"
            />
            <path
              d="M1 97.2444C97.2592 117.261 151.839 111.977 249.386 97.2444C344.973 82.4067 399.655 85.5342 497.771 97.2444"
              stroke="#6366F1"
            />
            <path
              d="M1 111.518C97.2592 143.499 151.839 135.058 249.386 111.518C344.973 87.8114 399.655 92.8084 497.771 111.518"
              stroke="#6366F1"
            />
            <path
              d="M1 129.022C97.2592 170.198 151.839 159.329 249.386 129.022C344.973 98.4996 399.655 104.933 497.771 129.022"
              stroke="#6366F1"
            />
            <path
              d="M1 152.31C97.2592 199.482 151.839 187.031 249.386 152.31C344.973 117.342 399.655 124.713 497.771 152.31"
              stroke="#6366F1"
            />
            <path
              d="M1 172.183C97.2592 227.75 151.839 213.082 249.386 172.183C344.973 130.992 399.655 139.674 497.771 172.183"
              stroke="#6366F1"
            />
            <path
              d="M1 195.661C97.2592 284.409 151.839 260.983 249.386 195.661C344.973 129.874 399.655 143.741 497.771 195.661"
              stroke="#6366F1"
            />
            <path
              d="M1 235.013C97.2592 384.125 151.839 344.766 249.386 235.013C344.973 124.479 399.655 147.778 497.771 235.013"
              stroke="#6366F1"
            />
            <path
              d="M1 277.294C97.2592 478.774 151.839 425.592 249.386 277.294C344.973 127.939 399.655 159.42 497.771 277.294"
              stroke="#6366F1"
            />
            <path
              d="M1 307.567C97.2592 543.827 151.839 481.464 249.386 307.567C344.973 132.431 399.655 169.346 497.771 307.567"
              stroke="#6366F1"
            />
            <path
              d="M1 440.135C97.2592 502.099 151.839 485.743 249.386 440.135C344.973 394.203 399.655 403.884 497.771 440.135"
              stroke="#6366F1"
            />
            <path
              d="M1 472.02C97.2592 503.601 151.839 495.265 249.386 472.02C344.973 448.609 399.655 453.544 497.771 472.02"
              stroke="#6366F1"
            />
            <path
              d="M1 488.885C97.2592 505.275 151.839 500.949 249.386 488.885C344.973 476.735 399.655 479.296 497.771 488.885"
              stroke="#6366F1"
            />
            <path
              d="M1 495.69C97.2592 501.687 151.839 500.104 249.386 495.69C344.973 491.245 399.655 492.182 497.771 495.69"
              stroke="#6366F1"
            />
            <path
              d="M1 498.707C97.2592 501.505 151.839 500.766 249.386 498.707C344.973 496.632 399.655 497.069 497.771 498.707"
              stroke="#6366F1"
            />
            <path
              d="M1 500.8C97.2592 500.401 151.839 500.506 249.386 500.8C344.973 501.097 399.655 501.034 497.771 500.8"
              stroke="#6366F1"
            />
          </svg>
        </div>
        <div className="container flex flex-col justify-center items-center relative z-50">
          <div className="aspect-video rounded-3xl bg-white/10 shadow-xl ring-1 ring-black/5 px-10 py-12 flex items-center backdrop-blur-lg relative max-w-[48rem] mt-32">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-8xl font-medium text-stone-800 z-40 uppercase font-hammersmith tracking-widest">
                John
              </h1>
              <p className="text-gray-700 font-medium animate-fade-in">
                I&apos;m an experienced software and web engineer with a passion for implementing
                high quality designs using the latest frontend technologies.
              </p>
              <div className="flex flex-col md:flex-row gap-3 mt-4 animate-fade-in-2">
                <a
                  href="#experience"
                  className="bg-purple-400 text-stone-900 px-4 py-1 font-semibold rounded-full hover:bg-pink-400 transition ease-in-out"
                >
                  My projects
                </a>
                <a
                  href="#connect"
                  className=" border-2 border-stone-700 text-stone-700 px-4 py-1 font-semibold rounded-full hover:border-gray-600 hover:text-gray-600 transition ease-in-out"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = ({}) => {
  const experienceData = [
    {
      id: 0,
      title: 'Ionic',
      domain: 'ionic.io',
      tags: ['Maintenance', 'Style and functionality upgrades'],
      link: 'https://ionic.io/',
    },
    {
      id: 1,
      title: 'Ionic Framework',
      domain: 'ionicframework.com',
      tags: ['Full Build', 'Maintenance', 'Style and functionality upgrades'],
      link: 'https://ionicframework.com/',
    },
    {
      id: 2,
      title: 'Stencil',
      domain: 'stenciljs.com',
      tags: ['Full Build', 'Maintenance', 'Style and functionality upgrades'],
      link: 'https://stenciljs.com/',
    },
    {
      id: 3,
      title: 'Capacitor',
      domain: 'capacitorjs.com',
      tags: ['Maintenance', 'Style and functionality upgrades'],
      link: 'https://ionicframework.com/',
    },
    {
      id: 4,
      title: 'Appflow',
      domain: 'ionic.io/appflow',
      tags: ['Maintenance', 'Style and functionality upgrades'],
      link: 'https://ionic.io/appflow',
    },
    {
      id: 5,
      title: 'RedTag Digital',
      domain: 'redtag.digital',
      tags: ['Full Build'],
      link: 'https://redtag.digital',
    },
    {
      id: 6,
      title: 'Self',
      domain: 'burdstudios.com',
      tags: ['Full Build', 'Maintenance', 'Style and functionality upgrades'],
      link: 'https://burdstudios.com',
    },
    {
      id: 7,
      title: 'RedTag Digital',
      domain: 'jabel.com',
      tags: ['Full Build'],
      link: 'https://jabel.com',
    },
  ];

  const [tlFinished, setTlFinished] = useState(false);

  const handleFinished = () => {
    setTlFinished(true);
  };

  useGSAP(({ handleFinished }) => {
    gsap.registerPlugin(ScrollTrigger);

    const expTl = gsap.timeline({
      scrollTrigger: { trigger: '#experience', start: 'top center' },
      onComplete: handleFinished,
    });

    expTl.from('.h2', {
      y: 100,
      duration: 0.15,
      autoAlpha: 0,
      ease: 'power2.out',
    });
    expTl.from(
      '.p',
      {
        y: 100,
        duration: 0.15,
        autoAlpha: 0,
        ease: 'power2.out',
      },
      '<+=0.1',
    );
    for (let i = 0; i <= experienceData.length; i++) {
      expTl.from(
        `.card-${i}`,
        {
          y: 100,
          duration: 0.3,
          autoAlpha: 0,
          ease: 'power2.out',
        },
        '<+=0.1',
      );
    }
    expTl.from(
      '.tube',
      {
        y: 50,
        duration: 0.3,
        autoAlpha: 0,
        ease: 'power1.inOut',
      },
      '<+=0.1',
    );
    expTl.from(
      '.squiggle',
      {
        y: 50,
        duration: 0.3,
        autoAlpha: 0,
        ease: 'power1.inOut',
      },
      '<+=0.1',
    );
  });

  return (
    <section id="experience" className="flex justify-center py-48 px-4 relative z-30">
      <div className="container relative">
        <div className="absolute left-[-10%] bottom-[-5%] sm:bottom-[-10%] md:bottom-[-20%] lg:bottom-[-40%] transform scale-75 rotate-3 z-0">
          <svg
            className="squiggle"
            width="402"
            height="403"
            viewBox="0 0 402 403"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.29143 2.13199C-2.63012 88.2983 5.29147 136.271 5.29143 219.471C5.29143 289.937 8.85589 331.868 5.29143 401.436"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M37.0939 2.13199C29.1723 88.2983 29.5407 135.825 37.0939 219.471C40.8702 290.056 40.6583 331.868 37.0939 401.436"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M68.8963 2.13199C60.9748 88.2983 61.3432 135.825 68.8963 219.471C72.6727 290.056 72.4608 331.868 68.8963 401.436"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M117.199 1C109.278 87.1663 105.157 131.46 96.0041 216.358C91.0269 288.522 96.8518 321.066 91.7651 400.021"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M175.414 1C167.492 87.1663 163.371 131.46 154.219 216.358C149.241 288.522 155.066 321.066 149.98 400.021"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M132.501 2.13199C124.58 88.2983 124.948 135.825 132.501 219.471C136.278 290.056 136.066 331.868 132.501 401.436"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M196.106 2.13199L196.106 218.622L196.106 401.436"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M216.824 1C208.902 87.1663 209.27 134.693 216.824 218.339C220.6 288.924 220.388 330.736 216.824 400.304"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path d="M280.429 1L280.429 217.49L280.429 400.304" stroke="#06B6D4" stroke-width="2" />
            <path
              d="M227.909 2.13199C219.987 88.2983 220.355 135.825 227.909 219.471C231.685 290.056 231.473 331.868 227.909 401.436"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M3.03064 398.214C89.0752 406.147 136.98 398.214 220.063 398.214C290.429 398.214 332.301 394.645 401.771 398.214"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M3.03064 366.367C89.0752 374.299 136.535 373.93 220.063 366.367C290.548 362.585 332.301 362.797 401.771 366.367"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M3.03064 334.519C89.0752 342.452 136.535 342.083 220.063 334.519C290.548 330.737 332.301 330.95 401.771 334.519"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M1.90027 286.148C87.9448 294.08 132.176 298.207 216.954 307.373C289.016 312.357 321.514 306.524 400.358 311.618"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M1.90027 227.851C87.9448 235.784 132.176 239.911 216.954 249.076C289.016 254.06 321.514 248.227 400.358 253.321"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M3.03064 270.824C89.0752 278.757 136.535 278.388 220.063 270.824C290.548 267.042 332.301 267.255 401.771 270.824"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M3.03064 207.129L219.215 207.129L401.771 207.129"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M1.90027 186.382C87.9448 194.315 135.404 193.946 218.932 186.382C289.418 182.601 331.17 182.813 400.64 186.382"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M1.90027 122.687L218.085 122.687L400.64 122.687"
              stroke="#06B6D4"
              stroke-width="2"
            />
            <path
              d="M3.03064 175.282C89.0752 183.215 136.535 182.846 220.063 175.282C290.548 171.5 332.301 171.712 401.771 175.282"
              stroke="#06B6D4"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="absolute right-[-4%] top-[-10%] transform scale-75 z-0">
          <svg
            className="tube"
            width="88"
            height="314"
            viewBox="0 0 88 314"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M87.5 41C87.5 63.3349 68.0582 81.5 44 81.5C19.9418 81.5 0.5 63.3349 0.5 41C0.5 18.6651 19.9418 0.5 44 0.5C68.0582 0.5 87.5 18.6651 87.5 41Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 45C87.5 67.3349 68.0582 85.5 44 85.5C19.9418 85.5 0.5 67.3349 0.5 45C0.5 22.6651 19.9418 4.5 44 4.5C68.0582 4.5 87.5 22.6651 87.5 45Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 49C87.5 71.3349 68.0582 89.5 44 89.5C19.9418 89.5 0.5 71.3349 0.5 49C0.5 26.6651 19.9418 8.5 44 8.5C68.0582 8.5 87.5 26.6651 87.5 49Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 53C87.5 75.3349 68.0582 93.5 44 93.5C19.9418 93.5 0.5 75.3349 0.5 53C0.5 30.6651 19.9418 12.5 44 12.5C68.0582 12.5 87.5 30.6651 87.5 53Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 57C87.5 79.3349 68.0582 97.5 44 97.5C19.9418 97.5 0.5 79.3349 0.5 57C0.5 34.6651 19.9418 16.5 44 16.5C68.0582 16.5 87.5 34.6651 87.5 57Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 61C87.5 83.3349 68.0582 101.5 44 101.5C19.9418 101.5 0.5 83.3349 0.5 61C0.5 38.6651 19.9418 20.5 44 20.5C68.0582 20.5 87.5 38.6651 87.5 61Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 65C87.5 87.3349 68.0582 105.5 44 105.5C19.9418 105.5 0.5 87.3349 0.5 65C0.5 42.6651 19.9418 24.5 44 24.5C68.0582 24.5 87.5 42.6651 87.5 65Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 69C87.5 91.3349 68.0582 109.5 44 109.5C19.9418 109.5 0.5 91.3349 0.5 69C0.5 46.6651 19.9418 28.5 44 28.5C68.0582 28.5 87.5 46.6651 87.5 69Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 73C87.5 95.3349 68.0582 113.5 44 113.5C19.9418 113.5 0.5 95.3349 0.5 73C0.5 50.6651 19.9418 32.5 44 32.5C68.0582 32.5 87.5 50.6651 87.5 73Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 77C87.5 99.3349 68.0582 117.5 44 117.5C19.9418 117.5 0.5 99.3349 0.5 77C0.5 54.6651 19.9418 36.5 44 36.5C68.0582 36.5 87.5 54.6651 87.5 77Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 81C87.5 103.335 68.0582 121.5 44 121.5C19.9418 121.5 0.5 103.335 0.5 81C0.5 58.6651 19.9418 40.5 44 40.5C68.0582 40.5 87.5 58.6651 87.5 81Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 85C87.5 107.335 68.0582 125.5 44 125.5C19.9418 125.5 0.5 107.335 0.5 85C0.5 62.6651 19.9418 44.5 44 44.5C68.0582 44.5 87.5 62.6651 87.5 85Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 89C87.5 111.335 68.0582 129.5 44 129.5C19.9418 129.5 0.5 111.335 0.5 89C0.5 66.6651 19.9418 48.5 44 48.5C68.0582 48.5 87.5 66.6651 87.5 89Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 93C87.5 115.335 68.0582 133.5 44 133.5C19.9418 133.5 0.5 115.335 0.5 93C0.5 70.6651 19.9418 52.5 44 52.5C68.0582 52.5 87.5 70.6651 87.5 93Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 97C87.5 119.335 68.0582 137.5 44 137.5C19.9418 137.5 0.5 119.335 0.5 97C0.5 74.6651 19.9418 56.5 44 56.5C68.0582 56.5 87.5 74.6651 87.5 97Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 101C87.5 123.335 68.0582 141.5 44 141.5C19.9418 141.5 0.5 123.335 0.5 101C0.5 78.6651 19.9418 60.5 44 60.5C68.0582 60.5 87.5 78.6651 87.5 101Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 105C87.5 127.335 68.0582 145.5 44 145.5C19.9418 145.5 0.5 127.335 0.5 105C0.5 82.6651 19.9418 64.5 44 64.5C68.0582 64.5 87.5 82.6651 87.5 105Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 109C87.5 131.335 68.0582 149.5 44 149.5C19.9418 149.5 0.5 131.335 0.5 109C0.5 86.6651 19.9418 68.5 44 68.5C68.0582 68.5 87.5 86.6651 87.5 109Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 113C87.5 135.335 68.0582 153.5 44 153.5C19.9418 153.5 0.5 135.335 0.5 113C0.5 90.6651 19.9418 72.5 44 72.5C68.0582 72.5 87.5 90.6651 87.5 113Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 117C87.5 139.335 68.0582 157.5 44 157.5C19.9418 157.5 0.5 139.335 0.5 117C0.5 94.6651 19.9418 76.5 44 76.5C68.0582 76.5 87.5 94.6651 87.5 117Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 121C87.5 143.335 68.0582 161.5 44 161.5C19.9418 161.5 0.5 143.335 0.5 121C0.5 98.6651 19.9418 80.5 44 80.5C68.0582 80.5 87.5 98.6651 87.5 121Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 125C87.5 147.335 68.0582 165.5 44 165.5C19.9418 165.5 0.5 147.335 0.5 125C0.5 102.665 19.9418 84.5 44 84.5C68.0582 84.5 87.5 102.665 87.5 125Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 129C87.5 151.335 68.0582 169.5 44 169.5C19.9418 169.5 0.5 151.335 0.5 129C0.5 106.665 19.9418 88.5 44 88.5C68.0582 88.5 87.5 106.665 87.5 129Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 133C87.5 155.335 68.0582 173.5 44 173.5C19.9418 173.5 0.5 155.335 0.5 133C0.5 110.665 19.9418 92.5 44 92.5C68.0582 92.5 87.5 110.665 87.5 133Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 137C87.5 159.335 68.0582 177.5 44 177.5C19.9418 177.5 0.5 159.335 0.5 137C0.5 114.665 19.9418 96.5 44 96.5C68.0582 96.5 87.5 114.665 87.5 137Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 141C87.5 163.335 68.0582 181.5 44 181.5C19.9418 181.5 0.5 163.335 0.5 141C0.5 118.665 19.9418 100.5 44 100.5C68.0582 100.5 87.5 118.665 87.5 141Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 145C87.5 167.335 68.0582 185.5 44 185.5C19.9418 185.5 0.5 167.335 0.5 145C0.5 122.665 19.9418 104.5 44 104.5C68.0582 104.5 87.5 122.665 87.5 145Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 149C87.5 171.335 68.0582 189.5 44 189.5C19.9418 189.5 0.5 171.335 0.5 149C0.5 126.665 19.9418 108.5 44 108.5C68.0582 108.5 87.5 126.665 87.5 149Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 153C87.5 175.335 68.0582 193.5 44 193.5C19.9418 193.5 0.5 175.335 0.5 153C0.5 130.665 19.9418 112.5 44 112.5C68.0582 112.5 87.5 130.665 87.5 153Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 157C87.5 179.335 68.0582 197.5 44 197.5C19.9418 197.5 0.5 179.335 0.5 157C0.5 134.665 19.9418 116.5 44 116.5C68.0582 116.5 87.5 134.665 87.5 157Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 161C87.5 183.335 68.0582 201.5 44 201.5C19.9418 201.5 0.5 183.335 0.5 161C0.5 138.665 19.9418 120.5 44 120.5C68.0582 120.5 87.5 138.665 87.5 161Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 165C87.5 187.335 68.0582 205.5 44 205.5C19.9418 205.5 0.5 187.335 0.5 165C0.5 142.665 19.9418 124.5 44 124.5C68.0582 124.5 87.5 142.665 87.5 165Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 169C87.5 191.335 68.0582 209.5 44 209.5C19.9418 209.5 0.5 191.335 0.5 169C0.5 146.665 19.9418 128.5 44 128.5C68.0582 128.5 87.5 146.665 87.5 169Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 173C87.5 195.335 68.0582 213.5 44 213.5C19.9418 213.5 0.5 195.335 0.5 173C0.5 150.665 19.9418 132.5 44 132.5C68.0582 132.5 87.5 150.665 87.5 173Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 177C87.5 199.335 68.0582 217.5 44 217.5C19.9418 217.5 0.5 199.335 0.5 177C0.5 154.665 19.9418 136.5 44 136.5C68.0582 136.5 87.5 154.665 87.5 177Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 181C87.5 203.335 68.0582 221.5 44 221.5C19.9418 221.5 0.5 203.335 0.5 181C0.5 158.665 19.9418 140.5 44 140.5C68.0582 140.5 87.5 158.665 87.5 181Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 185C87.5 207.335 68.0582 225.5 44 225.5C19.9418 225.5 0.5 207.335 0.5 185C0.5 162.665 19.9418 144.5 44 144.5C68.0582 144.5 87.5 162.665 87.5 185Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 189C87.5 211.335 68.0582 229.5 44 229.5C19.9418 229.5 0.5 211.335 0.5 189C0.5 166.665 19.9418 148.5 44 148.5C68.0582 148.5 87.5 166.665 87.5 189Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 193C87.5 215.335 68.0582 233.5 44 233.5C19.9418 233.5 0.5 215.335 0.5 193C0.5 170.665 19.9418 152.5 44 152.5C68.0582 152.5 87.5 170.665 87.5 193Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 197C87.5 219.335 68.0582 237.5 44 237.5C19.9418 237.5 0.5 219.335 0.5 197C0.5 174.665 19.9418 156.5 44 156.5C68.0582 156.5 87.5 174.665 87.5 197Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 201C87.5 223.335 68.0582 241.5 44 241.5C19.9418 241.5 0.5 223.335 0.5 201C0.5 178.665 19.9418 160.5 44 160.5C68.0582 160.5 87.5 178.665 87.5 201Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 205C87.5 227.335 68.0582 245.5 44 245.5C19.9418 245.5 0.5 227.335 0.5 205C0.5 182.665 19.9418 164.5 44 164.5C68.0582 164.5 87.5 182.665 87.5 205Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 209C87.5 231.335 68.0582 249.5 44 249.5C19.9418 249.5 0.5 231.335 0.5 209C0.5 186.665 19.9418 168.5 44 168.5C68.0582 168.5 87.5 186.665 87.5 209Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 213C87.5 235.335 68.0582 253.5 44 253.5C19.9418 253.5 0.5 235.335 0.5 213C0.5 190.665 19.9418 172.5 44 172.5C68.0582 172.5 87.5 190.665 87.5 213Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 217C87.5 239.335 68.0582 257.5 44 257.5C19.9418 257.5 0.5 239.335 0.5 217C0.5 194.665 19.9418 176.5 44 176.5C68.0582 176.5 87.5 194.665 87.5 217Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 221C87.5 243.335 68.0582 261.5 44 261.5C19.9418 261.5 0.5 243.335 0.5 221C0.5 198.665 19.9418 180.5 44 180.5C68.0582 180.5 87.5 198.665 87.5 221Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 225C87.5 247.335 68.0582 265.5 44 265.5C19.9418 265.5 0.5 247.335 0.5 225C0.5 202.665 19.9418 184.5 44 184.5C68.0582 184.5 87.5 202.665 87.5 225Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 229C87.5 251.335 68.0582 269.5 44 269.5C19.9418 269.5 0.5 251.335 0.5 229C0.5 206.665 19.9418 188.5 44 188.5C68.0582 188.5 87.5 206.665 87.5 229Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 233C87.5 255.335 68.0582 273.5 44 273.5C19.9418 273.5 0.5 255.335 0.5 233C0.5 210.665 19.9418 192.5 44 192.5C68.0582 192.5 87.5 210.665 87.5 233Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 237C87.5 259.335 68.0582 277.5 44 277.5C19.9418 277.5 0.5 259.335 0.5 237C0.5 214.665 19.9418 196.5 44 196.5C68.0582 196.5 87.5 214.665 87.5 237Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 241C87.5 263.335 68.0582 281.5 44 281.5C19.9418 281.5 0.5 263.335 0.5 241C0.5 218.665 19.9418 200.5 44 200.5C68.0582 200.5 87.5 218.665 87.5 241Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 245C87.5 267.335 68.0582 285.5 44 285.5C19.9418 285.5 0.5 267.335 0.5 245C0.5 222.665 19.9418 204.5 44 204.5C68.0582 204.5 87.5 222.665 87.5 245Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 249C87.5 271.335 68.0582 289.5 44 289.5C19.9418 289.5 0.5 271.335 0.5 249C0.5 226.665 19.9418 208.5 44 208.5C68.0582 208.5 87.5 226.665 87.5 249Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 253C87.5 275.335 68.0582 293.5 44 293.5C19.9418 293.5 0.5 275.335 0.5 253C0.5 230.665 19.9418 212.5 44 212.5C68.0582 212.5 87.5 230.665 87.5 253Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 257C87.5 279.335 68.0582 297.5 44 297.5C19.9418 297.5 0.5 279.335 0.5 257C0.5 234.665 19.9418 216.5 44 216.5C68.0582 216.5 87.5 234.665 87.5 257Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 261C87.5 283.335 68.0582 301.5 44 301.5C19.9418 301.5 0.5 283.335 0.5 261C0.5 238.665 19.9418 220.5 44 220.5C68.0582 220.5 87.5 238.665 87.5 261Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 265C87.5 287.335 68.0582 305.5 44 305.5C19.9418 305.5 0.5 287.335 0.5 265C0.5 242.665 19.9418 224.5 44 224.5C68.0582 224.5 87.5 242.665 87.5 265Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 269C87.5 291.335 68.0582 309.5 44 309.5C19.9418 309.5 0.5 291.335 0.5 269C0.5 246.665 19.9418 228.5 44 228.5C68.0582 228.5 87.5 246.665 87.5 269Z"
              stroke="#EC4899"
            />
            <path
              d="M87.5 273C87.5 295.335 68.0582 313.5 44 313.5C19.9418 313.5 0.5 295.335 0.5 273C0.5 250.665 19.9418 232.5 44 232.5C68.0582 232.5 87.5 250.665 87.5 273Z"
              stroke="#EC4899"
            />
          </svg>
        </div>
        <header className="mb-12 relative z-10 max-w-[70%]">
          <h2 className="h2 text-xl font-medium mb-2">Experience</h2>
          <p className="p">
            Some of my most notable experiences are laid out below in these cards. From personal
            projects, to agency experience, to long term maintenance of notable web properties from
            a reputable software company, I&apos;ve done it all.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {experienceData.map(({ id, title, domain, tags, link }) => (
            <a
              key={id}
              className={clsx(
                `card-${id} border-2 border-blue-500 rounded-xl bg-white/10 shadow-md ring-1 ring-black/5 px-10 py-12 backdrop-blur-lg relative hover:shadow-lg`,
                {
                  'transition ease-in-out': tlFinished,
                },
              )}
              href={link}
              target="_blank"
            >
              <h3 className="font-medium text-lg lowercase">{title}</h3>
              <p>{domain}</p>
              <ul>
                <li>
                  <p className="text-sm font-light mt-1">Maintenance</p>
                  <p className="text-sm font-light mt-1">Style and functionality upgrades</p>
                </li>
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({}) => {
  return (
    <footer className="px-4 py-[4rem] lg:py-[8rem] flex justify-center" id="connect">
      <div className="container flex flex-col justify-center items-center text-center relative">
        <div className="absolute top-[-100%] right-1/4 md:right-1/3">
          <svg
            width="184"
            height="91"
            viewBox="0 0 184 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="26.9706"
              cy="45.5"
              r="25.9706"
              transform="rotate(-90 26.9706 45.5)"
              stroke="#A855F7"
            />
            <circle
              cx="42.8529"
              cy="45.5"
              r="28.6176"
              transform="rotate(-90 42.8529 45.5)"
              stroke="#A855F7"
            />
            <path
              d="M58.7353 14.2352C76.0023 14.2352 90 28.2329 90 45.4999C90 62.767 76.0023 76.7646 58.7353 76.7646C41.4683 76.7646 27.4706 62.767 27.4706 45.4999C27.4706 28.2329 41.4683 14.2352 58.7353 14.2352Z"
              stroke="#A855F7"
            />
            <circle
              cx="74.6176"
              cy="45.5"
              r="33.9118"
              transform="rotate(-90 74.6176 45.5)"
              stroke="#A855F7"
            />
            <path
              d="M90.5 8.94119C110.691 8.94119 127.059 25.3091 127.059 45.5C127.059 65.6909 110.691 82.0588 90.5 82.0588C70.3091 82.0588 53.9412 65.6909 53.9412 45.5C53.9412 25.3091 70.3091 8.94119 90.5 8.94119Z"
              stroke="#A855F7"
            />
            <circle
              cx="106.382"
              cy="45.5"
              r="39.2059"
              transform="rotate(-90 106.382 45.5)"
              stroke="#A855F7"
            />
            <path
              d="M122.265 3.64703C145.379 3.64703 164.118 22.3852 164.118 45.5C164.118 68.6147 145.379 87.3529 122.265 87.3529C99.15 87.3529 80.4118 68.6147 80.4118 45.5C80.4118 22.3852 99.15 3.64703 122.265 3.64703Z"
              stroke="#A855F7"
            />
            <circle
              cx="138.147"
              cy="45.5"
              r="44.5"
              transform="rotate(-90 138.147 45.5)"
              stroke="#A855F7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-medium">Reach out</h2>
        <p className="mb-4 lowerca">Feel free to connect with me through linkedin</p>
        <a
          href="https://www.linkedin.com/in/john-wheeler-5697431b9/"
          target="_blank"
          aria-label="Link to John Wheeler's LinkedIn profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0,0,255.98959,255.98959"
          >
            <g
              fill="#2563eb"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z"></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </footer>
  );
};
