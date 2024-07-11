"use client"

import * as React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { CardDemo } from '@/components/cardNotif'
import { MarqueeDemo } from '@/components/marquee'
export default function Home() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
    })
  )
  return (
    <>
      <main className=''>
        <div className='hero mt-8 grid md:grid-cols-2 text-center md:mt-20 container'>
          <div className='description md:text-start'>
            <div className='text-desc'>
              <p className='subtitle text-2xl'>Layanan Kesehatan Ibu & Bayi</p>
              <h1 className='mt-6 text-[4rem] leading-none'>Baimee Care</h1>
              <Image
                src={'/image/baby.jpg'}
                alt=''
                width={380}
                height={0}
                className='rounded-2xl mb-8 mt-2 mx-auto md:hidden'
              />
              <p className='text-lg'>
                Didirikan pada tahun 2018, Baimee Care adalah penyedia layanan kesehatan di rumah
                dan di klinik dengan dispesialisasi dalam perawatan bayi dan ibu. Kami menawarkan
                layanan yang ditangani oleh tenaga kesehatan bersertifikat, profesional, dan
                berpengalaman dengan komitmen untuk memberikan dukungan yang komprehensif dan
                mendukung kesehatan fisik dan emosional ibu serta bayi.
              </p>
              <div className='cta group relative mt-12 flex w-full items-center justify-center'>
                <div className='left-50 absolute -top-1 h-14 w-40 -rotate-[8deg] rounded-lg bg-[#F9BF68] group-hover:scale-105 group-hover:rotate-0 group-hover:h-16 group-hover:-top-2 transition-all duration-300'></div>
                <a
                  href='https://api.whatsapp.com/send/?phone=6281313718785&text&type=phone_number&app_absent=0'
                  className='font-englebert z-10 flex h-12 w-36 items-center justify-center rounded-lg bg-[#FFE6C5] pt-1 tracking-wide group-hover:scale-95 group-hover:shadow-lg transition-all duration-300'
                >
                  Reservasi Yuk!
                </a>
              </div>
            </div>
          </div>
          <Image
            src={'/image/baby.jpg'}
            alt=''
            width={380}
            height={0}
            className='rounded-2xl mb-8 justify-self-center md:justify-self-end hidden md:block'
          />
        </div>
        <div className='h-32 w-full bg-gradient-to-b from-[#FBF3DE] to-[#FFE7C8] mt-12' />
        <div className='service mx-auto text-center bg-[#FFE7C8]'>
          <h1 className='text-5xl'>Layanan Kami</h1>
          <div className='grid md:grid-cols-2 md:gap-6 container'>
            <div className='insta-image mt-4'>
              <Carousel className="w-full md:w-[75%] mx-auto my-4" plugins={[plugin.current]}>
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <Image
                            src={`/image/carousel/${index + 1}.png`}
                            alt={`Image Carousel ${index + 1}`}
                            height={500}
                            width={500}
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious className='bg-transparent'/>
                <CarouselNext className='bg-transparent'/> */}
              </Carousel>
            </div>
            <div className='collapse-service w-full text-start text-lg mt-4'>
              <Accordion type='single' defaultValue='item-1' collapsible>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>Baby Care</AccordionTrigger>
                  <AccordionContent>
                    Layanan yang kami tawarkan untuk anak-anak:
                    <ul className='pl-4'>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Pijat Bayi Sehat</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Pijat Balita</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Pijat Anak</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Pijat Pedatrik</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Pijat Stimulasi Anak</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Pijat Kecerdasan Otak Bayi</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Baby Spa</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Cukur Bayi</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Baby Hair Spa</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Mandi Bayi</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Tindik Bayi</p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Mommy Care</AccordionTrigger>
                  <AccordionContent>
                    Layanan yang kami tawarkan: 
                    <ul className='pl-4'>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900 dark:bg-gray-50" />
                        <p className=''>Paket Laktasi</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Pijat Ibu Hamil</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Pijat Ibu Hamil dan Oksitosin</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Pijat Gelombang Cinta</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Pijat Ibu Nifas</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Totok Aura</p>
                      </li>
                      <li className='flex items-center gap-3'>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <p>Pemeriksaan Antenatal Care</p>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Baimee Care Class</AccordionTrigger>
                  <AccordionContent>
                    Menawarkan berbagai program komprehensif seperti Prenatal Gentle Yoga, Persiapan
                    Persalinan, Persiapan Menyusui, dan Perawatan Bayi Baru Lahir untuk mendukung
                    kesehatan dan kesejahteraan ibu serta bayi sebelum dan setelah kelahiran.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-4'>
                  <AccordionTrigger>Newborn Package</AccordionTrigger>
                  <AccordionContent>
                    Paket layanan yang dirancang khusus untuk memastikan kesehatan dan kenyamanan
                    bayi yang baru lahir serta ibu yang baru melahirkan. Layanan ini mencakup pemeriksaan
                    kesehatan menyeluruh, panduan menyusui, perawatan pasca-persalinan,
                    serta tips dan dukungan untuk merawat bayi di rumah. Dengan layanan ini, ibu dan
                    bayi akan mendapatkan perhatian dan perawatan terbaik agar proses pemulihan
                    berjalan lancar dan bayi tumbuh sehat.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className='h-32 w-full bg-gradient-to-b from-[#FFE7C8] to-[#FBF3DE]' />
        <div className='why-us mt-16 text-center container'>
          <h1 className='text-5xl'>Kenapa Baimee?</h1>
          <p className='description mt-4 px-6 text-lg'>
            Berkomitmen untuk menjadi sahabat, partner terdekat, dan paling dipercaya oleh ibu dan
            bayi di perjalanan penting mereka.
          </p>
          <div className='grid-why-us mt-6 grid place-items-center gap-y-6 text-lg md:grid-cols-3'>
            <div className='why-1 grid place-items-center px-6'>
              <Image src={'/image/profesional.png'} width={102} height={102} alt='' />
              <p>Pelayanan dengan tenaga profesional, berpengalaman dan bersertifikat</p>
            </div>
            <div className='why-2 grid place-items-center px-6'>
              <Image src={'/image/quality.png'} width={102} height={102} alt='' />
              <p>Menciptakan suasana harmoni dalam pelayanan perawatan yang berkualitas baik </p>
            </div>
            <div className='why3 grid place-items-center px-6'>
              <Image src={'/image/commits.png'} width={102} height={102} alt='' />
              <p>Kami selalu memberikan komitmen yang terbaik untuk bunda dan anak</p>
            </div>
          </div>
        </div>
        <div className='h-32 w-full bg-gradient-to-t from-[#FFE7C8] to-[#FBF3DE] mt-12' />
        <div className='Pricelist bg-[#FFE7C8]'>
          <div className='container'>
            <h1 className='text-5xl text-center'>Pricelist</h1>
            <div className='flex flex-wrap justify-center mt-5 gap-3'>
              <CardDemo />
            </div>
          </div>
        </div>
        <div className='h-32 w-full bg-gradient-to-t from-[#FBF3DE] to-[#FFE7C8]' />
        <div className='testimoni bg-[#FBF3DE]'>
          <div className='container'>
            <h1 className='text-5xl text-center'>Testimoni</h1>
            <div>
              <MarqueeDemo></MarqueeDemo>
            </div>
          </div>
        </div>
      </main>
      <div className='top-footer h-32 w-full bg-gradient-to-b from-[#FBF3DE] to-[#FFE7C8] mt-12' />
      <footer className='bg-[#FFE7C8] text-start gap-8 grid px-12 pt-10'>
        <div className="container">
          <div>
          <h1 className='title text-3xl'>Baimee Mom & Baby Care</h1>
          <p className='subtitle text-lg'>Layanan Kesehatan Untuk Ibu & Bayi</p>
        </div>
        <div className='contact'>
          <h2 className='title-contact text-xl mb-2 font-semibold'>Kontak Kami</h2>
          <div className='grid gap-1'>
            <div className='icon'>
              <Icon icon="ic:outline-email" width="1.2rem" height="1.2rem" />
              <span>baimeecare@gmail.com</span>
            </div>
            <div className='icon'>
              <Icon icon="ic:outline-whatsapp" width="1.2rem" height="1.2rem" />
              <span>085211886309</span>
            </div>
            <div className='icon'>
              <Icon icon="mdi:instagram" width="1.2rem" height="1.2rem" />
              <span>baimeecare</span>
            </div>
            <div className='icon'>
              <Icon icon="ic:baseline-tiktok" width="1.2rem" height="1.2rem"  />
              <span>bidanshinta_baimeecare</span>
            </div>
          </div>
        </div>
        <p className='text-center text-sm text-gray-800 my-4'>copyright &copy; 2024 Baimee Mom & Baby Care</p>
        </div>
      </footer>
    </>
  )
}
