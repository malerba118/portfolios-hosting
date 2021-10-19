import { types } from "mobx-state-tree";
import { nanoid } from "nanoid";
import { isEmpty, createDefaultNode } from "shared/components/RichtextViewer";

const EXAMPLE_PORTFOLIOS = {
  wedding: {
    id: "twvtmcg1aZeY2eQ6MMyk",
    draftLastSaved: "2021-10-18T20:22:09.030Z",
    advertisementsDisabled: true,
    subdomain: "example-photographer",
    owner: "eqcLh4OerpTBj5s8A2rcNnKGQBf1",
    draft: {
      content: {
        about: {
          resume: {
            name: "Sophie GUTIERREZ.pdf",
            url:
              "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fresume-Sophie%20GUTIERREZ.pdf?alt=media&token=79646665-209e-4f86-bbc7-bc27ae39974d",
          },
          summary: "Let me capture your most beautiful moments ",
          firstName: "Sophie",
          title: "Photographer",
          logo: {
            items: [],
          },
          images: {
            items: [
              {
                name: "pexels-george-milton-7015102.jpeg",
                processedUrl: null,
                id: "qthb0-v2VQZDNfmYmnZPZ",
                width: 2280,
                height: 3420,
                rawUrl:
                  "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-qthb0-v2VQZDNfmYmnZPZ?alt=media&token=b476a656-023d-4d17-bdd8-261fab8108cc",
                zoom: null,
                crop: null,
                type: "image/jpeg",
              },
            ],
          },
          lastName: "Gutierrez",
          description:
            '[{"type":"paragraph","children":[{"text":"Hi there! I am Sophie, and I love capturing people\'s stories through portrait photography. Photography allows me to freeze your beautiful moments and make them last forever. "}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"Ever since I got my hands on my first disposable camera, I\'ve been infatuated with the art. 15 years and countless photos later, I am still loving what I do. "}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"I invite you to take a look at my portfolio and reach out if you like what you see. "}]}]',
        },
        contact: {
          socialLinks: {
            items: [
              {
                url: "https://pinterest.com",
                id: "UitPVVzoyVZrk14hp7eDj",
                platform: "pinterest",
              },
              {
                url: "https://instagram.com",
                platform: "instagram",
                id: "sqohkudjo0Lg0gHgNbwQH",
              },
              {
                platform: "facebook",
                id: "VzF3vKiN8rKGJnwV_jTFU",
                url: "https://facebook.com",
              },
            ],
          },
          phone: {
            hidden: false,
            value: "(111) 223-4567",
          },
          email: {
            hidden: false,
            value: "contact@sophiegutierrez.com",
          },
        },
        projects: [
          {
            startDate: null,
            endDate: null,
            description:
              '[{"type":"paragraph","children":[{"text":"From small gatherings to big events, I promise to help you relive them years from now. "}]}]',
            id: "9Aol6867lnNUxXCF_3WzN",
            summary:
              "Who wants to worry about pictures while hosting an event. I'll take care of it. ",
            images: {
              items: [
                {
                  height: 2280,
                  type: "image/jpeg",
                  id: "ivdmVFkpaXPD52ZLP1KJG",
                  processedUrl: null,
                  name: "pexels-cottonbro-7097455.jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-ivdmVFkpaXPD52ZLP1KJG?alt=media&token=c91fcb23-d3e5-45f6-b7ed-5fb8d07d1ddf",
                  width: 3420,
                  zoom: null,
                  crop: null,
                },
                {
                  processedUrl: null,
                  id: "o0tnziFryjPq5cu8CaEKf",
                  type: "image/jpeg",
                  width: 2280,
                  name: "pexels-cottonbro-6899942.jpeg",
                  crop: null,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-o0tnziFryjPq5cu8CaEKf?alt=media&token=bf19b96e-1816-4da9-8fa6-df10aa777df3",
                  zoom: null,
                  height: 3420,
                },
                {
                  zoom: null,
                  crop: null,
                  name: "pexels-daria-sannikova-2121661.jpeg",
                  type: "image/jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-vL_oQv8bJcUxoopX2kMUT?alt=media&token=a52b31f3-c43a-4bed-aa3a-a2c968c62726",
                  processedUrl: null,
                  width: 2514,
                  id: "vL_oQv8bJcUxoopX2kMUT",
                  height: 1666,
                },
                {
                  crop: null,
                  id: "74H0UI-hxB8tZ3y-VQc7a",
                  width: 2280,
                  height: 3420,
                  processedUrl: null,
                  name: "pexels-fabrício-lira-2896162.jpeg",
                  zoom: null,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-74H0UI-hxB8tZ3y-VQc7a?alt=media&token=a2b233f7-f0e6-4a5d-88fe-cffe84615343",
                  type: "image/jpeg",
                },
                {
                  processedUrl: null,
                  name: "pexels-matheus-bertelli-3321796.jpeg",
                  id: "m7q46zeuRCxmdGBck-LV2",
                  width: 2280,
                  height: 3420,
                  crop: null,
                  type: "image/jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-m7q46zeuRCxmdGBck-LV2?alt=media&token=d6fa5883-eba2-4db3-aca6-b6ee95310870",
                  zoom: null,
                },
                {
                  type: "image/jpeg",
                  width: 3420,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-ORk6MfGUR6P38di7GvjLI?alt=media&token=a15c4f03-54f9-40a9-8fc9-278a84e99202",
                  crop: null,
                  zoom: null,
                  processedUrl: null,
                  height: 1921,
                  id: "ORk6MfGUR6P38di7GvjLI",
                  name: "pexels-matheus-bertelli-3321791.jpeg",
                },
                {
                  height: 2280,
                  type: "image/jpeg",
                  width: 3420,
                  crop: null,
                  zoom: null,
                  name: "pexels-祝-鹤槐-716276.jpeg",
                  id: "P2lEV05tFFxaH8mokneFB",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-P2lEV05tFFxaH8mokneFB?alt=media&token=d34f93fe-e979-4436-af01-5d4e7711fb50",
                  processedUrl: null,
                },
                {
                  height: 3420,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-7C60cyrC3yMHz4jN8dztl?alt=media&token=a63bafd3-1593-44d9-99df-77c6472b2ab8",
                  id: "7C60cyrC3yMHz4jN8dztl",
                  width: 2279,
                  type: "image/jpeg",
                  crop: null,
                  name: "pexels-rodnae-productions-7502614.jpeg",
                  zoom: null,
                  processedUrl: null,
                },
                {
                  height: 3420,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-AR2SU667gnu5dTxuLSZR8?alt=media&token=1dfedb20-5729-4aff-bb8f-3a215e6f92eb",
                  name: "pexels-rodnae-productions-7502625.jpeg",
                  type: "image/jpeg",
                  width: 2280,
                  processedUrl: null,
                  crop: null,
                  id: "AR2SU667gnu5dTxuLSZR8",
                  zoom: null,
                },
              ],
            },
            name: "Events",
          },
          {
            summary:
              "If there is one moment in life that needs to be captured, it's this one. ",
            name: "Weddings",
            images: {
              items: [
                {
                  height: 3073,
                  id: "LELNaHf7ajJ1DFtzqUcUE",
                  width: 2034,
                  name: "pexels-wendel-moretti-1730877.jpeg",
                  processedUrl: null,
                  zoom: null,
                  crop: null,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-LELNaHf7ajJ1DFtzqUcUE?alt=media&token=d4234ae6-70a0-4826-9133-f749cec0b51f",
                  type: "image/jpeg",
                },
                {
                  type: "image/jpeg",
                  zoom: null,
                  name: "pexels-jin-wedding-5729023.jpg",
                  width: 2280,
                  processedUrl: null,
                  height: 3420,
                  crop: null,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-Od5w6SDcoaUKslUyZnMIO?alt=media&token=9ce1b5ec-5e41-486e-9053-999c7fc8d1c3",
                  id: "Od5w6SDcoaUKslUyZnMIO",
                },
                {
                  type: "image/jpeg",
                  id: "eMKVL2Y-MF42SFHVIiV8N",
                  zoom: null,
                  width: 2280,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-eMKVL2Y-MF42SFHVIiV8N?alt=media&token=0d239fb4-0ed2-4d6f-91be-875035e2d94f",
                  name: "pexels-jonathan-borba-9816191.jpeg",
                  height: 3420,
                  crop: null,
                  processedUrl: null,
                },
                {
                  zoom: null,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-xucZeunAaP5kjb_Q46h3X?alt=media&token=d914418c-00e5-4f4a-909d-36081613f67e",
                  type: "image/jpeg",
                  crop: null,
                  height: 3420,
                  id: "xucZeunAaP5kjb_Q46h3X",
                  processedUrl: null,
                  name: "pexels-jin-wedding-5729030.jpg",
                  width: 3420,
                },
                {
                  width: 2280,
                  height: 3420,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-hvW3746HpNqUzp4H9NXkb?alt=media&token=9ddd9424-1d70-4048-9449-0f0ba4f63d74",
                  processedUrl: null,
                  type: "image/jpeg",
                  name: "pexels-avonne-stalling-3916019.jpeg",
                  zoom: null,
                  id: "hvW3746HpNqUzp4H9NXkb",
                  crop: null,
                },
                {
                  height: 3283,
                  id: "5sivPNf4KjXh0xijAN-Rl",
                  type: "image/jpeg",
                  processedUrl: null,
                  crop: null,
                  width: 2461,
                  name: "pexels-secret-garden-2879824.jpeg",
                  zoom: null,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-5sivPNf4KjXh0xijAN-Rl?alt=media&token=312ed000-780e-474f-bdf9-4881aa418d32",
                },
                {
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-obxJXEifAQX-DS_qPHK-x?alt=media&token=dace50ad-88fe-4a25-ad3c-df64e9b072de",
                  name: "pexels-emir-kaan-okutan-2403568.jpeg",
                  id: "obxJXEifAQX-DS_qPHK-x",
                  type: "image/jpeg",
                  width: 2280,
                  height: 3420,
                  zoom: null,
                  crop: null,
                  processedUrl: null,
                },
                {
                  id: "iIBrl8mdGtQOy1Z2YOHwK",
                  width: 2280,
                  height: 3420,
                  crop: null,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-iIBrl8mdGtQOy1Z2YOHwK?alt=media&token=b4cc723e-536b-48c1-9363-9fc4a4245936",
                  name: "pexels-jin-wedding-5729031.jpg",
                  processedUrl: null,
                  type: "image/jpeg",
                  zoom: null,
                },
                {
                  zoom: null,
                  processedUrl: null,
                  id: "8twuvfrzQbN_X9NPFLVOC",
                  crop: null,
                  type: "image/jpeg",
                  width: 2280,
                  name: "wedding1.jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-8twuvfrzQbN_X9NPFLVOC?alt=media&token=b8a5bfd9-a10f-4a85-9d34-2c01be3b6981",
                  height: 3420,
                },
                {
                  height: 2435,
                  id: "h13Iu4UFqEgsxQtTO5aJN",
                  zoom: null,
                  name: "pexels-avonne-stalling-3917719.jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-h13Iu4UFqEgsxQtTO5aJN?alt=media&token=9d3883d5-78eb-4a5c-8a10-67dd1b39087a",
                  processedUrl: null,
                  crop: null,
                  type: "image/jpeg",
                  width: 1666,
                },
                {
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-HIHTkPbwYmiM-ow_uMzPh?alt=media&token=8dc54bda-47d6-4596-baf0-22fdd8de1daa",
                  height: 3420,
                  name: "pexels-jonathan-borba-2917380.jpeg",
                  type: "image/jpeg",
                  zoom: null,
                  id: "HIHTkPbwYmiM-ow_uMzPh",
                  processedUrl: null,
                  crop: null,
                  width: 2280,
                },
                {
                  height: 3420,
                  width: 2280,
                  id: "Hvt_Lgv7e_MSOo2ZIMuWO",
                  name: "pexels-tara-winstead-6479601.jpeg",
                  processedUrl: null,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-Hvt_Lgv7e_MSOo2ZIMuWO?alt=media&token=39adaa13-3076-4244-a442-f5ad267eaa27",
                  crop: null,
                  zoom: null,
                  type: "image/jpeg",
                },
              ],
            },
            description:
              '[{"type":"paragraph","children":[{"text":"I\'ll make sure to capture all the small details on your special day. "}]}]',
            startDate: null,
            id: "eGaaVpb-zcoBKiC8av0Nc",
            endDate: null,
          },
          {
            description:
              '[{"type":"paragraph","children":[{"text":"Family memories should stay forever. I\'ll help you capture the beautiful moments of raising your children (but we\'ll leave out all of the not so beautiful ones...)."}]}]',
            startDate: null,
            endDate: null,
            id: "inTAvdXHJAnr-lgxSBsvQ",
            summary:
              "Candid moments of the little ones and not so little ones ",
            images: {
              items: [
                {
                  id: "d8SfCVrbc9d9UfYooF6Pb",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-d8SfCVrbc9d9UfYooF6Pb?alt=media&token=3fde8387-5ab9-4755-80ed-bddafe0e3f8f",
                  zoom: null,
                  height: 3420,
                  processedUrl: null,
                  width: 1922,
                  crop: null,
                  type: "image/jpeg",
                  name: "pexels-nathan-j-hilton-9860688.jpeg",
                },
                {
                  id: "T8InO_8Btxkon_L9sTQjc",
                  crop: null,
                  zoom: null,
                  type: "image/jpeg",
                  width: 1922,
                  processedUrl: null,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-T8InO_8Btxkon_L9sTQjc?alt=media&token=be56bae2-75ef-45c0-91d2-facb9575deb6",
                  height: 3420,
                  name: "pexels-nathan-j-hilton-9899335.jpeg",
                },
                {
                  type: "image/jpeg",
                  id: "VW4WEN64YWBuosRj2Kg94",
                  crop: null,
                  processedUrl: null,
                  width: 1922,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-VW4WEN64YWBuosRj2Kg94?alt=media&token=b1311d04-071a-4015-aa4e-20d2c7d0d07c",
                  height: 3420,
                  zoom: null,
                  name: "pexels-nathan-j-hilton-9860672.jpeg",
                },
                {
                  processedUrl: null,
                  zoom: null,
                  width: 3420,
                  type: "image/jpeg",
                  height: 1922,
                  id: "lL6LjkLpXZW3iDR3Eta40",
                  name: "pexels-nathan-j-hilton-9899336.jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-lL6LjkLpXZW3iDR3Eta40?alt=media&token=23a53d22-3dee-4020-8896-98293abef66a",
                  crop: null,
                },
                {
                  type: "image/jpeg",
                  name: "pexels-nathan-j-hilton-9860658.jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FeqcLh4OerpTBj5s8A2rcNnKGQBf1%2Fpublic%2Fraw-v306zZvkJq9g7rbTm65Ac?alt=media&token=667129f6-484c-4d8d-87ed-eb3e8fc5afc1",
                  height: 3420,
                  id: "v306zZvkJq9g7rbTm65Ac",
                  processedUrl: null,
                  crop: null,
                  zoom: null,
                  width: 1922,
                },
              ],
            },
            name: "Family Photoshoots",
          },
        ],
      },
      template: "gallery",
      templateSettingsMap: {
        skrol: {
          paragraphFont: "Lato",
          headingFont: "Montserrat",
          palette: "purplePink",
        },
        madrid: {
          paragraphFont: "Lato",
          palette: "desert",
          headingFont: "Montserrat",
        },
        venice: {
          headingFont: "Ubuntu",
          paragraphFont: "Ubuntu",
          palette: "gray",
        },
        os: {
          palette: "gray",
          paragraphFont: "Ubuntu Mono",
          headingFont: "Ubuntu Mono",
          wallpaper: {
            items: [
              {
                rawUrl: "https://vernos.us/templates/os/wallpaper-light.jpg",
                height: null,
                processedUrl: null,
                zoom: null,
                width: null,
                name: "wallpaper-light.jpg",
                crop: null,
                id: "QncsVpPCc405wlcjm30TI",
                type: "image/jpeg",
              },
            ],
          },
        },
        gallery: {
          palette: "gray",
          paragraphFont: "EB Garamond",
          headingFont: "Crimson Text",
        },
      },
    },
    published: null,
  },
  fitness: {
    id: "S6Qu34Sksxp4stHDfh2L",
    draft: {
      template: "skrol",
      templateSettingsMap: {
        madrid: {
          palette: "desert",
          paragraphFont: "Lato",
          headingFont: "Montserrat",
        },
        gallery: {
          palette: "gray",
          paragraphFont: "EB Garamond",
          headingFont: "Crimson Text",
        },
        venice: {
          paragraphFont: "Ubuntu",
          palette: "gray",
          headingFont: "Ubuntu",
        },
        skrol: {
          headingFont: "Montserrat",
          paragraphFont: "Lato",
          palette: "purplePink",
        },
        os: {
          wallpaper: {
            items: [
              {
                type: "image/jpeg",
                height: null,
                width: null,
                crop: null,
                rawUrl: "https://vernos.us/templates/os/wallpaper-light.jpg",
                id: "BaQyqLEjnJ7VJ2PCAiP7Q",
                name: "wallpaper-light.jpg",
                processedUrl: null,
                zoom: null,
              },
            ],
          },
          palette: "gray",
          paragraphFont: "Ubuntu Mono",
          headingFont: "Ubuntu Mono",
        },
      },
      content: {
        projects: [
          {
            summary: "One-on-one training sessions",
            name: "Personal Training",
            images: {
              items: [
                {
                  height: 2280,
                  zoom: null,
                  width: 3420,
                  type: "image/jpeg",
                  name: "pexels-cliff-booth-4057176.jpg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fraw-0dvav0UxXii0W3ZvvTH9n?alt=media&token=a43cd300-e5f8-4f16-bfe0-bc3270f6ce30",
                  id: "0dvav0UxXii0W3ZvvTH9n",
                  crop: null,
                  processedUrl: null,
                },
                {
                  height: 3420,
                  crop: null,
                  zoom: null,
                  width: 2280,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fraw-D3H4eAB_mte90QaQd0i5n?alt=media&token=f6000f18-7792-4c3c-8f0c-39ad4eb6c5a5",
                  name: "pexels-cliff-booth-4057070.jpg",
                  id: "D3H4eAB_mte90QaQd0i5n",
                  type: "image/jpeg",
                  processedUrl: null,
                },
                {
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fraw-ZTVDM_ybwbjYSG8Y_O6Ra?alt=media&token=8e001eb6-5773-4998-a541-7cfa997d8566",
                  width: 2280,
                  zoom: null,
                  type: "image/jpeg",
                  id: "ZTVDM_ybwbjYSG8Y_O6Ra",
                  name: "pexels-cliff-booth-4057265.jpg",
                  height: 3420,
                  processedUrl: null,
                  crop: null,
                },
                {
                  height: 3420,
                  name: "pexels-cliff-booth-4056614.jpg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fraw-dM-f5G5alLQ5hTCNgPuwD?alt=media&token=f36b588f-edcd-415a-9e55-d04aad21e060",
                  processedUrl: null,
                  crop: null,
                  width: 2089,
                  id: "dM-f5G5alLQ5hTCNgPuwD",
                  zoom: null,
                  type: "image/jpeg",
                },
                {
                  width: 2280,
                  type: "image/jpeg",
                  id: "o1TOPFQ5K3Fm5o5FZc_XX",
                  zoom: null,
                  crop: null,
                  processedUrl: null,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fraw-o1TOPFQ5K3Fm5o5FZc_XX?alt=media&token=4d13cf10-11e6-46fb-8884-1c9a2c7b2212",
                  name: "pexels-cliff-booth-4057866.jpg",
                  height: 3420,
                },
              ],
            },
            startDate: null,
            description:
              '[{"type":"paragraph","children":[{"text":"I hope you\'re ready for a good burn. We\'ll do a variety of activities including yoga, pilates, weight training, and high intensity interval training to help you boost your metabolism and increase your strength."}]}]',
            endDate: null,
            id: "kJDmi7YpNatTYmCDduKdc",
          },
          {
            id: "KuZ9zBJn90j-r3MH0OYcf",
            endDate: null,
            summary: "You are what you eat",
            images: {
              items: [
                {
                  crop: null,
                  processedUrl: null,
                  name: "pexels-ella-olsson-3026803.jpg",
                  height: 2564,
                  zoom: null,
                  type: "image/jpeg",
                  width: 3420,
                  id: "q-FDeYuZ2zfc7osxZZ_D9",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fraw-q-FDeYuZ2zfc7osxZZ_D9?alt=media&token=eb7a6ffa-3f56-486a-ac88-ad92460afa23",
                },
                {
                  processedUrl: null,
                  type: "image/jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fraw-Gyzhq0GeUpY-rr0u9iLdC?alt=media&token=b55883ed-e343-4ec1-8f44-aa6feb2e71bb",
                  crop: null,
                  name: "pexels-ella-olsson-3026802.jpg",
                  zoom: null,
                  width: 3420,
                  height: 2563,
                  id: "Gyzhq0GeUpY-rr0u9iLdC",
                },
                {
                  id: "UX7vT41o3ngRtGW-k2IRY",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fraw-UX7vT41o3ngRtGW-k2IRY?alt=media&token=64f5dc9a-d50f-4666-9b99-794974f3c18c",
                  crop: null,
                  processedUrl: null,
                  type: "image/jpeg",
                  zoom: null,
                  width: 3420,
                  name: "pexels-ella-olsson-1640775.jpg",
                  height: 2736,
                },
                {
                  type: "image/jpeg",
                  zoom: null,
                  processedUrl: null,
                  crop: null,
                  id: "ftE4eyNPq5dSarVd-4Bz-",
                  name: "pexels-ella-olsson-1334129.jpg",
                  height: 2280,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fraw-ftE4eyNPq5dSarVd-4Bz-?alt=media&token=7c25dd38-ee0d-4d33-83af-78652cdb1c6d",
                  width: 3420,
                },
                {
                  height: 2564,
                  crop: null,
                  width: 3420,
                  id: "gxD2n2oSOmjqHzg-3vTXb",
                  type: "image/jpeg",
                  processedUrl: null,
                  zoom: null,
                  name: "pexels-ella-olsson-3026811.jpg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fraw-gxD2n2oSOmjqHzg-3vTXb?alt=media&token=cdde8496-5919-49dc-bd6e-94370802e210",
                },
              ],
            },
            name: "Healthy Diet",
            startDate: null,
            description:
              '[{"type":"paragraph","children":[{"text":"Excercise is only half of the battle. Nutrition is key to a great physique and a healthy mind/body. No more processed food my friend, but I promise you\'ll still be stuffing your face with as much delicious food as you want and yet amazingly you\'ll still be losing fat and gaining muscle at the same time."}]}]',
          },
        ],
        contact: {
          phone: {
            hidden: false,
            value: "",
          },
          email: {
            hidden: false,
            value: "",
          },
          socialLinks: {
            items: [],
          },
        },
        about: {
          summary: "It's time to get your grind on.",
          images: {
            items: [
              {
                zoom: 1,
                crop: {
                  height: 80.46953125,
                  y: 3.7234375000000015,
                  x: 0,
                  unit: "%",
                  width: 94.04166666666669,
                },
                rawUrl:
                  "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fraw-hN6p5ho6BzBIWH_2QdO8J?alt=media&token=e96aa9d9-0007-4f8d-ad8c-8619cb60f834",
                type: "image/jpeg",
                processedUrl:
                  "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FPuyAY2pEkHN4TCWTKrvBvGetbk22%2Fpublic%2Fprocessed-hN6p5ho6BzBIWH_2QdO8J?alt=media&token=6255ee37-f620-4ecd-b842-1a7ffc0e7a50",
                width: 3420,
                name: "pexels-cliff-booth-4057269.jpg",
                height: 2280,
                id: "hN6p5ho6BzBIWH_2QdO8J",
              },
            ],
          },
          resume: null,
          lastName: "Johnson",
          logo: {
            items: [],
          },
          firstName: "Sandra",
          description:
            '[{"type":"paragraph","children":[{"text":"Hi, I\'m Sandra and I\'m here to help you get in the "},{"text":"best shape of your life","bold":true,"italic":true},{"text":". Whether it\'s exercise, diet, or headspace, we\'ll work together to get you feeling and looking 10 years younger."}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"Age is just a number, and when we treat our bodies well, they are capable of things that we\'ve never dreamed of. Whether you\'re 60 years old or 20 years old, we can do this together and we will reach your goals."}]}]',
          title: "Fitness Coach",
        },
      },
    },
    advertisementsDisabled: true,
    subdomain: "example-fitness",
    draftLastSaved: "2021-10-18T19:54:56.546Z",
    published: null,
    owner: "PuyAY2pEkHN4TCWTKrvBvGetbk22",
  },
  architect: {
    id: "lguyYDFbbU7gZveBkGiO",
    draftLastSaved: "2021-10-18T20:29:43.654Z",
    subdomain: "example-architect",
    draft: {
      content: {
        projects: [
          {
            id: "RpKVGECTOSWUv6KAXS40v",
            name: "Prospect Building ",
            startDate: 1546326000000,
            summary: "",
            description:
              '[{"type":"paragraph","children":[{"text":"I worked as a consultant for the recent renovations to this historic building. The Prospect Building was built in 1954 and my team and I aimed to preserve the mid-century architecture while adding contemporary accents. "}]}]',
            endDate: 1567317600000,
            images: {
              items: [
                {
                  type: "image/jpeg",
                  crop: null,
                  height: 1510,
                  processedUrl: null,
                  name: "pexels-maria-orlova-4916259.jpeg",
                  id: "4xqnBoXBJ3wZTsfC4S0nA",
                  zoom: null,
                  width: 2265,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fraw-4xqnBoXBJ3wZTsfC4S0nA?alt=media&token=f765306a-f040-426f-b882-24d2dde236ec",
                },
                {
                  type: "image/jpeg",
                  name: "pexels-nataliya-vaitkevich-4943082.jpeg",
                  zoom: null,
                  crop: null,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fraw-2B2uhOVY3ur1z1rNxvZ-9?alt=media&token=0c30da3c-b203-406f-925b-e0c27e8df881",
                  width: 2280,
                  height: 3420,
                  id: "2B2uhOVY3ur1z1rNxvZ-9",
                  processedUrl: null,
                },
                {
                  crop: null,
                  width: 1590,
                  processedUrl: null,
                  id: "vvNGCvbnou_6xXwHhi0KZ",
                  name: "pexels-maria-orlova-4916266.jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fraw-vvNGCvbnou_6xXwHhi0KZ?alt=media&token=de612bc0-f51e-4103-90d2-6a75330eb985",
                  type: "image/jpeg",
                  zoom: null,
                  height: 2385,
                },
                {
                  zoom: null,
                  width: 3420,
                  height: 2280,
                  type: "image/jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fraw-gGcX6qu7x1t0pH0nCIa97?alt=media&token=74d9ffe6-0e4f-4969-8a67-e5b5a81d20bf",
                  id: "gGcX6qu7x1t0pH0nCIa97",
                  processedUrl: null,
                  crop: null,
                  name: "pexels-isaw-company-955733.jpeg",
                },
              ],
            },
          },
          {
            summary: "",
            startDate: 1601532000000,
            id: "L8ARGH1ZLHIQOEK1dCrBL",
            endDate: 1614582000000,
            description:
              '[{"type":"paragraph","children":[{"text":"I was one of the main architects of the newly renovated Skyline Mall. Skyline Mall is a 80,900 square foot retail center located in Leander, Texas. "}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"My team and I remodeled 50% of the retail shops, including the creation of a new gym and a kids\' playground. Our work\'s purpose was to create a more welcoming space for families and individuals to enjoy, while appreciating the simple shapes and forms in architectural design. "}]}]',
            images: {
              items: [
                {
                  zoom: 1,
                  height: 3420,
                  id: "2kfOEalwqZIvs5e3vPa9X",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fraw-2kfOEalwqZIvs5e3vPa9X?alt=media&token=9009e8ad-a4ab-48ae-b75b-9871c6d4b889",
                  processedUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fprocessed-2kfOEalwqZIvs5e3vPa9X?alt=media&token=12398e84-6105-4b3d-a1b6-6769b4af4f3c",
                  name: "pexels-laurentiu-robu-2375131.jpeg",
                  type: "image/jpeg",
                  width: 2280,
                  crop: {
                    y: 27.094531250000003,
                    height: 72.90546875,
                    unit: "%",
                    width: 100,
                    x: 0,
                  },
                },
                {
                  id: "XWFNz0QILdecMyoPJg6jd",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fraw-XWFNz0QILdecMyoPJg6jd?alt=media&token=650c76e0-f280-43fe-bf37-ae7fb83301f1",
                  width: 2566,
                  type: "image/jpeg",
                  processedUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fprocessed-XWFNz0QILdecMyoPJg6jd?alt=media&token=771c7313-7966-48b2-b316-6e11f6b465cc",
                  height: 3420,
                  zoom: 1,
                  name: "pexels-lisa-2780551.jpeg",
                  crop: {
                    unit: "%",
                    width: 100,
                    height: 66.6390625,
                    x: 0,
                    y: 14.61796874999997,
                  },
                },
                {
                  name: "pexels-magda-ehlers-2861656.jpeg",
                  width: 3420,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fraw-ETIjJEZ8lAQM1mntzZFu3?alt=media&token=e8c32495-11b4-4d2d-9dd0-22acd3b3de7a",
                  processedUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fprocessed-ETIjJEZ8lAQM1mntzZFu3?alt=media&token=55066f11-d5f5-4c3c-a1e9-e66ee110cd3a",
                  crop: {
                    x: 0,
                    height: 77.62586805555556,
                    y: 22.374131944444446,
                    width: 100,
                    unit: "%",
                  },
                  zoom: 1,
                  height: 1922,
                  id: "ETIjJEZ8lAQM1mntzZFu3",
                  type: "image/jpeg",
                },
              ],
            },
            name: "Skyline Mall",
          },
        ],
        about: {
          logo: {
            items: [],
          },
          summary:
            "I'm passionate about intentional architecture created through conceptual clarity, and an honesty and simplicity of form and material.",
          lastName: "Martin",
          firstName: "Jordan",
          images: {
            items: [
              {
                type: "image/jpeg",
                name: "pexels-karolina-grabowska-6333498.jpeg",
                width: 3420,
                crop: {
                  height: 91.68124999999999,
                  unit: "%",
                  width: 100,
                  x: 0,
                  y: 0,
                },
                rawUrl:
                  "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fraw-V2RXUVBKI0QhlRencUuXF?alt=media&token=43a9e76a-4fbd-4e12-a5b3-f78f7c2e9a5f",
                processedUrl:
                  "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fprocessed-V2RXUVBKI0QhlRencUuXF?alt=media&token=08078853-7219-4d2d-8e9d-14de71f625c3",
                height: 2280,
                id: "V2RXUVBKI0QhlRencUuXF",
                zoom: 1,
              },
            ],
          },
          resume: {
            url:
              "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2Fr6KHmaWW9AR4m0uKRH0fgRnBflp2%2Fpublic%2Fresume-RESUME.pdf?alt=media&token=f7d9e4a5-7256-4054-b65f-5d350a98f969",
            name: "RESUME.pdf",
          },
          title: "Intentional Architect",
          description:
            '[{"type":"heading-two","children":[{"text":"I\'m "},{"text":"Jordan Martin","bold":true},{"text":" and I am passionate about intentional architecture. "}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"My objective is to simplify development, extensibility and usability through efficient, clever, and inspirational architectural design."}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"All my work is purposeful and created through planned architectural strategies and initiatives, which enhance solution design, performance, and usability and provide guidance for inter-team design and implementation synchronization. "}]}]',
        },
        contact: {
          email: {
            value: "contact@jordanarchitecture.com",
            hidden: false,
          },
          socialLinks: {
            items: [
              {
                url: "https://instagram.com",
                platform: "instagram",
                id: "Vv_8HX_MAeSIDHudUSU1B",
              },
              {
                platform: "pinterest",
                id: "hMDCYVSnsbTpthawicn1O",
                url: "https://pinterest.com",
              },
              {
                id: "NYkIJB_BElWLrCsN3ui9R",
                platform: "twitter",
                url: "https://twitter.com",
              },
            ],
          },
          phone: {
            hidden: false,
            value: "(111) 222-3456",
          },
        },
      },
      templateSettingsMap: {
        madrid: {
          palette: "gray",
          headingFont: "Epilogue",
          paragraphFont: "Lato",
        },
        gallery: {
          palette: "gray",
          headingFont: "Crimson Text",
          paragraphFont: "EB Garamond",
        },
        os: {
          headingFont: "Ubuntu Mono",
          wallpaper: {
            items: [
              {
                processedUrl: null,
                zoom: null,
                height: null,
                id: "Vo2SjHGFHIkWiQwTBTzRq",
                crop: null,
                width: null,
                type: "image/jpeg",
                name: "wallpaper-light.jpg",
                rawUrl: "https://vernos.us/templates/os/wallpaper-light.jpg",
              },
            ],
          },
          palette: "gray",
          paragraphFont: "Ubuntu Mono",
        },
        venice: {
          paragraphFont: "Ubuntu",
          palette: "gray",
          headingFont: "Ubuntu",
        },
        skrol: {
          palette: "purplePink",
          headingFont: "Montserrat",
          paragraphFont: "Lato",
        },
      },
      template: "madrid",
    },
    advertisementsDisabled: true,
    owner: "r6KHmaWW9AR4m0uKRH0fgRnBflp2",
    published: null,
  },
  computerEngineer: {
    id: "CZoqv213WGmtCkQ6KYPm",
    subdomain: "example-computerengineer",
    owner: "IBRS8Wlfpxc9tlwjmZhjaryX6AE2",
    draftLastSaved: "2021-10-18T20:36:40.031Z",
    published: null,
    advertisementsDisabled: true,
    draft: {
      content: {
        contact: {
          email: {
            hidden: false,
            value: "kevin.williams@engineering.com",
          },
          socialLinks: {
            items: [],
          },
          phone: {
            hidden: false,
            value: "(111) 222-3456",
          },
        },
        about: {
          resume: {
            url:
              "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FIBRS8Wlfpxc9tlwjmZhjaryX6AE2%2Fpublic%2Fresume-RESUME.pdf?alt=media&token=55c0646d-bc9e-495e-a5da-dc8dd8d18d1c",
            name: "RESUME.pdf",
          },
          description:
            '[{"type":"paragraph","children":[{"text":"Hi, I´m Kevin and I improve people\'s lives through engineering! I received my Master’s and Bachelor’s degrees in Electrical and Computer Engineering with a techincal concentration in Embedded Systems from the University of Michigan. "}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"At the University of Michigan, I founded and led the Sustainable Robotics team, which focused on building automated products and tools through a sustainable approach."}]}]',
          images: {
            items: [
              {
                height: 2280,
                zoom: 1,
                crop: {
                  x: 0,
                  width: 100,
                  unit: "%",
                  height: 88.1796875,
                  y: 0,
                },
                id: "Ivl5LHIY_gGQs-lyb_ElI",
                type: "image/jpeg",
                rawUrl:
                  "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FIBRS8Wlfpxc9tlwjmZhjaryX6AE2%2Fpublic%2Fraw-Ivl5LHIY_gGQs-lyb_ElI?alt=media&token=9a4ae1d7-e96a-4181-9a41-913d1e0a4bbd",
                width: 3420,
                processedUrl:
                  "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FIBRS8Wlfpxc9tlwjmZhjaryX6AE2%2Fpublic%2Fprocessed-Ivl5LHIY_gGQs-lyb_ElI?alt=media&token=aed0e8fb-36d1-4232-b2bb-9d97aa62a4f4",
                name: "q.jpeg",
              },
            ],
          },
          logo: {
            items: [],
          },
          firstName: "Kevin",
          title: "Embedded Systems Engineer",
          summary: "I like using engineering to improve people's lives. ",
          lastName: "Williams",
        },
        projects: [
          {
            summary:
              "I was an engineering teacher and mentor at an Elementary School",
            images: {
              items: [
                {
                  crop: {
                    width: 100,
                    unit: "%",
                    height: 69.284375,
                    y: 30.715624999999985,
                    x: 0,
                  },
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FIBRS8Wlfpxc9tlwjmZhjaryX6AE2%2Fpublic%2Fraw-bcf_a317Sq3QWxWa191zf?alt=media&token=e8a49c74-e2bc-45d1-9f93-200a7747f340",
                  width: 2280,
                  height: 3420,
                  processedUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FIBRS8Wlfpxc9tlwjmZhjaryX6AE2%2Fpublic%2Fprocessed-bcf_a317Sq3QWxWa191zf?alt=media&token=b554fc34-9006-4fd6-a8e3-d5f7c6bf6c6a",
                  id: "bcf_a317Sq3QWxWa191zf",
                  name: "pexels-alena-darmel-7750693.jpeg",
                  type: "image/jpeg",
                  zoom: 1,
                },
                {
                  name: "pexels-cottonbro-4705622.jpeg",
                  type: "image/jpeg",
                  crop: {
                    width: 100,
                    height: 80.60703125,
                    unit: "%",
                    y: 19.3929687499999,
                    x: 0,
                  },
                  processedUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FIBRS8Wlfpxc9tlwjmZhjaryX6AE2%2Fpublic%2Fprocessed-PgEFhZ_f6DIYw7oQm0fkm?alt=media&token=168c9f17-445e-43bd-91d7-0fe1dcd20623",
                  id: "PgEFhZ_f6DIYw7oQm0fkm",
                  zoom: 1,
                  height: 2850,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FIBRS8Wlfpxc9tlwjmZhjaryX6AE2%2Fpublic%2Fraw-PgEFhZ_f6DIYw7oQm0fkm?alt=media&token=58c491a2-c135-477b-a07d-125afe7d0ce9",
                  width: 1899,
                },
              ],
            },
            description:
              '[{"type":"paragraph","children":[{"text":"I have been an Engineering teacher and mentor at Wallenberg\'s Elementary School since January 2019. I am passionate about engineering and giving back to the community. I enjoy teaching science to kids and motivate them to pursue an education in STEM. "}]}]',
            name: "Engineering Teacher and Mentor",
            endDate: 1635746400000,
            id: "1zfNwXy5VU-YdpaPjVSdG",
            startDate: 1546326000000,
          },
          {
            id: "eerEi_4TSDvUnOWCMo41l",
            summary: "I built and designed a solar-powered autonomous car",
            images: {
              items: [
                {
                  type: "image/jpeg",
                  zoom: null,
                  height: 2170,
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FIBRS8Wlfpxc9tlwjmZhjaryX6AE2%2Fpublic%2Fraw-kC40koT_2OBv3NkTz7evc?alt=media&token=ea9a33c0-f308-42ea-a218-1f786f2abbf2",
                  name: "pexels-mikhail-nilov-9242908.jpeg",
                  crop: null,
                  width: 3257,
                  processedUrl: null,
                  id: "kC40koT_2OBv3NkTz7evc",
                },
                {
                  type: "image/jpeg",
                  height: 2251,
                  processedUrl: null,
                  crop: null,
                  width: 3420,
                  zoom: null,
                  id: "jBxxlgPileSEtwdO6X8oD",
                  name: "pexels-vanessa-loring-7868836.jpeg",
                  rawUrl:
                    "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FIBRS8Wlfpxc9tlwjmZhjaryX6AE2%2Fpublic%2Fraw-jBxxlgPileSEtwdO6X8oD?alt=media&token=7c394d95-ecbd-4518-93a3-9a85930eb465",
                },
              ],
            },
            endDate: 1590991200000,
            name: "Solar-powered autonomous car",
            description:
              '[{"type":"paragraph","children":[{"text":"I designed and built a solar-powered automated car using a micro-controller with printed circuit boards (PCBs) housing the power electronic curcuits and control software."}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"The project covers many different engineering disciplines including automatic control, power electronics, electric drives, mechatronics, telecommunication and embedded computation."}]}]',
            startDate: 1577862000000,
          },
        ],
      },
      template: "os",
      templateSettingsMap: {
        gallery: {
          headingFont: "Crimson Text",
          palette: "gray",
          paragraphFont: "EB Garamond",
        },
        skrol: {
          palette: "purplePink",
          headingFont: "Montserrat",
          paragraphFont: "Lato",
        },
        madrid: {
          headingFont: "Montserrat",
          palette: "desert",
          paragraphFont: "Lato",
        },
        os: {
          paragraphFont: "Ubuntu Mono",
          headingFont: "Ubuntu Mono",
          palette: "gray",
          wallpaper: {
            items: [
              {
                height: 2261,
                name: "pexels-francesco-ungaro-2835436.jpeg",
                processedUrl: null,
                crop: null,
                width: 3420,
                id: "62REc_FEc3fnRVjHHS3PD",
                zoom: null,
                rawUrl:
                  "https://firebasestorage.googleapis.com/v0/b/vernos-prod.appspot.com/o/users%2FIBRS8Wlfpxc9tlwjmZhjaryX6AE2%2Fpublic%2Fraw-62REc_FEc3fnRVjHHS3PD?alt=media&token=57db751c-0085-44fe-81a9-bd92d44bf4b6",
                type: "image/jpeg",
              },
            ],
          },
        },
        venice: {
          palette: "gray",
          paragraphFont: "Ubuntu",
          headingFont: "Ubuntu",
        },
      },
    },
  },
};

