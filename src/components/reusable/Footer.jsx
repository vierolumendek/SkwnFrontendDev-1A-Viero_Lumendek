export default function Footer() {
  return (
    <footer className="grid lg:flex lg:items-center lg:justify-between px-5 py-10 gap-14 lg:px-36 lg:py-20">
      <div className="space-y-10 place-self-center lg:place-self-start">
        <div className="place-self-center flex items-center gap-3 lg:place-self-start">
          <img src="/img/logo.png" alt="Logo" />
          <h1 className="text-primary font-bold text-2xl">Dekoor</h1>
        </div>
        <p className="text-gray-500 text-center lg:text-start">Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to details and give clear communication for the customers. Priority of our design is comfortability.</p>
        <p className="hidden text-gray-500 lg:block">©Copyright 2022 Dekoor</p>
      </div>
      <div className="flex flex-wrap justify-around gap-10 place-self-center lg:flex-nowrap *:text-center *:lg:text-start w-full">
        <div>
          <h2 className="mb-6 text-sm font-semibold lg:text-xl">
            Support
          </h2>
          <ul className="text-gray-400">
            <li className="mb-4">
              <p className="hover:underline">
                FAQ
              </p>
            </li>
            <li className="mb-4">
              <p className="hover:underline">
                Shipping & Returns
              </p>
            </li>
            <li className="mb-4">
              <p className="hover:underline">
                Care guide
              </p>
            </li>
            <li className="mb-4">
              <p className="hover:underline">
                Redeem warranty
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold lg:text-xl">
            Social Media
          </h2>
          <ul className="text-gray-400">
            <li className="mb-4">
              <p className="hover:underline">
                Instagram
              </p>
            </li>
            <li className="mb-4">
              <p className="hover:underline">
                Facebook
              </p>
            </li>
            <li className="mb-4">
              <p className="hover:underline">
                Twitter
              </p>
            </li>
            <li className="mb-4">
              <p className="hover:underline">
                Tiktok
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold lg:text-xl">
            About Us
          </h2>
          <ul className="text-gray-400">
            <li className="mb-4">
              <p className="hover:underline">
                Our story
              </p>
            </li>
            <li className="mb-4">
              <p className="hover:underline">
                Designer
              </p>
            </li>
            <li className="mb-4">
              <p className="hover:underline">
                Craftmanship
              </p>
            </li>
            <li className="mb-4">
              <p className="hover:underline">
                Sustainability
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
