//Config Driven UI - Mock Data from API

/* CDN for Restaurant & Menu items Images  */
export const RES_IMG_CDN =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
export const ITEM_IMG_CDN =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/'

/* PONDY LOCATION URL */
//export const GET_RESTAURANTS_LIST = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9343684&lng=79.8255499&page_type=DESKTOP_WEB_LISTING";
//export const GET_RESTAURANT_MENU = "https://www.swiggy.com/dapi/menu/v4/full?lat=11.9343684&lng=79.8255499&menuId=";

/* BANGALORE LOCATION URL */
export const GET_RESTAURANTS_LIST =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
export const GET_RESTAURANT_MENU =
  'https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId='

/* Shimmer - Number of cards & items to be displayed */
export const SHIMMER_RES_CARDS_COUNT = 8
export const SHIMMER_MENU_ITEMS_COUNT = 4

/* Github - username, blog name */
export const GITHUB_USER_NAME = 'HarshithaSolai'
export const GITHUB_BLOG_NAME = 'Learn-React-With-Harshi'

/* Github API getuser */
export const GITHUB_GET_USER = 'https://api.github.com/users/'

/* Social Media Links */
export const GITHUB_LINK = 'https://github.com/HarshithaSolai'
export const LINKEDIN_LINK = 'https://www.linkedin.com/in/harshitha-sv/'
export const GMAIL_LINK = 'mailto:solaiharshitha0@gmail.com'

/* Mock FAQ */
export const FAQ = [
  {
    id: 473,
    title: 'Can I edit my order?',
    description:
      'Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents'
  },
  {
    id: 474,
    title: 'I want to cancel my order',
    description:
      'We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.'
  },
  {
    id: 475,
    title: 'Will Insta Food be accountable for quality/quantity? ',
    description:
      "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant."
  },
  {
    id: 476,
    title: 'Is there a minimum order value?',
    description: 'We have no minimum order value and you can order for any amount. '
  },
  {
    id: 477,
    title: 'Do you charge for delivery?',
    description:
      "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. "
  },
  {
    id: 478,
    title: 'How long do you take to deliver?',
    description:
      'Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.'
  },
  {
    id: 479,
    title: 'What are your delivery hours?',
    description:
      'Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.'
  },
  {
    id: 481,
    title: 'Is single order from many restaurants possible?',
    description:
      'We currently do not support this functionality. However, you can place orders for individual items from different restaurants.'
  }
]