export const getPreviewablePortfolio = ({
  template = "gallery",
  persona = "wedding",
} = {}) => {
  const folio = EXAMPLE_PORTFOLIOS[persona];
  const folioCopy = {
    ...folio,
    draft: {
      ...folio.draft,
      template,
    },
  };
  return processPortfolio(folioCopy, { useDraft: true });
};

export const templates = {
  venice: {
    label: "Venice",
    img: `/templates/venice.png`,
    defaults: {
      headingFont: "Ubuntu",
      paragraphFont: "Ubuntu",
      palette: "gray",
    },
    palettes: ["desert", "gray"],
    locked: false,
  },
  madrid: {
    label: "Madrid",
    img: `/templates/madrid.png`,
    defaults: {
      headingFont: "Montserrat",
      paragraphFont: "Lato",
      palette: "desert",
    },
    locked: false,
    palettes: ["desert", "gray"],
  },
  skrol: {
    label: "Skrol",
    img: `/templates/skrol.png`,
    defaults: {
      headingFont: "Montserrat",
      paragraphFont: "Lato",
      palette: "purplePink",
    },
    palettes: ["blackRed", "purplePink", "blueGreen"],
    locked: true,
  },
  os: {
    label: "Operating System",
    img: `/templates/os.png`,
    defaults: {
      headingFont: "Ubuntu Mono",
      paragraphFont: "Ubuntu Mono",
      palette: "gray",
      wallpaper: {
        items: [
          {
            id: nanoid(),
            name: "wallpaper-light.jpg",
            type: "image/jpeg",
            rawUrl: "https://vernos.us/templates/os/wallpaper-light.jpg",
          },
        ],
      },
    },
    palettes: ["gray", "desert", "pink"],
    locked: true,
  },
  gallery: {
    label: "Gallery",
    img: `/templates/gallery.png`,
    defaults: {
      headingFont: "Crimson Text",
      paragraphFont: "EB Garamond",
      palette: "gray",
    },
    palettes: ["gray", "pink", "desert"],
    locked: false,
  },
};

