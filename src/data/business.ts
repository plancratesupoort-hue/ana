export const BUSINESS = {
  name: "ABDERRAHIM LJNAOUI",
  arabicName: "عبدالرحيم لجناوي للحلاقة",
  phone: "+212642859688",
  displayPhone: "+212 642 859 688",
  whatsapp: "https://wa.me/212642859688?text=سلام، بغيت ناخد موعد للحلاقة.",
  instagram: "https://www.instagram.com/el__genawe_31/",
  instagramHandle: "@el__genawe_31",
  maps: "https://maps.app.goo.gl/QwUew9KPnJtm1nU29",
  location: "Agadir, Anza, Morocco"
} as const;

export interface ServiceItem {
  id: string;
  name: string;
  arabicName: string;
  description: string;
  actionText: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "classic-haircut",
    name: "Classic Haircut",
    arabicName: "حلاقة كلاسيكية",
    description: "Precision shear and clipper cut tailored to your face shape, personal style, and everyday lifestyle.",
    actionText: "BOOK ON WHATSAPP"
  },
  {
    id: "fade",
    name: "Fade",
    arabicName: "تدرج احترافي",
    description: "Seamless low, mid, or high skin fade with crisp contour lines and smooth blending.",
    actionText: "BOOK ON WHATSAPP"
  },
  {
    id: "beard-grooming",
    name: "Beard Grooming",
    arabicName: "تحديد وتشذيب اللحية",
    description: "Beard shaping, razor line detailing, hot towel prep, and oil treatment for a sharp finish.",
    actionText: "ASK FOR AVAILABILITY"
  },
  {
    id: "haircut-beard",
    name: "Haircut + Beard",
    arabicName: "حلاقة كاملة + لحية",
    description: "The complete grooming package: personalized haircut, gradient fade, and full beard styling.",
    actionText: "BOOK ON WHATSAPP"
  },
  {
    id: "kids-haircut",
    name: "Kids Haircut",
    arabicName: "حلاقة للأطفال",
    description: "Patient, modern styling and clean fades for young gentlemen in a relaxed atmosphere.",
    actionText: "ASK FOR AVAILABILITY"
  }
];

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: "all" | "fades" | "haircuts" | "beard";
  caption: string;
  featured?: boolean;
}

export const GALLERY_IMAGES: GalleryPhoto[] = [
  {
    id: "work-1",
    src: "/images/barber/barber_C4Rm_-yicJR_slide1.jpg",
    alt: "Abderrahim Ljnaoui precision fade and textured haircut",
    category: "fades",
    caption: "Skin fade with textured crop and clean contour lines",
    featured: true
  },
  {
    id: "work-2",
    src: "/images/barber/barber_C4jRv-YMtA0_slide1.jpg",
    alt: "Abderrahim Ljnaoui barber cut in Agadir",
    category: "haircuts",
    caption: "Modern taper fade with natural scissor flow",
    featured: true
  },
  {
    id: "work-3",
    src: "/images/barber/barber_C4a1R4oirqw_slide1.jpg",
    alt: "Clean fade and sharp beard lineup by Abderrahim Ljnaoui",
    category: "beard",
    caption: "Sharp beard lineup paired with seamless gradient fade",
    featured: true
  },
  {
    id: "work-4",
    src: "/images/barber/barber_C4Rm_-yicJR_slide2.jpg",
    alt: "Profile view of low fade haircut",
    category: "fades",
    caption: "Low drop fade with detailed nape finishing"
  },
  {
    id: "work-5",
    src: "/images/barber/barber_DJ0Vp0TCmec_slide1.jpg",
    alt: "Precision hair styling and grooming",
    category: "haircuts",
    caption: "Editorial styling and defined silhouette"
  },
  {
    id: "work-6",
    src: "/images/barber/barber_C4us_8uMzBH_slide1.jpg",
    alt: "Classic fade haircut by Abderrahim Ljnaoui",
    category: "fades",
    caption: "Clean temple taper with textured crown"
  },
  {
    id: "work-7",
    src: "/images/barber/barber_C4Rm_-yicJR_slide3.jpg",
    alt: "Close-up detail of razor edge line",
    category: "beard",
    caption: "Razor-finished beard line and temple connection"
  },
  {
    id: "work-8",
    src: "/images/barber/barber_C4a1R4oirqw_slide2.jpg",
    alt: "Textured men's crop haircut",
    category: "haircuts",
    caption: "Modern French crop with clean fade gradient"
  },
  {
    id: "work-9",
    src: "/images/barber/barber_C4T9Rv7i54r_slide1.jpg",
    alt: "Grooming work by Abderrahim Ljnaoui",
    category: "haircuts",
    caption: "Precision contouring and tailored length"
  },
  {
    id: "work-10",
    src: "/images/barber/barber_C4Rm_-yicJR_slide4.jpg",
    alt: "Sharp side fade haircut in Anza Agadir",
    category: "fades",
    caption: "Mid skin fade with smooth tonal transition"
  },
  {
    id: "work-11",
    src: "/images/barber/barber_C4jRv-YMtA0_slide2.jpg",
    alt: "Back profile and hairline detail",
    category: "fades",
    caption: "Crisp neckline detailing and graduated taper"
  },
  {
    id: "work-12",
    src: "/images/barber/barber_C4us_8uMzBH_slide2.jpg",
    alt: "Beard sculpting and haircut synergy",
    category: "beard",
    caption: "Balanced beard density and geometric perimeter"
  },
  {
    id: "work-13",
    src: "/images/barber/barber_C4Rm_-yicJR_slide5.jpg",
    alt: "High-contrast precision fade cut",
    category: "fades",
    caption: "High fade with clean perimeter contrast"
  },
  {
    id: "work-14",
    src: "/images/barber/barber_CNvyCbRMdvc_cover.jpg",
    alt: "Classic men's grooming work in Agadir",
    category: "haircuts",
    caption: "Signature craft and personalized styling"
  }
];

export interface InstagramPost {
  id: string;
  url: string;
  image: string;
  caption: string;
  likes: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "post-1",
    url: "https://www.instagram.com/p/DJ0Vp0TCmec/",
    image: "/images/barber/barber_DJ0Vp0TCmec_slide1.jpg",
    caption: "👑 Precision craft and personal style.",
    likes: "31"
  },
  {
    id: "post-2",
    url: "https://www.instagram.com/p/C4jRv-YMtA0/",
    image: "/images/barber/barber_C4jRv-YMtA0_slide1.jpg",
    caption: "#barber_shop💈✂️ Clean lines, daily focus.",
    likes: "30"
  },
  {
    id: "post-3",
    url: "https://www.instagram.com/p/C4a1R4oirqw/",
    image: "/images/barber/barber_C4a1R4oirqw_slide1.jpg",
    caption: "#barber_shop💈✂️ Sharp beard line & fade blend.",
    likes: "39"
  },
  {
    id: "post-4",
    url: "https://www.instagram.com/p/C4Rm_-yicJR/",
    image: "/images/barber/barber_C4Rm_-yicJR_slide1.jpg",
    caption: "#Barber shop Details make the difference.",
    likes: "31"
  },
  {
    id: "post-5",
    url: "https://www.instagram.com/p/C4us_8uMzBH/",
    image: "/images/barber/barber_C4us_8uMzBH_slide1.jpg",
    caption: "Clean taper and natural flow.",
    likes: "36"
  },
  {
    id: "post-6",
    url: "https://www.instagram.com/p/C4T9Rv7i54r/",
    image: "/images/barber/barber_C4T9Rv7i54r_slide1.jpg",
    caption: "Sharp perimeter and balanced proportions.",
    likes: "38"
  }
];
