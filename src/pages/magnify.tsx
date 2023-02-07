import * as React from 'react';
import {
  HiOutlineMinus,
  HiOutlinePlus,
  HiOutlineRefresh,
} from 'react-icons/hi';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import IconButton from '@/components/buttons/IconButton';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function MagnifyPage() {
  return (
    <Layout>
      <Seo templateTitle='Magnify' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <h1>Learn Magnify</h1>

            <figure className='relative mt-8 inline-block'>
              <TransformWrapper initialScale={1}>
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <React.Fragment>
                    <div className='absolute right-0 top-0 z-10 space-x-1 p-4 opacity-70 transition-opacity hover:opacity-100'>
                      <IconButton
                        variant='light'
                        className='rounded-full'
                        onClick={() => zoomIn()}
                        icon={HiOutlinePlus}
                      />
                      <IconButton
                        variant='light'
                        className='rounded-full'
                        onClick={() => zoomOut()}
                        icon={HiOutlineMinus}
                      />
                      <IconButton
                        variant='light'
                        className='rounded-full'
                        onClick={() => resetTransform()}
                        icon={HiOutlineRefresh}
                      />
                    </div>
                    <TransformComponent>
                      <NextImage
                        src='/images/kk.jpg'
                        alt='test'
                        width={700}
                        height={502}
                      />
                    </TransformComponent>
                  </React.Fragment>
                )}
              </TransformWrapper>
            </figure>
          </div>
        </section>
      </main>
    </Layout>
  );
}
