import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

const carouselData = [
  {
    title: "Ajukan SKK Sipil Sekarang",
    imageUrl: "../images/carousel/banner-1.webp",
    linkTo: "https://lead.gatensi.id",
    interval: 9000,
  },
  {
    title: "Tata Cara Alur Bermohon SKK Teknik Sipil",
    imageUrl: "../images/carousel/banner-7.webp",
    linkTo: "https://perizinan.pu.go.id/portal/",
    interval: 6000,
  },
  {
    title: "Kegiatan Full Asesment BNSP",
    imageUrl: "../images/carousel/banner-2.webp",
    interval: 6000,
  },
  {
    title: "Syarat Uji SKK",
    imageUrl: "../images/carousel/banner-3.webp",
    linkTo: "/panduan-sertifikasi",
    interval: 6000,
  },
  {
    title: "Biaya Uji SKK",
    imageUrl: "../images/carousel/banner-4.webp",
    linkTo: "/biaya",
    interval: 6000,
  },
  {
    title: "Jabatan Kerja Favorit",
    imageUrl: "../images/carousel/banner-5.webp",
    linkTo: "https://lead.gatensi.id",
    interval: 6000,
  },
  {
    title: "Himbauan Kepemilikan Akun Portal untuk Proses Sertifikasi",
    imageUrl: "../images/carousel/banner-6.webp",
    interval: 6000,
  },
  {
    title: "Pengajuan TUK",
    imageUrl: "../images/carousel/banner-8.png",
    linkTo: "/pengajuan-tuk",
    interval: 6000,
  },
];

function ComponentCarousel() {
  return (
    <section className="container-carousel">
      <Carousel slide variant="dark" pause={false}>
        {carouselData.map((item, index) =>
          item.linkTo ? (
            <Carousel.Item key={index} interval={item.interval}>
              <Link href={item.linkTo} target="_blank">
                <img
                  className="d-block w-100"
                  src={item.imageUrl}
                  alt={item.title}
                />
              </Link>
            </Carousel.Item>
          ) : (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={item.imageUrl}
                alt={item.title}
              />
            </Carousel.Item>
          )
        )}
      </Carousel>
    </section>
  );
}

export default ComponentCarousel;