// SCHEMAS
const hideable = (model) => {
  const _Model = types.model(model.name, {
    hidden: types.optional(types.boolean, false),
    value: model,
  });

  const Model = types.snapshotProcessor(_Model, {
    postProcessor(snapshot) {
      if (snapshot.hidden) {
        return undefined;
      } else {
        return snapshot.value;
      }
    },
  });
  return types.optional(Model, {});
};

// All percentages
export const Crop = types.model("Crop", {
  unit: types.string,
  x: types.number,
  y: types.number,
  width: types.number,
  height: types.number,
});

export const Media = types.model("Media", {
  id: types.string,
  type: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
  rawUrl: types.maybeNull(types.string),
  processedUrl: types.maybeNull(types.string),
  crop: types.maybeNull(Crop),
  zoom: types.maybeNull(types.number),
  width: types.maybeNull(types.number),
  height: types.maybeNull(types.number),
});

export const Medias = types.model("Medias", {
  items: types.array(Media),
});

const Resume = types.model("Resume", {
  name: types.string,
  url: types.string,
});

export const _About = types.model("About", {
  firstName: types.optional(types.string, ""),
  lastName: types.optional(types.string, ""),
  title: types.optional(types.string, ""),
  summary: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  images: types.optional(Medias, { items: [] }),
  logo: types.optional(Medias, { items: [] }),
  resume: types.maybeNull(Resume),
});

