import Image from "next/image";

import allOffersImage from "../../assets/images/offers/all.jpeg";
import offerOneImage from "../../assets/images/offers/one.jpeg";
import offerTwoImage from "../../assets/images/offers/two.jpeg";
import offerThreeImage from "../../assets/images/offers/three.jpeg";
import offerFourImage from "../../assets/images/offers/four.jpeg";

const offerImages = [
  {
    id: "all-packages",
    src: allOffersImage,
    alt: "Meditech health packages 1, 2 and 3",
  },
  {
    id: "package-1",
    src: offerOneImage,
    alt: "Meditech basic health package 1",
  },
  {
    id: "package-2",
    src: offerTwoImage,
    alt: "Meditech basic health package 2",
  },
  {
    id: "package-3",
    src: offerThreeImage,
    alt: "Meditech basic health package 3",
  },
  {
    id: "package-4",
    src: offerFourImage,
    alt: "Meditech basic health package 4",
  },
];

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <section className="px-4 pb-10 pt-28 md:pb-14 md:pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-blue-800 md:text-4xl">
            Special Offers &amp; Health Packages
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Explore our latest laboratory test packages and special rates.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16" aria-label="Current special offers">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 md:grid-cols-2">
          {offerImages.map((offer, index) => (
            <article
              key={offer.id}
              className={`overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl ${
                index === 0 ? "md:col-span-2 md:mx-auto md:max-w-3xl" : ""
              }`}
            >
              <Image
                src={offer.src}
                alt={offer.alt}
                className="h-auto w-full"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 768px"
                    : "(max-width: 768px) 100vw, 50vw"
                }
                priority={index === 0}
                placeholder="blur"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-blue-800">
            Follow Us for the Latest Updates
          </h2>
          <p className="mb-6 text-gray-600">
            Follow us on Facebook and WhatsApp for the latest offers and health
            tips.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://www.facebook.com/share/1DeTuMUcwF/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-700 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-800"
            >
              Facebook
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb6N0fa3GJOvjfwpI421"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
