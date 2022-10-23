import type { NextApiRequest, NextApiResponse } from "next"
import Cors from 'cors'
const rawData = `{
  "best-place": [
    {
      "country": "China",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515557/alfy-bootcamp/bestplaces/pexels-manuel-joseph-19872_qclbdo.jpg"
    },
    {
      "country": "India",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515598/alfy-bootcamp/bestplaces/pexels-darshak-pandya-574313_ykrw9c.jpg"
    },
    {
      "country": "Maldivies",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515586/alfy-bootcamp/bestplaces/pexels-asad-photo-maldives-1483053_ic6pbi.jpg"
    },
    {
      "country": "Israel",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515582/alfy-bootcamp/bestplaces/pexels-mauricio-artieda-610533_hxpgok.jpg"
    },
    {
      "country": "France",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515538/alfy-bootcamp/bestplaces/pexels-pixabay-2363_pqxtxj.jpg"
    },
    {
      "country": "Morocco",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515591/alfy-bootcamp/bestplaces/pexels-pixabay-273935_xseyqa.jpg"
    },
    {
      "country": "Brazil",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515540/alfy-bootcamp/bestplaces/pexels-florencia-potter-351283_u9r32s.jpg"
    },
    {
      "country": "Egypt",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515544/alfy-bootcamp/bestplaces/pexels-david-mceachan-71241_ojwpwd.jpg"
    }
  ],
  "featured-destinations": [
    {
      "city": "Barcelona",
      "country": "Spain",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515034/alfy-bootcamp/Featured%20Destinations/pexels-aleksandar-pasaric-1388030_jalzsm.jpg"
    },
    {
      "city": "Sydney ",
      "country": "Australia",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515004/alfy-bootcamp/Featured%20Destinations/pexels-patrick-mclachlan-995765_nakswl.jpg"
    },
    {
      "city": "London",
      "country": "UK",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515012/alfy-bootcamp/Featured%20Destinations/pexels-chris-schippers-427679_rqchvp.jpg"
    },
    {
      "city": "Paris",
      "country": "France",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515023/alfy-bootcamp/Featured%20Destinations/pexels-chris-molloy-1308940_vecke4.jpg"
    },
    {
      "city": "Tokyo",
      "country": "Japan",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515031/alfy-bootcamp/Featured%20Destinations/pexels-aleksandar-pasaric-2506923_szxh0t.jpg"
    },
    {
      "city": "Hanoi",
      "country": "Vietnam",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515027/alfy-bootcamp/Featured%20Destinations/pexels-huy-phan-1437618_li5ydp.jpg"
    }
  ],
  "top-tour": [
    {
      "country": "Japan",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515061/alfy-bootcamp/Top%20Tour/pexels-belle-co-402028_ipui4w.jpg"
    },
    {
      "country": "Bali",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515068/alfy-bootcamp/Top%20Tour/pexels-kimberly-mcneilus-2480626_eb5zha.jpg"
    },
    {
      "country": "Spain",
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515060/alfy-bootcamp/Top%20Tour/pexels-samuel-sweet-6145647_hwigz4.jpg"
    }
  ],
  "explore-world": [
    {
      "title": "Comfort Space",
      "city": "Mamaris",
      "country": "Turkey",
      "price": 220,
      "distance-from-city-center": "1.2km",
      "rating": 4.7,
      "amount-of-rating": 150,
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663516137/alfy-bootcamp/houses/pexels-binyamin-mellish-106399_icqiwy.jpg"
    },
    {
      "title": "Comfort Space",
      "city": "Paris",
      "country": "France",
      "price": 110,
      "distance-from-city-center": "3km",
      "rating": 5,
      "amount-of-rating": 150,
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663516133/alfy-bootcamp/houses/pexels-binyamin-mellish-1396122_prtue5.jpg"
    },
    {
      "title": "Comfort Space",
      "city": "Madrid",
      "country": "Spain",
      "price": 300,
      "distance-from-city-center": "0.6km",
      "rating": 4.5,
      "amount-of-rating": 150,
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663516127/alfy-bootcamp/houses/pexels-binyamin-mellish-186077_cbirbs.jpg"
    },
    {
      "title": "Comfort Space",
      "city": "Jerusalem",
      "country": "Israel",
      "price": 400,
      "distance-from-city-center": "0.1km",
      "rating": 4.3,
      "amount-of-rating": 150,
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663516126/alfy-bootcamp/houses/pexels-expect-best-323780_dk5hki.jpg"
    }
  ],
  "trending-cities": [
    {
      "city": "Manila",
      "price": 220,
      "rating": 5,
      "amount-of-rating": 150,
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515348/alfy-bootcamp/Trending%20Cites/pexels-pixabay-210367_nbupkd.jpg"
    },
    {
      "city": "Frankfurt main",
      "price": 340,
      "rating": 4.4,
      "amount-of-rating": 12,
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515349/alfy-bootcamp/Trending%20Cites/pexels-bruno-gl%C3%A4tsch-1398003_hgtd8g.jpg"
    },
    {
      "city": "San Francisco",
      "price": 105,
      "rating": 5,
      "amount-of-rating": 98,
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515322/alfy-bootcamp/Trending%20Cites/pexels-pixabay-208745_uaspib.jpg"
    },
    {
      "city": "Washington",
      "price": 460,
      "rating": 4.8,
      "amount-of-rating": 221,
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515353/alfy-bootcamp/Trending%20Cites/pexels-samad-ismayilov-739047_v8kum0.jpg"
    },
    {
      "city": "Seattle",
      "price": 210,
      "rating": 4.5,
      "amount-of-rating": 1002,
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515321/alfy-bootcamp/Trending%20Cites/pexels-josh-fields-3964406_gjxosa.jpg"
    },
    {
      "city": "Stockholm",
      "price": 130,
      "rating": 4.2,
      "amount-of-rating": 99,
      "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515338/alfy-bootcamp/Trending%20Cites/pexels-pixabay-33612_km1qos.jpg"
    }
  ],
  "supported-destinations": ["paris", "barcelona", "jerusalem", "newyork"],
  "paris": [
    {
      "name": "Entire rental unit hosted by Ivana",
      "tags": ["1 guest", "Studio", "1 bed", "1 bath"],
      "price": "$100",
      "description": "Studio of 25m2 in a secure building near the metro La Muette (line 9) and Boulainvilliers (rer c). Numerous buses nearby. Food and clothing shops (rue de Passy) The studio has all amenities. It is equipped with an oven, stove, fridge, dishwasher and washing machine. Towels, toiletries, linens and kitchenware are provided. A double bed with a beautiful Simmons mattress. Studio on course, very quiet.",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/4ad9de55-cab3-497f-8ce1-b99f893d3a1d_sfa060.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/8f32a693-5c21-4da7-a5d8-f7f18428fcb4_mumcqx.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/f850be81-b989-45e1-87d3-9b413befb26f_jfvdr8.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529224/alfy-bootcamp/listing/paris/633aad0e-cecf-4643-9f54-555c32f3f4ee_s8dsiq.webp"
      ],
      "amenities": [
        "Kitchen",
        "TV",
        "Washer",
        "Elevator",
        "Wifi",
        "Hair dryer"
      ],
      "reviews": [
        {
          "name": "Laura",
          "location": "Spain",
          "img": "",
          "rating": 4,
          "review": "Communication with Ivana was easy and swift, the place is well-located, equipped and in good condition. Stayed for more than a week and had everything I needed for my stay."
        },
        {
          "name": "Izzet",
          "location": "Israel",
          "img": "",
          "rating": 4,
          "review": "Great communication with Ivana, nice place to stay for business trip. You can reach metro (line 9) in 30 meters. Kitchen was bien équipée and all cleaning items"
        }
      ],
      "current-bookings": [
        {
          "start": "Oct 2, 2022",
          "end": "Oct 7, 2022"
        },
        {
          "start": "Nov 14, 2022",
          "end": "Nov 19, 2022"
        }
      ]
    },
    {
      "name": "Entire rental unit hosted by My Key",
      "tags": ["4 guests", "1 bedroom", "2 beds", "1 bath"],
      "price": "$200",
      "description": "Welcome to my flat, completely renovated by an architect in February 2022 and located in the heart of the Marais in the Enfants Rouges district. You will be charmed by the location of this place, just a stone's throw from the rue de Bretagne and its historic Marché des Enfants Rouges. This lively district offers all the ideal conditions for a stay in our beautiful city of Paris. The space The 26m2 flat is composed of a living room with a sofa bed (140X200), a fully equipped open kitchen (ultra-quiet fridge-freezer, oven, induction hob, hood, dishwasher, coffee maker, toaster and kettle, as well as numerous cooking accessories), a sleeping area with a double bed separated from the rest of the flat by a glas roof, a dressing area and a walk-in shower with a separate toilet and washing machine. It has wifi (fibre). The welcome products (shower gel, shampoo), household linen and bath towels are provided and changed between each reservation.",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529171/alfy-bootcamp/listing/paris/2d2d7ec0-9674-45ea-9ea3-6ed57fabaa1f_jivh1h.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529170/alfy-bootcamp/listing/paris/cdc8a49a-ceb7-4553-9db9-f5b15981a06d_gnyluy.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529170/alfy-bootcamp/listing/paris/072e819d-cb7b-4905-925f-4130a34cb379_g3xn0l.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529170/alfy-bootcamp/listing/paris/f5d2142a-af9d-4fd6-85ce-ab4789a1fbaa_idt8ui.webp"
      ],
      "amenities": [
        "Courtyard view",
        "Wifi",
        "Free washer",
        "Security cameras",
        "Kitchen",
        "EV charger"
      ],
      "reviews": [
        {
          "name": "Karine",
          "location": "US",
          "img": "",
          "rating": 4.3,
          "review": "The location is perfect and the place has potential but it lacks of love and attention. The table is so wobbly it’s absolutely un-usable let alone"
        },
        {
          "name": "Teri",
          "location": "UK",
          "img": "",
          "rating": 4.9,
          "review": "The apartment is bright and very clean. Safe location."
        }
      ],
      "current-bookings": [
        {
          "start": "Nov 21, 2022",
          "end": "Nov 28, 2022"
        }
      ]
    },
    {
      "name": "Opéra-Madeleine Parisian find",
      "tags": ["4 guests", "1 bedroom", "1 bed", "1 bath"],
      "price": "$330",
      "description": "Nice apartment and bright fully equipped situated in the center of Paris, a few meters of the famous shops like Printemps, Galeries Lafayette, Channel, Hermes and main tourist points of Paris as the Opera Garnier, Madeleine, Concorde and the Jardin des Tulleries, The Louvre Museum and the famous Avenue des Champs Elysées.The space The apartment is located in the heart of Paris, it is completely equipped. Bed linen and towels are provided and you will have free access to a Wi-Fi connection.",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529848/alfy-bootcamp/listing/paris/e43811c3-2e7a-4530-b979-cfa5f4a73384_pwruer.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/8b2babce-5571-402a-b459-6a1051a1078b_djkdl1.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529846/alfy-bootcamp/listing/paris/1f4f5abc-0e4c-42a0-b3d1-37c0e027c327_tj9vme.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/d6099f7c-3b94-4238-8852-09f7cf7919f9_yb8bvh.webp"
      ],
      "amenities": ["Kitchen", "HDTV", "Refrigerator", "Wifi", "Hair dryer"],
      "reviews": [
        {
          "name": "Andrea",
          "location": "Australia",
          "img": "",
          "rating": 5,
          "review": "As first time Paris-explorers, Bryan’s accommodation was perfect for our family of four (including two teens). Close to the glories of the Haussmann district and Gallery Lafayette,"
        },
        {
          "name": "Helen",
          "location": "USA",
          "img": "",
          "rating": 5,
          "review": "Absolutely love the stay. Bryan was a great host and communication was fantastic. Highly recommend."
        }
      ],
      "current-bookings": []
    },
    {
      "name": "Unique studio near Galeries Lafayette",
      "tags": ["2 guests", "Studio", "1 bed", "1 bath"],
      "price": "$95",
      "description": "In the heart of Paris, you will be captivated by the charm of this elegant and unique studio. Exceptionally located, near the Galeries Lafayette, Opéra Garnier and more! You will be able to experience Paris in a beautiful and magical way, in one of the most in-demand neighborhood. *Amazing* boulangeries, coffee places, restaurants are just around the corner and I will gladly advise you about it! I will provide the bed linen and towels for your stay",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/9b35e99d-2999-4f3f-9ccf-28fe06a3473a_ztz8mm.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/28fb2c5b-f57f-41f1-9448-97ed390ed1bb_zzyng3.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/06b8afe8-7dfd-4f69-8b21-1cb0eb3afd67_flhtmg.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/987ea3f6-6400-44fa-a636-098f800b98dd_rrn1cq.webp"
      ],
      "amenities": [
        "Courtyard view",
        "Wifi",
        "Free washer",
        "Security cameras",
        "Kitchen",
        "EV charger"
      ],
      "reviews": [
        {
          "name": "Andrea",
          "location": "Australia",
          "img": "",
          "rating": 5,
          "review": "As first time Paris-explorers, Bryan's accommodation was perfect for our family of four (including two teens). Close to the glories of the Haussmann district and Gallery Lafayette,"
        },
        {
          "name": "Helen",
          "location": "USA",
          "img": "",
          "rating": 5,
          "review": "Absolutely love the stay. Bryan was a great host and communication was fantastic. Highly recommend."
        }
      ],
      "current-bookings": [
        {
          "start": "Nov 1, 2022",
          "end": "Nov 4, 2022"
        }
      ]
    }
  ],
  "barcelona": [
    {
      "name": "Entire rental unit hosted by Ivana",
      "tags": ["1 guest", "Studio", "1 bed", "1 bath"],
      "price": "$100",
      "description": "Studio of 25m2 in a secure building near the metro La Muette (line 9) and Boulainvilliers (rer c). Numerous buses nearby. Food and clothing shops (rue de Passy) The studio has all amenities. It is equipped with an oven, stove, fridge, dishwasher and washing machine. Towels, toiletries, linens and kitchenware are provided. A double bed with a beautiful Simmons mattress. Studio on course, very quiet.",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/4ad9de55-cab3-497f-8ce1-b99f893d3a1d_sfa060.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/8f32a693-5c21-4da7-a5d8-f7f18428fcb4_mumcqx.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/f850be81-b989-45e1-87d3-9b413befb26f_jfvdr8.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529224/alfy-bootcamp/listing/paris/633aad0e-cecf-4643-9f54-555c32f3f4ee_s8dsiq.webp"
      ],
      "amenities": [
        "Kitchen",
        "TV",
        "Washer",
        "Elevator",
        "Wifi",
        "Hair dryer"
      ],
      "reviews": [
        {
          "name": "Laura",
          "location": "Spain",
          "img": "",
          "rating": 4,
          "review": "Communication with Ivana was easy and swift, the place is well-located, equipped and in good condition. Stayed for more than a week and had everything I needed for my stay."
        },
        {
          "name": "Izzet",
          "location": "Israel",
          "img": "",
          "rating": 4,
          "review": "Great communication with Ivana, nice place to stay for business trip. You can reach metro (line 9) in 30 meters. Kitchen was bien équipée and all cleaning items"
        }
      ],
      "current-bookings": [
        {
          "start": "Oct 2, 2022",
          "end": "Oct 7, 2022"
        },
        {
          "start": "Nov 14, 2022",
          "end": "Nov 19, 2022"
        }
      ]
    }
  ],
  "jerusalem": [
    {
      "name": "Entire rental unit hosted by Ivana",
      "tags": ["1 guest", "Studio", "1 bed", "1 bath"],
      "price": "$100",
      "description": "Studio of 25m2 in a secure building near the metro La Muette (line 9) and Boulainvilliers (rer c). Numerous buses nearby. Food and clothing shops (rue de Passy) The studio has all amenities. It is equipped with an oven, stove, fridge, dishwasher and washing machine. Towels, toiletries, linens and kitchenware are provided. A double bed with a beautiful Simmons mattress. Studio on course, very quiet.",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/4ad9de55-cab3-497f-8ce1-b99f893d3a1d_sfa060.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/8f32a693-5c21-4da7-a5d8-f7f18428fcb4_mumcqx.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/f850be81-b989-45e1-87d3-9b413befb26f_jfvdr8.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529224/alfy-bootcamp/listing/paris/633aad0e-cecf-4643-9f54-555c32f3f4ee_s8dsiq.webp"
      ],
      "amenities": [
        "Kitchen",
        "TV",
        "Washer",
        "Elevator",
        "Wifi",
        "Hair dryer"
      ],
      "reviews": [
        {
          "name": "Laura",
          "location": "Spain",
          "img": "",
          "rating": 4,
          "review": "Communication with Ivana was easy and swift, the place is well-located, equipped and in good condition. Stayed for more than a week and had everything I needed for my stay."
        },
        {
          "name": "Izzet",
          "location": "Israel",
          "img": "",
          "rating": 4,
          "review": "Great communication with Ivana, nice place to stay for business trip. You can reach metro (line 9) in 30 meters. Kitchen was bien équipée and all cleaning items"
        }
      ],
      "current-bookings": [
        {
          "start": "Oct 2, 2022",
          "end": "Oct 7, 2022"
        },
        {
          "start": "Nov 14, 2022",
          "end": "Nov 19, 2022"
        }
      ]
    },
    {
      "name": "Entire rental unit hosted by My Key",
      "tags": ["4 guests", "1 bedroom", "2 beds", "1 bath"],
      "price": "$200",
      "description": "Welcome to my flat, completely renovated by an architect in February 2022 and located in the heart of the Marais in the Enfants Rouges district. You will be charmed by the location of this place, just a stone's throw from the rue de Bretagne and its historic Marché des Enfants Rouges. This lively district offers all the ideal conditions for a stay in our beautiful city of Paris. The space The 26m2 flat is composed of a living room with a sofa bed (140X200), a fully equipped open kitchen (ultra-quiet fridge-freezer, oven, induction hob, hood, dishwasher, coffee maker, toaster and kettle, as well as numerous cooking accessories), a sleeping area with a double bed separated from the rest of the flat by a glas roof, a dressing area and a walk-in shower with a separate toilet and washing machine. It has wifi (fibre). The welcome products (shower gel, shampoo), household linen and bath towels are provided and changed between each reservation.",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529171/alfy-bootcamp/listing/paris/2d2d7ec0-9674-45ea-9ea3-6ed57fabaa1f_jivh1h.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529170/alfy-bootcamp/listing/paris/cdc8a49a-ceb7-4553-9db9-f5b15981a06d_gnyluy.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529170/alfy-bootcamp/listing/paris/072e819d-cb7b-4905-925f-4130a34cb379_g3xn0l.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529170/alfy-bootcamp/listing/paris/f5d2142a-af9d-4fd6-85ce-ab4789a1fbaa_idt8ui.webp"
      ],
      "amenities": [
        "Courtyard view",
        "Wifi",
        "Free washer",
        "Security cameras",
        "Kitchen",
        "EV charger"
      ],
      "reviews": [
        {
          "name": "Karine",
          "location": "US",
          "img": "",
          "rating": 4.3,
          "review": "The location is perfect and the place has potential but it lacks of love and attention. The table is so wobbly it’s absolutely un-usable let alone"
        },
        {
          "name": "Teri",
          "location": "UK",
          "img": "",
          "rating": 4.9,
          "review": "The apartment is bright and very clean. Safe location."
        }
      ],
      "current-bookings": [
        {
          "start": "Nov 21, 2022",
          "end": "Nov 28, 2022"
        }
      ]
    },
    {
      "name": "Opéra-Madeleine Parisian find",
      "tags": ["4 guests", "1 bedroom", "1 bed", "1 bath"],
      "price": "$330",
      "description": "Nice apartment and bright fully equipped situated in the center of Paris, a few meters of the famous shops like Printemps, Galeries Lafayette, Channel, Hermes and main tourist points of Paris as the Opera Garnier, Madeleine, Concorde and the Jardin des Tulleries, The Louvre Museum and the famous Avenue des Champs Elysées.The space The apartment is located in the heart of Paris, it is completely equipped. Bed linen and towels are provided and you will have free access to a Wi-Fi connection.",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529848/alfy-bootcamp/listing/paris/e43811c3-2e7a-4530-b979-cfa5f4a73384_pwruer.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/8b2babce-5571-402a-b459-6a1051a1078b_djkdl1.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529846/alfy-bootcamp/listing/paris/1f4f5abc-0e4c-42a0-b3d1-37c0e027c327_tj9vme.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/d6099f7c-3b94-4238-8852-09f7cf7919f9_yb8bvh.webp"
      ],
      "amenities": ["Kitchen", "HDTV", "Refrigerator", "Wifi", "Hair dryer"],
      "reviews": [
        {
          "name": "Andrea",
          "location": "Australia",
          "img": "",
          "rating": 5,
          "review": "As first time Paris-explorers, Bryan’s accommodation was perfect for our family of four (including two teens). Close to the glories of the Haussmann district and Gallery Lafayette,"
        },
        {
          "name": "Helen",
          "location": "USA",
          "img": "",
          "rating": 5,
          "review": "Absolutely love the stay. Bryan was a great host and communication was fantastic. Highly recommend."
        }
      ],
      "current-bookings": []
    },
    {
      "name": "Unique studio near Galeries Lafayette",
      "tags": ["2 guests", "Studio", "1 bed", "1 bath"],
      "price": "$95",
      "description": "In the heart of Paris, you will be captivated by the charm of this elegant and unique studio. Exceptionally located, near the Galeries Lafayette, Opéra Garnier and more! You will be able to experience Paris in a beautiful and magical way, in one of the most in-demand neighborhood. *Amazing* boulangeries, coffee places, restaurants are just around the corner and I will gladly advise you about it! I will provide the bed linen and towels for your stay",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/9b35e99d-2999-4f3f-9ccf-28fe06a3473a_ztz8mm.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/28fb2c5b-f57f-41f1-9448-97ed390ed1bb_zzyng3.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/06b8afe8-7dfd-4f69-8b21-1cb0eb3afd67_flhtmg.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/987ea3f6-6400-44fa-a636-098f800b98dd_rrn1cq.webp"
      ],
      "amenities": [
        "Courtyard view",
        "Wifi",
        "Free washer",
        "Security cameras",
        "Kitchen",
        "EV charger"
      ],
      "reviews": [
        {
          "name": "Andrea",
          "location": "Australia",
          "img": "",
          "rating": 5,
          "review": "As first time Paris-explorers, Bryan’s accommodation was perfect for our family of four (including two teens). Close to the glories of the Haussmann district and Gallery Lafayette,"
        },
        {
          "name": "Helen",
          "location": "USA",
          "img": "",
          "rating": 5,
          "review": "Absolutely love the stay. Bryan was a great host and communication was fantastic. Highly recommend."
        }
      ],
      "current-bookings": [
        {
          "start": "Nov 1, 2022",
          "end": "Nov 4, 2022"
        }
      ]
    }
  ],
  "newyork": [
    {
      "name": "Entire rental unit hosted by Ivana",
      "tags": ["1 guest", "Studio", "1 bed", "1 bath"],
      "price": "$100",
      "description": "Studio of 25m2 in a secure building near the metro La Muette (line 9) and Boulainvilliers (rer c). Numerous buses nearby. Food and clothing shops (rue de Passy) The studio has all amenities. It is equipped with an oven, stove, fridge, dishwasher and washing machine. Towels, toiletries, linens and kitchenware are provided. A double bed with a beautiful Simmons mattress. Studio on course, very quiet.",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/4ad9de55-cab3-497f-8ce1-b99f893d3a1d_sfa060.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/8f32a693-5c21-4da7-a5d8-f7f18428fcb4_mumcqx.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529225/alfy-bootcamp/listing/paris/f850be81-b989-45e1-87d3-9b413befb26f_jfvdr8.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529224/alfy-bootcamp/listing/paris/633aad0e-cecf-4643-9f54-555c32f3f4ee_s8dsiq.webp"
      ],
      "amenities": [
        "Kitchen",
        "TV",
        "Washer",
        "Elevator",
        "Wifi",
        "Hair dryer"
      ],
      "reviews": [
        {
          "name": "Laura",
          "location": "Spain",
          "img": "",
          "rating": 4,
          "review": "Communication with Ivana was easy and swift, the place is well-located, equipped and in good condition. Stayed for more than a week and had everything I needed for my stay."
        },
        {
          "name": "Izzet",
          "location": "Israel",
          "img": "",
          "rating": 4,
          "review": "Great communication with Ivana, nice place to stay for business trip. You can reach metro (line 9) in 30 meters. Kitchen was bien équipée and all cleaning items"
        }
      ],
      "current-bookings": [
        {
          "start": "Oct 2, 2022",
          "end": "Oct 7, 2022"
        },
        {
          "start": "Nov 14, 2022",
          "end": "Nov 19, 2022"
        }
      ]
    },
    {
      "name": "Entire rental unit hosted by My Key",
      "tags": ["4 guests", "1 bedroom", "2 beds", "1 bath"],
      "price": "$200",
      "description": "Welcome to my flat, completely renovated by an architect in February 2022 and located in the heart of the Marais in the Enfants Rouges district. You will be charmed by the location of this place, just a stone's throw from the rue de Bretagne and its historic Marché des Enfants Rouges. This lively district offers all the ideal conditions for a stay in our beautiful city of Paris. The space The 26m2 flat is composed of a living room with a sofa bed (140X200), a fully equipped open kitchen (ultra-quiet fridge-freezer, oven, induction hob, hood, dishwasher, coffee maker, toaster and kettle, as well as numerous cooking accessories), a sleeping area with a double bed separated from the rest of the flat by a glas roof, a dressing area and a walk-in shower with a separate toilet and washing machine. It has wifi (fibre). The welcome products (shower gel, shampoo), household linen and bath towels are provided and changed between each reservation.",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529171/alfy-bootcamp/listing/paris/2d2d7ec0-9674-45ea-9ea3-6ed57fabaa1f_jivh1h.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529170/alfy-bootcamp/listing/paris/cdc8a49a-ceb7-4553-9db9-f5b15981a06d_gnyluy.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529170/alfy-bootcamp/listing/paris/072e819d-cb7b-4905-925f-4130a34cb379_g3xn0l.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529170/alfy-bootcamp/listing/paris/f5d2142a-af9d-4fd6-85ce-ab4789a1fbaa_idt8ui.webp"
      ],
      "amenities": [
        "Courtyard view",
        "Wifi",
        "Free washer",
        "Security cameras",
        "Kitchen",
        "EV charger"
      ],
      "reviews": [
        {
          "name": "Karine",
          "location": "US",
          "img": "",
          "rating": 4.3,
          "review": "The location is perfect and the place has potential but it lacks of love and attention. The table is so wobbly it’s absolutely un-usable let alone"
        },
        {
          "name": "Teri",
          "location": "UK",
          "img": "",
          "rating": 4.9,
          "review": "The apartment is bright and very clean. Safe location."
        }
      ],
      "current-bookings": [
        {
          "start": "Nov 21, 2022",
          "end": "Nov 28, 2022"
        }
      ]
    },
    {
      "name": "Opéra-Madeleine Parisian find",
      "tags": ["4 guests", "1 bedroom", "1 bed", "1 bath"],
      "price": "$330",
      "description": "Nice apartment and bright fully equipped situated in the center of Paris, a few meters of the famous shops like Printemps, Galeries Lafayette, Channel, Hermes and main tourist points of Paris as the Opera Garnier, Madeleine, Concorde and the Jardin des Tulleries, The Louvre Museum and the famous Avenue des Champs Elysées.The space The apartment is located in the heart of Paris, it is completely equipped. Bed linen and towels are provided and you will have free access to a Wi-Fi connection.",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529848/alfy-bootcamp/listing/paris/e43811c3-2e7a-4530-b979-cfa5f4a73384_pwruer.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/8b2babce-5571-402a-b459-6a1051a1078b_djkdl1.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529846/alfy-bootcamp/listing/paris/1f4f5abc-0e4c-42a0-b3d1-37c0e027c327_tj9vme.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/d6099f7c-3b94-4238-8852-09f7cf7919f9_yb8bvh.webp"
      ],
      "amenities": ["Kitchen", "HDTV", "Refrigerator", "Wifi", "Hair dryer"],
      "reviews": [
        {
          "name": "Andrea",
          "location": "Australia",
          "img": "",
          "rating": 5,
          "review": "As first time Paris-explorers, Bryan’s accommodation was perfect for our family of four (including two teens). Close to the glories of the Haussmann district and Gallery Lafayette,"
        },
        {
          "name": "Helen",
          "location": "USA",
          "img": "",
          "rating": 5,
          "review": "Absolutely love the stay. Bryan was a great host and communication was fantastic. Highly recommend."
        }
      ],
      "current-bookings": []
    },
    {
      "name": "Unique studio near Galeries Lafayette",
      "tags": ["2 guests", "Studio", "1 bed", "1 bath"],
      "price": "$95",
      "description": "In the heart of Paris, you will be captivated by the charm of this elegant and unique studio. Exceptionally located, near the Galeries Lafayette, Opéra Garnier and more! You will be able to experience Paris in a beautiful and magical way, in one of the most in-demand neighborhood. *Amazing* boulangeries, coffee places, restaurants are just around the corner and I will gladly advise you about it! I will provide the bed linen and towels for your stay",
      "images": [
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/9b35e99d-2999-4f3f-9ccf-28fe06a3473a_ztz8mm.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/28fb2c5b-f57f-41f1-9448-97ed390ed1bb_zzyng3.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/06b8afe8-7dfd-4f69-8b21-1cb0eb3afd67_flhtmg.webp",
        "https://res.cloudinary.com/joinshelf/image/upload/v1663529847/alfy-bootcamp/listing/paris/987ea3f6-6400-44fa-a636-098f800b98dd_rrn1cq.webp"
      ],
      "amenities": [
        "Courtyard view",
        "Wifi",
        "Free washer",
        "Security cameras",
        "Kitchen",
        "EV charger"
      ],
      "reviews": [
        {
          "name": "Andrea",
          "location": "Australia",
          "img": "",
          "rating": 5,
          "review": "As first time Paris-explorers, Bryan's accommodation was perfect for our family of four (including two teens). Close to the glories of the Haussmann district and Gallery Lafayette,"
        },
        {
          "name": "Helen",
          "location": "USA",
          "img": "",
          "rating": 5,
          "review": "Absolutely love the stay. Bryan was a great host and communication was fantastic. Highly recommend."
        }
      ],
      "current-bookings": [
        {
          "start": "Nov 1, 2022",
          "end": "Nov 4, 2022"
        }
      ]
    }
  ],
  "myuser": {
    "name": "Jonathan Due",
    "location": "United State",
    "joinedAt": "05.06.2022",
    "email": "fake_email@gmail.com",
    "address": "2445 Crosswind Drive",
    "gender": "Male",
    "birthday": "07.12.1995"
  },
  "mybookings": {
    "bookingId": "9246940",
    "checkin": "Dec 8, 2022",
    "checkout": "Dec 12, 2022",
    "price": " 1,950",
    "title": "Baan Wanglang Riverside",
    "location": "342 Soi Wat Rakang, Prannok Rd, Siriral, Bankoknoi, Bangkok,",
    "orderDate": "April 8,2022",
    "img": "https://res.cloudinary.com/joinshelf/image/upload/v1663515557/alfy-bootcamp/bestplaces/pexels-manuel-joseph-19872_qclbdo.jpg"
  }
}
`
// Initialize cors middleware
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

function runMiddleWare(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if(result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

let data = JSON.parse(rawData)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleWare(req, res, cors)
  
  if(req.method === 'GET') {
    res.json(data)
  }
}