const About = types.snapshotProcessor(_About, {
  postProcessor(snapshot) {
    return {
      ...snapshot,
      firstName: snapshot.firstName || "Firstname",
      lastName: snapshot.lastName || "Lastname",
      title: snapshot.title || "Your occupation",
      summary: snapshot.summary || "Tell us about you in a sentence",
      description: !isEmpty(snapshot.description)
        ? snapshot.description
        : createDefaultNode("Tell us all about you"),
      images: {
        items: snapshot.images.items.length
          ? snapshot.images.items
          : [DEFAULT_MEDIA],
      },
    };
  },
});

export const SocialLink = types.model("SocialLink", {
  id: types.string,
  platform: types.maybeNull(types.string),
  url: types.maybeNull(types.string),
});

export const SocialLinks = types.model("SocialLinks", {
  items: types.array(SocialLink),
});

export const Contact = types.model("Contact", {
  email: hideable(types.optional(types.string, "")),
  phone: hideable(types.optional(types.string, "")),
  socialLinks: types.optional(SocialLinks, { items: [] }),
});

export const _Project = types.model("Project", {
  id: types.string,
  name: types.optional(types.string, ""),
  summary: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  images: types.optional(Medias, { items: [] }),
  startDate: types.optional(types.maybeNull(types.Date), null),
  endDate: types.optional(types.maybeNull(types.Date), null),
});

