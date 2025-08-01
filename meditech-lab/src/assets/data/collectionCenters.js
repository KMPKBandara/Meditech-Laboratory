// Data
const branches = [
  {
    name: "Balangoda Main Branch",
    address:
      "Meditech Laboratory Service, No:08 Kalthota Road, Balagahamula, Balangoda ",
    phone: "0452288388 / 0717184606 / 0715179093 / Whatsapp - 0715179093",
    email: "----------------------",
    specialties: [
      "Blood Tests",
      "X-Ray",
      "ECG",
      "Ultrasound",
      "CT Scan",
      "MRI",
    ],
    hours: "24/7",
    collectionCenters: [],
    detailedCenters: [
      {
        id: 1,
        name: "Waleboda Collection Center",
        address: "Manathunkanda, Egoda, waleboda",
        phone: "0772712861 / 0717416648",
        hours: "7 AM - 5 PM (Poya Day Closed)",
      },
      {
        id: 2,
        name: " Rassagala Collection Center",
        address: " Rassagala,Balangoda(Rassagala Town)",
        phone: "0716519386",
        hours: "7 AM - 10 PM / 4 PM - 7.30 PM(Poya day and sunday closed)",
      },
      {
        id: 3,
        name: " Balangoda Privet Hospital ",
        address: " No:10, Karawketiya Road, Balangoda",
        phone: "071-4453493",
        hours: "7 AM - 7 PM / 6.30 PM - 4 P - (Poya day)",
      },
      {
        id: 4,
        name: "Pinnawala Privet Hospital ",
        address: " No:295/1, Udagama Junction, Pinnawala",
        phone: "070 26 36 711",
        hours: "7.15 AM - 5 PM  (Poya day closed)",
      },
      {
        id: 5,
        name: "Kalthota  Collection Center",
        address: " Opposite the Kalthota Hospital kalthota, Balangoda.",
        phone: "0714998641",
        hours: "7 AM - 5 PM  (Poya day closed)",
      },
      {
        id: 6,
        name: " Mawela Collection Center",
        address: "Thalakolahinna Mawela Balangoda.",
        phone: "077 365 0097 / 076 106 1933",
        hours: "7 AM - 4 PM  (Poya day closed)",
      },
      {
        id: 7,
        name: " Oluganthota Collection Center",
        address: " No 450H, Oluganthota, Balangoda",
        phone: "0712104627",
        hours: "6.30 AM - 7 PM / 6.30 AM - 4 PM - (Poya day)",
      },
      {
        id: 8,
        name: " Udawela Collection Center",
        address: "Udawela,Opanayaka.",
        phone: "0702623864",
        hours: "7 AM - 5 PM  (Poya day closed)",
      },
      {
        id: 9,
        name: "Pambahinna Collection Center",
        address: " Hospital Junction Samanalawewa Road Pambahinna Belihuloya ",
        phone: "0710997917",
        hours: "7 AM - 5 PM  (Poya day closed)",
      },
      {
        id: 10,
        name: "Care Medical Center(Dr.Sujith Priyantha Kumara) ",
        address: "No 32 Old Road Balangoda",
        phone: "0778005024 / 0719180543",
        hours: "7 AM - 12.30 PM  (Poya day closed)",
      },
      {
        id: 11,
        name: " Suwasewana Medical Center",
        address: " Balangoda Co-Oparative Balagahamula Balangoda",
        phone: "0717129944",
        hours: "7 AM - 5 PM  (Poya day closed)",
      },
    ],
    mapQuery:
      "No.%20123%20Main%20Street,%20Balangoda,%20Sri%20Lanka+(Meditech%20Laboratory%20Balangoda)",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    name: "Rathnapura Main Branch",
    address:
      "No:344,Hospital Junction,Colombo Road,Meditech Laboratory Rathnapura.",
    phone: "045 222 6446  / 071 155 6446",
    email: "meditechrathnapura@gmail.com",
    specialties: [
      "Blood Tests",
      "X-Ray",
      "ECG",
      "Ultrasound",
      "CT Scan",
      "MRI",
    ],
    hours: "7 AM - 7 PM  (poyaday Closed)",
    collectionCenters: [],
    detailedCenters: [
      {
        id: 1,
        name: "Gorakaela Collection Center",
        address: "Gorakaela Junction,Dodampe.",
        phone: "071 551 5681",
        hours: "7 AM - 11 AM",
      },
      {
        id: 2,
        name: "Watapotha Collection Center",
        address: "Watapotha Junction,Watapotha,Nivitigala.",
        phone: "071 235 2689 / 076 215 4526",
        hours: "7.45 AM - 5 PM",
      },
      {
        id: 3,
        name: "Malwala Collection Center",
        address: "Medical Center,Badu waththa,Malwala,Rathnapura.",
        phone: " 076 662 8850 / 071 396 0362",
        hours: "7 AM - 10 AM (Poya day Closed)",
      },
      {
        id: 4,
        name: "Sri palabaddala Collection Center",
        address:
          "In front of sri palabaddala PMCU, sri palabaddala,Rathnapura.",
        phone: " 076 674 5969",
        hours: "7 AM - 10 AM (Sunday & poya day closed.)",
      },
      {
        id: 5,
        name: "Erathna Collection Center",
        address: "Gangabada,Erathna,Kuruwita,(Infront of New post office)",
        phone: "074 289 2481 / 070 169 9989",
        hours: "6.30 AM - 11 AM (Poya day Closed)",
      },
      {
        id: 6,
        name: "Gilimale -Thannahena Collection Center",
        address: "Medical Center Thannahena,Gilimale,Rathnapura.",
        phone: "077 245 5566 / 071 807 8081",
        hours: "6.45 AM - 12 Noon (Poya day Closed)",
      },
      {
        id: 7,
        name: "Gilimale Collection Center",
        address: " In front of Gilimale Hospital,Gilimale,Rathnapura.",
        phone: " 077 820 8324",
        hours: "6.45 AM - 4 PM (Poya day Closed)",
      },
      {
        id: 8,
        name: "Welimaluwa Collection Center",
        address: "Medical center Welimaluwa,Rathnapura.",
        phone: "071 904 5733 / 071 895 6786",
        hours: "7 AM - 10 AM (Poya day Closed)",
      },
      {
        id: 9,
        name: "Baanagoda Collection Center",
        address:
          "Medical center Near the Sub post office,Baanagoda, lellopitiya, Rathnapura ",
        phone: "071 902 0685 / 071 929 7319",
        hours: "7 AM - 10 AM (Sunday and poya day closed.)",
      },
      {
        id: 10,
        name: "Paradise Collection Center",
        address:
          "In front of Vijaya kumarathunga Vidyalaya, paradise, kuruwita.",
        phone: "076 749 1545 / 076 797 4696",
        hours: "7 AM - 10 AM (poya day closed.)",
      },
      {
        id: 11,
        name: "Hidellana Collection Center",
        address:
          "Near the weragoda temple, Medical center, Weragoda,Hidellana, Rathnapura.",
        phone: "077 788 9942 / 077 883 3725",
        hours: "7 AM - 10 AM (poya day closed.)",
      },
      {
        id: 12,
        name: "Rathnapura Town Collection Center",
        address: "Medical center, Near the prasanna gems,Rathnapura.",
        phone: "071 155 6446",
        hours: "7 AM - 10 AM (poya day closed.)",
      },
      {
        id: 13,
        name: "Ganegama Collection Center",
        address: "Ganegama Junction, Ganegama, pelmadulla.",
        phone: "077 177 5132 / 071 174 1770",
        hours: "7 AM - 10 AM (poya day closed.)",
      },
      {
        id: 14,
        name: "Sannasgama Collection Center",
        address:
          "Medex Pharmacy & Medicare Medical Center,Sannasgama,pelmadulla.",
        phone: "070 202 9177 / 071 174 1770",
        hours: "7 AM - 4 PM",
      },
      {
        id: 15,
        name: "Yakdehiwaththa Collection Center",
        address: "Medical center, Medical center, yakdehiwaththa, Nivitigala.",
        phone: "071 323 6301 / 077 883 3725",
        hours: "7 AM - 10 AM (Poya day closed)",
      },
      {
        id: 16,
        name: "Nivitigala Collection Center",
        address: "Jayaruwan Medical Center,In front of BOC bank, Nivitigala.",
        phone: "074 348 2651",
        hours: "7 AM - 5 PM (Poya day closed)",
      },
    ],
    mapQuery:
      "No.%20234%20Main%20Street,%20Rathnapura,%20Sri%20Lanka+(Meditech%20Laboratory%20Rathnapura)",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-sky-100",
  },
  {
    name: "Welimada Main Branch",
    address: "No:789 Hill Street, Welimada, Sri Lanka",
    phone: "+94 52 224 5566",
    email: "welimada@meditech.lk",
    specialties: [
      "Blood Tests",
      "X-Ray",
      "ECG",
      "Ultrasound",
      "CT Scan",
      "MRI",
    ],
    hours: "7 AM - 9 PM  (Poya Day closed.)",
    collectionCenters: [],
    detailedCenters: [
      {
        id: 1,
        name: "Nugathalawa Collection Center",
        address: "Nuwaraeliya Road Nugathalawa.",
        phone: "0713776200",
        hours: "7 AM - 9 AM",
      },
      {
        id: 2,
        name: "Boragas Collection Center",
        address: "Rendapola,Boragas",
        phone: "0712255060",
        hours: "6.45 AM - 9.30 AM | 4 PM-8 PM",
      },
      {
        id: 3,
        name: "Ambagasdowa Collection Center",
        address: "Near Temple Ambagasdowa",
        phone: "071661563",
        hours: "7 AM - 8 AM",
      },
      {
        id: 4,
        name: "Madawela Collection Center",
        address: "Daya stores,Walahamulla.",
        phone: "0703900787",
        hours: "7 AM - 8 AM",
      },
      {
        id: 5,
        name: "Guruthalawa Collection Center",
        address: "Medical center Main Street Guruthalawa",
        phone: "0774177509",
        hours: "7 AM - 9 AM",
      },
      {
        id: 6,
        name: "Sappukade Collection Center",
        address: "Sappukade welimada",
        phone: "0715557339",
        hours: "7 AM - 8 AM",
      },
      {
        id: 7,
        name: "Mirahawatta Collection Center",
        address: "Near hospital Mirahawatta",
        phone: "0703061376",
        hours: "7 AM - 10 AM(Tuesday,Thursday , Saturday )",
      },
      {
        id: 8,
        name: "Diaraba Collection Center",
        address: "Bandarawela road Diaraba",
        phone: "0703061376",
        hours: "7 AM - 9 AM",
      },
      {
        id: 9,
        name: "Welimada town Collection Center",
        address: "Hospital roadWelimada",
        phone: "0767221044",
        hours: "7 AM - 9 AM",
      },
      {
        id: 10,
        name: "Rendapola Collection Center",
        address: "Nuwaraeliya roadRendapola",
        hours: "7 AM - 9 AM",
      },
      {
        id: 11,
        name: "Puhulpola Collection Center",
        address: "Bandarawela roadPuhulpola",
        phone: "0703061376",
        hours: "7 AM - 9 AM",
      },
      {
        id: 12,
        name: "Udubadana Collection Center",
        address: "Udubadana Welimada",
        hours: "7 AM - 9 AM",
      },
    ],
    mapQuery:
      "No.%20789%20Hill%20Street,%20Welimada,%20Sri%20Lanka+(Meditech%20Laboratory%20Welimada)",
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-gradient-to-br from-blue-100 to-indigo-100",
  },
  {
    name: "Kalawana Main Branch",
    address: "HOSPITAL ROAD, KALAWANA",
    phone: ["0452255370 / 0717647460"],
    email: "kalawanalab@gmail.com",
    specialties: [
      "Blood Tests",
      "X-Ray",
      "ECG",
      "Ultrasound",
      "CT Scan",
      "MRI",
    ],
    hours: "6 AM - 7 PM",
    collectionCenters: [],
    detailedCenters: [
      {
        id: 1,
        name: "Weddagala Collection Center",
        address: "kudawa Road, Weddagala",
        phone: "+94 71 212 6728",
        email: "Weddagalameditech@gmail.com",
        hours: "7 AM - 12 noon",
      },
      {
        id: 2,
        name: "Delwala Collection Center",
        address: "Infront Of PMCU, Delwala",
        phone: "+94 70 140 8712",
        email: "Meditechdelwala@gmail.com",
        hours: "7 AM - 4 PM",
      },
      {
        id: 3,
        name: "Karavita Collection Center",
        address: "Near to Primary School, Karavita Jnction",
        phone: "+94 76 736 8078",
        email: "Meditechkaravita@gmail.com",
        hours: "7 AM - 12 noon",
      },
      {
        id: 4,
        name: "Pothupitiya Collection Center",
        address: "Kalawana road, Pothupitiya",
        phone: "+94 45 313 0233",
        email: "Meditechpothupitiya@gmail.com",
        hours: "7 AM - 6 PM",
      },
      {
        id: 5,
        name: "Rabuka Collection Center",
        address: "Rabuka Junction, Pothupitiya",
        phone: "+94 71 460 4029",
        email: "Meditechrabuka@gmail.com",
        hours: "7 AM - 6 PM",
      },
    ],
    mapQuery:
      "No.%20321%20River%20Road,%20Kalawana,%20Sri%20Lanka+(Meditech%20Laboratory%20Kalawana)",
    color: "from-blue-300 to-blue-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-150",
  },
];

export default branches;
