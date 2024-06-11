import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <main className='container'>
        <div className='hero mt-8 grid justify-center text-center'>
          <div className='description grid md:text-start'>
            <p className='subtitle text-2xl'>Layanan Kesehatan Ibu & Bayi</p>
            <div className='baby-image relative w-full justify-self-center md:w-3/4'>
              <Image
                src={'/image/blobs.svg'}
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                className='h-auto w-full'
                objectFit='contain'
              />
              <Image
                src={'/image/baby.png'}
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                className='absolute top-12 h-auto w-full'
                objectFit='contain'
              />
            </div>
            <div className='text-desc'>
              <h1 className='mt-6 text-[5rem] font-medium leading-none'>Baimee Care</h1>
              <p className='text-lg'>
                Didirikan pada tahun 2018, Baimee Care adalah penyedia layanan kesehatan di rumah
                dan di klinik dengan dispesialisasi dalam perawatan bayi dan ibu. Kami menawarkan
                layanan yang ditangani oleh tenaga kesehatan bersertifikat, profesional, dan
                berpengalaman dengan komitmen untuk memberikan dukungan yang komprehensif dan
                mendukung kesehatan fisik dan emosional ibu serta bayi.
              </p>
              <div className='cta relative mt-12 flex w-full items-center justify-center'>
                <div className='left-50 absolute -top-1 h-14 w-40 -rotate-[8deg] rounded-lg bg-[#F9BF68]'></div>
                <a
                  href='https://api.whatsapp.com/send/?phone=6281313718785&text&type=phone_number&app_absent=0'
                  className='font-englebert z-10 flex h-12 w-36 items-center justify-center rounded-lg bg-[#FFE6C5] pt-1 tracking-wide'
                >
                  Reservasi Yuk!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='service mx-auto mb-4 mt-16 text-center'>
          <h1 className='text-4xl'>Layanan Kami</h1>
          <div className='grid md:grid-cols-2'>
            <div className='insta-image w-full'>
              <Image
                src={'/image/ig.jpg'}
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                className='h-auto w-full'
                objectFit='contain'
              />
            </div>
            <div className='collapse-service text-star w-full text-start text-lg'>
              <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>Mommy Care</AccordionTrigger>
                  <AccordionContent>
                    Layanan yang kami tawarkan: Paket Laktasi yang meliputi Breast Care dan Pijat
                    Oksitosin, Pijat Ibu Hamil, Pijat Ibu Hamil dan Oksitosin, Pijat Gelombang
                    Cinta, Pijat Ibu Nifas, Totok Aura, serta Pemeriksaan Antenatal Care.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Baby Care</AccordionTrigger>
                  <AccordionContent>
                    Layanan yang kami tawarkan untuk anak-anak: Pijat Bayi Sehat, Pijat Balita,
                    Pijat Anak, Pijat Pedatrik untuk bayi sakit seperti konstipasi/sembelit, diare,
                    batuk dan pilek, peningkatan nafsu makan, dan imun booster, Pijat Stimulasi
                    Anak, Pijat Kecerdasan Otak Bayi, Baby Spa, Cukur Bayi, Baby Hair Spa, Mandi
                    Bayi, serta Tindik Bayi.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Newborn Package</AccordionTrigger>
                  <AccordionContent>
                    Paket layanan yang dirancang khusus untuk memastikan kesehatan dan kenyamanan
                    bayi yang baru lahir serta ibu yang baru melahirkan. Paket ini mencakup
                    pemeriksaan kesehatan menyeluruh, panduan menyusui, perawatan pasca-persalinan,
                    serta tips dan dukungan untuk merawat bayi di rumah. Dengan paket ini, ibu dan
                    bayi akan mendapatkan perhatian dan perawatan terbaik agar proses pemulihan
                    berjalan lancar dan bayi tumbuh sehat.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-4'>
                  <AccordionTrigger>Baimee Care Class</AccordionTrigger>
                  <AccordionContent>
                    Menawarkan berbagai program komprehensif seperti Prenatal Gentle Yoga, Persiapan
                    Persalinan, Persiapan Menyusui, dan Perawatan Bayi Baru Lahir untuk mendukung
                    kesehatan dan kesejahteraan ibu serta bayi sebelum dan setelah kelahiran.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className='why-us mt-16 text-center'>
          <h1 className='text-4xl'>Kenapa Baimee?</h1>
          <p className='description mt-4 px-8 text-lg'>
            Berkomitmen untuk menjadi sahabat, partner terdekat, dan paling dipercaya oleh ibu dan
            bayi di perjalanan penting mereka.
          </p>
          <div className='grid-why-us mt-4 grid place-items-center gap-y-6 text-lg'>
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
      </main>
      <div className='top-footer h-32 w-full bg-gradient-to-b from-white to-[#FFE7C8]' />
      <footer className='flex justify-center bg-[#FFE7C8]'>
        <div>
          <h1 className='title text-3xl'>Baimee Mom & Baby Care</h1>
          <p className='subtitle text-lg'>Layanan Kesehatan Untuk Ibu & Bayi</p>
          <p>copyright</p>
        </div>
        <div className='contact'>
          <p className='title-contact'>Kontak Kami</p>
          <div className='whatsapp'></div>
          <div className='insta'></div>
        </div>
      </footer>
    </>
  )
}