const Project = types.snapshotProcessor(_Project, {
  postProcessor(snapshot) {
    return {
      ...snapshot,
      name: snapshot.name || "Untitled Work",
      summary: snapshot.summary || "Tell us about this work in a sentence",
      description: !isEmpty(snapshot.description)
        ? snapshot.description
        : createDefaultNode("Tell us all about this work"),
      images: {
        items: snapshot.images.items.length
          ? snapshot.images.items
          : [DEFAULT_MEDIA],
      },
    };
  },
});

export const Content = types.model("Content", {
  about: types.optional(About, {}),
  contact: types.optional(Contact, {}),
  projects: types.optional(types.array(Project), []),
});

// const TemplateSettings = types.model("TemplateSettings", {
//   headingFont: types.string,
//   paragraphFont: types.string,
//   palette: types.string,
// });

// const TemplateSettingsMap = types.model("TemplateSettingsMap", {
//   madrid: types.optional(TemplateSettings, templates.madrid.defaults),
//   venice: types.optional(TemplateSettings, templates.venice.defaults),
//   skrol: types.optional(TemplateSettings, templates.skrol.defaults),
//   os: types.optional(TemplateSettings, templates.os.defaults),
// });

const templateModels = {
  os: types.snapshotProcessor(
    types.model("OsSettings", {
      headingFont: types.optional(
        types.string,
        templates.os.defaults.headingFont
      ),
      paragraphFont: types.optional(
        types.string,
        templates.os.defaults.paragraphFont
      ),
      palette: types.optional(types.string, templates.os.defaults.palette),
      wallpaper: types.optional(Medias, templates.os.defaults.wallpaper),
    }),
    {
      postProcessor(snapshot) {
        return {
          ...snapshot,
          wallpaper: {
            items: snapshot.wallpaper.items.length
              ? snapshot.wallpaper.items
              : [DEFAULT_MEDIA],
          },
        };
      },
    }
  ),
  madrid: types.model("MadridSettings", {
    headingFont: types.optional(
      types.string,
      templates.madrid.defaults.headingFont
    ),
    paragraphFont: types.optional(
      types.string,
      templates.madrid.defaults.paragraphFont
    ),
    palette: types.optional(types.string, templates.madrid.defaults.palette),
  }),

  skrol: types.model("SkrolSettings", {
    headingFont: types.optional(
      types.string,
      templates.skrol.defaults.headingFont
    ),
    paragraphFont: types.optional(
      types.string,
      templates.skrol.defaults.paragraphFont
    ),
    palette: types.optional(types.string, templates.skrol.defaults.palette),
  }),
  venice: types.model("VeniceSettings", {
    headingFont: types.optional(
      types.string,
      templates.venice.defaults.headingFont
    ),
    paragraphFont: types.optional(
      types.string,
      templates.venice.defaults.paragraphFont
    ),
    palette: types.optional(types.string, templates.venice.defaults.palette),
  }),
  gallery: types.model("GallerySettings", {
    headingFont: types.optional(
      types.string,
      templates.gallery.defaults.headingFont
    ),
    paragraphFont: types.optional(
      types.string,
      templates.gallery.defaults.paragraphFont
    ),
    palette: types.optional(types.string, templates.gallery.defaults.palette),
  }),
};

