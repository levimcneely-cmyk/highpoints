// ══════════════════════════════════════════════════════════════
//  data.js — the ONE place for your data. Loaded by index.html and peak.html.
//
//  SUMMITED  = your permanent record (anything you log on the site is saved to
//              the Google Sheet and merged on top of this).
//  HIGHPOINTS = the 50 peaks (elevation/gain/distance/Martin/effort from
//              highpoint.guide).
// ══════════════════════════════════════════════════════════════

const SUMMITED = [
  { state:"FL", date:"2017-02-20", conditions:"sunny and 70", partners:"Ali", notes:"Jeepin'" },
  { state:"TN", date:"2020-09-04", conditions:"foggy and dark", partners:"Alex", notes:"Southern Six Pack" },
  { state:"GA", date:"2020-09-05", conditions:"sunny and 60", partners:"Alex", notes:"Southern Six Pack" },
  { state:"NC", date:"2020-09-05", conditions:"sunny and 60", partners:"Alex", notes:"Southern Six Pack" },
  { state:"SC", date:"2020-09-05", conditions:"sunny and 60", partners:"Alex", notes:"Southern Six Pack" },
  { state:"KY", date:"2020-09-06", conditions:"sunny and 70", partners:"Alex", notes:"Southern Six Pack" },
  { state:"VA", date:"2020-09-06", conditions:"sunny and 80", partners:"Alex", notes:"Southern Six Pack and wild ponies" },
  { state:"AZ", date:"2021-09-05", conditions:"sunny and 70", partners:"Alex", notes:"R2 + Highpoint = greatest adventure ever" },
  { state:"DE", date:"2022-05-20", conditions:"sunny and 70", partners:"Alex", notes:"Tour of I70" },
  { state:"MD", date:"2022-05-21", conditions:"sunny and 80", partners:"Alex", notes:"Tour of I70" },
  { state:"PA", date:"2022-05-21", conditions:"sunny and 80", partners:"Alex", notes:"Tour of I70" },
  { state:"WV", date:"2022-05-21", conditions:"sunny and 80", partners:"Alex", notes:"Tour of I70" },
  { state:"IN", date:"2022-05-22", conditions:"cloudy and lame", partners:"Alex", notes:"Tour of I70" },
  { state:"OH", date:"2022-05-22", conditions:"cloudy and cold", partners:"Alex", notes:"Tour of I70" },
  { state:"KS", date:"2026-05-16", conditions:"hot and windy", partners:"Brandon", notes:"on the way to WCE Intro Meeting (NRTC)" },
];