/* Mock Data for Restaurant Card */
export const restaurantList = {
  statusCode: 0,
  data: {
    cacheExpiryTime: 320,
    pages: 1,
    pageIndex: 0,
    scrubber: 0,
    filters: [
      {
        type: 'FilterWidget',
        title: 'Cuisines',
        key: 'CUISINES',
        configType: 'checkbox',
        visible: 1,
        options: [
          { option: 'American', selected: 0, visible: 1 },
          { option: 'Andhra', selected: 0, visible: 1 },
          { option: 'Arabian', selected: 0, visible: 1 },
          { option: 'Asian', selected: 0, visible: 1 },
          { option: 'Bakery', selected: 0, visible: 1 },
          { option: 'Bengali', selected: 0, visible: 1 },
          { option: 'Beverages', selected: 0, visible: 1 },
          { option: 'Bihari', selected: 0, visible: 1 },
          { option: 'Biryani', selected: 0, visible: 1 },
          { option: 'Burgers', selected: 0, visible: 1 },
          { option: 'Cafe', selected: 0, visible: 1 },
          { option: 'Chaat', selected: 0, visible: 1 },
          { option: 'Chinese', selected: 0, visible: 1 },
          { option: 'Combo', selected: 0, visible: 1 },
          { option: 'Continental', selected: 0, visible: 1 },
          { option: 'Desserts', selected: 0, visible: 1 },
          { option: 'European', selected: 0, visible: 1 },
          { option: 'Fast Food', selected: 0, visible: 1 },
          { option: 'Healthy Food', selected: 0, visible: 1 },
          { option: 'Home Food', selected: 0, visible: 1 },
          { option: 'Hyderabadi', selected: 0, visible: 1 },
          { option: 'Ice Cream', selected: 0, visible: 1 },
          { option: 'Ice Cream Cakes', selected: 0, visible: 1 },
          { option: 'Indian', selected: 0, visible: 1 },
          { option: 'Italian', selected: 0, visible: 1 },
          { option: 'Italian-American', selected: 0, visible: 1 },
          { option: 'Jain', selected: 0, visible: 1 },
          { option: 'Japanese', selected: 0, visible: 1 },
          { option: 'Juices', selected: 0, visible: 1 },
          { option: 'Kebabs', selected: 0, visible: 1 },
          { option: 'Kerala', selected: 0, visible: 1 },
          { option: 'Keto', selected: 0, visible: 1 },
          { option: 'Lebanese', selected: 0, visible: 1 },
          { option: 'Lucknowi', selected: 0, visible: 1 },
          { option: 'Maharashtrian', selected: 0, visible: 1 },
          { option: 'Malaysian', selected: 0, visible: 1 },
          { option: 'Mexican', selected: 0, visible: 1 },
          { option: 'Mughlai', selected: 0, visible: 1 },
          { option: 'North Indian', selected: 0, visible: 1 },
          { option: 'Oriental', selected: 0, visible: 1 },
          { option: 'Pan-Asian', selected: 0, visible: 1 },
          { option: 'Pastas', selected: 0, visible: 1 },
          { option: 'Pizzas', selected: 0, visible: 1 },
          { option: 'Portuguese', selected: 0, visible: 1 },
          { option: 'Punjabi', selected: 0, visible: 1 },
          { option: 'Salads', selected: 0, visible: 1 },
          { option: 'Seafood', selected: 0, visible: 1 },
          { option: 'Snacks', selected: 0, visible: 1 },
          { option: 'South Indian', selected: 0, visible: 1 },
          { option: 'Street Food', selected: 0, visible: 1 },
          { option: 'Sweets', selected: 0, visible: 1 },
          { option: 'Tandoor', selected: 0, visible: 1 },
          { option: 'Thai', selected: 0, visible: 1 },
          { option: 'Thalis', selected: 0, visible: 1 },
          { option: 'Tibetan', selected: 0, visible: 1 },
          { option: 'Turkish', selected: 0, visible: 1 },
          { option: 'Waffle', selected: 0, visible: 1 }
        ],
        detail: '',
        heading: 'Cuisines',
        applicable: 1,
        searchable: 1
      },
      {
        type: 'FilterWidget',
        title: 'Show Restaurants With',
        key: 'SHOW_RESTAURANTS_WITH',
        configType: 'checkbox',
        visible: 1,
        options: [{ option: 'Pure Veg', selected: 0, visible: 1 }],
        detail: '',
        heading: 'Offers & More',
        applicable: 1,
        searchable: 0
      }
    ],
    sorts: [
      {
        type: 'SortWidget',
        key: 'RELEVANCE',
        title: 'Relevance',
        selected: 1,
        visible: 1,
        defaultSelection: true
      },
      {
        type: 'SortWidget',
        key: 'DELIVERY_TIME',
        title: 'Delivery Time',
        selected: 0,
        visible: 1,
        defaultSelection: false
      },
      {
        type: 'SortWidget',
        key: 'RATING',
        title: 'Rating',
        selected: 0,
        visible: 1,
        defaultSelection: false
      },
      {
        type: 'SortWidget',
        key: 'COST_FOR_TWO',
        title: 'Cost: Low to High',
        selected: 0,
        visible: 1,
        defaultSelection: false
      },
      {
        type: 'SortWidget',
        key: 'COST_FOR_TWO_H2L',
        title: 'Cost: High to Low',
        selected: 0,
        visible: 1,
        defaultSelection: false
      }
    ],
    configs: {
      ribbons: {
        PREORDER: {
          type: 'PREORDER',
          text: 'Preorder',
          textColor: '#ffffff',
          imageId: 'sfefefefeegeg',
          topBackgroundColor: '#d53d4c',
          bottomBackgroundColor: '#af2330',
          priority: 3
        },
        EXCLUSIVE: {
          type: 'EXCLUSIVE',
          text: 'Exclusive',
          textColor: '#ffffff',
          imageId: 'sfefefefeegeg',
          topBackgroundColor: '#fa4a5b',
          bottomBackgroundColor: '#d12a3b',
          priority: 2
        },
        NEW: {
          type: 'NEW',
          text: 'Newly Added',
          textColor: '#ffffff',
          imageId: 'sfefefefeegeg',
          topBackgroundColor: '#d53d4c',
          bottomBackgroundColor: '#af2330',
          priority: 4
        },
        REPEAT: {
          type: 'REPEAT',
          text: 'Repeat',
          textColor: '#ffffff',
          imageId: 'sfefefefeegeg',
          topBackgroundColor: '#D53D4C',
          bottomBackgroundColor: '#B02331',
          priority: 6
        },
        CLOUD: {
          type: 'CLOUD',
          text: 'Daily Menus',
          textColor: '#ffffff',
          imageId: 'sfefefefeegeg',
          topBackgroundColor: '#fa4a5b',
          bottomBackgroundColor: '#d12a3b',
          priority: 5
        },
        PREMIUM: {
          type: 'PREMIUM',
          text: 'Premium',
          textColor: '#ffffff',
          imageId: 'sfefefefeegeg',
          topBackgroundColor: '#8a584b',
          bottomBackgroundColor: '#583229',
          priority: 7
        },
        PROMOTED: {
          type: 'PROMOTED',
          text: 'Promoted',
          textColor: '#ffffff',
          imageId: 'sfefefefeegeg',
          topBackgroundColor: '#3a3c41',
          bottomBackgroundColor: '#1e2023',
          priority: 1
        }
      },
      croutons: {
        RAIN: {
          type: 'Crouton',
          bgColor: '#282C3F',
          icon: 'surge_listing_piuzrv',
          textColor: '#ffffff',
          title: 'Bad Weather',
          message: '${amount} extra levied on some restaurants'
        },
        RAIN_DEFAULT: {
          type: 'Crouton',
          bgColor: '#282C3F',
          icon: 'surge_listing_piuzrv',
          textColor: '#ffffff',
          title: 'Bad Weather',
          message: 'Your orders may be delayed by 5-10 mins'
        },
        SERVICEABLE_WITH_BANNER_RAIN: {
          type: 'Crouton',
          bgColor: '#282C3F',
          icon: 'rain_crouton_4x',
          textColor: '#ffffff',
          title: 'Bad Weather',
          message: 'Few restaurants unserviceable due to rains'
        },
        RAIN_LOW: {
          type: 'Crouton',
          bgColor: '#282C3F',
          icon: 'surge_listing_piuzrv',
          textColor: '#ffffff',
          title: 'Bad Weather',
          message: 'Your orders may be delayed by 5-10 mins'
        },
        RAIN_HIGH: {
          type: 'Crouton',
          bgColor: '#282C3F',
          icon: 'surge_listing_piuzrv',
          textColor: '#ffffff',
          title: 'Bad Weather',
          message: 'Your orders may be delayed by 5-10 mins'
        },
        SPECIAL: {
          type: 'Crouton',
          bgColor: '#282C3F',
          icon: 'surge_listing_piuzrv',
          textColor: '#ffffff',
          title: 'High Demand',
          message: 'Surge fee of Rs ${amount} may be applicable'
        }
      }
    },
    cards: [
      {
        cardType: 'carousel',
        layoutAlignmentType: 'VERTICAL',
        data: {
          type: 'carousel',
          subtype: 'topCarousel',
          data: {
            cards: [
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 635529,
                  creativeId: 'rng/md/carousel/production/pneknawbadtvceqzwiep',
                  type: 'restaurantCollectionV2',
                  link: '49301',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 619141,
                  creativeId: 'rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t',
                  type: 'restaurantCollectionV2',
                  link: '56413',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 619143,
                  creativeId: 'rng/md/carousel/production/lzkjv3sxwwjkzg0vxpvt',
                  type: 'restaurantCollectionV2',
                  link: '56422',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 619142,
                  creativeId: 'rng/md/carousel/production/tgnvusbs3fnzz7xupeno',
                  type: 'restaurantCollectionV2',
                  link: '56417',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 619145,
                  creativeId: 'rng/md/carousel/production/nhubtkw7dukg3ukcmpam',
                  type: 'restaurantCollectionV2',
                  link: '56414',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 607193,
                  creativeId: 'rng/md/carousel/production/s5ug2key6e2sptaxku5v',
                  type: 'restaurantCollectionV2',
                  link: '56410',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 607195,
                  creativeId: 'rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3',
                  type: 'restaurantCollectionV2',
                  link: '56421',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  thirdPartyVendor: '',
                  thirdPartyAddress: false
                }
              }
            ]
          }
        },
        parentWidget: false
      },
      {
        cardType: 'carousel',
        layoutAlignmentType: 'VERTICAL',
        data: {
          type: 'carousel',
          subtype: 'openFilter',
          data: {
            cards: [
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 181684,
                  creativeId: 'bkhjfipzydkoqncrxpyi',
                  type: 'restaurantCollectionV2',
                  link: '11718',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  title: 'Offers Near You',
                  subtitle: '0 OPTIONS',
                  restaurants: [],
                  totalCount: 0,
                  dwebOpenFilterTitle: 'Offers Near You',
                  dwebOpenFilterBgColor: '#FF0000',
                  dwebOpenFilterSelectIcon: 'eyperwsfhaoa5vktjtu4',
                  dwebOpenFilterDeselectIcon: 'urw8usdf4mk9aywd59gq'
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 273242,
                  creativeId: 'rng/md/carousel/production/vquntqrzvkb08pe59cec',
                  type: 'restaurantCollectionV2',
                  link: '46147',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  title: 'Top Picks',
                  subtitle: '0 OPTIONS',
                  restaurants: [],
                  totalCount: 0,
                  dwebOpenFilterTitle: 'Top Picks',
                  dwebOpenFilterBgColor: '#FF0000',
                  dwebOpenFilterSelectIcon: 'rng/md/carousel/production/vt13uzhjrg5r49kh9oru',
                  dwebOpenFilterDeselectIcon: 'rng/md/carousel/production/ser2sttildk9yt7t2s91'
                }
              },
              {
                type: 'carouselElement',
                subtype: 'image',
                data: {
                  bannerId: 181680,
                  creativeId: 'a3jqjjod5taken7dh1bs',
                  type: 'restaurantCollectionV2',
                  link: '11721',
                  cityId: 0,
                  restaurantUuid: '',
                  restaurantParentId: '0',
                  title: 'Veg Only',
                  subtitle: '0 OPTIONS',
                  restaurants: [],
                  totalCount: 0,
                  dwebOpenFilterTitle: 'Vegetarian Options',
                  dwebOpenFilterBgColor: '#FF0000',
                  dwebOpenFilterSelectIcon: 'qtjc8dzfexg72lug37a0',
                  dwebOpenFilterDeselectIcon: 'bm8bziikwyvwqsml1clm'
                }
              }
            ]
          }
        },
        parentWidget: false
      },
      {
        cardType: 'seeAllRestaurants',
        layoutAlignmentType: 'VERTICAL',
        data: {
          type: 'seeAllRestaurants',
          data: {
            title: 'SEE ALL',
            totalOpenRestaurants: 459,
            cards: [
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '193210',
                  name: 'Chopstick',
                  uuid: '259b62fa-9764-4c6f-b915-0988773dc3e4',
                  city: '1',
                  area: 'Btm Layout',
                  totalRatingsString: '1000+ ratings',
                  cloudinaryImageId: 'h7h8vt4y5cur3plpkf1x',
                  cuisines: [
                    'Chinese',
                    'Thai',
                    'Seafood',
                    'Asian',
                    'Combo',
                    'Healthy Food',
                    'Beverages'
                  ],
                  tags: [],
                  costForTwo: 35000,
                  costForTwoString: '₹350 FOR TWO',
                  deliveryTime: 22,
                  minDeliveryTime: 22,
                  maxDeliveryTime: 22,
                  slaString: '22 MINS',
                  lastMileTravel: 3,
                  slugs: {
                    restaurant: 'the-chopstick-btm-btm',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    'No. 805/A, 16th Mai, 7th Cross , Next to Pizza Hut, Stage 2, BTM Layout, Bangalore, Karnataka',
                  locality: '2nd Stage',
                  parentId: 1783,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  ribbon: [{ type: 'PROMOTED' }],
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: 'cid=5717644~p=1~eid=00000186-09ee-32fc-2d93-8c6c001a010a',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '3 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '193210',
                    deliveryTime: 22,
                    minDeliveryTime: 22,
                    maxDeliveryTime: 22,
                    lastMileTravel: 3,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: true,
                  avgRating: '4.0',
                  totalRatings: 1000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '70161',
                  name: 'Imperio Restaurant',
                  uuid: '579609b6-73f2-4d8f-a777-20929a10b7b3',
                  city: '1',
                  area: 'Hrbr Layout',
                  totalRatingsString: '1000+ ratings',
                  cloudinaryImageId: 'uz8axstizmuiij9adupe',
                  cuisines: [
                    'Chinese',
                    'South Indian',
                    'North Indian',
                    'Continental',
                    'Desserts',
                    'Kerala',
                    'Andhra',
                    'Beverages',
                    'Mughlai',
                    'Seafood',
                    'Hyderabadi',
                    'Pan-Asian',
                    'Thai'
                  ],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: '₹300 FOR TWO',
                  deliveryTime: 35,
                  minDeliveryTime: 30,
                  maxDeliveryTime: 40,
                  slaString: '30-40 MINS',
                  lastMileTravel: 12.300000190734863,
                  slugs: {
                    restaurant: 'imperio-restaurant-kalyan-nagar-kammanahallikalyan-nagar',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address: 'No.429 1st block hrbr layout kalyan Nagar',
                  locality: '1st Block',
                  parentId: 5610,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: 'Closes soon'
                  },
                  longDistanceEnabled: 1,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '12.3 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '70161',
                    deliveryTime: 35,
                    minDeliveryTime: 30,
                    maxDeliveryTime: 40,
                    lastMileTravel: 12.300000190734863,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'IT_IS_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '4.0',
                  totalRatings: 1000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '588705',
                  name: "La Pino'z Pizza",
                  uuid: 'a421884c-e814-4349-aff7-7bb734ce5549',
                  city: '1',
                  area: 'JP Nagar',
                  totalRatingsString: '500+ ratings',
                  cloudinaryImageId: 'w6roonblq3fa5wrtlgys',
                  cuisines: ['Italian', 'Pizzas', 'Mexican', 'Desserts', 'Beverages'],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: '₹300 FOR TWO',
                  deliveryTime: 31,
                  minDeliveryTime: 31,
                  maxDeliveryTime: 31,
                  slaString: '31 MINS',
                  lastMileTravel: 6.400000095367432,
                  slugs: {
                    restaurant: "la-pino'z-pizza-jp-nagar-jp-nagar",
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    '#309,1ST FLOOR,100 FEET RING ROAD,NEAR DELMIACIRCLE,J P NAGAR,5TH PHASE,BANGALORE, BTM Layout , B.B.M.P South, Karnataka-560078',
                  locality: '5TH Phase',
                  parentId: 4961,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '6.4 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '588705',
                    deliveryTime: 31,
                    minDeliveryTime: 31,
                    maxDeliveryTime: 31,
                    lastMileTravel: 6.400000095367432,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.9',
                  totalRatings: 500,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '217048',
                  name: 'Chinese BAE',
                  uuid: 'f053c092-04d2-4551-b081-4449cf1a559f',
                  city: '1',
                  area: 'BTM Layout',
                  totalRatingsString: '1000+ ratings',
                  cloudinaryImageId: 'n2lfnd2v4jf4x6l7rnos',
                  cuisines: [
                    'Chinese',
                    'Thai',
                    'Seafood',
                    'Asian',
                    'Combo',
                    'Healthy Food',
                    'Beverages'
                  ],
                  tags: [],
                  costForTwo: 40000,
                  costForTwoString: '₹400 FOR TWO',
                  deliveryTime: 24,
                  minDeliveryTime: 24,
                  maxDeliveryTime: 24,
                  slaString: '24 MINS',
                  lastMileTravel: 3,
                  slugs: {
                    restaurant: 'chinese-bae-btm-btm',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    'NO.805/A, 1ST FLOOR, 7TH CROSS, BTM LAYOUT 2ND STAGE, MICO LAYOUT, BANGALORE., B.B.M.P South (Karnataka) - 560076',
                  locality: '2nd Stage',
                  parentId: 9769,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  ribbon: [{ type: 'PROMOTED' }],
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: 'cid=5717643~p=4~eid=00000186-09ee-32fc-2d93-8c6d001a041a',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '3 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '217048',
                    deliveryTime: 24,
                    minDeliveryTime: 24,
                    maxDeliveryTime: 24,
                    lastMileTravel: 3,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: true,
                  avgRating: '4.1',
                  totalRatings: 1000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '418',
                  name: 'Ande Ka Funda',
                  uuid: '80f87c90-b6f4-48ef-b110-9bbfad549b39',
                  city: '1',
                  area: 'Kadubeesanahalli',
                  totalRatingsString: '1000+ ratings',
                  cloudinaryImageId: 'hwnvirxf8oxaubiflcag',
                  cuisines: ['North Indian'],
                  tags: [],
                  costForTwo: 10000,
                  costForTwoString: '₹100 FOR TWO',
                  deliveryTime: 39,
                  minDeliveryTime: 35,
                  maxDeliveryTime: 45,
                  slaString: '35-45 MINS',
                  lastMileTravel: 11,
                  slugs: {
                    restaurant: 'ande-ka-funda-shymala-reddy-dental-college-road-marathahalli',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address: '6, Shymala Reddy Dental College Road, Marathahalli',
                  locality: 'Munnekolala',
                  parentId: 15677,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 1,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '11 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '418',
                    deliveryTime: 39,
                    minDeliveryTime: 35,
                    maxDeliveryTime: 45,
                    lastMileTravel: 11,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'IT_IS_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.5',
                  totalRatings: 1000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '337335',
                  name: 'Kannur food kitchen',
                  uuid: 'c70b61bc-0f68-4e24-996b-749fbf295c35',
                  city: '1',
                  area: 'BTM Layout',
                  totalRatingsString: '1000+ ratings',
                  cloudinaryImageId: 'a27weqanhnszqiuzsoik',
                  cuisines: ['Kerala', 'Biryani', 'Beverages'],
                  tags: [],
                  costForTwo: 20000,
                  costForTwoString: '₹200 FOR TWO',
                  deliveryTime: 19,
                  minDeliveryTime: 19,
                  maxDeliveryTime: 19,
                  slaString: '19 MINS',
                  lastMileTravel: 2.9000000953674316,
                  slugs: {
                    restaurant: 'kannur-food-kitchen-btm-btm',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    'kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India',
                  locality: '1st  Stage',
                  parentId: 114756,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off on all orders',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      },
                      {
                        meta: 'FREE DELIVERY',
                        discountType: 'FREE_DELIVERY',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off on all orders',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      },
                      {
                        meta: 'FREE DELIVERY',
                        discountType: 'FREE_DELIVERY',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Free Delivery',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off on all orders',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      },
                      {
                        meta: 'FREE DELIVERY',
                        discountType: 'FREE_DELIVERY',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: 'Closes soon'
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '2.9 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '337335',
                    deliveryTime: 19,
                    minDeliveryTime: 19,
                    maxDeliveryTime: 19,
                    lastMileTravel: 2.9000000953674316,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.8',
                  totalRatings: 1000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '203015',
                  name: 'Shapana dhaba',
                  uuid: '3e69b27f-104b-400d-b238-494ebf8e4688',
                  city: '1',
                  area: 'Btm Layout',
                  totalRatingsString: '100+ ratings',
                  cloudinaryImageId: 'dlx42acjc2yqzajz714i',
                  cuisines: ['Chinese', 'North Indian', 'Biryani'],
                  tags: [],
                  costForTwo: 15000,
                  costForTwoString: '₹150 FOR TWO',
                  deliveryTime: 33,
                  minDeliveryTime: 33,
                  maxDeliveryTime: 33,
                  slaString: '33 MINS',
                  lastMileTravel: 4,
                  slugs: {
                    restaurant: 'shapana-dhaba-btm-btm',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address: 'H.NO 267, 26 main, 7th cross road 26th main EWS Layout',
                  locality: 'EWS Layout',
                  parentId: 181928,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '70% off',
                    shortDescriptionList: [
                      {
                        meta: '70% off on all orders',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      },
                      {
                        meta: 'FREE DELIVERY',
                        discountType: 'FREE_DELIVERY',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '70% off on all orders',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      },
                      {
                        meta: 'FREE DELIVERY',
                        discountType: 'FREE_DELIVERY',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '70% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Free Delivery',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '70% off on all orders',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      },
                      {
                        meta: 'FREE DELIVERY',
                        discountType: 'FREE_DELIVERY',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '4 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '203015',
                    deliveryTime: 33,
                    minDeliveryTime: 33,
                    maxDeliveryTime: 33,
                    lastMileTravel: 4,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.5',
                  totalRatings: 100,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '300642',
                  name: 'Al-Bek',
                  uuid: '0628c01e-4bb8-42b6-9c89-5a808d535771',
                  city: '1',
                  area: 'J P Nagar',
                  totalRatingsString: '1000+ ratings',
                  cloudinaryImageId: 'wyt8ymz3qwspvgvsthxr',
                  cuisines: ['Indian', 'Chinese'],
                  tags: [],
                  costForTwo: 60000,
                  costForTwoString: '₹600 FOR TWO',
                  deliveryTime: 27,
                  minDeliveryTime: 27,
                  maxDeliveryTime: 27,
                  slaString: '27 MINS',
                  lastMileTravel: 4.699999809265137,
                  slugs: {
                    restaurant: 'al-bek-jp-nagar-jp-nagar-2',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    'No.118/47, GR Basement and First Floor , Opp. Jayadeva Hospital , 2nd Main , 3rd Phase , JP Nagar , Bangalore , District - B.B.M.P South, STATE - Karnataka - 560078',
                  locality: '3rd phase',
                  parentId: 9911,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '4.6 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '300642',
                    deliveryTime: 27,
                    minDeliveryTime: 27,
                    maxDeliveryTime: 27,
                    lastMileTravel: 4.699999809265137,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '4.1',
                  totalRatings: 1000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '346',
                  name: 'Momoz',
                  uuid: '91420b44-6c7a-4e1c-b067-bccc707d92e1',
                  city: '1',
                  area: 'BTM Layout',
                  totalRatingsString: '1000+ ratings',
                  cloudinaryImageId: 'pnlkjsjxqcjgzwwya3fd',
                  cuisines: ['Chinese', 'Thai', 'Seafood', 'Asian', 'Combo', 'Malaysian'],
                  tags: [],
                  costForTwo: 35000,
                  costForTwoString: '₹350 FOR TWO',
                  deliveryTime: 26,
                  minDeliveryTime: 26,
                  maxDeliveryTime: 26,
                  slaString: '26 MINS',
                  lastMileTravel: 3,
                  slugs: {
                    restaurant: 'momoz-2nd-stage-btm',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address: '806, Near ICICI Bank, 7th Cross, 16th Main, 2nd Stage, BTM, Bangalore',
                  locality: '2nd Stage',
                  parentId: 2486,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  ribbon: [{ type: 'PROMOTED' }],
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: 'cid=5717645~p=10~eid=00000186-09ee-32fc-2d93-8c6f001a0a73',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '3 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '346',
                    deliveryTime: 26,
                    minDeliveryTime: 26,
                    maxDeliveryTime: 26,
                    lastMileTravel: 3,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: true,
                  avgRating: '4.1',
                  totalRatings: 1000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '335220',
                  name: 'IFC',
                  uuid: '9f412372-0d63-41f5-9c7a-2a61b85a799e',
                  city: '1',
                  area: 'Kalyan Nagar',
                  totalRatingsString: '1000+ ratings',
                  cloudinaryImageId: 't34dyumfv7orfffvqz5x',
                  cuisines: ['Burgers'],
                  tags: [],
                  costForTwo: 25000,
                  costForTwoString: '₹250 FOR TWO',
                  deliveryTime: 40,
                  minDeliveryTime: 35,
                  maxDeliveryTime: 45,
                  slaString: '35-45 MINS',
                  lastMileTravel: 12.300000190734863,
                  slugs: {
                    restaurant: 'ifc-kammanahalli/kalyan-nagar-kammanahalli/kalyan-nagar',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    '5th Floor & 2nd Floor, 429, 7th Main Rd, HRBR Layout 1st Block, HRBR Layout 2nd Block, HRBR, Kalyan Nagar, Bengaluru, Karnataka 560043',
                  locality: 'HRBR Layout',
                  parentId: 11820,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 1,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '12.3 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '335220',
                    deliveryTime: 40,
                    minDeliveryTime: 35,
                    maxDeliveryTime: 45,
                    lastMileTravel: 12.300000190734863,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'IT_IS_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '4.2',
                  totalRatings: 1000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '10584',
                  name: 'Pizza Hut',
                  uuid: 'dfb79f88-5506-42c3-857c-afbf75947316',
                  city: '1',
                  area: 'Indiranagar',
                  totalRatingsString: '500+ ratings',
                  cloudinaryImageId: 'pyaldv7cmusdapqzdiqx',
                  cuisines: ['Pizzas'],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: '₹300 FOR TWO',
                  deliveryTime: 37,
                  minDeliveryTime: 37,
                  maxDeliveryTime: 37,
                  slaString: '37 MINS',
                  lastMileTravel: 6,
                  slugs: {
                    restaurant: 'pizza-hut-cmh-road-indiranagar',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    '#1/4, ward no 82, NGEF Layout,Binmangala, CMH road, Indiranagar, Bangalore',
                  locality: 'CMH Road',
                  parentId: 721,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use TRYNEW',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code TRYNEW',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use TRYNEW',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code TRYNEW',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: 'Closes soon'
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '6 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '10584',
                    deliveryTime: 37,
                    minDeliveryTime: 37,
                    maxDeliveryTime: 37,
                    lastMileTravel: 6,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.6',
                  totalRatings: 500,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '374455',
                  name: 'Kwality Walls Frozen Dessert and Ice Cream Shop',
                  uuid: 'f4781c77-bffd-4a97-992b-1affc7c9c5dd',
                  city: '1',
                  area: 'BTM',
                  totalRatingsString: '100+ ratings',
                  cloudinaryImageId: 'ar820jxombs5o1g9i6py',
                  cuisines: ['Desserts', 'Ice Cream', 'Ice Cream Cakes'],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: '₹300 FOR TWO',
                  deliveryTime: 14,
                  minDeliveryTime: 14,
                  maxDeliveryTime: 14,
                  slaString: '14 MINS',
                  lastMileTravel: 2.799999952316284,
                  slugs: {
                    restaurant: 'kwality-walls-frozen-dessert-and-ice-cream-shop-btm-btm-2',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address:
                    'SRI CHATS SWEETS AND BAKERY: #107,1ST MAIN, 1ST CROSS ROAD, NARAYANAPPA GARDEN TAVARKERE BANGALORE, BTM LAYOUT B.B.M.P South, Karnataka-560029',
                  locality: 'Narayanappa Garden',
                  parentId: 582,
                  unserviceable: false,
                  veg: true,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '20% off',
                    shortDescriptionList: [
                      {
                        meta: '20% off | Use SWIGGYIT',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '20% off up to ₹50 on select items | Use code SWIGGYIT',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '20% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use SWIGGYIT',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '20% off up to ₹50 on select items | Use code SWIGGYIT',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  ribbon: [{ type: 'PROMOTED' }],
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: 'cid=5788070~p=13~eid=00000186-09ee-32fc-2d93-8c70001a0d5e',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '2.7 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '374455',
                    deliveryTime: 14,
                    minDeliveryTime: 14,
                    maxDeliveryTime: 14,
                    lastMileTravel: 2.799999952316284,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: true,
                  avgRating: '4.8',
                  totalRatings: 100,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '71042',
                  name: 'NEW Mahesh friends food center',
                  uuid: '4b562172-019f-4ac2-9a01-7185a0397ab3',
                  city: '1',
                  area: 'BTM Layout',
                  totalRatingsString: '100+ ratings',
                  cloudinaryImageId: 'w2rjn1jnaz4obj2nexaq',
                  cuisines: ['Chinese', 'North Indian'],
                  tags: [],
                  costForTwo: 20000,
                  costForTwoString: '₹200 FOR TWO',
                  deliveryTime: 27,
                  minDeliveryTime: 27,
                  maxDeliveryTime: 27,
                  slaString: '27 MINS',
                  lastMileTravel: 4.099999904632568,
                  slugs: {
                    restaurant:
                      'mahesh-friends-food-center-13th-a-main-ns-palya-btm-layout-2nd-stage-btm',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address: '397 16th main 7th Cross Btm layout 2nd stage Bangalore,560068',
                  locality: '2nd Stage',
                  parentId: 16767,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '4 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '71042',
                    deliveryTime: 27,
                    minDeliveryTime: 27,
                    maxDeliveryTime: 27,
                    lastMileTravel: 4.099999904632568,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.6',
                  totalRatings: 100,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '65797',
                  name: "Leon's - Burgers & Wings (Leon Grill)",
                  uuid: 'b5747bab-748b-4f2d-8856-25cd9a49efb3',
                  city: '1',
                  area: 'Koramangala',
                  totalRatingsString: '1000+ ratings',
                  cloudinaryImageId: 'r4ufflqojich0r29efvc',
                  cuisines: ['American', 'Snacks', 'Turkish', 'Portuguese', 'Continental'],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: '₹300 FOR TWO',
                  deliveryTime: 21,
                  minDeliveryTime: 21,
                  maxDeliveryTime: 21,
                  slaString: '21 MINS',
                  lastMileTravel: 1.2999999523162842,
                  slugs: {
                    restaurant: 'leon-grill-koramangala-koramangala',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address: 'Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95',
                  locality: 'KHB Colony',
                  parentId: 371281,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use SPECIALS',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 on select items | Use code SPECIALS',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use SPECIALS',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 on select items | Use code SPECIALS',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: 'Closes soon'
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '1.2 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '65797',
                    deliveryTime: 21,
                    minDeliveryTime: 21,
                    maxDeliveryTime: 21,
                    lastMileTravel: 1.2999999523162842,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '4.3',
                  totalRatings: 1000,
                  new: false
                },
                subtype: 'basic'
              },
              {
                type: 'restaurant',
                data: {
                  type: 'F',
                  id: '232214',
                  name: 'Selena Food Center',
                  uuid: '397ffc13-9ede-4855-a294-94014dcec546',
                  city: '1',
                  area: 'BTM Layout',
                  totalRatingsString: '100+ ratings',
                  cloudinaryImageId: 'o1hif3zpephumj6rz7fi',
                  cuisines: ['Indian', 'Chinese', 'Thalis', 'Biryani'],
                  tags: [],
                  costForTwo: 30000,
                  costForTwoString: '₹300 FOR TWO',
                  deliveryTime: 31,
                  minDeliveryTime: 31,
                  maxDeliveryTime: 31,
                  slaString: '31 MINS',
                  lastMileTravel: 4.099999904632568,
                  slugs: {
                    restaurant: 'selena-food-center-btm-btm',
                    city: 'bangalore'
                  },
                  cityState: '1',
                  address: '397 16th main 7th Cross Btm layout 2nd stage Bangalore,560068',
                  locality: '2nd Stage',
                  parentId: 14718,
                  unserviceable: false,
                  veg: false,
                  select: false,
                  favorite: false,
                  tradeCampaignHeaders: [],
                  aggregatedDiscountInfo: {
                    header: '50% off',
                    shortDescriptionList: [
                      {
                        meta: '50% off | Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  aggregatedDiscountInfoV2: {
                    header: '50% OFF',
                    shortDescriptionList: [
                      {
                        meta: 'Use WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    descriptionList: [
                      {
                        meta: '50% off up to ₹100 | Use code WELCOME50',
                        discountType: 'Percentage',
                        operationType: 'RESTAURANT'
                      }
                    ],
                    subHeader: '',
                    headerType: 0,
                    superFreedel: ''
                  },
                  chain: [],
                  feeDetails: {
                    fees: [],
                    totalFees: 0,
                    message: '',
                    title: '',
                    amount: '',
                    icon: ''
                  },
                  availability: {
                    opened: true,
                    nextOpenMessage: '',
                    nextCloseMessage: ''
                  },
                  longDistanceEnabled: 0,
                  rainMode: 'NONE',
                  thirdPartyAddress: false,
                  thirdPartyVendor: '',
                  adTrackingID: '',
                  badges: {
                    imageBased: [],
                    textBased: [],
                    textExtendedBadges: []
                  },
                  lastMileTravelString: '4 kms',
                  hasSurge: false,
                  sla: {
                    restaurantId: '232214',
                    deliveryTime: 31,
                    minDeliveryTime: 31,
                    maxDeliveryTime: 31,
                    lastMileTravel: 4.099999904632568,
                    lastMileDistance: 0,
                    serviceability: 'SERVICEABLE',
                    rainMode: 'NONE',
                    longDistance: 'NOT_LONG_DISTANCE',
                    preferentialService: false,
                    iconType: 'EMPTY'
                  },
                  promoted: false,
                  avgRating: '3.4',
                  totalRatings: 100,
                  new: false
                },
                subtype: 'basic'
              }
            ],
            totalRestaurants: 459
          },
          subtype: 'personalized'
        },
        parentWidget: false
      }
    ],
    nextPageFetch: 0
  },
  tid: '4ba7301e-1290-4cfc-ae21-61ebf5d969e8',
  sid: '55f83319-66d6-4b66-80c8-9d82e0a32b02',
  deviceId: 'a303e41d-2a10-eb24-3907-40910e48fc07',
  csrfToken: 'Ycy1XEMJeOly-QVWrgiax_eYfBalhoYNiudxJM9s'
}

/* Mock Data for Restaurant Menu */
export const restaurantMenu = {
  statusCode: 0,
  data: {
    experiments: [{ experimentId: 'menu_via_timeline', variantId: 'true' }],
    restaurantAttributes: [],
    id: '387923',
    name: 'Kouzina Kafe - The Food Court',
    uuid: '52508c7d-9e43-4281-a918-773dcad2a7f0',
    slug: 'kouzina-kafe-–-the-food-court-koramangala-koramangala',
    latLong: '12.935356,77.622779',
    city: 'Bangalore',
    area: 'Koramangala',
    areaPostalCode: '560034',
    areaSlug: 'koramangala',
    restaurantSlug: {
      restaurant: 'kouzina-kafe-–-the-food-court-koramangala-koramangala',
      city: 'bangalore'
    },
    type: 'F',
    locality: 'KHB Colony',
    avgRating: 0,
    totalRatings: 0,
    avgRatingString: '--',
    totalRatingsString: 'Too Few Ratings',
    cloudinaryImageId: 'oftrbygveajne9s5apko',
    costForTwo: 15000,
    costForTwoMsg: '₹150 for two',
    cuisines: ['Bakery', 'Desserts'],
    minimumOrder: 0,
    opened: 1,
    parentId: 249027,
    isNew: false,
    isVeg: false,
    favorite: false,
    multiOutlet: true,
    restaurantServiceLine: ['REGULAR'],
    sla: {
      slaString: '22 MINS',
      lastMileDistanceString: '0.2 kms',
      restaurantId: '387923',
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      lastMileTravel: 0.2,
      thirtyMinOrFree: false,
      serviceability: 'SERVICEABLE',
      stressFactor: 0.8650093078613281,
      rainMode: 'NONE',
      longDistance: 'NOT_LONG_DISTANCE',
      preferentialService: false,
      batchable: false,
      stress: {
        value: 0.3333333432674408,
        components: { de: 0.3333333432674408 }
      },
      surge: { applicable: false, components: [{ value: 0, type: 'STRESS' }] },
      zoneId: 1
    },
    availability: {
      nextCloseTime: '2023-02-01 05:00:00',
      nextChangeTime: 1675207800000,
      visibility: true,
      opened: true
    },
    badges: { imageBased: [], textBased: [], textExtendedBadges: [] },
    labels: [
      { title: 'Timings', message: 'null' },
      {
        title: 'Address',
        message:
          '#11, 3rd floor, 5th Cross Rd, KHB Colony, 6th Block, Koramangala, Bengaluru, Karnataka 560095'
      },
      { title: 'Cuisines', message: 'Bakery,Desserts' }
    ],
    thirdPartyAddress: false,
    menu: {
      items: {
        71295565: {
          id: 71295565,
          name: 'French Fries',
          category: 'Burger It Up',
          description:
            'Be it a side dish to a meal or just a snack, these crisp fried French Fries are so satisfying. (440 Calories)',
          cloudinaryImageId: 'sai3xmi2hkxrfafu47qm',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 15500,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44998426,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295567: {
          id: 71295567,
          name: 'Jalepeno Poppers',
          category: 'Burger It Up',
          description:
            'Lightly spiced, lightly coated and fried to perfection, these round pops will make everyone love the wholesome flavour of garlic! (470 Calories)',
          cloudinaryImageId: 'cxtdoxfosjlispanwtc7',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 20300,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44998481,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295568: {
          id: 71295568,
          name: 'Veg Fingers',
          category: 'Burger It Up',
          description:
            'Long pieces of crumb coated veg fingers that are a great accompaniment to a Kaati roll. (400 Calories)',
          cloudinaryImageId: 'snqyg0wy2qmzhgumzzmb',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 17900,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44998535,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295570: {
          id: 71295570,
          name: 'Chicken Fingers',
          category: 'Burger It Up',
          description:
            'A crunchy, mouth-watering appetizer of spicy, batter-fried chicken fingers. (340 Calories)',
          cloudinaryImageId: 'uhzabhyyxkulo5o1tzpp',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 28700,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44998568,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295573: {
          id: 71295573,
          name: 'Chicken Popcorn',
          category: 'Burger It Up',
          description:
            'Crispy, golden fried chicken bits perfect as anytime snacks. (470 Calories)',
          cloudinaryImageId: 'loj6weydu4kfssflbrcj',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 27500,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44998599,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295575: {
          id: 71295575,
          name: 'Cheesy Masala Bun Omelette',
          category: 'Burger It Up',
          description:
            'A warm toasted bun loaded with cheese, eggs & spices! Comfort food done right! (390 Calories)',
          cloudinaryImageId: 'wkrxycx5bopkae8npzg5',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 17900,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44998627,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295576: {
          id: 71295576,
          name: 'Batata Vada Roll',
          category: 'KaatiZone.',
          description:
            'The iconic Mumbai street food gets a healthy twist! This unique & delicious roll is packed with soft Batata Vada and fresh veggies. A hint of mint sauce & this roll will take you back in time. (325 Calories)',
          cloudinaryImageId: 'qgn7stvwdf9iikbzyxzm',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463632',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular Roll',
                    price: 155,
                    default: 1,
                    id: '42154331',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463632',
                    order: 100
                  },
                  {
                    name: 'Mini Roll Pack Of 2',
                    price: 199,
                    default: 0,
                    id: '42154335',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463632',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463632', variation_id: '42154331' }],
                price: 15500,
                addon_combinations: [
                  { group_id: '44997516', addon_id: '43414928' },
                  { group_id: '44997516', addon_id: '43414929' },
                  { group_id: '44997516', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463632', variation_id: '42154335' }],
                price: 19900,
                addon_combinations: [
                  { group_id: '44997516', addon_id: '43414928' },
                  { group_id: '44997516', addon_id: '43414929' },
                  { group_id: '44997516', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44997516,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 15500,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295578: {
          id: 71295578,
          name: 'Chilli Paneer Roll',
          category: 'KaatiZone.',
          description:
            'Just the right flavour of spicy chilli paneer A juicy Kaati roll with freshly chopped veggies & soft paneer tossed & cooked in the right spices.(300 Calories)',
          cloudinaryImageId: 'pndx5ht7aclo0ijwlnuy',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463633',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular Roll',
                    price: 203,
                    default: 1,
                    id: '42154417',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463633',
                    order: 100
                  },
                  {
                    name: 'Mini Roll Pack Of 2',
                    price: 249,
                    default: 0,
                    id: '42154418',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463633',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463633', variation_id: '42154417' }],
                price: 20300,
                addon_combinations: [
                  { group_id: '44997589', addon_id: '43414928' },
                  { group_id: '44997589', addon_id: '43414929' },
                  { group_id: '44997589', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463633', variation_id: '42154418' }],
                price: 24900,
                addon_combinations: [
                  { group_id: '44997589', addon_id: '43414928' },
                  { group_id: '44997589', addon_id: '43414929' },
                  { group_id: '44997589', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44997589,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 20300,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295580: {
          id: 71295580,
          name: 'Mixed Veg Roll',
          category: 'KaatiZone.',
          description:
            'A light roll high on the goodness of veggies. Assorted vegetables, sourced locally are spiced & rolled into the paratha along with our delicious mint sauce. This is health in a paratha! (275 Calories)',
          cloudinaryImageId: 'wq8lb5cereecmrz14ug2',
          recommended: 1,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463636',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular Roll',
                    price: 155,
                    default: 1,
                    id: '42154469',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463636',
                    order: 100
                  },
                  {
                    name: 'Mini Roll Pack Of 2',
                    price: 199,
                    default: 0,
                    id: '42154470',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463636',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463636', variation_id: '42154469' }],
                price: 15500,
                addon_combinations: [
                  { group_id: '44997673', addon_id: '43414928' },
                  { group_id: '44997673', addon_id: '43414929' },
                  { group_id: '44997673', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463636', variation_id: '42154470' }],
                price: 19900,
                addon_combinations: [
                  { group_id: '44997673', addon_id: '43414928' },
                  { group_id: '44997673', addon_id: '43414929' },
                  { group_id: '44997673', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44997673,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 15500,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295582: {
          id: 71295582,
          name: 'Paneer Tikka Roll',
          category: 'KaatiZone.',
          description:
            'Soft cubes of Paneer are marinated with aromatic spices and then grilled till crisp on the outside. This scrumptious snack is rolled with paneer tikka, fresh greens and our special mint sauce.(280 Calories)',
          cloudinaryImageId: 'nilnr78sfjudltnzcbwh',
          recommended: 1,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463638',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular Roll',
                    price: 239,
                    default: 1,
                    id: '42154529',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463638',
                    order: 100
                  },
                  {
                    name: 'Mini Roll Pack Of 2',
                    price: 251,
                    default: 0,
                    id: '42154531',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463638',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463638', variation_id: '42154529' }],
                price: 23900,
                addon_combinations: [
                  { group_id: '44997768', addon_id: '43414928' },
                  { group_id: '44997768', addon_id: '43414929' },
                  { group_id: '44997768', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463638', variation_id: '42154531' }],
                price: 25100,
                addon_combinations: [
                  { group_id: '44997768', addon_id: '43414928' },
                  { group_id: '44997768', addon_id: '43414929' },
                  { group_id: '44997768', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44997768,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 23900,
          ribbon: {
            text: 'Bestseller',
            textColor: '#ffffff',
            topBackgroundColor: '#d53d4c',
            bottomBackgroundColor: '#b02331'
          },
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: true,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295584: {
          id: 71295584,
          name: 'Veg Finger Roll',
          category: 'KaatiZone.',
          description:
            'A light roll high on the goodness of crunchy veggies. Assorted vegetables, sourced locally are spiced & rolled into the paratha along with our delicious mint sauce. This is health in a paratha! (325 Calories)',
          cloudinaryImageId: 'sjdw6p9lfjtfmy0jceod',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463640',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular Roll',
                    price: 155,
                    default: 1,
                    id: '42154613',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463640',
                    order: 100
                  },
                  {
                    name: 'Mini Roll Pack Of 2',
                    price: 199,
                    default: 0,
                    id: '42154614',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463640',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463640', variation_id: '42154613' }],
                price: 15500,
                addon_combinations: [
                  { group_id: '44997856', addon_id: '43414928' },
                  { group_id: '44997856', addon_id: '43414929' },
                  { group_id: '44997856', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463640', variation_id: '42154614' }],
                price: 19900,
                addon_combinations: [
                  { group_id: '44997856', addon_id: '43414928' },
                  { group_id: '44997856', addon_id: '43414929' },
                  { group_id: '44997856', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44997856,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 15500,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295587: {
          id: 71295587,
          name: 'Bhuna Chicken Roll',
          category: 'KaatiZone.',
          description:
            'Chicken tossed in a spicy mix & cooked in its own juices until it is perfectly dry yet full of flavour. This delicous chicken is tied together in a freshly rolled out paratha with our in house sauce. (290 Calories)',
          cloudinaryImageId: 'g8kryv1cegwu9tgsvdiv',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463644',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular Roll',
                    price: 215,
                    default: 1,
                    id: '42154717',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463644',
                    order: 100
                  },
                  {
                    name: 'Mini Roll Pack Of 2',
                    price: 262,
                    default: 0,
                    id: '42154719',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463644',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463644', variation_id: '42154717' }],
                price: 21500,
                addon_combinations: [
                  { group_id: '44997987', addon_id: '43414928' },
                  { group_id: '44997987', addon_id: '43414929' },
                  { group_id: '44997987', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463644', variation_id: '42154719' }],
                price: 26200,
                addon_combinations: [
                  { group_id: '44997987', addon_id: '43414928' },
                  { group_id: '44997987', addon_id: '43414929' },
                  { group_id: '44997987', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44997987,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 21500,
          ribbon: {
            text: 'Bestseller',
            textColor: '#ffffff',
            topBackgroundColor: '#d53d4c',
            bottomBackgroundColor: '#b02331'
          },
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: true,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295591: {
          id: 71295591,
          name: 'Chicken Shami Roll',
          category: 'KaatiZone.',
          description:
            'The amazing Shami Kebabs now inside a paratha. These soft kebabs are a blend of chicken mince & lentils cooked to perfection. The crisp soft kebabs are wrapped in a delicious paratha with mint sauce.(310 Calories)',
          cloudinaryImageId: 'inocs78owjbrtwztwlep',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463647',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular Roll',
                    price: 203,
                    default: 1,
                    id: '42154805',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463647',
                    order: 100
                  },
                  {
                    name: 'Mini Roll Pack Of 2',
                    price: 227,
                    default: 0,
                    id: '42154806',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463647',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463647', variation_id: '42154805' }],
                price: 20300,
                addon_combinations: [
                  { group_id: '44998089', addon_id: '43414928' },
                  { group_id: '44998089', addon_id: '43414929' },
                  { group_id: '44998089', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463647', variation_id: '42154806' }],
                price: 22700,
                addon_combinations: [
                  { group_id: '44998089', addon_id: '43414928' },
                  { group_id: '44998089', addon_id: '43414929' },
                  { group_id: '44998089', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44998089,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 20300,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295593: {
          id: 71295593,
          name: 'Chicken Tikka Roll',
          category: 'KaatiZone.',
          description:
            'A healthy paratha rolled with boneless chunks of chicken marinated with the spices & cooked till tender. Freshly chopped veggies & our secret sauce give this roll the added crunch & deliciousness. (305 Calories)',
          cloudinaryImageId: 'hmt17oclx62yyq3dgdsy',
          recommended: 1,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463649',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular Roll',
                    price: 227,
                    default: 1,
                    id: '42154887',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463649',
                    order: 100
                  },
                  {
                    name: 'Mini Roll Pack Of 2',
                    price: 263,
                    default: 0,
                    id: '42154889',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463649',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463649', variation_id: '42154887' }],
                price: 22700,
                addon_combinations: [
                  { group_id: '44998182', addon_id: '43414928' },
                  { group_id: '44998182', addon_id: '43414929' },
                  { group_id: '44998182', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463649', variation_id: '42154889' }],
                price: 26300,
                addon_combinations: [
                  { group_id: '44998182', addon_id: '43414928' },
                  { group_id: '44998182', addon_id: '43414929' },
                  { group_id: '44998182', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44998182,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 22700,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295596: {
          id: 71295596,
          name: 'Egg & Cheese Roll',
          category: 'KaatiZone.',
          description:
            'When soulmates Egg & Cheese come together inside a roll, its a match made in heaven. Combined with freshly chopped greens and a delicious sauce, this classic Kaati roll is perfect for a dinner. (335 Calories)',
          cloudinaryImageId: 'zlx9jx04e0yh9ftgknfs',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463652',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular Roll',
                    price: 179,
                    default: 1,
                    id: '42154947',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463652',
                    order: 100
                  },
                  {
                    name: 'Mini Roll Pack Of 2',
                    price: 215,
                    default: 0,
                    id: '42154948',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463652',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463652', variation_id: '42154947' }],
                price: 17900,
                addon_combinations: [
                  { group_id: '44998266', addon_id: '43414928' },
                  { group_id: '44998266', addon_id: '43414929' },
                  { group_id: '44998266', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463652', variation_id: '42154948' }],
                price: 21500,
                addon_combinations: [
                  { group_id: '44998266', addon_id: '43414928' },
                  { group_id: '44998266', addon_id: '43414929' },
                  { group_id: '44998266', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44998266,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 17900,
          ribbon: {
            text: 'Bestseller',
            textColor: '#ffffff',
            topBackgroundColor: '#d53d4c',
            bottomBackgroundColor: '#b02331'
          },
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: true,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295598: {
          id: 71295598,
          name: 'Schezwan Chicken Roll',
          category: 'KaatiZone.',
          description:
            'The hot taste of Schezwan & the earthy flavour of a cold brew is a match made in heaven. Kaati roll that has tender Schezwan chicken with slices of fresh onion and capsicum inside a healthy paratha. (285 Calories)',
          cloudinaryImageId: 'xtf9ygcjso5tqqv51chj',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463654',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular Roll',
                    price: 215,
                    default: 1,
                    id: '42155033',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463654',
                    order: 100
                  },
                  {
                    name: 'Mini Roll Pack Of 2',
                    price: 249,
                    default: 0,
                    id: '42155034',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463654',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463654', variation_id: '42155033' }],
                price: 21500,
                addon_combinations: [
                  { group_id: '44998353', addon_id: '43414928' },
                  { group_id: '44998353', addon_id: '43414929' },
                  { group_id: '44998353', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463654', variation_id: '42155034' }],
                price: 24900,
                addon_combinations: [
                  { group_id: '44998353', addon_id: '43414928' },
                  { group_id: '44998353', addon_id: '43414929' },
                  { group_id: '44998353', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44998353,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 21500,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295600: {
          id: 71295600,
          name: 'Classic Veg Burger',
          category: 'Indiana Burgers',
          description:
            'A delicious veg patty seared on the outside but juicy on the inside dressed with a silky smooth mayo, fresh veggies and wrapped with a soft bun. Ideal for a noon lunch or party dinner. (550 Calories)',
          cloudinaryImageId: 'k2apmtxdarej6ju4ssu7',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463656',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular',
                    price: 155,
                    default: 1,
                    id: '42153817',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463656',
                    order: 100
                  },
                  {
                    name: 'Jumbo',
                    price: 199,
                    default: 0,
                    id: '42153818',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463656',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463656', variation_id: '42153817' }],
                price: 15500,
                addon_combinations: [
                  { group_id: '44996627', addon_id: '43414928' },
                  { group_id: '44996627', addon_id: '43414929' },
                  { group_id: '44996627', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463656', variation_id: '42153818' }],
                price: 19900,
                addon_combinations: [
                  { group_id: '44996627', addon_id: '43414928' },
                  { group_id: '44996627', addon_id: '43414929' },
                  { group_id: '44996627', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44996627,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 15500,
          ribbon: {
            text: 'Bestseller',
            textColor: '#ffffff',
            topBackgroundColor: '#d53d4c',
            bottomBackgroundColor: '#b02331'
          },
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: true,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295603: {
          id: 71295603,
          name: 'Paneer Burger',
          category: 'Indiana Burgers',
          description:
            'Soft yet perferctly fried Paneer patties are paired with fresh cucumber, tomato and onion and topped with a delicious mayo inside a warm bun.  Every bite has a balanced all-in-one flavour. (780 Calories)',
          cloudinaryImageId: 'gyiuf0vilqvtuhvz77vb',
          recommended: 1,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463658',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular',
                    price: 263,
                    default: 1,
                    id: '42153833',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463658',
                    order: 100
                  },
                  {
                    name: 'Jumbo',
                    price: 359,
                    default: 0,
                    id: '42153834',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463658',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463658', variation_id: '42153833' }],
                price: 26300,
                addon_combinations: [
                  { group_id: '44996648', addon_id: '43414928' },
                  { group_id: '44996648', addon_id: '43414929' },
                  { group_id: '44996648', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463658', variation_id: '42153834' }],
                price: 35900,
                addon_combinations: [
                  { group_id: '44996648', addon_id: '43414928' },
                  { group_id: '44996648', addon_id: '43414929' },
                  { group_id: '44996648', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44996648,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 26300,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295610: {
          id: 71295610,
          name: 'Egg & Cheese Burger',
          category: 'Indiana Burgers',
          description:
            'The combination of egg and cheese inside a warm bun with slices of juicy tomato, fresh cucumber, green lettuce and onion makes this a light guilt-free burger, just right for a midday snack! (605 Calories)',
          cloudinaryImageId: 'uxml6f5uvrbt9b1ioynn',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463659',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular',
                    price: 199,
                    default: 1,
                    id: '42153841',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463659',
                    order: 100
                  },
                  {
                    name: 'Jumbo',
                    price: 279,
                    default: 0,
                    id: '42153842',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463659',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463659', variation_id: '42153841' }],
                price: 19900,
                addon_combinations: [
                  { group_id: '44996673', addon_id: '43414928' },
                  { group_id: '44996673', addon_id: '43414929' },
                  { group_id: '44996673', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463659', variation_id: '42153842' }],
                price: 27900,
                addon_combinations: [
                  { group_id: '44996673', addon_id: '43414928' },
                  { group_id: '44996673', addon_id: '43414929' },
                  { group_id: '44996673', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44996673,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 19900,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295611: {
          id: 71295611,
          name: 'Classic Chicken Burger',
          category: 'Indiana Burgers',
          description:
            'A mouthwatering juicy chicken patty stacked with fresh tomato, cucumber, onion and lettuce. All tied together with our delicious signature mayonnaise. A classic always remains a classic! (520 Calories)',
          cloudinaryImageId: 'n9a9wdu6ni0npdd2bm6u',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463660',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular',
                    price: 199,
                    default: 1,
                    id: '42153855',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463660',
                    order: 100
                  },
                  {
                    name: 'Jumbo',
                    price: 289,
                    default: 0,
                    id: '42153856',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463660',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463660', variation_id: '42153855' }],
                price: 19900,
                addon_combinations: [
                  { group_id: '44996696', addon_id: '43414928' },
                  { group_id: '44996696', addon_id: '43414929' },
                  { group_id: '44996696', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463660', variation_id: '42153856' }],
                price: 28900,
                addon_combinations: [
                  { group_id: '44996696', addon_id: '43414928' },
                  { group_id: '44996696', addon_id: '43414929' },
                  { group_id: '44996696', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44996696,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 19900,
          ribbon: {
            text: 'Bestseller',
            textColor: '#ffffff',
            topBackgroundColor: '#d53d4c',
            bottomBackgroundColor: '#b02331'
          },
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: true,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295613: {
          id: 71295613,
          name: 'Los Pos Hermanos Chicken Burger',
          category: 'Indiana Burgers',
          description:
            'A chicken burger with a flavoursome twist! A scrumptious chicken patty served in a soft bun along with fresh vegetables and our in-house smokey spicy chipotle mayo. A hearty meal to end the day! (650 Calories)',
          cloudinaryImageId: 'rtrc8wcepbfj9obbrger',
          recommended: 1,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463661',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular',
                    price: 219,
                    default: 1,
                    id: '42153871',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463661',
                    order: 100
                  },
                  {
                    name: 'Jumbo',
                    price: 319,
                    default: 0,
                    id: '42153872',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463661',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463661', variation_id: '42153871' }],
                price: 21900,
                addon_combinations: [
                  { group_id: '44996726', addon_id: '43414928' },
                  { group_id: '44996726', addon_id: '43414929' },
                  { group_id: '44996726', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463661', variation_id: '42153872' }],
                price: 31900,
                addon_combinations: [
                  { group_id: '44996726', addon_id: '43414928' },
                  { group_id: '44996726', addon_id: '43414929' },
                  { group_id: '44996726', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44996726,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 21900,
          ribbon: {
            text: 'Bestseller',
            textColor: '#ffffff',
            topBackgroundColor: '#d53d4c',
            bottomBackgroundColor: '#b02331'
          },
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: true,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295615: {
          id: 71295615,
          name: 'Unforgiving Mutton Burger',
          category: 'Indiana Burgers',
          description:
            'A supremely delicious lamb patty is stacked with tomato, cucumber, lettuce, onion and a knockout schezwan mayo to give it that extra kick. One bite of this juicy burger will have you asking for more! (700 Calories)',
          cloudinaryImageId: 'oeggwpivutcbwice8img',
          recommended: 1,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463662',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular',
                    price: 239,
                    default: 1,
                    id: '42153885',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463662',
                    order: 100
                  },
                  {
                    name: 'Jumbo',
                    price: 329,
                    default: 0,
                    id: '42153886',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463662',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463662', variation_id: '42153885' }],
                price: 23900,
                addon_combinations: [
                  { group_id: '44996749', addon_id: '43414928' },
                  { group_id: '44996749', addon_id: '43414929' },
                  { group_id: '44996749', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463662', variation_id: '42153886' }],
                price: 32900,
                addon_combinations: [
                  { group_id: '44996749', addon_id: '43414928' },
                  { group_id: '44996749', addon_id: '43414929' },
                  { group_id: '44996749', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44996749,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 23900,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295618: {
          id: 71295618,
          name: 'Bannur  Lamb Burger',
          category: 'Indiana Burgers',
          description:
            'Succulent juicy lamb patty seared to perfection & fresh veggies packed inside a soft warm bun topped with our signature mayonnaise make this flavoursome burger a must-have for any meal. (415 Calories)',
          cloudinaryImageId: 'm2wnmuflujdyc7z4uwz7',
          recommended: 1,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463663',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Regular',
                    price: 299,
                    default: 1,
                    id: '42153896',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463663',
                    order: 100
                  },
                  {
                    name: 'Jumbo',
                    price: 399,
                    default: 0,
                    id: '42153897',
                    inStock: 1,
                    isVeg: 0,
                    variant_group_id: '10463663',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463663', variation_id: '42153896' }],
                price: 29900,
                addon_combinations: [
                  { group_id: '44996772', addon_id: '43414928' },
                  { group_id: '44996772', addon_id: '43414929' },
                  { group_id: '44996772', addon_id: '43414930' }
                ]
              },
              {
                variations: [{ group_id: '10463663', variation_id: '42153897' }],
                price: 39900,
                addon_combinations: [
                  { group_id: '44996772', addon_id: '43414928' },
                  { group_id: '44996772', addon_id: '43414929' },
                  { group_id: '44996772', addon_id: '43414930' }
                ]
              }
            ]
          },
          addons: [
            {
              group_id: 44996772,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 29900,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295620: {
          id: 71295620,
          name: 'Choco Lava Cake',
          category: 'The Dessert Zone',
          description:
            'A decadent chocolate cake with molten chocolate sauce in the centre. (420 Calories)',
          cloudinaryImageId: 'sxzqmilikwfbixpoiaas',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 11900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          ribbon: {
            text: 'Bestseller',
            textColor: '#ffffff',
            topBackgroundColor: '#d53d4c',
            bottomBackgroundColor: '#b02331'
          },
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: true,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295621: {
          id: 71295621,
          name: 'Walnut Brownie',
          category: 'The Dessert Zone',
          description:
            'This delicious square will surely drive you nuts. Shiny on the outside, chewy on the inside & garnished with walnuts . The best accompaniment to your evening latte with friends. (560 Calories)',
          cloudinaryImageId: 'n2ojfmnaaj3j5zg7y5m3',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 12600,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295625: {
          id: 71295625,
          name: 'Brownie Fudge Sundae',
          category: 'Sundae Everyday',
          description:
            'Fudgy brownie baked to perfection is topped with creamy vanilla ice cream along with a magical Chocolate Sauce & topped with nuts. Perfect pair of warm brownie & cold ice cream.(920 Calories)',
          cloudinaryImageId: 'ihdgs5l6czbw1hzd4dj7',
          recommended: 1,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 28700,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295628: {
          id: 71295628,
          name: 'Chocolate Titanic Sundae',
          category: 'Sundae Everyday',
          description:
            'Chocolate Ice Cream & Chocolate Truffle cake that is served warm with a fluffy Chocolate mousse, a generous drizzle of rich chocolate sauce & a topping of crunchy nuts & Cherries. (437 Calories)',
          cloudinaryImageId: 'f8ea9ca69fa1dcdf56b221b432c519a2',
          recommended: 1,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 22700,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295630: {
          id: 71295630,
          name: 'Classic Black Forest Pastry',
          category: 'The Dessert Zone',
          description:
            "Craving for a Black Forest Cake after a meal, but don't want to load up? This single portion will fit the bill! This classic two layered chocolate cake with whipped cream is yummy from the word go. (220 Calories)",
          cloudinaryImageId: 'rsfrkm7u7yo1lurynfwx',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 10700,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295633: {
          id: 71295633,
          name: 'Regal Red Velvet Pastry',
          category: 'The Dessert Zone',
          description:
            'Red is associated with all things warm and loved. Our delicious Red Velvet Pastry is lightly coated with fresh cream and generously sprinkled with Red Velvet Crumbs making it a perfect dessert. (300 Calories )',
          cloudinaryImageId: 'dess0zvseriepaajpbc6',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 11900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295634: {
          id: 71295634,
          name: 'Rich Chocolate Truffle Pastry',
          category: 'The Dessert Zone',
          description:
            'Two layered chocolate truffle, to satiate your chocolate cravings. (190 Calories )',
          cloudinaryImageId: 'cu2rga15hjf7f9525q88',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 11900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          ribbon: {
            text: 'Bestseller',
            textColor: '#ffffff',
            topBackgroundColor: '#d53d4c',
            bottomBackgroundColor: '#b02331'
          },
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: true,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295636: {
          id: 71295636,
          name: 'Butterscotch Pastry',
          category: 'The Dessert Zone',
          description:
            'A vintage dessert in all its shining glory. This luxurious pastry is so delicious with Vanilla sponge topped with sweet butterscotch Beans. This beautiful and light pastry can perk up any dull moment. (210 Calories )',
          cloudinaryImageId: 'sqrgeg72c3a2tq4dbtpv',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 10700,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295637: {
          id: 71295637,
          name: 'Black Forest Jar Cake',
          category: 'The Dessert Zone',
          description:
            'A classic chocolate sponge cake, freshly whipped cream topped with cherries and chocolate shavings giving the jar its rightful glory. (445 Calories )',
          cloudinaryImageId: 'zwsyg0wlakiv0eopjowh',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463670',
                name: 'Quantity',
                variations: [
                  {
                    name: '200 ml',
                    price: 215,
                    default: 1,
                    id: '42154251',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463670',
                    order: 100
                  },
                  {
                    name: '375 ml',
                    price: 263,
                    default: 0,
                    id: '42154253',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463670',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463670', variation_id: '42154251' }],
                price: 21500,
                addon_combinations: []
              },
              {
                variations: [{ group_id: '10463670', variation_id: '42154253' }],
                price: 26300,
                addon_combinations: []
              }
            ]
          },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 21500,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295645: {
          id: 71295645,
          name: 'Blueberry Jar Cake',
          category: 'The Dessert Zone',
          description:
            'A fruity combination of light cake & whipped cream finished off with a delicious Blueberry topping. This super moist jar cake bursts with the distinct Blueberry flavour. (420 Calories )',
          cloudinaryImageId: 'j4pzckib3pl10oidpch5',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463678',
                name: 'Quantity',
                variations: [
                  {
                    name: '200 ml',
                    price: 215,
                    default: 1,
                    id: '42154265',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463678',
                    order: 100
                  },
                  {
                    name: '375 ml',
                    price: 263,
                    default: 0,
                    id: '42154271',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463678',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463678', variation_id: '42154265' }],
                price: 21500,
                addon_combinations: []
              },
              {
                variations: [{ group_id: '10463678', variation_id: '42154271' }],
                price: 26300,
                addon_combinations: []
              }
            ]
          },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 21500,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295648: {
          id: 71295648,
          name: 'Ferrero Rocher Jar Cake',
          category: 'The Dessert Zone',
          description:
            'The velvety texture of the chocolate cake & the crunch of the delicious Ferrero Rocher chocolate makes this such an enticing dessert. The taste & size of this dessert makes it an absolute winner! (495 Calories )',
          cloudinaryImageId: 'lqd8pl40rtoep7c3x4sr',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463680',
                name: 'Quantity',
                variations: [
                  {
                    name: '200 ml',
                    price: 215,
                    default: 1,
                    id: '42154281',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463680',
                    order: 100
                  },
                  {
                    name: '375 ml',
                    price: 263,
                    default: 0,
                    id: '42154284',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463680',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463680', variation_id: '42154281' }],
                price: 21500,
                addon_combinations: []
              },
              {
                variations: [{ group_id: '10463680', variation_id: '42154284' }],
                price: 26300,
                addon_combinations: []
              }
            ]
          },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 21500,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295650: {
          id: 71295650,
          name: 'Strawberry Jar Cake',
          category: 'The Dessert Zone',
          description:
            'If you love strawberries, this is your perfect dessert. Light & fluffy sponge is layered with whipped cream & topped with strawberry Crush. (445 Calories )',
          cloudinaryImageId: 'k1gjn4dmzl33mp30f168',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463683',
                name: 'Quantity',
                variations: [
                  {
                    name: '200 ml',
                    price: 215,
                    default: 1,
                    id: '42154310',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463683',
                    order: 100
                  },
                  {
                    name: '375 ml',
                    price: 263,
                    default: 0,
                    id: '42154315',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463683',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463683', variation_id: '42154310' }],
                price: 21500,
                addon_combinations: []
              },
              {
                variations: [{ group_id: '10463683', variation_id: '42154315' }],
                price: 26300,
                addon_combinations: []
              }
            ]
          },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 21500,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        71295652: {
          id: 71295652,
          name: 'Chocolate Chip Jar Cake',
          category: 'The Dessert Zone',
          description:
            'Who can resist the combination of a moist chocolate cake & crunchy choco chips? Putting these two irresistible delights together in a jar makes a chocolate-lovers dessert complete! (675 Calories )',
          cloudinaryImageId: 'lv7sgp5l02obdm8hueso',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '10463685',
                name: 'Quantity',
                variations: [
                  {
                    name: '200 ml',
                    price: 215,
                    default: 1,
                    id: '42154325',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463685',
                    order: 100
                  },
                  {
                    name: '375 ml',
                    price: 263,
                    default: 0,
                    id: '42154326',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '10463685',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '10463685', variation_id: '42154325' }],
                price: 21500,
                addon_combinations: []
              },
              {
                variations: [{ group_id: '10463685', variation_id: '42154326' }],
                price: 26300,
                addon_combinations: []
              }
            ]
          },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 21500,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        75072855: {
          id: 75072855,
          name: 'Mixed Veg Steamed Momo',
          category: 'MomoZone',
          description:
            'A healthy steamed snack of mixed veggies inside a light wrapping served with spicy schezwan sauce. Bursting with flavour in every bite. (210 Calories)',
          cloudinaryImageId: 'v1ds8fcxsbckwcxkdpyb',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 18900,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44996363,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          ribbon: {
            text: 'Bestseller',
            textColor: '#ffffff',
            topBackgroundColor: '#d53d4c',
            bottomBackgroundColor: '#b02331'
          },
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: true,
          itemNudgeType: '',
          isGuiltFree: false
        },
        75072856: {
          id: 75072856,
          name: 'Corn & Cheese Steamed Momo',
          category: 'MomoZone',
          description:
            'Delightful parcels of happiness packed with cheese, crunchy corn and steamed to perfection. Enjoy as an anytime snack or side eat with schezwan sauce. (220 Calories)',
          cloudinaryImageId: 'wvjwwra2i20jrwtndbfr',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 21500,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44996393,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        75072859: {
          id: 75072859,
          name: 'Chicken Steamed Momo',
          category: 'MomoZone',
          description:
            'Most popular street food of flavoursome chicken cooked in the best spices and stuffed in a light wrapping. Steamed and served hot with spicy schezwan sauce to spice things up. (260 Calories)',
          cloudinaryImageId: 'ksndznp2aykvhn7ncdr3',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 21500,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44996413,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        75072861: {
          id: 75072861,
          name: 'Paneer Fried Momo',
          category: 'MomoZone',
          description:
            'Momos stuffed with a delicious filling of minced paneer with fresh vegetables and fried. Enjoy these momos with a generous dip of schezwan sauce. (410 Calories)',
          cloudinaryImageId: 'fsajj8sjhg5mru4ayca1',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 24900,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44996437,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        75072862: {
          id: 75072862,
          name: 'Veg Schezwan Fried Momo',
          category: 'MomoZone',
          description:
            'Spicy momos filled with a twist of fresh vegetables tossed in schezwan spices and fried. Served hot with schezwan sauce. (380 Calories)',
          cloudinaryImageId: 'v3gtkbhda6fbmr3s9h3y',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 24900,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44996464,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        75072863: {
          id: 75072863,
          name: 'Chicken Peri Peri Fried Momo',
          category: 'MomoZone',
          description:
            'Spicy succulent fried chicken momos perfectly seasoned with peri peri flavour. Add to the zing by serving these at your party with our signature schezwan sauce. (410 Calories)',
          cloudinaryImageId: 'n8h4bhehjjsupay7q2u1',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 24900,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44996498,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          ribbon: {
            text: 'Bestseller',
            textColor: '#ffffff',
            topBackgroundColor: '#d53d4c',
            bottomBackgroundColor: '#b02331'
          },
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: true,
          itemNudgeType: '',
          isGuiltFree: false
        },
        75072868: {
          id: 75072868,
          name: 'Veg Schezwan Pan Tossed Momo',
          category: 'MomoZone',
          description:
            'Spicy momos filled with a twist of fresh vegetables tossed in authentic spices and fried. Served hot with schezwan sauce topping. (410 Calories)',
          cloudinaryImageId: 'hzrvwhjicxavtzvlfn0f',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 26300,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44996529,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        75072872: {
          id: 75072872,
          name: 'Chicken Pan Tossed Momo',
          category: 'MomoZone',
          description:
            'Most popular street food of flavoursome chicken cooked in the best spices and stuffed in a light Momo wrapping. Fried and served hot with a spicy schezwan sauce drizzle to spice things up. (460 Calories)',
          cloudinaryImageId: 'znrvmjavuvjr1q6izkou',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 26300,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44996557,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        75072874: {
          id: 75072874,
          name: 'Chicken Cheese Pan Tossed Momo',
          category: 'MomoZone',
          description:
            'These piping hot fried momos are filled with delicious chicken & gooey cheese and topped generously with schezwan sauce. Great party snack for the weekend. (460 Calories)',
          cloudinaryImageId: 'znrvmjavuvjr1q6izkou',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 27500,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44996587,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        75072877: {
          id: 75072877,
          name: 'Chocolate Momo',
          category: 'MomoZone',
          description:
            'Best of both momo & chocolate, these delightful bite-sized desserts are filled with delicious dark chocolate and topped with melted chocolate & icing sugar dusting. (510 Calories)',
          cloudinaryImageId: 'eunjtzqbbtkrug9dzw3w',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 27500,
          variants_new: { exclude_list: [], variant_groups: [] },
          addons: [
            {
              group_id: 44996609,
              group_name: 'Desserts',
              choices: [
                {
                  id: 43414928,
                  name: 'Icy Lava',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 96,
                  default: 0
                },
                {
                  id: 43414929,
                  name: 'Velvety Treat',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 95,
                  default: 0
                },
                {
                  id: 43414930,
                  name: 'Brownie Delight',
                  price: 13900,
                  inStock: 1,
                  isVeg: 1,
                  order: 94,
                  default: 0
                }
              ],
              maxAddons: 3,
              maxFreeAddons: -1,
              minAddons: 0,
              order: 96
            }
          ],
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        75906451: {
          id: 75906451,
          name: 'Tres Leches',
          category: 'The Dessert Zone',
          description:
            'A decadent dessert that is best had chilled. This rich & super moist milk cake is baked and soaked with three types of milk and topped with whipped cream and nuts. (480 Calories)',
          cloudinaryImageId: 'aji6x3vyo25z56wyonqp',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 33500,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        81664042: {
          id: 81664042,
          name: 'Vanilla Cupcakes',
          category: 'Cupcake Bliss',
          description:
            "Good ole' vanilla cupcakes topped with silky smooth whipped cream and a pop of colour! The ultimate in comfort dessert. (Serving 2 , 160 Calories each)",
          cloudinaryImageId: 'cb9d948518d152608d98c0f1bfa569fa',
          recommended: 1,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '16686235',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Pack Of 2',
                    price: 143,
                    default: 1,
                    id: '55649535',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686235',
                    order: 100
                  },
                  {
                    name: 'Pack Of 6',
                    price: 371,
                    default: 0,
                    id: '55649536',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686235',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '16686235', variation_id: '55649535' }],
                price: 14300,
                addon_combinations: []
              },
              {
                variations: [{ group_id: '16686235', variation_id: '55649536' }],
                price: 37100,
                addon_combinations: []
              }
            ]
          },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 14300,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        81664043: {
          id: 81664043,
          name: 'Chocolate Cupcakes',
          category: 'Cupcake Bliss',
          description:
            'When you cannot stop at one chocolate cupcake, you pick a pack of two or six! Moist chocolate cupcakes topped with a extra chocolatey chocolate ganache. So tempting! (Serving 2 , 200 Calories each)',
          cloudinaryImageId: 'd14c0ed12b9b99b3229ecae7d2e0f883',
          recommended: 1,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '16686236',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Pack Of 2',
                    price: 143,
                    default: 1,
                    id: '55649537',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686236',
                    order: 100
                  },
                  {
                    name: 'Pack Of 6',
                    price: 371,
                    default: 0,
                    id: '55649538',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686236',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '16686236', variation_id: '55649537' }],
                price: 14300,
                addon_combinations: []
              },
              {
                variations: [{ group_id: '16686236', variation_id: '55649538' }],
                price: 37100,
                addon_combinations: []
              }
            ]
          },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 14300,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        81664044: {
          id: 81664044,
          name: 'Red Velvet Cupcakes',
          category: 'Cupcake Bliss',
          description:
            'These bright red velvet cupcakes topped with an airy whipped cream and red velvet sprinkles are just as delicious as they look. An absolute winner after every meal. (Serving 2 , 45 Calories each)',
          cloudinaryImageId: 'n5k5ksf6ojw0m9wuf8dc',
          recommended: 1,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '16686237',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Pack Of 2',
                    price: 203,
                    default: 1,
                    id: '55649539',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686237',
                    order: 100
                  },
                  {
                    name: 'Pack Of 6',
                    price: 431,
                    default: 0,
                    id: '55649540',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686237',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '16686237', variation_id: '55649539' }],
                price: 20300,
                addon_combinations: []
              },
              {
                variations: [{ group_id: '16686237', variation_id: '55649540' }],
                price: 43100,
                addon_combinations: []
              }
            ]
          },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 20300,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        81664045: {
          id: 81664045,
          name: 'Oreo Cupcakes',
          category: 'Cupcake Bliss',
          description:
            'A perfectly baked chocolate cupcake topped with a generous scoop of chocolate mousse and an Oreo cookie. An ideal treat for Oreo fans! (Serving 2 , 200 Calories each)',
          cloudinaryImageId: 'b88ptmjzquvbvm6pc6wb',
          recommended: 1,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '16686238',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Pack Of 2',
                    price: 203,
                    default: 1,
                    id: '55649541',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686238',
                    order: 100
                  },
                  {
                    name: 'Pack Of 6',
                    price: 431,
                    default: 0,
                    id: '55649542',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686238',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '16686238', variation_id: '55649541' }],
                price: 20300,
                addon_combinations: []
              },
              {
                variations: [{ group_id: '16686238', variation_id: '55649542' }],
                price: 43100,
                addon_combinations: []
              }
            ]
          },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 20300,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        81664046: {
          id: 81664046,
          name: 'Ferrero Rocher Cupcakes',
          category: 'Cupcake Bliss',
          description:
            'A union of two delicious desserts - chocolate cupcake and Ferrero Rocher chocolate. Rich chocolate cupcake is topped with a smooth chocolate mousse cream and Ferrero Rocher chocolate. (2 Servings, 300 Calories each)',
          cloudinaryImageId: 'hljbk1yrmgjgis1figsm',
          recommended: 1,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '16686239',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Pack Of 2',
                    price: 203,
                    default: 1,
                    id: '55649543',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686239',
                    order: 100
                  },
                  {
                    name: 'Pack Of 6',
                    price: 431,
                    default: 0,
                    id: '55649544',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686239',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '16686239', variation_id: '55649543' }],
                price: 20300,
                addon_combinations: []
              },
              {
                variations: [{ group_id: '16686239', variation_id: '55649544' }],
                price: 43100,
                addon_combinations: []
              }
            ]
          },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 20300,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        81664047: {
          id: 81664047,
          name: 'Kitkat Cupcakes',
          category: 'Cupcake Bliss',
          description:
            'Irresistible chocolate cupcake pairs perfectly with soft swirls of chocolate mousse and bars of KitKat. Every break deserves this delightful dessert! (Serving 2 , 200 Calories each)',
          cloudinaryImageId: 'x061lgzn3sxjqdgsptcn',
          recommended: 1,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 0,
          variantsV2: {
            variant_groups: [
              {
                group_id: '16686240',
                name: 'Quantity',
                variations: [
                  {
                    name: 'Pack Of 2',
                    price: 203,
                    default: 1,
                    id: '55649545',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686240',
                    order: 100
                  },
                  {
                    name: 'Pack Of 6',
                    price: 431,
                    default: 0,
                    id: '55649546',
                    inStock: 1,
                    isVeg: 1,
                    variant_group_id: '16686240',
                    order: 99
                  }
                ]
              }
            ],
            pricing_models: [
              {
                variations: [{ group_id: '16686240', variation_id: '55649545' }],
                price: 20300,
                addon_combinations: []
              },
              {
                variations: [{ group_id: '16686240', variation_id: '55649546' }],
                price: 43100,
                addon_combinations: []
              }
            ]
          },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          defaultPrice: 20300,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        92754575: {
          id: 92754575,
          name: 'Pepsi',
          category: 'Slurpy Shakes',
          description: '(220 Calories each)',
          cloudinaryImageId: '9eca3f0b189f0ebabdf0aa18dc7dd67a',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 6000,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: 'Serves 1',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        93921535: {
          id: 93921535,
          name: 'Fries + Pepsi',
          category: 'Burger It Up',
          description:
            'A portion of crispy fries with a chilled Pepsi(500ml) makes a perfect match with any roll or a burger.',
          cloudinaryImageId: 'ojfpionjhwdpo9zfpisg',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 20300,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: 'Serves 1',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297656: {
          id: 106297656,
          name: 'White Forest Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            'White coloured cake loaded with white chocolate on a vanilla sponge and cherries for decoration. This is a delight for anyone who loves white chocolate.',
          cloudinaryImageId: 'e58d8ca706c1ec1cf32a5975e74fa6b5',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 65900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297663: {
          id: 106297663,
          name: 'White Forest Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            'White coloured cake loaded with white chocolate on a vanilla sponge and cherries for decoration. This is a delight for anyone who loves white chocolate.',
          cloudinaryImageId: 'e58d8ca706c1ec1cf32a5975e74fa6b5',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 62300,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297669: {
          id: 106297669,
          name: 'Vanilla Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            'Light, fluffy and pretty! Just the way loved one would want it on their Special Day! Just gift your loved one this special vanilla cake layered with soft vanilla sponge & silky vanilla whipped cream.',
          cloudinaryImageId: 'd0a547f2f700fbb3276b4600ea1bf51e',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 52700,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297676: {
          id: 106297676,
          name: 'Vanilla Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            'Light, fluffy and pretty! Just the way loved one would want it on their Special Day! Just gift your loved one this special vanilla cake layered with soft vanilla sponge & silky vanilla whipped cream.',
          cloudinaryImageId: 'd0a547f2f700fbb3276b4600ea1bf51e',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 49100,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297681: {
          id: 106297681,
          name: 'Black Forest Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            'An all-time favourite cake that tastes just as good as it looks. An appealing combination of chocolate cake and freshly whipped cream. Red cherries top up the its flavour & colour. ( 6  Serving, 270 Calories each )',
          cloudinaryImageId: 'bad818fc21311fce7dba595e1764bb5b',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 69900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297688: {
          id: 106297688,
          name: 'Black Forest Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            'An all-time favourite cake that tastes just as good as it looks. An appealing combination of chocolate cake and freshly whipped cream. Red cherries top up the its flavour & colour. ( 6  Serving, 270 Calories each )',
          cloudinaryImageId: 'bad818fc21311fce7dba595e1764bb5b',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 66900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297736: {
          id: 106297736,
          name: 'Pineapple Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            "Fresh & fruity. What's not to love? Delicious vanilla sponge with pineapple in between & glistening pineapple crush dripping down the sides of the pristine white whipped cream makes it extraordinary.",
          cloudinaryImageId: '21d4c582227d95fbbc309f77231da245',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 65900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297761: {
          id: 106297761,
          name: 'Chocolate Truffle Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            'A luxurious and moist chocolate cake sponge that is smothered with dark heavenly Chocolate Ganache. A small bite of this heavenly combination is going to make it your all time favourite cake!',
          cloudinaryImageId: '503d098b84b57b2583348ebe8968b3b0',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 62900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297786: {
          id: 106297786,
          name: 'Oreo Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            'Heavenly Chocolate Ganache on top of rich and moist chocolate sponge with oreo cookies is a combination made in heaven. This special cake will surely make your birthday celebrations extra special. (6 Servings, 350 Calories each)',
          cloudinaryImageId: '9aa362743a6bcede64c44e18ea450807',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 62900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297797: {
          id: 106297797,
          name: 'Pineapple Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            "Fresh & fruity. What's not to love? Delicious vanilla sponge with pineapple in between & glistening pineapple crush dripping down the sides of the pristine white whipped cream makes it extraordinary.",
          cloudinaryImageId: '21d4c582227d95fbbc309f77231da245',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 62300,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297798: {
          id: 106297798,
          name: 'Chocolate Truffle Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            'A luxurious and moist chocolate cake sponge that is smothered with dark heavenly Chocolate Ganache. A small bite of this heavenly combination is going to make it your all time favourite cake!',
          cloudinaryImageId: '503d098b84b57b2583348ebe8968b3b0',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 65900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297801: {
          id: 106297801,
          name: 'Ferrero Rocher Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            'Our melt-in-your-mouth chocolate cake sponge is smothered & covered in chocolate mousse with crispy bits of Ferrero Rocher. An epitome of fine balance between taste & texture! ( 6  Serving, 310 Calories each )',
          cloudinaryImageId: '9516eea99c68c5d4c94c5f3b38c5d6d1',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 80900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297812: {
          id: 106297812,
          name: 'Red Velvet Heart Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            'Red Velvet Sponge with fresh whipped cream is given a heart shape and sprinkled with red velvet crumbs completely on the cake to give a romantic touch, to make you event even more romantic.(Serving 6 , 310 Calories each)',
          cloudinaryImageId: 'dc179ad2305705235bd8c7d18a538655',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 63900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297816: {
          id: 106297816,
          name: 'Oreo Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            'Heavenly Chocolate Ganache on top of rich and moist chocolate sponge with oreo cookies is a combination made in heaven. This special cake will surely make your birthday celebrations extra special. (6 Servings, 350 Calories each)',
          cloudinaryImageId: '9aa362743a6bcede64c44e18ea450807',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 58900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297818: {
          id: 106297818,
          name: 'Ferrero Rocher Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            'Our melt-in-your-mouth chocolate cake sponge is smothered & covered in chocolate mousse with crispy bits of Ferrero Rocher. An epitome of fine balance between taste & texture! ( 6  Serving, 310 Calories each )',
          cloudinaryImageId: '9516eea99c68c5d4c94c5f3b38c5d6d1',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 83900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297819: {
          id: 106297819,
          name: 'Red Velvet Heart Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            'Red Velvet Sponge with fresh whipped cream is given a heart shape and sprinkled with red velvet crumbs completely on the cake to give a romantic touch, to make you event even more romantic.(Serving 6 , 310 Calories each)',
          cloudinaryImageId: 'dc179ad2305705235bd8c7d18a538655',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 60900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297821: {
          id: 106297821,
          name: 'Chocolate Truffle Heart Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            "Make your loved one's day special with sending this cake of love. This perfect chocolate heart shape cake will not only woo their heart but will also mesmerise their taste buds.(6 Servings, 300 Calories each)",
          cloudinaryImageId: '4b8f97236e6d582ec78e63b5a0d94be3',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 75900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297823: {
          id: 106297823,
          name: 'Butterscotch Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            'No-nonsense butterscotch cake! Soft vanilla cake sponge is layered with a coating of yummy butterscotch icing & cream. The sides are coated generously with butterscotch beans.(Serving 6 , 260 Calories each)',
          cloudinaryImageId: 'b0qki7sav0mww1qlqku2',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 46900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297824: {
          id: 106297824,
          name: 'Chocolate Truffle Heart Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            "Make your loved one's day special with sending this cake of love. This perfect chocolate heart shape cake will not only woo their heart but will also mesmerise their taste buds.(6 Servings, 300 Calories each)",
          cloudinaryImageId: '4b8f97236e6d582ec78e63b5a0d94be3',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 78900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297825: {
          id: 106297825,
          name: 'Choco Chip Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            'There is nothing more blissful than choco chips! A soft chocolate cake loaded with crunchy choco chips gives this cake an intense flavour in two different textures making it such a crowd pleaser.(Serving 6 , 320 Calories each)',
          cloudinaryImageId: 'sazjskrnj78j0yx2asih',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 76700,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297829: {
          id: 106297829,
          name: 'Choco Truffle Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            'A luxurious and moist chocolate cake sponge that is smothered with dark heavenly Chocolate Ganache. A small bite of this heavenly combination is going to make it your all time favourite cake!',
          cloudinaryImageId: '503d098b84b57b2583348ebe8968b3b0',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 65900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297830: {
          id: 106297830,
          name: 'Butterscotch Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            'No-nonsense butterscotch cake! Soft vanilla cake sponge is layered with a coating of yummy butterscotch icing & cream. The sides are coated generously with butterscotch beans.(Serving 6 , 260 Calories each)',
          cloudinaryImageId: 'b0qki7sav0mww1qlqku2',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 43900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297833: {
          id: 106297833,
          name: 'Choco Chip Cake [Eggless] - Half Kg',
          category: 'WarmOven',
          description:
            'There is nothing more blissful than choco chips! A soft chocolate cake loaded with crunchy choco chips gives this cake an intense flavour in two different textures making it such a crowd pleaser.(Serving 6 , 320 Calories each)',
          cloudinaryImageId: 'sazjskrnj78j0yx2asih',
          recommended: 0,
          inStock: 1,
          isVeg: 1,
          enabled: 1,
          displayOrder: 0,
          price: 79100,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'VEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        106297845: {
          id: 106297845,
          name: 'Choco Truffle Cake [Egg] - Half Kg',
          category: 'WarmOven',
          description:
            'A luxurious and moist chocolate cake sponge that is smothered with dark heavenly Chocolate Ganache. A small bite of this heavenly combination is going to make it your all time favourite cake!',
          cloudinaryImageId: '503d098b84b57b2583348ebe8968b3b0',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 61900,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: '',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        107154169: {
          id: 107154169,
          name: 'Plum Cake [250gm] (Rich)',
          category: 'Plum Cake [Powered by WarmOven]',
          description:
            'Christmas memories are made special with a delicious plum cake baked with the right balance of flavour, sweetness and hint of spice! A gift like no other on Christmas eve!',
          cloudinaryImageId: 'bbff035cf9c479a3334c2d24aa2ece13',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 45000,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: 'Serves 6',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        },
        107183068: {
          id: 107183068,
          name: 'Plum Cake [400gm] (Rich)',
          category: 'Plum Cake [Powered by WarmOven]',
          description:
            'Something so joyful about Christmas & Plum Cakes! The perfect harmony of the finest dry fruits with the aroma of spices and a great texture. Plum cakes compliment traditional Christmas sweets well.',
          cloudinaryImageId: '00c4c40e579ba8d74a8bf15335b61799',
          recommended: 0,
          inStock: 1,
          isVeg: 0,
          enabled: 1,
          displayOrder: 0,
          price: 70000,
          variants_new: { exclude_list: [], variant_groups: [] },
          cropChoices: 2,
          itemScore: 0,
          itemDiscount: 0,
          isPopular: 0,
          restId: '387923',
          showMC: 0,
          attributes: {
            portionSize: 'Serves 10',
            vegClassifier: 'NONVEG',
            accompaniments: ''
          },
          isHealthy: false,
          isBestSeller: false,
          itemNudgeType: '',
          isGuiltFree: false
        }
      },
      widgets: [
        {
          name: 'Recommended',
          subTitle: '',
          type: 'recommended',
          entities: [
            { id: 71295603, type: 'item', showImg: true, showRibbon: false },
            { id: 71295613, type: 'item', showImg: true, showRibbon: false },
            { id: 71295615, type: 'item', showImg: true, showRibbon: false },
            { id: 71295618, type: 'item', showImg: true, showRibbon: false },
            { id: 81664042, type: 'item', showImg: true, showRibbon: false },
            { id: 81664043, type: 'item', showImg: true, showRibbon: false },
            { id: 81664044, type: 'item', showImg: true, showRibbon: false },
            { id: 81664045, type: 'item', showImg: true, showRibbon: false },
            { id: 81664046, type: 'item', showImg: true, showRibbon: false },
            { id: 81664047, type: 'item', showImg: true, showRibbon: false },
            { id: 71295580, type: 'item', showImg: true, showRibbon: false },
            { id: 71295582, type: 'item', showImg: true, showRibbon: false },
            { id: 71295593, type: 'item', showImg: true, showRibbon: false },
            { id: 71295625, type: 'item', showImg: true, showRibbon: false },
            { id: 71295628, type: 'item', showImg: true, showRibbon: false }
          ],
          perRow: 2,
          collapsible: false
        },
        {
          name: 'Plum Cake [Powered by WarmOven]',
          subTitle: '',
          type: 'category',
          entities: [
            { id: 107154169, type: 'item', showImg: false, showRibbon: false },
            { id: 107183068, type: 'item', showImg: false, showRibbon: false }
          ],
          perRow: 2,
          collapsible: false
        },
        {
          name: 'Indiana Burgers',
          subTitle: '',
          type: 'category',
          entities: [
            { id: 71295600, type: 'item', showImg: false, showRibbon: false },
            { id: 71295603, type: 'item', showImg: false, showRibbon: false },
            { id: 71295610, type: 'item', showImg: false, showRibbon: false },
            { id: 71295611, type: 'item', showImg: false, showRibbon: false },
            { id: 71295613, type: 'item', showImg: false, showRibbon: false },
            { id: 71295615, type: 'item', showImg: false, showRibbon: false },
            { id: 71295618, type: 'item', showImg: false, showRibbon: false }
          ],
          perRow: 2,
          collapsible: false
        },
        {
          name: 'Slurpy Shakes',
          subTitle: '',
          type: 'category',
          entities: [{ id: 92754575, type: 'item', showImg: false, showRibbon: false }],
          perRow: 2,
          collapsible: false
        },
        {
          name: 'Cupcake Bliss',
          subTitle: '',
          type: 'category',
          entities: [
            { id: 81664042, type: 'item', showImg: false, showRibbon: false },
            { id: 81664043, type: 'item', showImg: false, showRibbon: false },
            { id: 81664044, type: 'item', showImg: false, showRibbon: false },
            { id: 81664045, type: 'item', showImg: false, showRibbon: false },
            { id: 81664046, type: 'item', showImg: false, showRibbon: false },
            { id: 81664047, type: 'item', showImg: false, showRibbon: false }
          ],
          perRow: 2,
          collapsible: false
        },
        {
          name: 'KaatiZone.',
          subTitle: '',
          type: 'category',
          entities: [
            { id: 71295576, type: 'item', showImg: false, showRibbon: false },
            { id: 71295578, type: 'item', showImg: false, showRibbon: false },
            { id: 71295580, type: 'item', showImg: false, showRibbon: false },
            { id: 71295582, type: 'item', showImg: false, showRibbon: false },
            { id: 71295584, type: 'item', showImg: false, showRibbon: false },
            { id: 71295587, type: 'item', showImg: false, showRibbon: false },
            { id: 71295591, type: 'item', showImg: false, showRibbon: false },
            { id: 71295593, type: 'item', showImg: false, showRibbon: false },
            { id: 71295596, type: 'item', showImg: false, showRibbon: false },
            { id: 71295598, type: 'item', showImg: false, showRibbon: false }
          ],
          perRow: 2,
          collapsible: false
        },
        {
          name: 'The Dessert Zone',
          subTitle: '',
          type: 'category',
          entities: [
            { id: 71295620, type: 'item', showImg: false, showRibbon: false },
            { id: 71295621, type: 'item', showImg: false, showRibbon: false },
            { id: 71295630, type: 'item', showImg: false, showRibbon: false },
            { id: 71295633, type: 'item', showImg: false, showRibbon: false },
            { id: 71295634, type: 'item', showImg: false, showRibbon: false },
            { id: 71295636, type: 'item', showImg: false, showRibbon: false },
            { id: 71295637, type: 'item', showImg: false, showRibbon: false },
            { id: 71295645, type: 'item', showImg: false, showRibbon: false },
            { id: 71295648, type: 'item', showImg: false, showRibbon: false },
            { id: 71295650, type: 'item', showImg: false, showRibbon: false },
            { id: 71295652, type: 'item', showImg: false, showRibbon: false },
            { id: 75906451, type: 'item', showImg: false, showRibbon: false }
          ],
          perRow: 2,
          collapsible: false
        },
        {
          name: 'WarmOven',
          subTitle: '',
          type: 'category',
          entities: [
            { id: 106297669, type: 'item', showImg: false, showRibbon: false },
            { id: 106297676, type: 'item', showImg: false, showRibbon: false },
            { id: 106297656, type: 'item', showImg: false, showRibbon: false },
            { id: 106297663, type: 'item', showImg: false, showRibbon: false },
            { id: 106297681, type: 'item', showImg: false, showRibbon: false },
            { id: 106297688, type: 'item', showImg: false, showRibbon: false },
            { id: 106297736, type: 'item', showImg: false, showRibbon: false },
            { id: 106297797, type: 'item', showImg: false, showRibbon: false },
            { id: 106297761, type: 'item', showImg: false, showRibbon: false },
            { id: 106297798, type: 'item', showImg: false, showRibbon: false },
            { id: 106297786, type: 'item', showImg: false, showRibbon: false },
            { id: 106297816, type: 'item', showImg: false, showRibbon: false },
            { id: 106297801, type: 'item', showImg: false, showRibbon: false },
            { id: 106297818, type: 'item', showImg: false, showRibbon: false },
            { id: 106297812, type: 'item', showImg: false, showRibbon: false },
            { id: 106297819, type: 'item', showImg: false, showRibbon: false },
            { id: 106297821, type: 'item', showImg: false, showRibbon: false },
            { id: 106297824, type: 'item', showImg: false, showRibbon: false },
            { id: 106297823, type: 'item', showImg: false, showRibbon: false },
            { id: 106297830, type: 'item', showImg: false, showRibbon: false },
            { id: 106297825, type: 'item', showImg: false, showRibbon: false },
            { id: 106297833, type: 'item', showImg: false, showRibbon: false },
            { id: 106297829, type: 'item', showImg: false, showRibbon: false },
            { id: 106297845, type: 'item', showImg: false, showRibbon: false }
          ],
          perRow: 2,
          collapsible: false
        },
        {
          name: 'Sundae Everyday',
          subTitle: '',
          type: 'category',
          entities: [
            { id: 71295625, type: 'item', showImg: false, showRibbon: false },
            { id: 71295628, type: 'item', showImg: false, showRibbon: false }
          ],
          perRow: 2,
          collapsible: false
        },
        {
          name: 'Burger It Up',
          subTitle: '',
          type: 'category',
          entities: [
            { id: 71295565, type: 'item', showImg: false, showRibbon: false },
            { id: 71295567, type: 'item', showImg: false, showRibbon: false },
            { id: 71295568, type: 'item', showImg: false, showRibbon: false },
            { id: 71295570, type: 'item', showImg: false, showRibbon: false },
            { id: 71295573, type: 'item', showImg: false, showRibbon: false },
            { id: 71295575, type: 'item', showImg: false, showRibbon: false },
            { id: 93921535, type: 'item', showImg: false, showRibbon: false }
          ],
          perRow: 2,
          collapsible: false
        },
        {
          name: 'MomoZone',
          subTitle: '',
          type: 'category',
          entities: [
            { id: 75072855, type: 'item', showImg: false, showRibbon: false },
            { id: 75072856, type: 'item', showImg: false, showRibbon: false },
            { id: 75072859, type: 'item', showImg: false, showRibbon: false },
            { id: 75072861, type: 'item', showImg: false, showRibbon: false },
            { id: 75072862, type: 'item', showImg: false, showRibbon: false },
            { id: 75072863, type: 'item', showImg: false, showRibbon: false },
            { id: 75072868, type: 'item', showImg: false, showRibbon: false },
            { id: 75072872, type: 'item', showImg: false, showRibbon: false },
            { id: 75072874, type: 'item', showImg: false, showRibbon: false },
            { id: 75072877, type: 'item', showImg: false, showRibbon: false }
          ],
          perRow: 2,
          collapsible: false
        },
        {
          name: 'Want to repeat?',
          subTitle: '',
          type: 'reorder',
          entities: [],
          perRow: 2,
          collapsible: false
        }
      ],
      layoutType: 'normal',
      healthyCollection: []
    },
    aggregatedDiscountInfo: {
      header: '60% off',
      shortDescriptionList: [
        {
          meta: '60% off | Use TRYNEW',
          discountType: 'Percentage',
          operationType: 'RESTAURANT'
        },
        {
          meta: '50% off | Use WELCOME50',
          discountType: 'Percentage',
          operationType: 'RESTAURANT'
        }
      ],
      descriptionList: [
        {
          meta: '60% off up to ₹120 | Use code TRYNEW',
          discountType: 'Percentage',
          operationType: 'RESTAURANT'
        },
        {
          meta: '50% off up to ₹100 | Use code WELCOME50',
          discountType: 'Percentage',
          operationType: 'RESTAURANT'
        }
      ]
    },
    offerMeta: [
      {
        header: '60% OFF UPTO ₹120',
        offer_tag: '',
        offer_logo: 'offers/generic',
        top_logo: '',
        bottom_logo: '',
        offer_info: {
          offer_ids: ['db6b33a9-812b-494c-b1fc-4452c8cb61c6'],
          type: 'offers'
        },
        expiry_time: 0,
        coupon_code: 'USE TRYNEW',
        description: 'ABOVE ₹159',
        secondary_discount_callout: '',
        show_expiry_timer: false
      },
      {
        header: '50% OFF UPTO ₹100',
        offer_tag: 'WELCOME',
        offer_logo: 'offers/welcome',
        top_logo: '',
        bottom_logo: '',
        offer_info: {
          offer_ids: ['9d44b230-99fb-46d0-9895-b16704f30dad'],
          type: 'offers'
        },
        expiry_time: 0,
        coupon_code: 'USE WELCOME50',
        description: 'ABOVE ₹149',
        secondary_discount_callout: '',
        show_expiry_timer: false
      },
      {
        header: 'FLAT ₹125 OFF',
        offer_tag: 'FLAT DEAL',
        offer_logo: 'offers/generic',
        top_logo: '',
        bottom_logo: '',
        offer_info: {
          offer_ids: ['0f5c9cb0-ffc7-45f2-804d-a6fd3074c093'],
          type: 'offers'
        },
        expiry_time: 0,
        coupon_code: 'USE FLATDEAL',
        description: 'ABOVE ₹599',
        secondary_discount_callout: '',
        show_expiry_timer: false
      },
      {
        header: '30% OFF UPTO ₹150',
        offer_tag: 'SAVE BIG',
        offer_logo: 'offers/save-big',
        top_logo: '',
        bottom_logo: '',
        offer_info: {
          offer_ids: ['cadbab93-5eba-4dcb-acc5-fa4592c30c0b'],
          type: 'offers'
        },
        expiry_time: 0,
        coupon_code: 'USE JUMBO',
        description: 'ABOVE ₹479',
        secondary_discount_callout: '',
        show_expiry_timer: false
      },
      {
        header: 'FLAT 25% OFF',
        offer_tag: 'FLAT DEAL',
        offer_logo: 'offers/generic',
        top_logo: '',
        bottom_logo: '',
        offer_info: {
          offer_ids: ['318f5356-d811-4a17-a10a-172f2b4c8350'],
          type: 'offers'
        },
        expiry_time: 0,
        coupon_code: 'USE PARTY',
        description: 'ABOVE ₹800',
        secondary_discount_callout: '',
        show_expiry_timer: false
      }
    ],
    itemNudgeBanners: {},
    aggregatedDiscountInfoV2: {
      header: '60% off',
      shortDescriptionList: [
        {
          meta: '60% off | Use TRYNEW',
          discountType: 'Percentage',
          operationType: 'RESTAURANT'
        },
        {
          meta: '50% off | Use WELCOME50',
          discountType: 'Percentage',
          operationType: 'RESTAURANT'
        }
      ],
      descriptionList: [
        {
          meta: '60% off up to ₹120 | Use code TRYNEW',
          discountType: 'Percentage',
          operationType: 'RESTAURANT'
        },
        {
          meta: '50% off up to ₹100 | Use code WELCOME50',
          discountType: 'Percentage',
          operationType: 'RESTAURANT'
        }
      ],
      couponDetailsCTAText: 'View coupon details',
      visible: false
    },
    nudgeBanners: [
      {
        minValue: 104.3,
        maxValue: 149,
        priority: 2,
        couponCode: 'WELCOME50',
        discountInfo: {
          discountType: 'Percentage',
          value: 50,
          operationType: 'RESTAURANT'
        },
        lockedMessage: 'Add items worth ₹<amount> to save upto ₹100 | Code WELCOME50',
        unlockedMessage: 'WELCOME50 Coupon Unlocked! Use it to save upto ₹100',
        minItemCount: 0,
        maxItemCount: 0,
        type: '',
        cta: { link: '', text: '', type: '', color: '' }
      },
      {
        minValue: 335.3,
        maxValue: 479,
        priority: 4,
        couponCode: 'JUMBO',
        discountInfo: {
          discountType: 'Percentage',
          value: 30,
          operationType: 'RESTAURANT'
        },
        lockedMessage: 'Add items worth ₹<amount> to save upto ₹150 | Code JUMBO',
        unlockedMessage: 'JUMBO Coupon Unlocked! Use it to save upto ₹150',
        minItemCount: 0,
        maxItemCount: 0,
        type: '',
        cta: { link: '', text: '', type: '', color: '' }
      },
      {
        minValue: 560,
        maxValue: 800,
        priority: 5,
        couponCode: 'PARTY',
        discountInfo: {
          discountType: 'Percentage',
          value: 25,
          operationType: 'RESTAURANT'
        },
        lockedMessage: 'Add items worth ₹<amount> to unlock flat 25% off | Code PARTY',
        unlockedMessage: 'PARTY Coupon Unlocked! Use it to save flat 25% off',
        minItemCount: 0,
        maxItemCount: 0,
        type: '',
        cta: { link: '', text: '', type: '', color: '' }
      }
    ],
    restaurantLicenses: [
      {
        type: 'FSSAI',
        imageId: 'fssai_final_edss9i',
        text: ['License No. 11221334001927']
      }
    ],
    menuTabs: [{ title: 'Order Now', type: 'menu', selected: true }],
    vegOnlyDetails: {
      imageId: 'AutoVegOnly_qkjowj',
      title: 'Showing only vegetarian options.',
      description: 'Tap on the VEG ONLY button to turn off the setting'
    },
    gpInfoList: [],
    expectationNotifiers: [],
    menuCategory: [
      {
        name: 'Full Menu',
        identifier: 'REGULAR',
        icon: 'v1594205104/fullMenuActive_qcsdzt.png',
        unselectedIcon: 'v1594205107/fullMenuInactive_fbdtp2.png',
        selected: true
      }
    ],
    xpConfigParams: { isNewHealthMenu: 'false' },
    slotInvalid: false,
    select: false,
    cafe: false,
    preorderable: false,
    requestId: '20eb3433-33ca-4da6-96ae-9828e5e989c6',
    timeStamp: '1675204365387'
  },
  tid: '4ba7301e-1290-4cfc-ae21-61ebf5d969e8',
  sid: '55f83319-66d6-4b66-80c8-9d82e0a32b02',
  deviceId: 'a303e41d-2a10-eb24-3907-40910e48fc07',
  csrfToken: '6CKn6thGhNdg-tTUJZRu0hsDDDqXpOiF8xayq7Vk'
}
