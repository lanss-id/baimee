import { OpenInNewWindowIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const priceList = [
    {
      title: "Baby Treatment",
      link: "https://heyzine.com/flip-book/1c92f27cc1.html#page/2",
      list: [
        {
            name: "Pijat Bayi Sehat",
            price: '100k'
        },
        {
            name: "Pijat Balita",
            price: '115k'
        },
        {
            name: "Pijat Anak",
            price: '120k'
        },
        {
            name: "Pijat Pedatrik",
            price: '120k'
        },
        {
            name: "Pijat Stimulasi Anak",
            price: '125k'
        },
        {
            name: "Pijat Kecerdasan Otak Bayi",
            price: '125k'
        },
        {
            name: "Baby Spa",
            price: '75k'
        },
        {
            name: "Cukur Bayi",
            price: '50k'
        },
      ]
    },
    {
      title: "Mommy Treatment",
      link: "https://heyzine.com/flip-book/1c92f27cc1.html#page/4",
      list: [
        {
          name: "Pijat Ibu Hamil",
          price: '165k'
        },
        {
          name: "Pijat Oksitosin",
          price: '120k'
        },
        {
          name: "Pemeriksaan Antenetal Care",
          price: '75k'
        },
        {
          name: "Pijat Nifas",
          price: '165k'
        },
        {
          name: "Totok Aura + Masker",
          price: '85k'
        },
        {
          name: "Pijat Laktasi",
          price: '150k'
        }
      ]
    },
    {
      title: "Baimee Class",
      link: "https://heyzine.com/flip-book/1c92f27cc1.html#page/5",
      list: [
        {
          name: "Prenatal Gentle Yoga",
          subList: [
            {
              subName: "Private",
              subPrice: '150k'
            },
            {
              subName: "Sharing (Min 3 orang)",
              subPrice: '100k/orang'
            },
            {
              subName: "Couple",
              subPrice: '250k'
            }
          ]
        },
        {
          name: "Paket 3x Pertemuan",
          subList: [
            {
              subName: "Private",
              subPrice: "430k",
            },
            {
              subName: "Sharing (Min 3 orang)",
              subPrice: "870k"
            },
            {
              subName: "Couple",
              subPrice: "720k"
            }
          ]
        },
        {
          name: "Paket 5x Pertemuan",
          subList: [
            {
              subName: "Private",
              subPrice: "720k",
            },
            {
              subName: "Sharing (Min 3 orang)",
              subPrice: "1.470k"
            },
            {
              subName: "Couple",
              subPrice: "1.200k"
            }
          ]
        }
      ]
    }
]

type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <>
      {priceList.map((card, cardIndex) => (
        <Card key={cardIndex} className={cn("w-[380px] bg-[#FBF3DE] py-4", className)} {...props}>
          <CardHeader>
            <CardTitle className="text-start">{card.title}</CardTitle>
          </CardHeader>
          <div className="grid grid-cols-1 content-between">
            <CardContent className="grid gap-4">
              <div>
                {card.list.map((price, index) => (
                  <div
                    key={index}
                    className="mb-1 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-[#c2995d]" />
                    <div className={`items-center justify-between ${"price" in price ? "flex" : "space-y-2"}`}>
                      <p className="text-sm font-semibold leading-none">
                        {price.name}
                      </p>
                      {"price" in price ? (
                        <p className="text-sm text-[#724f29]">
                          {price.price}
                        </p>
                      ) : (
                        <div>
                          {price.subList.map((sub, subIndex) => (
                            <div key={subIndex} className="flex items-center justify-between space-y-1">
                              <p className="text-sm font-medium leading-none">
                                {sub.subName}
                              </p>
                              <p className="text-sm text-[#724f29]">
                                {sub.subPrice}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="">
              <Button className="w-full bg-[#a57a3a] hover:bg-[#c2995d] text-white flex">
                <OpenInNewWindowIcon className="mr-2 h-5 w-5 mb-[2px]" />
                <Link href={card.link ?? "#"} target="_blank">Lihat Detail & Potongan Harga</Link>
              </Button>
            </CardFooter>
          </div>
        </Card>
      ))}
    </>
  )
}