const HIGHPOINTS = [
  {state:"AK",name:"Alaska",        peak:"Denali",                 elev:20320,gain:24500,dist:56,  diff:10,effort:1000,lat:63.069,lng:-151.007,guide:"https://highpoint.guide/ak/"},
  {state:"WY",name:"Wyoming",       peak:"Gannett Peak",           elev:13804,gain:8650, dist:40.4,diff:9, effort:506, lat:43.184,lng:-109.654,guide:"https://highpoint.guide/wy/"},
  {state:"WA",name:"Washington",    peak:"Mount Rainier",          elev:14411,gain:9100, dist:16,  diff:9, effort:366, lat:46.853,lng:-121.731,guide:"https://highpoint.guide/wa/"},
  {state:"MT",name:"Montana",       peak:"Granite Peak",           elev:12799,gain:7700, dist:22.2,diff:9, effort:368, lat:45.163,lng:-109.808,guide:"https://highpoint.guide/mt/"},
  {state:"CA",name:"California",    peak:"Mount Whitney",          elev:14494,gain:6750, dist:21.4,diff:7, effort:263, lat:36.578,lng:-118.292,guide:"https://highpoint.guide/ca/"},
  {state:"UT",name:"Utah",          peak:"Kings Peak",             elev:13528,gain:5350, dist:28.8,diff:7, effort:291, lat:40.776,lng:-110.373,guide:"https://highpoint.guide/ut/"},
  {state:"CO",name:"Colorado",      peak:"Mount Elbert",           elev:14440,gain:5000, dist:9,   diff:6, effort:147, lat:39.118,lng:-106.445,guide:"https://highpoint.guide/co/"},
  {state:"OR",name:"Oregon",        peak:"Mount Hood",             elev:11239,gain:5300, dist:8,   diff:8, effort:222, lat:45.374,lng:-121.696,guide:"https://highpoint.guide/or/"},
  {state:"ID",name:"Idaho",         peak:"Borah Peak",             elev:12662,gain:5550, dist:6.8, diff:8, effort:181, lat:44.137,lng:-113.781,guide:"https://highpoint.guide/id/"},
  {state:"NV",name:"Nevada",        peak:"Boundary Peak",          elev:13140,gain:4400, dist:7.4, diff:6, effort:126, lat:37.846,lng:-118.351,guide:"https://highpoint.guide/nv/"},
  {state:"AZ",name:"Arizona",       peak:"Humphreys Peak",         elev:12633,gain:3500, dist:9,   diff:6, effort:120, lat:35.347,lng:-111.678,guide:"https://highpoint.guide/az/"},
  {state:"NY",name:"New York",      peak:"Mount Marcy",            elev:5344, gain:3200, dist:14.8,diff:5, effort:151, lat:44.113,lng:-73.924, guide:"https://highpoint.guide/ny/"},
  {state:"ME",name:"Maine",         peak:"Katahdin",               elev:5268, gain:4200, dist:10.4,diff:5, effort:141, lat:45.904,lng:-68.921, guide:"https://highpoint.guide/me/"},
  {state:"NM",name:"New Mexico",    peak:"Wheeler Peak",           elev:13161,gain:3250, dist:6.2, diff:6, effort:98,  lat:36.557,lng:-105.417,guide:"https://highpoint.guide/nm/"},
  {state:"TX",name:"Texas",         peak:"Guadalupe Peak",         elev:8749, gain:2950, dist:8.4, diff:5, effort:106, lat:31.891,lng:-104.860,guide:"https://highpoint.guide/tx/"},
  {state:"VA",name:"Virginia",      peak:"Mount Rogers",           elev:5729, gain:1500, dist:8.6, diff:4, effort:81,  lat:36.660,lng:-81.544, guide:"https://highpoint.guide/va/"},
  {state:"OK",name:"Oklahoma",      peak:"Black Mesa",             elev:4975, gain:775,  dist:8.6, diff:4, effort:68,  lat:36.931,lng:-102.998,guide:"https://highpoint.guide/ok/"},
  {state:"SD",name:"South Dakota",  peak:"Black Elk Peak",         elev:7242, gain:1500, dist:5.8, diff:4, effort:64,  lat:43.866,lng:-103.532,guide:"https://highpoint.guide/sd/"},
  {state:"MN",name:"Minnesota",     peak:"Eagle Mountain",         elev:2301, gain:600,  dist:7,   diff:4, effort:55,  lat:47.899,lng:-90.561, guide:"https://highpoint.guide/mn/"},
  {state:"VT",name:"Vermont",       peak:"Mount Mansfield",        elev:4393, gain:1053, dist:2.8, diff:3, effort:28,  lat:44.544,lng:-72.814, guide:"https://highpoint.guide/vt/"},
  {state:"CT",name:"Connecticut",   peak:"Mount Frissell",         elev:2380, gain:862,  dist:2.3, diff:3, effort:31,  lat:42.050,lng:-73.484, guide:"https://highpoint.guide/ct/"},
  {state:"ND",name:"North Dakota",  peak:"White Butte",            elev:3506, gain:400,  dist:3.4, diff:2, effort:29,  lat:46.387,lng:-103.302,guide:"https://highpoint.guide/nd/"},
  {state:"HI",name:"Hawaii",        peak:"Mauna Kea",              elev:13796,gain:230,  dist:0.4, diff:2, effort:7,   lat:19.821,lng:-155.468,guide:"https://highpoint.guide/hi/"},
  {state:"MD",name:"Maryland",      peak:"Hoye Crest",             elev:3360, gain:750,  dist:2.2, diff:3, effort:27,  lat:39.236,lng:-79.487, guide:"https://highpoint.guide/md/"},
  {state:"TN",name:"Tennessee",     peak:"Clingmans Dome",                elev:6643, gain:330,  dist:1,   diff:2, effort:12,  lat:35.563,lng:-83.498, guide:"https://highpoint.guide/tn/"},
  {state:"GA",name:"Georgia",       peak:"Brasstown Bald",         elev:4784, gain:400,  dist:1,   diff:2, effort:1,   lat:34.874,lng:-83.811, guide:"https://highpoint.guide/ga/"},
  {state:"IL",name:"Illinois",      peak:"Charles Mound",          elev:1235, gain:275,  dist:2.5, diff:2, effort:21,  lat:42.508,lng:-90.240, guide:"https://highpoint.guide/il/"},
  {state:"NC",name:"North Carolina",peak:"Mount Mitchell",         elev:6684, gain:100,  dist:0.2, diff:1, effort:3,   lat:35.765,lng:-82.265, guide:"https://highpoint.guide/nc/"},
  {state:"AR",name:"Arkansas",      peak:"Magazine Mountain",      elev:2753, gain:225,  dist:1,   diff:2, effort:10,  lat:35.164,lng:-93.644, guide:"https://highpoint.guide/ar/"},
  {state:"LA",name:"Louisiana",     peak:"Driskill Mountain",      elev:535,  gain:150,  dist:1.8, diff:2, effort:14,  lat:32.424,lng:-92.899, guide:"https://highpoint.guide/la/"},
  {state:"WV",name:"West Virginia", peak:"Spruce Knob",            elev:4863, gain:20,   dist:0.3, diff:1, effort:2,   lat:38.700,lng:-79.532, guide:"https://highpoint.guide/wv/"},
  {state:"WI",name:"Wisconsin",     peak:"Timms Hill",             elev:1951, gain:120,  dist:0.4, diff:1, effort:5,   lat:45.451,lng:-90.195, guide:"https://highpoint.guide/wi/"},
  {state:"SC",name:"South Carolina",peak:"Sassafras Mountain",     elev:3533, gain:50,   dist:0.15,diff:1, effort:2,   lat:35.065,lng:-82.777, guide:"https://highpoint.guide/sc/"},
  {state:"MO",name:"Missouri",      peak:"Taum Sauk Mountain",     elev:1772, gain:30,   dist:0.4, diff:1, effort:3,   lat:37.571,lng:-90.727, guide:"https://highpoint.guide/mo/"},
  {state:"NH",name:"New Hampshire", peak:"Mount Washington",       elev:6288, gain:20,   dist:0.1, diff:1, effort:0,   lat:44.271,lng:-71.303, guide:"https://highpoint.guide/nh/"},
  {state:"KY",name:"Kentucky",      peak:"Black Mountain",         elev:4145, gain:30,   dist:0.1, diff:1, effort:1,   lat:36.908,lng:-82.894, guide:"https://highpoint.guide/ky/"},
  {state:"NJ",name:"New Jersey",    peak:"High Point",             elev:1803, gain:40,   dist:0.2, diff:1, effort:2,   lat:41.321,lng:-74.664, guide:"https://highpoint.guide/nj/"},
  {state:"NE",name:"Nebraska",      peak:"Panorama Point",         elev:5424, gain:0,    dist:0.1, diff:1, effort:0,   lat:41.003,lng:-104.030,guide:"https://highpoint.guide/ne/"},
  {state:"MA",name:"Massachusetts", peak:"Mount Greylock",         elev:3491, gain:20,   dist:0.1, diff:1, effort:1,   lat:42.637,lng:-73.166, guide:"https://highpoint.guide/ma/"},
  {state:"KS",name:"Kansas",        peak:"Mount Sunflower",        elev:4039, gain:0,    dist:0.1, diff:1, effort:0,   lat:39.022,lng:-102.038,guide:"https://highpoint.guide/ks/"},
  {state:"MI",name:"Michigan",      peak:"Mount Arvon",            elev:1979, gain:10,   dist:0.1, diff:1, effort:0,   lat:46.757,lng:-88.155, guide:"https://highpoint.guide/mi/"},
  {state:"RI",name:"Rhode Island",  peak:"Jerimoth Hill",          elev:812,  gain:0,    dist:0.2, diff:1, effort:1,   lat:41.851,lng:-71.778, guide:"https://highpoint.guide/ri/"},
  {state:"PA",name:"Pennsylvania",  peak:"Mount Davis",            elev:3213, gain:0,    dist:0.1, diff:1, effort:0,   lat:39.786,lng:-79.176, guide:"https://highpoint.guide/pa/"},
  {state:"AL",name:"Alabama",       peak:"Cheaha Mountain",        elev:2407, gain:0,    dist:0.1, diff:1, effort:0,   lat:33.486,lng:-85.809, guide:"https://highpoint.guide/al/"},
  {state:"IA",name:"Iowa",          peak:"Hawkeye Point",          elev:1670, gain:0,    dist:0.1, diff:1, effort:0,   lat:43.460,lng:-95.709, guide:"https://highpoint.guide/ia/"},
  {state:"OH",name:"Ohio",          peak:"Campbell Hill",          elev:1550, gain:0,    dist:0.1, diff:1, effort:0,   lat:40.366,lng:-83.717, guide:"https://highpoint.guide/oh/"},
  {state:"IN",name:"Indiana",       peak:"Hoosier Hill",           elev:1257, gain:0,    dist:0.1, diff:1, effort:0,   lat:40.000,lng:-84.845, guide:"https://highpoint.guide/in/"},
  {state:"MS",name:"Mississippi",   peak:"Woodall Mountain",       elev:806,  gain:0,    dist:0.1, diff:1, effort:0,   lat:34.788,lng:-88.241, guide:"https://highpoint.guide/ms/"},
  {state:"DE",name:"Delaware",      peak:"Ebright Azimuth",        elev:448,  gain:0,    dist:0.1, diff:1, effort:0,   lat:39.836,lng:-75.519, guide:"https://highpoint.guide/de/"},
  {state:"FL",name:"Florida",       peak:"Britton Hill",           elev:345,  gain:0,    dist:0.1, diff:1, effort:0,   lat:30.888,lng:-86.282, guide:"https://highpoint.guide/fl/"},
];

// Regions, taken from the Region column of your HighPoints sheet.
const REGIONS = {"Northeast": ["ME", "NH", "VT", "MA", "RI", "CT", "NY", "NJ", "PA", "DE", "MD", "WV"], "Southeast": ["VA", "KY", "TN", "NC", "SC", "GA", "FL", "AL", "MS", "AR", "LA", "OK", "TX"], "Midwest": ["OH", "IN", "IL", "MI", "WI", "MN", "IA", "MO", "KS", "NE", "SD", "ND"], "West": ["MT", "WY", "CO", "NM", "AZ", "UT", "NV", "ID", "WA", "OR", "CA", "AK", "HI"]};

// Races tied to a highpoint (your sheet's "Levi Race" column).
const RACES = { FL:"Many races", TN:"IMCHOO", KY:"Ragnar Trail", AZ:"IMAZ 70.3", IN:"Many races", IL:"CHI 26.2", LA:"NOLA 70.3", TX:"Many races" };

// Trips, from the notes on your entries — states done together.
const TRIPS = [
  { name:"Southern Six Pack", states:["TN","GA","NC","SC","KY","VA"] },
  { name:"Tour of I70",       states:["DE","MD","PA","WV","IN","OH"] },
];
