import Marquee from "react-fast-marquee";

const reviews = [
  {
    name: "Thalia Vance",
    username: "Top-Tier Infrastructure",
    body: "The infrastructure at QuantVPS is top-tier. The server performance is stellar, and the support team is always available to assist with any queries. Highly satisfied! QuantVPS offers the best VPS solution for traders, hands down. QuantVPS’s user-friendly interface made the configuration process simple.",
    img: "/static/img/testimonials/img.png",
  },
  {
    name: "John Reyer",
    username: "Setup was easy",
    body: "Setup was easy and only took a few min. I was already logged in and trading within minutes. Before I made the purchase, I chatted with their live support at night and was helped right away. This assured me full confidence in their systems.",
    img: "/static/img/testimonials/img1.png",
  },
  {
    name: "Brian Shaddix",
    username: "Love this team",
    body: "Quant VPS was incredibly easy and straightforward to setup. They provide through instructions + videos, paired with great customer support. I have nothing to complain about and highly recommend using them. 5 stars!",
    img: "/static/img/testimonials/img2.png",
  },
  {
    name: "Percy Talmadge",
    username: "Latency and speed are critical for my…",
    body: "Latency and speed are critical for my trading, and QuantVPS excels in both areas. The servers are incredibly responsive, giving me an edge in the market. The impressive latency and speed of QuantVPS give me a trading edge.",
    img: "/static/img/testimonials/img3.png",
  },
  {
    name: "Joe Wells",
    username: "I never knew I needed a VPS",
    body: "Thanks to these guys, I never knew how much frustration I could alleviate by hosting my trading systems on servers and VPS that are dedicated for futures trading. I run NinjaTrader 8 on two different VPS with connections to TopStep and APEX. Low latency, high performance, no issues... highly recommended... five stars",
    img: "/static/img/testimonials/img6.png",
  },
  {
    name: "Arjen Donkers",
    username: "Best VPS for Traders",
    body: "After trying several VPS providers, QuantVPS stands out as the best for traders. The speed, reliability, and customer service are all top-notch. I highly recommend it to other systematic traders in the quant trading community. QuantVPS’s infrastructure is robust and reliable for serious traders.",
    img: "/static/img/testimonials/img4.png",
  },
  {
    name: "Kasey Wingate",
    username: "Great service! Outstanding product!",
    body: "After going through several VPS providers, I was not very optimistic. These guys know what they are doing.",
    img: "/static/img/testimonials/img5.png",
  },
  {
    name: "Donald Uhl",
    username: "QuantVPS is RELIABLE",
    body: "10000% thank you! Always there to assist with my annoying needs. Even like when I need help with simple task, like fixing a setting. The team is always ready.",
    img: "/static/img/testimonials/img6.png",
  },
];

const ReviewCard = ({
  name,
  username,
  body,
  img
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <div>
      <div
        className="m-1.5"
      >
        <div className="rounded-[28px] card-box w-96 h-72 p-6">
          <div className="flex items-center gap-2">
            <img src={img} alt="card-img" />
            <h6 className="text-[--white-color] text-base">
              {name}
            </h6>
          </div>
          <div className="flex items-center gap-1 my-3">
            <img src="/static/img/star-icon.svg" alt="star-icon" />
            <img src="/static/img/star-icon.svg" alt="star-icon" />
            <img src="/static/img/star-icon.svg" alt="star-icon" />
            <img src="/static/img/star-icon.svg" alt="star-icon" />
            <img src="/static/img/star-icon.svg" alt="star-icon" />
            <p></p>
          </div>
          <h6 className="text-[--white-color] text-base">
            {username}
          </h6>
          <div className="mt-3">
            <p className="text-[--card-color] font-normal text-sm leading-normal font-geist">
              {body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden ">
      {/* First Marquee Row */}
      <Marquee direction="right" pauseOnHover className="[--duration:20s] mb-3">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Second Marquee Row (Reversed) */}
      <Marquee direction="left" pauseOnHover>
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