const TemplateSettingsMap = types
  .model("TemplateSettingsMap", {
    madrid: types.optional(templateModels.madrid, {}),
    venice: types.optional(templateModels.venice, {}),
    skrol: types.optional(templateModels.skrol, {}),
    gallery: types.optional(templateModels.gallery, {}),
    os: types.optional(templateModels.os, {}),
  })
  .actions((self) => ({
    set: (patch) => {
      Object.entries(patch).forEach(([key, val]) => {
        if (val !== undefined) {
          self[key] = val;
        }
      });
    },
  }));

export const _PortfolioData = types.model("PortfolioData", {
  content: types.optional(Content, {}),
  template: types.optional(types.string, "madrid"),
  templateSettingsMap: types.optional(TemplateSettingsMap, {}),
});

const PortfolioData = types.snapshotProcessor(_PortfolioData, {
  postProcessor(snapshot) {
    return {
      ...snapshot,
      templateSettings: snapshot.templateSettingsMap[snapshot.template],
    };
  },
});

const _Portfolio = types.model("Portfolio", {
  id: types.string,
  subdomain: types.maybeNull(types.string),
  draft: PortfolioData,
  draftLastSaved: types.maybeNull(types.string),
  published: types.maybeNull(PortfolioData),
  advertisementsDisabled: types.maybe(types.boolean),
});

const PublishedPortfolio = types.snapshotProcessor(_Portfolio, {
  postProcessor(snapshot) {
    const data = snapshot.published;
    delete snapshot.draft;
    delete snapshot.published;
    return {
      ...snapshot,
      data,
    };
  },
});

const DraftPortfolio = types.snapshotProcessor(_Portfolio, {
  postProcessor(snapshot) {
    const data = snapshot.draft;
    delete snapshot.draft;
    delete snapshot.published;
    return {
      ...snapshot,
      data,
    };
  },
});

export const processPortfolio = (portfolio, { useDraft = false } = {}) => {
  if (!portfolio) return portfolio;
  if (useDraft) {
    return DraftPortfolio.create(portfolio).toJSON();
  } else {
    return PublishedPortfolio.create(portfolio).toJSON();
  }
};

const DEFAULT_MEDIA = Media.create({
  id: nanoid(),
  rawUrl: "/image-unavailable.jpg",
  processedUrl: null,
  crop: null,
  zoom: null,
  width: null,
  height: null,
}).toJSON();
