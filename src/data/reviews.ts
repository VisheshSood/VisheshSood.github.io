export interface Review {
  name: string;
  title: string;
  body: string;
  date: string;
  rating: number;
  img?: string; // customer photo, where we have one
}

// Verified Amazon reviews. The first four have customer photos.
export const reviews: Review[] = [
  { name: "Rick K.", title: "Sturdy, Good fit, Strong", body: "Excellent because of the thickness, comfortable with a good sleeve length. Durable enough you could almost wash them and use again.", date: "Apr 2024", rating: 5, img: "/images/review-1.jpg" },
  { name: "Samuel P.", title: "Durable and Tear Resistant", body: "Best gloves I have used for mechanical work. Holds up to all oil, fluids and great wear and tear.", date: "Feb 2026", rating: 5, img: "/images/review-2.jpg" },
  { name: "Alejandro G.", title: "Great alternative to bigger brands", body: "Really like the design. They work great for automotive.", date: "Jul 2025", rating: 5, img: "/images/review-3.jpg" },
  { name: "PharmDad", title: "Durable", body: "Thick and rip resistant. Texture really helps the grip with wet or oily material.", date: "Apr 2025", rating: 5, img: "/images/review-4.jpg" },

  { name: "Dominick", title: "Heavy Duty", body: "Super heavy duty and rip resistant, good for any job where your wrists and hands need total protection.", date: "Feb 2026", rating: 5 },
  { name: "Monica Z.", title: "The BEST", body: "BEST gloves I have bought in 15 years.", date: "May 2026", rating: 5, img: "/images/review-6.jpg" },
  { name: "The Dude", title: "Best gloves I've had yet", body: "Most durable I have used, I recommend 100%.", date: "Jan 2025", rating: 5 },
  { name: "J.", title: "Excellent grip and strong", body: "These gloves are great. Extra grip, really tough.", date: "Aug 2025", rating: 5, img: "/images/review-7.jpg" },
  { name: "Jesse", title: "Highly Recommend these HIGH QUALITY Gloves", body: "These gloves fit well and are thick. Very comfortable, durable, and a great value.", date: "Mar 2026", rating: 5 },

  { name: "Stoney", title: "Best gloves I've had yet!", body: "I had to stop what I was doing to write a review about how much I LOVE these gloves!! Finally a glove that fits perfectly 👌 they are nice and tight and don't sag or get loose while working. On top of that they are also the most durable, I can reuse them multiple times without them tearing or getting ripped apart. I'm wearing them right now as I type this on my phone! This is the third day I've been able to take them off and reuse them, still no rips or holes! These are the gloves you've been looking for, I recommend 100%!!", date: "Jan 2025", rating: 5 },
  { name: "InkyDinky", title: "Great for all jobs", body: "These are really nice and thick gloves, not prone to tearing. They fit well with my normal size. I like using gloves for anything from cleaning the house, to cooking, to working on the car. You get a good amount of gloves for the price, as well.", date: "Nov 2024", rating: 5 },
  { name: "Wisdom", title: "Good quality", body: "The texture of the gloves is so good and for all skin types.", date: "Nov 2024", rating: 5, img: "/images/review-5.jpg" },
  { name: "Amazon Customer", title: "Great gloves!", body: "These are nice thick gloves that really hold up well. Material is thick and the grips make holding onto things much easier. They are a little snug compared to my other gloves in this size but still easy enough to get on and off. Would totally recommend these!", date: "Oct 2024", rating: 5 },
  { name: "AshMan", title: "Nice gloves", body: "These are really nice and durable and thick. They feel good and last a good amount of time. Great gloves and I love the texture on them which gives me confidence-inspiring grip on things. These are very comfortable to wear for extended periods. Really some of the best gloves I have used.", date: "Oct 2024", rating: 5 },
  { name: "Patrick C", title: "Super strong gloves", body: "These nitrile gloves are the sturdiest I've used and perfect if you're tired of busting or tearing regular gloves. If you've got heavy-duty projects, these are heavy-duty gloves where one pair will last the whole time instead of going through multiple pairs of cheap gloves. They are a little more expensive than basic nitrile gloves and might be overkill for quick cleaning or food prep, but for workshop projects they're perfect. I end up saving money by using one pair of these instead of 3 or 4 cheap gloves, and I avoid the mess of an oily glove tearing and getting my hand dirty. If you want great gloves and are willing to pay a little extra, you will not be disappointed.", date: "Oct 2024", rating: 5 },
  { name: "Parents4life", title: "Nice quality work gloves", body: "I'm what you'd call a weekend mechanic and like working with disposable gloves to help with the cleanup. I normally get the 7 mil gloves from that big discount tool store but they end up ripping halfway through a job. I wore a pair of these 8 mil gloves for an oil change in the driveway and they held up just fine. They did not tear, and the texture on the palm made it easy to deal with the oil plug and filter once I inevitably got oil all over. You should be able to get a few jobs out of them before tossing them. I got the XL and they fit my hand well, I normally get large in the other brand, so you might want to size up. Overall a nice disposable glove and I'd recommend them.", date: "Oct 2024", rating: 5 },
  { name: "J. Natelle", title: "Very heavy duty gloves", body: "These gloves are fantastic. They are very heavy duty and will stand up to most jobs. They are a bit tight to get on but once on are very comfortable. I take a large but ordered an x-tra large and I am glad I did. They are ribbed as well and I was able to swipe on my phone while wearing them. I am really pleased with these gloves.", date: "Oct 2024", rating: 5 },
];
